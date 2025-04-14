---json
{
  "title": "FLUID-1619",
  "summary": "Inline edit remains highlighted after deleteing all input from the editable text field: using safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Joseph Vernuccio",
  "date": "2008-09-25T15:34:32.000-0400",
  "updated": "2014-07-07T16:03:21.128-0400",
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
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 3.2 on Mac OS X 10.5&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1619/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-25T15:36:22.000-0400",
      "body": "screenshot - 1 showing the highlighted inline edit field after deleting all input.&#x20;\n"
    },
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-25T15:37:01.000-0400",
      "body": "Highlight of field seems to be removed if you mouse over it after hitting enter.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-04T13:46:12.000-0500",
      "body": "This will happen any time you use the \"enter\" key to leave edit mode and don't have the mouse move on and off  it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-07T16:03:21.126-0400",
      "body": "This demo is no longer exists\n"
    }
  ]
}
---
After deleting all inputs from the editable text field, the inline edit field will remain highlighted. This bug only presents itself  if after deleting all inputs you tap 'enter' with the keyboard, it does not become present when selecting blank space using the mouse.&#x20;

Steps to reproduce:

1\. Open URL: <http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\. Using mouse, select one of the inline edit text fields.&#x20;

3\. Delete all inputs from the editable text field.&#x20;

4\. Using keyboard, tap 'enter' to confirm the delete of all iputs.&#x20;

Expected result:&#x20;

* the inline edit will remain highlighted and the text will be greyed invitation text saying "Click here to edit"

        