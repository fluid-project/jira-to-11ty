---json
{
  "title": "FLUID-5517",
  "summary": "Error in batching composite changes in model relay system",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-09-25T10:43:24.212-0400",
  "updated": "2017-10-04T18:36:31.272-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder",
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-230/",
      "key": "FLOE-230"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5498/",
      "key": "FLUID-5498",
      "summary": "Apply \"transaction globbing\" for any manual changes triggered as part of a change process"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-01-28T14:55:48.551-0500",
      "body": "Initial investigation is starting to suggest that the set of relay rules is at fault, rather than necessarily the ModelRelay implementation (which does indeed have known faults, but they may not be serious enough to require the rewrite straight away). Here is the minimal configuration which demonstrates the same behaviour as in the <https://fluidproject.atlassian.net/browse/FLOE-230#icft=FLOE-230> fault report:\n\n```java\nfluid.defaults(\"fluid.tests.fluid5517root\", {\r\n        gradeNames: [\"fluid.standardRelayComponent\", \"autoInit\"],\r\n        model: {\r\n            userData: {\r\n                opinion: {\r\n                    mismatch: true\r\n                }\r\n            },\r\n            inTransit: {\r\n                opinion: [\"dislike\"]   // Possible values: like, dislike\r\n            }\r\n        },\r\n        modelRelay: [{\r\n            source: \"{that}.model.inTransit.opinion\",\r\n            target: \"{that}.model.userData.opinion\",\r\n            forward: \"liveOnly\",\r\n            singleTransform: {\r\n                type: \"fluid.transforms.arrayToSetMembership\",\r\n                options: {\r\n                    \"like\": \"match\",\r\n                    \"dislike\": \"mismatch\"\r\n                }\r\n            }\r\n        }],\r\n        events: {\r\n            onFeedbackMarkupReady: null\r\n        },\r\n        components: {\r\n            bindMatchConfirmation: {\r\n                type: \"fluid.standardRelayComponent\",\r\n                createOnEvent: \"onFeedbackMarkupReady\",\r\n                options: {\r\n                    modelRelay: {\r\n                        source: \"{fluid5517root}.model.inTransit\",\r\n                        target: \"{that}.model.isActive\",\r\n                        backward: \"liveOnly\",\r\n                        transform: {\r\n                            transform: {\r\n                                type: \"fluid.transforms.arrayToSetMembership\",\r\n                                inputPath: \"opinion\",\r\n                                options: {\r\n                                    \"like\": \"\"\r\n                                }\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            },\r\n            bindMismatchDetails: {\r\n                type: \"fluid.standardRelayComponent\",\r\n                createOnEvent: \"onFeedbackMarkupReady\",\r\n                options: {\r\n                    modelRelay: {\r\n                        source: \"{fluid5517root}.model.inTransit\",\r\n                        target: \"{that}.model.isActive\",\r\n                        backward: \"liveOnly\",\r\n                        transform: {\r\n                            transform: {\r\n                                type: \"fluid.transforms.arrayToSetMembership\",\r\n                                inputPath: \"opinion\",\r\n                                options: {\r\n                                    \"dislike\": \"\"\r\n                                }\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    });\r\n    \r\n    fluid.tests.dumpModel = function (that) {\r\n        console.log(\"Root model: \", JSON.stringify(that.model, null, 2));\r\n        if (that.bindMatchConfirmation) {\r\n            console.log(\"Match model: \", JSON.stringify(that.bindMatchConfirmation.model, null, 2));\r\n            console.log(\"Mismatch model: \", JSON.stringify(that.bindMismatchDetails.model, null, 2));\r\n        }\r\n    };\r\n    jqUnit.test(\"FLUID-5517: Batching failure in model relay\", function () {\r\n        var that = fluid.tests.fluid5517root();\r\n        jqUnit.assertDeepEq(\"Initial model synchronised\", [\"dislike\"], that.model.inTransit.opinion);\r\n        fluid.tests.dumpModel(that);\r\n        console.log(\"=============================== FIRING ATTACHMENT EVENT ================\");\r\n        that.events.onFeedbackMarkupReady.fire();\r\n        fluid.tests.dumpModel(that);\r\n \r\n        that.applier.change(\"userData.opinion.match\", true);\r\n        jqUnit.assertDeepEq(\"Stabilised model synchronised\", [\"like\"], that.model.inTransit.opinion);\r\n        \r\n        fluid.tests.dumpModel(that);\r\n    });\n```\n\nThis results in the following (partial) output:\n\nOUTPUT AFTER firing change from line 89:&#x20;\n\nRoot model:\n\n```java\n{\r\n  \"userData\": {\r\n    \"opinion\": {\r\n      \"mismatch\": true,\r\n      \"match\": false\r\n    }\r\n  },\r\n  \"inTransit\": {\r\n    \"opinion\": [\r\n      \"dislike\"\r\n    ]\r\n  }\r\n}\r\nMatch model:\r\n{\r\n  \"isActive\": false\r\n}\r\nMismatch model:\r\n{\r\n  \"isActive\": true\r\n}\r\n \r\nsetMembershipToArray making output [\"like\",\"dislike\"] given options {\"match\":\"like\",\"mismatch\":\"dislike\"}\r\narrayToSetMembership with options {\"like\":\"match\",\"dislike\":\"mismatch\"} and input value [\"like\",\"dislike\"]\r\narrayToSetMembership setting path match to true\r\narrayToSetMembership setting path mismatch to true\r\narrayToSetMembership with options {\"like\":\"\"} and input value [\"like\",\"dislike\"]\r\narrayToSetMembership setting path  to true\r\nsetMembershipToArray making output [\"like\"] given options {\"\":\"like\"}  <------ PROBLEM HERE! target array has been overwritten with this incomplete relay result\n```\n\nThe relay rule with arrayToSetMembership configuration \"like\": \"\" has ended up corrupting the source array held in \"inTransit.opinion\" - shortly afterwards, it is destroyed completely by the other rule. This may be more readable in the following gist: <https://gist.github.com/amb26/38cf42a2c57224c01a1c>\n\nThe remainder of the relay cycle appears here:\n\n```java\narrayToSetMembership with options {\"like\":\"match\",\"dislike\":\"mismatch\"} and input value [\"like\"]\r\narrayToSetMembership setting path match to true\r\narrayToSetMembership setting path mismatch to false\r\nsetMembershipToArray making output [\"like\"] given options {\"match\":\"like\",\"mismatch\":\"dislike\"}\r\narrayToSetMembership with options {\"like\":\"\"} and input value [\"like\"]\r\narrayToSetMembership setting path  to true\r\narrayToSetMembership with options {\"dislike\":\"\"} and input value [\"like\"]\r\narrayToSetMembership setting path  to false\r\nsetMembershipToArray making output [] given options {\"\":\"dislike\"}\r\narrayToSetMembership with options {\"like\":\"match\",\"dislike\":\"mismatch\"} and input value []\r\narrayToSetMembership setting path match to false\r\narrayToSetMembership setting path mismatch to false\r\nsetMembershipToArray making output [] given options {\"match\":\"like\",\"mismatch\":\"dislike\"}\r\narrayToSetMembership with options {\"like\":\"\"} and input value []\r\narrayToSetMembership setting path  to false\r\nsetMembershipToArray making output [] given options {\"\":\"like\"}\r\narrayToSetMembership with options {\"dislike\":\"\"} and input value []\r\narrayToSetMembership setting path  to false\r\narrayToSetMembership with options {\"dislike\":\"\"} and input value []\r\narrayToSetMembership setting path  to false\r\nFIRING PRECOMMIT from transaction undefined: original model {\"userData\":{\"opinion\":{\"mismatch\":true,\"match\":false}},\"inTransit\":{\"opinion\":[\"dislike\"]}} current model {\"userData\":{\"opinion\":{\"mismatch\":false,\"match\":false}},\"inTransit\":{\"opinion\":[]}}\n```\n\nThe intention here is clear - we required to operate mutual exclusion as was the original requirement prompting the <https://fluidproject.atlassian.net/browse/FLUID-5498#icft=FLUID-5498> report. We can't do it like this because the inverse path of both of the arrayToSetMembership relays to the subcomponents are destructive and will always eventually result in a transition to the empty array as the only fixed point of the mapping.\n\nWe need much better diagnostics (hopefully automated) of these kinds of relay rules, but as ever these will not arise for years. It's worth noticing that relay rules of these kinds can be treated as an \"FSM\" (Finite State Machine) which is what gives rise to the correspondence between what we call \"model-based development\" and what goes by that name in the rest of the industry. In the meantime we should fix up these rules and be vigilant in future to avoid writing rules which are self-destabilising in this way.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-01-28T15:24:00.412-0500",
      "body": "Note - the \"proper\" solution to this problem (or rather, the only one we can implement without stateful relay rules) is simple-seeming but rather obscure - it was explained in IRC at <https://botbot.me/freenode/fluid-work/2014-08-25/?msg=20363141&page=2>\n\nThe idea is to tackle the issue at the point of initial data binding - the UI action of selecting, say, the \"match\" button is not bound to the boolean end of the relay, but the array and - and the binding has the effect, say, of writing the entire array \\[\"match\"] to the so-called \"inTransit.opinion\" (this needs to be renamed) - rather than writing to the boolean end of the relay.\n"
    }
  ]
}
---
The model relay system should be batching up composite changes which arise from a model transformation, to ensure that it doesn't try to trigger a fresh relay which might read an inconsistent model state partway through an update. This system appears to be failing in some cases -&#x20;

This can be demonstrated by checking out the following branch of the feedback component - and applying the following steps:\
<https://github.com/jobara/metadata/tree/FLUID-5517>

i) Load up the demo held in demos/feedback/index.html\
ii) Click the "mismatch" button to bring up the mismatch dialog\
iii) Whilst it is open, then check the "match" button

The expected result is that {match: true, mismatch: false} is relayed out of the arrayToSetMembership transform. Unfortunately the system appears to try to react to the relay output before it is complete, and after a complex relay sequence involving 4 steps, eventually stabilises at {match: false, mismatch: false}.

        