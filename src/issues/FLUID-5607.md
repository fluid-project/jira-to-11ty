---json
{
  "title": "FLUID-5607",
  "summary": "Refactor Tooltip component to bring it inline with current best practices",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2015-03-20T13:00:50.801-0400",
  "updated": "2015-06-22T15:10:25.802-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tooltip"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5607/Tooltip.patch",
      "filename": "Tooltip.patch"
    }
  ],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2015-06-15T15:09:26.742-0400",
      "body": "I started looking at the following point:\n\n* remove the \"initialised\" member workflow and replace with a framework facility\n\nHowever, after chatting with Antranig, he suggests that this issue be put on hold until after <https://github.com/fluid-project/infusion/pull/591> is merged.\n\nThe following are notes on where I got to.\n\n\"initialised\" is referenced in Tooltip.js at line 130:\n\nthat.initialised = false; // TODO: proper framework facility for this coming with <https://fluidproject.atlassian.net/browse/FLUID-4890#icft=FLUID-4890>\n\nThe pull request with the code for <https://fluidproject.atlassian.net/browse/FLUID-4890#icft=FLUID-4890>: <https://github.com/fluid-project/infusion/commit/f5403d5027923475e0c4314005f6723d2e732759>\n\nThat pull request stops events from being fired on destroyed components.\n\nI tried to see if we can simply remove the \"initialised\" member and (with one small change in fluid.tooltip.setup) the tests all pass with \"initialised\" removed. However, I do not believe that the existing tests cover all the flows that \"initialised\" guards.\n\nTo continue this work, I think the next step would be to understand the framework changes that have happened since the \"initialised\" was added to the Tooltip to see if it is actually still needed. And add unit tests as needed.\n\nI'll attach a diff on Tooltip.js that comments out usage of \"initialised\" and makes the small change to fluid.tooltip.setup as mentioned above.\n"
    }
  ]
}
---
The tooltip component has several TODO's scattered throughout the codebase, as it was waiting on <https://fluidproject.atlassian.net/browse/FLUID-3674#icft=FLUID-3674> and FLUID-4890.

The TODO's should be addressed, now that those issues have been resolved in master. Any other modernization that can happen at this time should also be implemented.

* Currently the modelListener is setup to listen to changes on the entire model, but should listen separately to changes on "content" and "idToContent"
* remove the "initialised" member workflow and replace with a framework facility
* consider removing backwards compatibility code

        