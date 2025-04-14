---json
{
  "title": "FLUID-2239",
  "summary": "[Uploader] Demo uploader still pauses mid-file-upload",
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
  "date": "2009-02-12T20:14:50.000-0500",
  "updated": "2017-01-16T09:42:50.655-0500",
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
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-822/",
      "key": "FLUID-822",
      "summary": "Upload: After pausing queue wont resume but seems to \"get stuck\""
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-08T11:02:45.462-0400",
      "body": "@@Colin Clark could you provide more information about what this issue is referring to and what change is needed.\n"
    }
  ]
}
---
When we fixed the infamous pause bug (<https://fluidproject.atlassian.net/browse/FLUID-822#icft=FLUID-822>), we changed the server behavior so that when and upload is stopped by the user, the upload process continues until the currently uploading file is complete (or errors). \[See <https://fluidproject.atlassian.net/browse/FLUID-822#icft=FLUID-822> for a full description]

We did not change the behavior for the demo version of the uploader since there wasn't really a "bug" there since there wasn't really an upload.

However, the demo version should really mimic the server version to give an accurate mirror of the actual user experience.&#x20;

        