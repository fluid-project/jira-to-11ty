---json
{
  "title": "FLUID-876",
  "summary": "Progress bar information is incorrect upon resuming after deleting files from the queue.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-08T19:37:06.000-0400",
  "updated": "2008-12-19T08:21:10.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-19T08:21:10.000-0500",
      "body": "Appears to have been fixed\n\nTested using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)&#x20;\n"
    }
  ]
}
---
Resuming an upload after deleting some items, results in the progress bar updating incorrectly.

steps to reproduce:

1\) open either the in-line or pop-up version of uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) click "add files"

3\) add some files to the queue

4\) click upload

5\) while there are still several files left, pause the upload

6\) delete some of the remaining files from the queue.&#x20;

7\) resume the upload. Notice that the stats on the progress bar are update incorrectly (m of n). The value of m increments to the total it would have been if you hadn't deleted any items from the queue.

        