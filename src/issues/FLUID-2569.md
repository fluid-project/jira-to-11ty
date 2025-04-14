---json
{
  "title": "FLUID-2569",
  "summary": "After activating the Stop Upload button, it should become disabled to make it clear that it is actually activated",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Eli Cochran",
  "reporter": "Daphne Ogle",
  "date": "2009-04-07T17:55:14.000-0400",
  "updated": "2017-01-16T09:57:50.369-0500",
  "versions": [
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
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2240/",
      "key": "FLUID-2240",
      "summary": "[Uploader] When stopping an upload there is no user feedback that the current file upload must complete"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-11T14:20:39.116-0400",
      "body": "Is this still an issue. It's hard to tell in the demo because the file uploads do stop immediately there.&#x20;\n"
    }
  ]
}
---
Since the Stop Upload doesn't happen immediately (completes the upload of current file) this is VERY important feedback.  Otherwise, the user will likely hit stop upload many times trying to get it to do what they've asked.  I wonder if we might also want to add a message letting them know it will stop after completing the current upload.  During testing today I had this happen and thought it was broken until brain kicked into gear and I remembered it wouldn't stop until after uploading the current file which took several seconds.

        