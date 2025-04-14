---json
{
  "title": "FLUID-3997",
  "summary": "Can't tab to \"Browse/Add More\" button (IE6 and IE9, Flash 10)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-21T14:00:53.592-0500",
  "updated": "2014-05-22T14:25:29.507-0400",
  "versions": [
    "1.3",
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE6 on Win XP, with Flash 10\\\nIE9 on Win 7, with Flash 10\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4082/",
      "key": "FLUID-4082",
      "summary": "Can only tab once to Add More / Upload after file has been added to queue"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-02-23T10:21:06.109-0500",
      "body": "The second issue mentioned has been filed as <https://fluidproject.atlassian.net/browse/FLUID-4082#icft=FLUID-4082>\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-09-13T15:06:54.446-0400",
      "body": "Still a problem for 1.4\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-03T10:38:37.056-0400",
      "body": "Testing for the 1.4 release, I'm seeing this same problem in IE9 on Win 7. Adjusting the issue details accordingly. You can occasionally tab to the Browse/Add button once on the first try, but subsequent attempts (i.e. after tabbing through other controls) fail.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-10-03T16:12:07.431-0400",
      "body": "Testing for the 1.4 release, the same issue in IE6 on Win XP.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-10-03T16:18:06.788-0400",
      "body": "With IE6 on Win XP, another issue discovered at the testing for 1.4 release is that, once the files are added to the queue, cannot tab onto the file queue to remove.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:24:15.486-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:25:17.532-0400",
      "body": "adding a fix version and will close after\n"
    }
  ]
}
---
Using IE6 on Win XP with Flash 10, it is not possible to tab to the "Browse/Add More" button.

To reproduce:

1\) Open the template file in IE 6 on Windows XP with Flash 10 installed:\
<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>

2\) Try to tab to the "Browse" button\
\---> You can't

3\) Use the mouse to add some files to the queue\
2\) Try to tab to the "Add More" button\
\---> You can't; focus will land on the queue and on the "Upload" button, but not the "Add more" button

        