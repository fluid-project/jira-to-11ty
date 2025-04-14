---json
{
  "title": "FLUID-5212",
  "summary": "Implement \"new demands blocks\" using simplified approach looking up grade names to grade names",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-11-15T17:25:54.173-0500",
  "updated": "2014-08-17T13:39:09.375-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5241/",
      "key": "FLUID-5241"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5495/",
      "key": "FLUID-5495"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-11-15T17:27:45.383-0500",
      "body": "Original chat transcript with JURA:\n\n(15:46:33) antranigbasman: But yes, it seems that there is indeed a small piece of the functionality of \"old demands blocks\" that can't be replicated with the new framework : P\\\n(15:46:40) antranigbasman: And, gloriously, you have run into it\\\n\\[]\\\n(15:49:27) antranigbasman: So, a further thing - perhaps this \"lookup system\" should itself be operated by fluid.defaults\\\n(15:49:38) antranigbasman: Because we really want to get rid of anything that is not operated by fluid.defaults\\\n(15:49:53) yura.zenevich: right\\\n(15:49:59) antranigbasman: So it might be an opportunity to use the \"indexDefaults\" system that we produced for the aux builder\\\n(15:50:19) yura.zenevich: ya but it's not exactly the same thing\\\n(15:50:33) yura.zenevich: indexed defaults is not the same as components that are used\\\n(15:50:35) antranigbasman: I think the API will be good enough, even if the performance will be inadequate\\\n(15:50:44) antranigbasman: Well, just the lookup goes into the index\\\n(15:51:02) antranigbasman: So you will write \"false components\" that only exist to store the indirection between other grades\\\n(15:51:13) yura.zenevich: can you give an example\\\n(15:52:25) antranigbasman: Something like fluid.defaults(\"kettle.sessionIoLinkage\", {\\\ncontextGrades: \\[\"kettle.server.io\", \"kettle.session\"], \\\nresultGrades: \"kettle.session.io\"\\\n});\\\n(15:52:41) antranigbasman: This will allow us to remedy the fatal mistake we made with \"old demands blocks\" in NOT GIVING THEM NAMES\\\n(15:53:13) antranigbasman: So this component is never instantiated, but is just indexed using \"indexDefaults\"\\\n(15:53:32) antranigbasman: I guess it will need to have a certain gradeName of its own in order to allow it to be indexed\\\n(15:53:40) antranigbasman: I need to run to the LIGHT SHOP, back shortly....\\\n(15:53:41) yura.zenevich: so lets say it is indexed\\\n(15:54:00) antranigbasman: It is indexed, from the invoker which supplies the dynamic grades\\\n(15:54:05) antranigbasman: And in the end we will put this into the framework proper\\\n(15:54:10) yura.zenevich: so i would index context grades\\\n(15:54:12) antranigbasman: As we eliminate \"old demands blocks\"\\\n(15:54:24) yura.zenevich: and the getDynamicGrade will apply the result grade ?\\\n(15:54:31) yura.zenevich: nice\\\n(15:54:31) antranigbasman: Yes, almost\\\n(15:54:32) yura.zenevich: i like\\\n(15:54:41) antranigbasman: Well, you'd really ask for the complete collection of grades which implement the common grade which I didn't write\\\n(15:54:48) antranigbasman: Clearly this component has \"gradeNames\" of its own\\\n(15:55:08) antranigbasman: So imagine that I had also written: gradeNames: \\[\"kettle.gradeLinkage\", \"autoInit\"] on the 2nd line\\\n(15:55:18) antranigbasman: You will just ask the framework to give you everything which implements \"kettle.gradeLinkage\"\\\n(15:55:34) antranigbasman: And then do the lookup manually based on testing them all\\\n(15:55:40) antranigbasman: We'll implement a more efficient scheme later\\\n(15:55:59) antranigbasman: But as long as we get the basic effect of the configuration, we can fix the dependence structure in kettle at least\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-11-15T17:32:08.937-0500",
      "body": "Original github review comment, on <https://github.com/fluid-project/kettle/pull/6> -&#x20;\n\nat code&#x20;\n\n\\+    fluid.defaults(\"kettle.use.session\", {\\\n\\+        gradeNames: \\[\"autoInit\", \"fluid.eventedComponent\",\\\n\\+            \"{that}.getSessionIOGrade\"],\n\nThis dependence should be pushed down even further - into the session.io.js file and matching grade. That is - there should be no dependence in name or function from this file session.js on any material related to the \"io\" hierarchy. I think a little piece of \"protoframework\" might be helpful here - that is, to replicate just the very simple portion of demands blocks that operate on gradeNames rather than all the rest of the machinery. That is - to generalise your function \"{that}.getSessionIOGrade\" lookup into a general utility named \"{that}.getDynamicGrades\" which looks up the required extra grades in a lookup table which may be contributed into from the session.io.js file. The index for this lookup will be very similar to the index for demands blocks - that is, a combination of grades, and the result of the lookup will also be a combination of grades. That is, the registration will look like \\\nfluid.registerDynamicGrades(\\[\"context1\", \"context2\", \"context3\"], \\[\"result1\", \"result2\", \"result3\"])\\\nwhere context1...n are grades which all require to be present, and result1...n are dynamic grades that will result.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-11-26T01:57:50.067-0500",
      "body": "It has turned out that this facility can't be implemented \"on the outside\" of the framework after all, since it has to deal with the process of dynamic grades arriving from other sources (invokers, distributeOptions, etc.) and continue to accrete freshly matched grades until we have closed (see <https://fluidproject.atlassian.net/browse/FLUID-5155#icft=FLUID-5155>). Therefore we have had to elevate a draft implemention into the framework ahead of time by patching the \"fluid.collectDynamicGrades\" method.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-12-19T02:25:48.627-0500",
      "body": "Merged into trunk at revision 84d53d4\n"
    }
  ]
}
---
As a result of our discovery, in <http://issues.gpii.net/browse/GPII-209> , that demands blocks as implemented in Infusion must be removed from the implementation and framework, it was believed possible to cover all use cases for demands blocks using existing framework functionality.

