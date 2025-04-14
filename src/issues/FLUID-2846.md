---json
{
  "title": "FLUID-2846",
  "summary": "[Uploader] clicking Browse just before the Uploader proceeds to the next page will crash FF3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-05-29T13:59:14.000-0400",
  "updated": "2014-04-02T15:11:44.558-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF3/Mac\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:11:44.543-0400",
      "body": "We don't have the server version anymore.\n"
    }
  ]
}
---
Setup:\
Server version of the Uploader configured to navigate to another page after a successful upload

Steps to Reproduce:

* Select a few files, upload to server
* As they upload poise you mouse over the Browse button
* As soon as the files have uploaded and the Browse button becomes active again, CLICK the Browse button\
  &#x20;  Observe: behind the File Browse window, the Uploader will proceed to the next page in the workflow
* Select some files, and click Select\
  &#x20;  Observe: a second or two after the File Browse window dismisses, the browser will crash

I've done this twice... your milage may vary.&#x20;

        