---json
{
  "title": "FLUID-1613",
  "summary": "Undo button goes under large amounts non-separated text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Joseph Vernuccio",
  "date": "2008-09-25T11:54:14.000-0400",
  "updated": "2017-01-16T09:33:44.349-0500",
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
    "Demos",
    "Inline Edit"
  ],
  "environment": "FF 50 (macOS 10.12)\\\nFF3, Safari 3.1 (Mac OS 10.4)\\\nFF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nFF 29, Chrome 35, Safari 7 (Mac OS 10.9)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nFF3, IE8, IE9, IE10, IE11 (Win 7)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1613/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-25T11:56:07.000-0400",
      "body": "screenshot- 1 you can see an example of the undo button under the non-separated text in the the third inline edit field.&#x20;\n"
    }
  ]
}
---
Undo button goes under the non-separated text when after you edit the editable text field.&#x20;

Steps to reproduce:&#x20;

1\. Open URL: <http://build.fluidproject.org/infusion/demos/inlineEdit/>

2\. Using mouse, select one of inline edit text fields.&#x20;

3\. Edit the text with a large number of characters with no gaps in between them.&#x20;

4\. Select on blank/white space outside of editable text field

.&#x20;

        