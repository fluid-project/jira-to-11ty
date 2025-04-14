---json
{
  "title": "FLUID-2516",
  "summary": "Focus does not remain on a rich text inline edit field, after it is closed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2009-04-04T09:07:27.000-0400",
  "updated": "2009-08-12T14:55:58.000-0400",
  "versions": [
    "1.0",
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)&#x20;\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3083/",
      "key": "FLUID-3083"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Focus does not remain on a rich text inline edit field, after it is closed

Steps to reproduce:

1\) Open the rich text inline edit example\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/rich-text-inline-edit.html>

2\) Open one of the rich text inline edit fields into edit mode

3\) Close the rich text inline edit field

Notice that focus does not remain on the field after it has left edit mode

        