---json
{
  "title": "FLUID-1817",
  "summary": "[Uploader 2] Title text for Remove button still says Remove after Upload/Error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-11-17T20:20:01.000-0500",
  "updated": "2011-02-22T16:27:53.209-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-01-23T14:54:00.000-0500",
      "body": "Setting the title attribute of the button to the same title attribute as the row when the file has been completed. This may be redundant but I think that the title is needed for screen readers.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:53.205-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The title text, the pop-up tool tip text, for the Remove button in the filequeue still says "Remove this file" even after the file is uploaded or it errors.&#x20;

        