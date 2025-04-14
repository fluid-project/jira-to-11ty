---json
{
  "title": "FLUID-3279",
  "summary": "Alignment of the Uploader is mixed up after network disruption",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Armin Krauss",
  "date": "2009-10-13T15:58:47.000-0400",
  "updated": "2014-05-22T14:28:50.949-0400",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Windows XP SP 2 - Firefox 3.0.14 - Flash 10\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3279/network-error.png",
      "filename": "network-error.png"
    }
  ],
  "comments": [
    {
      "author": "Armin Krauss",
      "date": "2009-10-13T15:59:58.000-0400",
      "body": "This screenshot shows how the network interruption message is not displayed correctly.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:28:50.932-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    }
  ]
}
---
This error occurred on the server example of the Uploader testing\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

1\) Uploading two files and interrupt network immediately after the upload started\
2\) After a few minutes reconnect the network\
3\) After some time the upload finishes and displays an network error

Problem:

The layout looks mixed up and the arrangement of objects seems to overlap. (see attached screen shot)

        