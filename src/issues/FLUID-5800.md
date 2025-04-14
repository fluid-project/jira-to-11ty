---json
{
  "title": "FLUID-5800",
  "summary": "Grade merging algorithm is still incorrect - accumulative linearisation must be abandoned",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-10-31T11:57:01.302-0400",
  "updated": "2021-07-19T12:05:00.910-0400",
  "versions": [],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5887/",
      "key": "FLUID-5887"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5085/",
      "key": "FLUID-5085",
      "summary": "Correct grade merging algorithm to ensure that grade overriding is always effective"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5508/",
      "key": "FLUID-5508"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-10-31T12:04:29.130-0400",
      "body": "The Python treatment contains a minimal rejection example: <https://www.python.org/download/releases/2.3/mro/>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-10-31T12:07:31.179-0400",
      "body": "Note that ANY situation in which the reordering of grade parents creates a change in the merged output reflects a potential design error. The ideal solution would be to refactor all of the involved grades so that the result becomes order-independent - by removing overridden material from base grades and pushing it down to derived ones. Therefore, the behaviour of our \"ultimately evolved IDE\" would be to flag the MRO failure case as \"just another\" case in which a grade hierarchy can be improved by eliminating overriden material from bases. In the meantime the system should continue to work - after all, if there is NO conflicting material in the MRO rejection case, it is not a failure after all - a rejection is only meaningful with respect to a particular set of grade contents.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-10-31T20:43:06.991-0400",
      "body": "Investigation of original exception - this was hard to characterise for a while, since the code failed in node.js but not in the browser. This was eventually tracked down to the fact that, since the violating code was actually within jQuery.extend, which was not in STRICT MODE, the assignment to the frozen member of fluid.NO\\_VALUE named \"member\" (by the bizarrely broken-looking \"mergeModel\" implementation) went into the behaviour of \"silently failing\" rather than raising a TypeError. Running with our jQuery.standalone instead, which is in strict mode, allowed the same behaviour to be seen in the browser and node.js.\n\nThis excursion reveals still a further flaw - that our \"fluid.annotateListeners\" function is operating even for non-component grades. It is the insertion of its information (fluid.NO\\_VALUE) together with the operation of the non-component-aware mergePolicy PLUS the faulty action of fluid.mergeModel that enables this problem.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-11-03T11:09:02.562-0500",
      "body": "Interestingly, after putting in a \"quick fix\" which eliminates the use of the uncomprehended use of \"fluid.model.mergeModel\", the failure leading to this report is no longer observable in a live component. As soon as we put in the grade \"fluid.component\", the hierarchy traversal reacquires each individual grade's raw defaults and remerges them into the concrete grade's options correctly. It appears that we only use the accumulated cache when compositing multiple dynamic grades. We still need to rewrite this algorithm completely, but it seems that there aren't any easily characterisable cases of faulty behaviour which we can patch up before then.&#x20;\n\nWe still have the offputting phenomenon that the corruptly merged version of the options are visible in the defaults cache for the abstract grades - e.g. fluid.tests.FLUID5800mid in the test case. We need to rewrite the default computation algorithm so that it is more similar to the live component option merging algorithm (as well as being more C3-like) - in particular, that it makes the very earliest attempt to compute the component's gradeName list. Without this, we can't interpret properly any of the other options, even to the extent of determining whether the grade is a function or a component grade. Right now we blindly apply the pre-processing in rawDefaults (compact notation expansion, listener annotation) to every grade. This is \"mostly hamless\" since function grades are unlikely to use the top-level paths \"listeners\" and \"invokers\" for any purpose, but obviously unsatisfactory and a long-term risk.\n\nMoving all of this pathway (unifying the static and dynamic parts of merging) to a unified, ginger, async system based on immutable data structures will make all of these requirements far more easy to meet in a performant and easy to understand way.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-04-24T13:17:33.384-0400",
      "body": "This has become topical again with the discovery of <https://fluidproject.atlassian.net/browse/FLUID-5887#icft=FLUID-5887> - we should really do something about this now. Studying the C3 paper and the \"pedalo\" sample in the C3 paper at <http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.19.3910&rep=rep1&type=pdf> suggests that we may still not want this after all - or at least not yet. It looks like rewriting our existing algorithm to no longer be accumulative (that is, based on caches of fully merged defaults of parent grades) will fix the most blatant problems that we observe (this was only ever an optimisation in the ancient CSpace days anyway), as well as recasting it in a form which will allow for an easy move to C3 later if we think it is justified. C3 is \"nice\" but the problem with it is that it is, not to misuse an already overloaded term, \"non-accumulative\". That is, compositing a fresh grade onto an existing structure will have an effect that is hard to predict - as well as raising the possibility that the grade resolution process will throw in the case it produces an \"inconsistent hierarchy\". Although our current algorithm, which simply represents an in-order traversal of ancestors plus culling any already visited grades, is rather dumb and can lead to peculiar results (for example, the possibility for material in very deeply derived grades such as fluid.viewComponent to end up overriding top-level user grades if they appear earlier in the list of parents), at least its action is utterly simple and comprehensible, and it's very obvious what an author has to do if they want to re-override some hidden material by adding more grades.\n\nIt's possible that an argument could be made against C3-like and similar \"clever\" hierarchy resolution algorithms based on our \"open graph of authors\" model, although this is far from clear. The C3 paper is based on a huge amount of experience with complex hierarchies in large codebases and it would be hard to gainsay this evidence without a similar breadth of experience under our own authorial model. However, for the medium term it looks like preserving our existing algorithm with a more civilised implementation is a reasonable thing to do, especially since we are coming close to a 2.0 release - our previous tinkering with the grade hiearchy semantics in \"arabic grades\" in <https://fluidproject.atlassian.net/browse/FLUID-5743#icft=FLUID-5743> was quite expensive in its fallout and was the only really substantive failure of backwards compatibility we've had for some years.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-09-23T11:26:30.085-0400",
      "body": "We must indeed do something about this since it is still extremely easy to get into situations where weak defaults from parent grades end up overriding apparent direct dependencies. Example from KETTLE-55:\n\n```java\nfluid.defaults(\"fluid.dataSource\", {\r\n        gradeNames: [\"fluid.component\"],\r\n...\r\n        components: {\r\n            encoding: {\r\n                type: \"fluid.dataSource.encoding.JSON\"\r\n            }\r\n        },\r\n}\n```\n\nand then we use the nutty grade linkage system to produce writability:\n\n```java\nfluid.defaults(\"kettle.dataSource.file\", {\r\n    gradeNames: [\"fluid.dataSource\"],\r\n    charEncoding: \"utf-8\",\r\n    listeners: {\r\n        \"onRead.impl\": {\r\n            funcName: \"kettle.dataSource.file.handle\",\r\n            args: [\"{that}\", \"{arguments}.0\", \"{arguments}.1\"] // [model], options\r\n        }\r\n    }\r\n});\r\n\r\nfluid.defaults(\"kettle.dataSource.file.writable\", {\r\n    gradeNames: [\"kettle.dataSource.file\", \"fluid.dataSource.writable\"],\r\n    listeners: {\r\n        \"onWrite.impl\": {\r\n            funcName: \"kettle.dataSource.file.handle\",\r\n            args: [\"{that}\", \"{arguments}.0\", \"{arguments}.1\"] // model, options\r\n        }\r\n    }\r\n});\r\n\r\nfluid.makeGradeLinkage(\"kettle.dataSource.file.linkage\", [\"fluid.dataSource.writable\", \"kettle.dataSource.file\"], \"kettle.dataSource.file.writable\");\n```\n\nThe user then writes:\n\n```java\nfluid.defaults(\"kettle.tests.formencSourceWrite\", {\r\n    gradeNames: [\"kettle.dataSource.file.writable\", \"kettle.dataSource.moduleTerms\"],\r\n    path: \"%kettle/tests/data/writeable/formenc.txt\",\r\n    components: {\r\n        encoding: {\r\n            type: \"kettle.dataSource.encoding.formenc\"\r\n        }\r\n    }\r\n});\n```\n\nThe poor sap then ends up with a grade list as follows:&#x20;\n\n```java\n[\"kettle.dataSource.moduleTerms\", \"kettle.tests.formencSourceWrite\", \"fluid.dataSource\", \"kettle.dataSource.file\", \"fluid.component\", \"fluid.dataSource.writable\", \"kettle.dataSource.file.writable\"]\n```\n\nIn which \"fluid.dataSource\" has obliterated their subcomponent definition with the JSON encoding. There's no decent way out of this without a C3-like system that guarantees never to move grades to the right. Even if we write empty mixin grades for all the writable grades (which is already a bit of an annoyance) we lose the ability for there to be a one-stop-shop \"kettle.dataSource.file.writable\" grade which is actually usable. We will need to go back to the old funky \\`writable:true\\` system which at least is overridable back and forth.\n\nThe time to address this is with <https://fluidproject.atlassian.net/browse/FLUID-5304#icft=FLUID-5304> when we abolish the old annoyance caused by the \"grade cache\" - note that the worry in the original \"accumulative\" JIRA <https://fluidproject.atlassian.net/browse/FLUID-5085#icft=FLUID-5085> won't be valid because the grade resolver will be constantly retargetting itself as fresh grades are discovered.&#x20;\n"
    }
  ]
}
---
Despite the work in <https://fluidproject.atlassian.net/browse/FLUID-5085#icft=FLUID-5085>, our grade merging algorithm still has serious flaws. The following set of grades:

