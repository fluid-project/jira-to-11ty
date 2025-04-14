---json
{
  "title": "FLUID-1002",
  "summary": "Mouse selection highlighting (not mouseover highlighting) remains on inline edit field, using safari 3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-07-23T19:21:39.000-0400",
  "updated": "2008-10-31T08:53:49.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safara 3 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1002/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-23T19:22:10.000-0400",
      "body": "'screenshot-1' shows the persistent mouse selection highlighting\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-18T10:55:49.000-0400",
      "body": "This issue only seems to present itself with table cells, not divs, paragraphs, or other types of elements. I've added an example of a table to the manual test page to illustrate the difference.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T08:53:49.000-0400",
      "body": "Appears to have been fixed with one of the updates to inline edit\n"
    }
  ]
}
---
If you select a block of text, including an inline edit field, and click on that inline edit field, the selection highlighting remains.&#x20;

Steps to reproduce:

1\) Open the inline edit demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Drag your mouse across a block of text and Notice the highlighting

3\) Click on an inline edit field. Notice the highlighting remains over the inline edit field

        