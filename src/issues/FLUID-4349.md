---json
{
  "title": "FLUID-4349",
  "summary": "Improve fluid.allocateSimpleId() to handle the case where element is not defined ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Harris Wong",
  "date": "2011-07-20T17:11:35.150-0400",
  "updated": "2011-08-10T15:21:23.922-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": "N/A\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-07-21T10:23:14.966-0400",
      "body": "Will be committed with #FLUID-4209 on the same pull request: <https://github.com/fluid-project/infusion/pull/111>\n"
    }
  ]
}
---
The current fluid.allocateSimpleId(element) does not handle the case where "element" is undefined.  This function can be improved as follow:\
When the element is undefined, then return the "fluid-id-" + fluid.allocateGuid(); if the element is there, perform the old behavior.  We probably want to update the unit test as well. &#x20;

framework/core/js/Fluid.js line 1699\~1705. &#x20;

        