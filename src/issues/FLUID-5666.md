---json
{
  "title": "FLUID-5666",
  "summary": "Create a new fluid.changeElementValue() function",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Simon Bates",
  "date": "2015-05-15T13:45:21.619-0400",
  "updated": "2015-11-30T16:05:52.954-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-312/",
      "key": "FLOE-312",
      "summary": "Add TTS support to keyboard assistance screens"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-11-20T15:43:15.282-0500",
      "body": "Issued a pull request: <https://github.com/fluid-project/infusion/pull/656>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-30T16:05:52.952-0500",
      "body": "The pull request has been merged into the master branch @ 543da2eacf3f3a03843d5a72a6364b1465706742\n"
    }
  ]
}
---
The <https://fluidproject.atlassian.net/browse/FLOE-312#icft=FLOE-312> pull request <https://github.com/fluid-project/first-discovery/pull/47> adds the following function in keyboardInput.js:

gpii.firstDiscovery.keyboardInput.setElementValueAndTriggerChange = function (elem, value) {\
elem.val(value);\
// programmatic change of the value does not fire a change\
// event, so we trigger it explicitly\
elem.triggerHandler("change");\
};

During code review, we identified this as code that we have implemented in other places. We should move this function to a central place so that it can be re-used.

From the pull request comments:

"We should take the opportunity to elevate this into a core utility within FluidDocument.js called, say, fluid.changeElementValue with its own tests. It appears in numerous places, for example in TestingTests.js utility "fluid.tests.changeField", TextfieldSliderTests.js manually, PanelsTests.js and many others."

<https://github.com/fluid-project/first-discovery/pull/47#discussion_r30366584>

        