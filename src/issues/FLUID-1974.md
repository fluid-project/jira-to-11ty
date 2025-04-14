---json
{
  "title": "FLUID-1974",
  "summary": "Uploader: Total progress briefly animates to 100% after Upload Cancel",
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
  "date": "2008-12-15T12:41:08.000-0500",
  "updated": "2009-03-26T10:34:55.000-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T14:22:22.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-20T20:20:27.000-0400",
      "body": "total progress is now set to 100% on purpose so that we can show the error or the OK state of the upload\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-26T10:20:47.000-0400",
      "body": "Reviewed, and it works for me.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-26T10:34:55.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)&#x20;\n"
    }
  ]
}
---
At the moment when an Upload is canceled, there is a call which hides the total progressor and updates the Total status text. Unfortunately it does a quick animation to 100% before it hides it even if the upload was cancelled. This will be written up as another bug.&#x20;

        