---json
{
  "title": "FLUID-2043",
  "summary": "Uploader contains a number of unused styles definitions",
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
  "date": "2008-12-22T15:48:37.000-0500",
  "updated": "2011-02-22T16:27:51.657-0500",
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
      "date": "2009-01-23T13:41:12.000-0500",
      "body": "Removed the obsolete state styles from the code.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:51.634-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The following styles as defined for the Uploader are no longer used:\
queueStartState: "start",\
queueEmptyState: "empty",\
queueLoadedState: "loaded",\
queueReloadedState: "reloaded",\
queueDoneState: "done",\
queueBrowsingState: "browsing",\
queueUploadingState: "uploading",\
disabled: "disabled",

        