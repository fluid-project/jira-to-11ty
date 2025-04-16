---json
{
  "title": "FLUID-5241",
  "summary": "Complete functionality of \"new demands blocks\" by rounding out and renaming facility provided by \"progressiveEnhancement\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2013-12-19T02:12:51.426-0500",
  "updated": "2017-02-27T15:49:17.415-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5264/",
      "key": "FLUID-5264"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5212/",
      "key": "FLUID-5212",
      "summary": "Implement \"new demands blocks\" using simplified approach looking up grade names to grade names"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-12-03T15:39:47.238-0500",
      "body": "The \"grade linkage\" facility will be ditched and we will instead implement such functionality with <https://fluidproject.atlassian.net/browse/FLUID-5556#icft=FLUID-5556> enhanced IoCSS expressions\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T11:06:09.037-0400",
      "body": "Antranig Basman is this still relevant?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-06-15T11:45:11.608-0400",
      "body": "This is the main functionality delivered in <https://github.com/fluid-project/infusion/pull/591/files>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T10:00:14.040-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-5212#icft=FLUID-5212> provides a hugely simplified implementation that covers part of the use cases of original FLUID-2881 demands blocks. It should now be possible to round out this functionality by reassessing the role of the implementation we currently call "progressiveEnhancement" relative to this new capability - probably renaming it, and adding a little further syntax.

The missing functionality relates to "contextual awareness". <https://fluidproject.atlassian.net/browse/FLUID-5212#icft=FLUID-5212> provides the part of the functionality that relates to "multiple dispatch" - that is, it is capable of mapping between the simultaneous appearance of a collection of "input grades" on a component to a set of computed "output grades". What is missing is the ability for either A) the input grade information to be dependent on the "context" - that is, on other gradeNames available higher up the component tree - or else B) the for the output grade information to be projected down the tree - that is, for this computation to form a "context" for other components.

The first missing part A) can be handled by the "progressiveChecker" - which evaluates a number of context expressions and produces an output grade(s) based on the first which matches. The second part B) could probably be handled by the same scheme with a little extended syntax - perhaps allowing the user to directly specify an IoCSS expression as part of the configuration. As well as this extended syntax, we propose to rename the "progressiveChecker" as something like "contextAwareness".

As an example of the kind of case we would like to handle within this system, there is the following code from a recent GPII pull request:

\+    fluid.defaults("gpii.flowManager.io.server", {\
\+        gradeNames: \["fluid.littleComponent", "autoInit"],\
\+        distributeOptions: {\
\+            source: "{that}.options.validateToken",\
\+            target: "{that > sessionManager}.options.invokers.validate"\
\+        },\
\+        validateToken: {\
\+            funcName: "gpii.flowManager.io.validateToken"\
\+        }\
\+    });

What we should have instead is i) a "miniGrade" which defines the required invoker in an aligned way - e.g.

fluid.defaults("gpii.flowManager.validatingSessionManager", {\
gradeNames: \["fluid.littleComponent", "autoInit"],\
invokers: {\
validateToken: {\
funcName: "gpii.flowManager.io.validateToken"\
}\
});

and then an exercise of the facility that we describe in this JIRA for expressing the projection of this grade from the root component to the sessionManager - note that all of the "grade projection" currently written in the file configs/io.json should also be incorporated into this scheme - this file currently reads as follows:

{\
"typeName": "flowManager.io",\
"options": {\
"gradeNames": \["autoInit", "fluid.littleComponent"],\
"distributeOptions": \[{\
"source": "{that}.options.flowManagerIOGrades",\
"target": "{that flowManager}.options.gradeNames"\
}, {\
"source": "{that}.options.ioLogging",\
"target": "{that server}.options.logging"\
}, {\
"source": "{that}.options.serverIOGrades",\
"target": "{that server}.options.gradeNames"\
}],\
"ioLogging": true,\
"flowManagerIOGrades": \["gpii.flowManager.save", "gpii.flowManager.io"],\
"serverIOGrades": \[\
"kettle.use.CORS",\
"kettle.use.session",\
"kettle.server.io",\
"gpii.flowManager.io.server"\
]\
},\
"includes": \[\
"./production.json"\
]\
}

Goals of this system:

i) enable "grade projection" throughout the system in a way which avoids the explicit use of "distributeOptions" which is a a) much too heavyweight scheme for this task, and b) is actually inappropriate, since it is a "user-facing" facility rather than an "implementation-facing" facility. The distinction we are getting at here can be seen from the interpretation of the "projected material" - in the "mini-grade" above, if any IoC expressions were provided inside the grade, they would be expanded IN THE TARGET CONTEXT once grade expansion started - whereas, any material written in a "distributeOptions" block is expanded IN THE SOURCE CONTEXT. This implies that distributeOptions is not the correct facility for this task. The purpose distributeOptions is to be "facade-forming" - that is, it creates the appearance of a particular API from the point of view of an external user - this is the reason for its expansion policy in terms of the SOURCE CONTEXT - the user wants the transported configuration to take its meaning from their own context, and not the unknowable target context. Whereas the action of this facility is "implementation-forming" - the user is actually an integrator who has "white-box knowledge" of the target context and wants their configuration transported there without expansion.

ii) render more of the activity of the system expressible in terms of "grade linkage and gearage" - once we come to optimise the system, it will be important to have as much of the activity of grade computation to be done "out in the open" by means of simple declarative schemes - rather than on schemes which could produce arbitrary computations such as "dynamic grades via invokers" and distributeOptions. In a final, performant system we will optimise this grade lookup by caching the computation results in a particular "context" and thus short-circuiting the action of fluid.computeDynamicGrades which, once we have eliminated "old-style demands blocks" and all associated machinery will probably remain as the most expensive part of the new system.

Note for the future: This and other work requires the ability to be clear about what constitutes "the same context" as another. This will be something to do with "being neighbouring in the tree and not using any context names which resolve onto differential material" - that is, names which are visible from one site and not the other. Considering siblings A and B in context C, these "differential names" are those which result from the definitions of A and B themselves. If A and B are of the same type, then the only source of remaining difference would be in the member names of A and B themselves. If we can be clear that none of the i) local material defining A and B makes use of these names, and ii) none of the material projected via distributeOptions makes use of these names, we can then consider that any computation done for A and B's gradeNames can be reused. This kind of thing should be at least good enough in the "new renderer" to deal with cases such as large arrays or tables of subcomponents of mostly homogeneous types which we hope as well as reusing grade computation could even bypass all of instantiation entirely, producing "flyweight components". At the very least, we should be able to reuse the gradeNames structure itself between such siblings using prototypal inheritance.

        