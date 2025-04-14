---json
{
  "title": "FLUID-1614",
  "summary": "Undo link going underneath active inline edit field.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Joseph Vernuccio",
  "date": "2008-09-25T12:48:13.000-0400",
  "updated": "2008-10-02T11:25:40.000-0400",
  "versions": [
    "0.5beta1",
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF3, Safari 3.1 (Mac OS 10.4)\\\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1614/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-25T12:49:51.000-0400",
      "body": "screeshot-1 of undo link under inline edit feild.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-10-02T11:01:04.000-0400",
      "body": "converted divs to spans to avoid display:block problems with show/hide\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-02T11:25:40.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
After editing an inline edit field and then selecting the already edited field again the undo button goes underneath the editable text field rather then staying to the right of it.&#x20;

Steps to reproduce:&#x20;

1\. Open URL: <http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html#>

2\. Using mouse, click on the inline edit field.&#x20;

3\. Using keyboard, type on 'a' at the end of the text.&#x20;

4\. Using mouse, click on blank spot outside of the editable text field.&#x20;

5\. Using mouse, click on the inline edit field again.&#x20;

Result:&#x20;

the undo link will go from the right of the editable text field to underneath the editable text field.&#x20;

        