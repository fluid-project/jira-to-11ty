---json
{
  "title": "FLUID-2334",
  "summary": "[Uploader] file progressors display in the wrong positions, if files are added to a completed upload",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-03-11T19:47:29.000-0400",
  "updated": "2009-03-26T10:32:54.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2351/",
      "key": "FLUID-2351"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-03-11T19:56:03.000-0400",
      "body": "Apparently the reuse of id's is a well-known bug in SWFUpload 2.2.0 which \"We have yet to find a satisfactory work-around.\" - Gyphie\n\nAnd in case it isn't clear in the above description, we end up with duplicate ids for rows in the DOM which is definitely a no-no.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-11T20:38:34.000-0400",
      "body": "OK, I'm feeling better about this one. I can only reproduce it in the demo version of the Uploader. On the server, everything seems fine. Need to do more testing.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-12T11:26:19.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-20T20:19:17.000-0400",
      "body": "Fixed with the patch added to <https://fluidproject.atlassian.net/browse/FLUID-2351#icft=FLUID-2351>\n\nSince we're no longer messing with the DOM ancestor of Flash object we don't get new ids so the progressors show up in the right places.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-26T10:15:59.000-0400",
      "body": "Reviewed, and it works for me.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-26T10:32:54.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
OK, this is a little more serious than the summary would indicate.&#x20;

The problem is that if you let the upload run to the end, and then add more files to the queue, file id's get reused.&#x20;

We use the file id to position the progressor for the file row. So the progressor displays in the wrong position.&#x20;

        