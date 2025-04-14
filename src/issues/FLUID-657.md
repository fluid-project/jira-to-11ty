---json
{
  "title": "FLUID-657",
  "summary": "Implement basic keyboard support in Uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2008-05-27T17:51:11.000-0400",
  "updated": "2008-06-05T11:32:48.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-660/",
      "key": "FLUID-660"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-666/",
      "key": "FLUID-666",
      "summary": "Enhance Uploader accessibility"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-494/",
      "key": "FLUID-494"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-05-30T18:37:53.000-0400",
      "body": "I committed several related fixes under the <https://fluidproject.atlassian.net/browse/FLUID-666#icft=FLUID-666> ticket.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-05-30T18:39:08.000-0400",
      "body": "This issue was fixed by doing the following:\n\n* Ensuring all buttons and links are correctly in the tab order\n* Adding descriptive hidden text to the remove buttons\n* Throwing focus on the Pause button when uploading is occurring\n* Putting focus back on the Done button when the progress bar is dismissed\n"
    }
  ]
}
---
We need to ensure that the Uploader supports basic keyboard accessibility by ensuring that:

* all controls are in the tab order
* once upload starts, focus is on the Pause button

dev-iteration34

        