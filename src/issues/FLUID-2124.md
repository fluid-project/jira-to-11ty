---json
{
  "title": "FLUID-2124",
  "summary": "page links are too close together in the renderer version",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2009-01-13T16:36:16.000-0500",
  "updated": "2009-01-29T09:19:41.000-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Pager"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2124/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-13T16:36:58.000-0500",
      "body": "'screenshot-1' shows the page links with no space between them\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-01-28T14:26:09.000-0500",
      "body": "Oddly, this lack of spacing is a result of a lack of line break between \\<li> elements. At least, if I add line breaks, the spacing is appropriate.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-01-28T14:36:52.000-0500",
      "body": "Based on a conversation with Jacob in the channel (<http://wiki.fluidproject.org/x/UgBa>, starting at about 2:30pm), it is normal that the lack of any white space between the \\<li> elements would produce the lack of space, and he suggests a CSS fix.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-29T09:10:04.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-29T09:19:12.000-0500",
      "body": "need to delete tag in comment\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-29T09:19:41.000-0500",
      "body": "reclosing after removing tag comment.&#x20;\n"
    }
  ]
}
---
page links are too close together in the renderer version

Steps to reproduce:

1\) Open the renderer version of pager:\
<http://build.fluidproject.org/fluid/sample-code/pager/renderer/pager-render.html#>

Notice that the page links do not have any space between them

        