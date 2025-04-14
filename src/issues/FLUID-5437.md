---json
{
  "title": "FLUID-5437",
  "summary": "The <pre> example overlaps the next column in the FSS demo",
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
  "date": "2014-06-09T11:29:16.827-0400",
  "updated": "2015-06-26T09:54:26.367-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Demos",
    "FSS"
  ],
  "environment": "Chrome 35, IE 9 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5437/image.png",
      "filename": "image.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5437/image 2.png",
      "filename": "image 2.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:25.919-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:44.828-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The contents of the \<pre> tag in the first column overlap with the contents of the second column.&#x20;

Submitted by Marcus Vinícius da Silveira on the Infusion-Users list.\
<http://lists.idrc.ocad.ca/pipermail/infusion-users/2014-June/000330.html>

He suggests "To fix the issue you should probably add word-wrap:break-word; to the parent div or to the element itself."

        