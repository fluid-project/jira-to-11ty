---json
{
  "title": "FLUID-4405",
  "summary": "Linespacing for list items needs to be increased",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2011-08-25T15:32:56.293-0400",
  "updated": "2013-10-04T09:52:12.661-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4405/FLUID-4405.patch",
      "filename": "FLUID-4405.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4405/Screenshot.png",
      "filename": "Screenshot.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4405/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-08-25T15:34:13.061-0400",
      "body": "Screenshot.png shows the text that doesn't have enough line spacing.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-31T12:48:40.626-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Ameesh Arya",
      "date": "2012-03-26T15:49:36.587-0400",
      "body": "The Linespacing for the list items under \"Some helpful tips: is increased.\n"
    },
    {
      "author": "Ameesh Arya",
      "date": "2012-03-26T16:01:27.215-0400",
      "body": "In the above screenshot there is now linespacing under \"Some Helpful tips\".\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-03-26T16:32:35.982-0400",
      "body": "Thanks for the patch Ameesh. There are couple of issues that I noticed on a first pass. 1) it looks like you have invalid markup, with a \\<p> inside of a \\<span> 2) Please avoid the use of \\<br /> tags, it would be better to do this with straight css.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-04T09:52:12.653-0400",
      "body": "Seems to have been addressed.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the UIO demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html>

2\) Look at the first list item under "Some helpful tips". Notice that the lines of text are very close together.&#x20;

        