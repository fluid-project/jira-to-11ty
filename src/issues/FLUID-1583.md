---json
{
  "title": "FLUID-1583",
  "summary": "Caret does not appear in customized inline edit field in springboard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Joseph Vernuccio",
  "date": "2008-09-18T11:14:23.000-0400",
  "updated": "2011-01-14T09:53:23.794-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "FF2 on Mac OS X 10.5&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1583/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-18T11:19:03.000-0400",
      "body": "screenshot- 1&#x20;\n\nExample of caret not appearing when inline edit is selected.&#x20;\n"
    },
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-18T13:26:19.000-0400",
      "body": "In addition, this issue seems to repeat itself in example 3 - multiple inline edits.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-19T11:43:46.000-0400",
      "body": "Could not reproduce, likely fixed with some of the recent changes\n\nVerified using:\\\nFF2 on Mac OS X 10.5\n"
    }
  ]
}
---
When trying to edit text for inline edit example 2 after opening edit field with keyboard the caret does not appear. Still allows you to edit text, after editing of text caret still does not appear.&#x20;

Steps to reproduce:&#x20;

1\. Open url: <http://build.fluidproject.org/fluid/fluid-components/html/InlineEdit.html>

2\. Use 'tab' key to navigate to example 2, customized edit field.&#x20;

3\. Using keyboard tap the 'enter' or 'space' key.

        