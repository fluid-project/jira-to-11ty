---json
{
  "title": "FLUID-2521",
  "summary": "The container with overflow is in between the flexible containers: using FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-04-04T12:11:28.000-0400",
  "updated": "2015-06-26T10:17:04.524-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "FSS"
  ],
  "environment": "FF2 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2521/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-04T12:13:02.000-0400",
      "body": "'screenshot-1' shows the 750px overflow container inbetween the percentage containers\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:26:06.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.401-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:32.408-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The container with overflow is in between the flexible containers

Steps to reproduce:

1\) Open the FSS.Layout.Containers page\
<http://build.fluidproject.org/infusion/tests/framework-tests/fss/html/1.fss.layout.containers.html>

Notice that at the bottom the 750px Overflow container is in between the 33% flex containers. It should be on its own line

        