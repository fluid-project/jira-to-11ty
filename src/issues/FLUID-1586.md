---json
{
  "title": "FLUID-1586",
  "summary": "Outline of selection box remains when using keyboard to activate inline editable field text, using Opera 9.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Joseph Vernuccio",
  "date": "2008-09-18T14:19:46.000-0400",
  "updated": "2011-01-14T09:53:24.550-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "Opera 9.6 for Mac OS X 10.5&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1586/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1586/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-18T14:21:52.000-0400",
      "body": "screenshot - 1\n\nnotice the outline of selection box remains.&#x20;\n"
    },
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-18T14:23:07.000-0400",
      "body": "screenshot - 2&#x20;\n\nSecond example of shadow box issue.&#x20;\n"
    },
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-18T14:36:47.000-0400",
      "body": "Noticed that if you edit file then tap 'enter' the outline of the selection box does not seem to remain. However if you edit the inline edit text line and then tap the 'tab' button in order to move focus to the next inline editior text that the outline of the selection box will remain and the edit will remained saved.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-04T11:18:12.000-0400",
      "body": "Appears to have been fixed with the update to the quickstart example\n\ntested using:\n\nOpera 9.6 (Mac OS 10.5)\n"
    }
  ]
}
---
When selecting inline editor by tapping the 'enter' or 'space' key the outline of the selecion box remians, this problem seems to occur on all example for the inline edit.&#x20;

Steps to reproduce:&#x20;

1\. Open url: <http://build.fluidproject.org/fluid/fluid-components/html/InlineEdit.html>

2\. Tap the 'tab' key until focus is on one of the inline editable text field.&#x20;

3\. Tap the 'enter' or 'space' buttion' to select the inline editable text field, caret should appear.&#x20;

4\. Tap the 'tab' to move foucs to the next inline editable text editor, the outline of the selection box should remain.&#x20;

        