As a part of the work for <http://issues.gpii.net/browse/GPII-75> , we are coming to implement socket.io capability for applications using Kettle, and it has surfaced that the above belief is incorrect, and that some use cases indeed remain for which old-style demands blocks are the only current possibility. These use cases centre around cases of genuine "multiple dispatch" - that is, implementations which should be selected only if multiple, orthogonal, conditions on the environment are met simultaneously.

In this case the issue is revealed by provision of session support for socket.io enabled Kettle applications. A particular implementation grade, "kettle.use.session.io" was required only if BOTH the "kettle.server.io" grade were present, AND the grade "kettle.use.session". This was formerly implemented with a manual grade lookup with "if" statement, held in the file "session.js" which should properly have had no dependence on the io infrastructure - with an invoker bound to the following free function:&#x20;

kettle.server.io.getSessionIOGrade = function (gradeNames) {\
if (gradeNames.indexOf("kettle.server.io") >= 0) {\
return "kettle.use.session.io";\
}\
};

without the use of "old demands blocks" or some similar functionality, it would have been impossible to organise the dependence structure of these files properly.

This problem, and many similar, could be resolved by a much simpler system than "old demands blocks" which makes use of two pieces of framework infrastructure developed since their implementation - i) dynamic grades implemented in <https://fluidproject.atlassian.net/browse/FLUID-4916#icft=FLUID-4916>, and ii) "index defaults" given a basic implementation for FLUID-5067.

In this new system, we only perform "multiple dispatch resolution" on the unit of entire grades, rather than individual invokers and listeners as implemented for FLUID-2881 demands blocks. This simplifies the system hugely, as well as improving its performance, since the resolution will only occur on instantiation and not on every dispatch at runtime.

We propose a system which holds a lookup of lists of grades ("context names" in the old terminology) to lists of grades ("output grades"). Whenever a component is found whose grade content matches an element in the index, the output grades are added to its grade set automatically.

In order to avoid the mistakes which prompted the the GPII-209 work in the first place, we propose that the index for this new system will be encoded by a standard fluid.defaults block - as a result of being given a unique name, this record will thus remain identifiable and can have a clear semantic in the case it is reloaded. "old demands blocks", not being associated with a particular name, were not identifiable and so could be given no clear reloading semantic.

We propose a "draft implementation" for the time being to be trialed just in Kettle but to be elevated into the main framework once we are satisfied it is adequate. Initially we will have an "opt-in" system with a distinguished grade, say, "kettle.dynamicGradeLinkage" as a parent grade to be used by any grade wanting access to the dynamic resolution system.

A user wanting to register a "linkage record" into the system would issue a defaults block like the following:&#x20;

fluid.defaults("kettle.sessionIoLinkage", {\
gradeNames: \["kettle.gradeLinkageRecord", "autoInit"],\
contextGrades: \["kettle.server.io", "kettle.use.session"], \
resultGrades: "kettle.use.session.io"\
});

This defaults record encodes the fact that any grade holding the content "kettle.server.io" and "kettle.use.session" (as well as the temporarily required "marker grade" "kettle.dynamicGradeLinkage") will automatically have the grade "kettle.use.session.io" appended into its grade content.

The current implementation of fluid.indexDefaults has very inadequate performance but could easily be upgraded in time, without disturbing existing users of this API. The linkage implementation would then query for all defaults of type "kettle.gradeLinkageRecord" in order to look up the "resultGrades" on instantiation of components opting in with "kettle.dynamicGradeLinkage".

An open implementation question is to allow matching on all context names up the component tree, as with "old demands blocks", or to keep the resolution self-contained with the current component. This promises getting into all the complexities required for FLUID-4917 "demands block horizons" but would tidy up the remaining contextual use cases as currently required for the Uploader component. Given this greatly simplified implementation strategy we could probably rethink the horizon system into something much simpler.

        