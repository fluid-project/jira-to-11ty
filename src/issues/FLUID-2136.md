---json
{
  "title": "FLUID-2136",
  "summary": "[Uploader 2] After removing a row from the FileQueueView the progressor for the row is left behind",
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
  "date": "2009-01-16T12:27:03.000-0500",
  "updated": "2011-02-22T16:27:59.976-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2168/",
      "key": "FLUID-2168"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-01-16T12:59:22.000-0500",
      "body": "When we remove a row we also remove it's progressor from the DOM.&#x20;\n\nNote: we're still leaving behind the progressor when a file has uploaded successfully even though it will never be used again. The problem with removing the progressor when a file is successful is that the progressor will be removed before it gets a chance to display 100% progress. There is some rethinking of the flow of the Uploader that could fix this but it doesn't seem worth messing with.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-26T13:40:44.000-0500",
      "body": "Reopening because I broke the File Queue tests with this change. Basically if we try to remove a file that was never added or not there, it blows up. Good lesson on why we have tests.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-28T11:51:45.000-0500",
      "body": "Fixed. Checking to see if the progressor exists before we try to remove it.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:59.975-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Barely able to call this a bug since it doesn't actually effect anyone, but in the name of tidiness when we delete a row (or no longer need a row's progress indicator) we should remove the progressor from the DOM.&#x20;

        