```javascript
fluid.defaults("gpii.flowManager.matchMakingRequest", {
        listeners: {
            onUserToken: [{
                priority: "first",
                listener: "gpii.flowManager.setUserToken",
                args: ["{that}", "{arguments}.0"]
            }, "{that}.getPreferences"]
        }
    }
    fluid.defaults("gpii.flowManager.userLogonStateChange.matchMakingStateChangeHandler", {
        gradeNames: "gpii.flowManager.matchMakingRequest",
        listeners: {
            onUserToken: "{that}.getDeviceContext"
        }
    });

    fluid.defaults("gpii.flowManager.userLogonStateChange.handler", {
        gradeNames: ["kettle.request.http", "gpii.flowManager.userLogonStateChange.matchMakingStateChangeHandler"],
    });
```

(abridged and simplified from recent work on the GPII's "untrusted local FlowManager) triggers an exception in the merging pipeline -&#x20;

```
03:31:32.923:  FATAL ERROR: Uncaught exception: Cannot assign to read only property 'value' of [object Object]
TypeError: Cannot assign to read only property 'value' of [object Object]
    at Object.fluid.jQueryStandalone.extend (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\jquery.standalone.js:142:42

    at Object.fluid.model.mergeModel (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\Fluid.js:1826:15)
    at Object.fluid.mergeOneImpl (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\Fluid.js:1899:68)
    at Object.strategy (E:\source\gits\gpii\node_modules\universal\node_modules\infusion\src\framework\core\js\Fluid.js:2025:48)
```

This code reads:

```javascript
} else {
                sources[j] = undefined;
                if (newPolicy.func) {
                    togo = newPolicy.func.call(null, thisTarget, thisSource, segs[i - 1], segs, i); // NB - change in this mostly unused argument
                } else {
1899-->                    togo = fluid.isValue(thisTarget) ? fluid.model.mergeModel(thisTarget, thisSource) : thisSource;
                }
```

Note that the use of "mergeModel" already has a hazard warning here - we've lost grasp of why this in our workflow, but it is clearly some attempt at base object reference preservation.&#x20;

We have two serious problems here:

i) The merging algorithm should never throw - it's unclear even where this property named "value" has appeared from but the result of merging should be well-defined in every case - even in light of ii) the system should proceed to a "sensible" merged result even if it will be the wrong one\
ii) The result of our new "best practice" on mixin grades has exposed a serious flaw in the basic strategy of merging. We have always assumed that merging can be "accumulative" - that is, that the result of merging a derived grade onto a base grade can be expressed in terms of some cached, fully accumulated material associated with the base grade plus the derived grade material. It's clear that in this case this is impossible - since we have not yet seen the grade "fluid.component" which contains the mergePolicy for the listeners, which occurs only in the 2nd derived grade, we can only ever attach a structure to gpii.flowManager.userLogonStateChange.matchMakingStateChangeHandler which has faultily destroyed information about listeners.

