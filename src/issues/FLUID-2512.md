---json
{
  "title": "FLUID-2512",
  "summary": "[Uploader] the currentBatch.totalBytesUploaded needs to be broken into two new model values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-04-03T18:34:37.000-0400",
  "updated": "2017-01-16T09:54:58.924-0500",
  "versions": [
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
totalBytesUploaded a value in the currentBatch object is currently misnamed and doesn't carry all the data that an implementor might need.&#x20;

We need two values:\
currentBatch.totalBytesAttempted - replaces totalBytesUploaded and used to display correct Progress\
currentBatch.totalBytesSucceeded - new value to be used to indicate to the user how many Bytes where ultimately stored on the server

        