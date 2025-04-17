---json
{
  "title": "FLUID-2240",
  "summary": "[Uploader] When stopping an upload there is no user feedback that the current file upload must complete",
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
  "date": "2009-02-12T20:18:38.000-0500",
  "updated": "2017-01-16T09:43:22.067-0500",
  "versions": [
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
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
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2569/",
      "key": "FLUID-2569"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T10:09:32.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-22T11:13:41.940-0500",
      "body": "This was still observed during 1.3 testing.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-08T11:03:31.220-0400",
      "body": "Colin Clark is this still an issue?\n"
    }
  ]
}
---
The new Uploader behavior to fix <https://fluidproject.atlassian.net/browse/FLUID-822#icft=FLUID-822>, means that the currently uploading file must complete or error before the Upload process can be stopped.&#x20;

There currently is no user feedback as to what is happening during the time that the user clicks the Stop Upload button and the upload actually stops. This makes the component appear broken and is potentially confusing.&#x20;

Please note that this would only effect large files and/or slow connections.

        