This problem generalises more widely, at least in terms of mergePolicies which have not so far led to more widespread problems since their awkward usability has led them to be used pretty conservatively. But it's obvious that we need to return to a more "linear" algorithm that performs defaults merging in a manner more similar to live options merging (and, doubtless, in the end, unify these processes) since we need to wait for the complete information about mergePolicies throughout the hierarchy to be completely available before we begin any kind of merging.

This suggests that we have dismissed the C3 family unfairly and need to spend more time understanding what regularities they try to respect. The idea that "overriding must always be effective" could perhaps be related to the algorithm's concept of "local precedence order".

The original C3 paper is at <http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.19.3910&rep=rep1&type=pdf>

It would seem that we would like an algorithm which is both monotonic and "observes local precedence order". Certainly we need a system which produces stable results on both the "confused-grid" and "pedalo" examples. But going further, it seems that even C3 will sometimes reject a hierarchy as inconsistent, which must never happen. As part of our general requirements, although reworking our algorithm from its "accumulative" form is going to make it more inefficient, we certainly want a system which (morally, assuming suitable data structures) does no more work than O(n log n) on a hierarchy with n elements.&#x20;

Some prior JavaScript art is in "ring.js" whose algorithm is here: <https://github.com/nicolas-van/ring.js/blob/master/ring.js> - as we can see, this algorithm is capable of rejecting, which must not happen. Unfortunately the paper discussion does not include an example which it will reject, nor any discussion on this. The Wikipedia article on the algorithm does have a brief characterisation of the rejection scenario.

        