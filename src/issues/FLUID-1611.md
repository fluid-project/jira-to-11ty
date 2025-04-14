---json
{
  "title": "FLUID-1611",
  "summary": "Large amount of non-separated characters results in text to scroll across page in inline edit - simple text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Joseph Vernuccio",
  "date": "2008-09-25T10:59:12.000-0400",
  "updated": "2017-01-16T09:33:01.439-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF 50 (macOS 10.12)\\\nFF3, Safari 3.1 (Mac OS 10.4)\\\nFF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nChrome 35, FF 30, Safari 7 (Mac OS 109)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nFF3, IE6 (Win 2000)\\\nIE 11 (Win 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1611/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1611/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-25T11:02:00.000-0400",
      "body": "Screenshot - 1 for scrolling of non-sperated text.&#x20;\n"
    },
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-25T11:03:07.000-0400",
      "body": "screenshot-2 of scroll of text.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-30T09:14:31.000-0400",
      "body": "design-watched\n"
    }
  ]
}
---
When large number of non-separated characters entered in to inline edit text field, the text scrolls across the page rather then wrap.&#x20;

Steps to reproduce:&#x20;

1\. Open URL: <http://build.fluidproject.org/infusion/demos/inlineEdit/>

2\. Using mouse, select one of the inline edit text fields.&#x20;

3\. Edit the text with large number on non-separated characters.&#x20;

4\. Click on white/blank space outside of editable text field.

Results:

* non-separated characters scroll across the page horizontally.&#x20;

        