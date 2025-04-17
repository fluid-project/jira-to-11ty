---json
{
  "title": "FLUID-5371",
  "summary": "Model relay system should support conditional operation of forward and backward relays",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-05-15T03:25:15.578-0400",
  "updated": "2014-06-25T16:16:11.135-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5280/",
      "key": "FLUID-5280"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5368/",
      "key": "FLUID-5368"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2014-05-27T19:05:59.955-0400",
      "body": "Reviewed and tested by Cindy Li, Justin Obara and me. Committed and pushed to project master at f77fac2d2d8ecd7fe5ffd2f497cf404e8f13814b\n"
    }
  ]
}
---
We've done as well as we could with the "veterancy system" implemented for FLUID-5280 but almost immediately we have run into a situation with <https://fluidproject.atlassian.net/browse/FLUID-5368#icft=FLUID-5368> where it is impossible for the framework to automatically determine the correct semantics for resolving conflicts between the two ends of a relay. In this case a single component is initialising a single model, and both ends of the transform hold values on initialisation. This means that we can't use either of our two classic "conflict resolution schemes" which are that i) an undefined value defers to every other value, and ii) an value held in an existing component defers to one held in a currently instantiating component.

The only way out of this situation is to allow the user to supply an explicit hint with the relay record governing the directions that the system can operate it in. This takes care of another use case as well, that of transforms which are really intended to be unidirectional - either because we don't want values propagated backwards at all or because an inverse rule is inappropriately implemented, etc.

We propose to add two new fields to "modelRelay" configuration blocks, with the names "forward" and "backward". These may both take on values in the same range which are as follows:

"always" (default value - same effect as undefined or falsy): Always operate this relay in the specified direction.\
"liveOnly": Do not operate the relay in this direction during initialisation of this component's model (during the "initial transaction")\
"initOnly": ONLY operate the relay during the initial transaction (no plausible use can be thought of for this option, entered only for completeness)\
"never": Never operate this relay in this direction.

With this feature, the <https://fluidproject.atlassian.net/browse/FLUID-5368#icft=FLUID-5368> situation can be resolved as follows:

{\
source: "{fluid5368}.model.forArrayToSetMembership",\
target: "{fluid5368}.model.modelInTransit",\
backward: "liveOnly",\
singleTransform: {\
type: "fluid.transforms.arrayToSetMembership",\
options: {\
"value1": "value1"\
}\
}

The "liveOnly" entry prevents the relay rule from being operated in the backward direction during component initialisation.

        