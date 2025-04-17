---json
{
  "title": "FLUID-1145",
  "summary": "Pressing the 'esc' key, while in an inline edit field, will erase the content; using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2008-08-14T14:49:47.000-0400",
  "updated": "2009-02-10T08:29:37.000-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2207/",
      "key": "FLUID-2207"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-08-25T15:08:23.000-0400",
      "body": "Using the ESC key to erase a text input field in IE6/IE7 is the native behaviour for IE (see www\\.google.com as an example )&#x20;\n\nI would think this as extremely hazardous native behaviour. Rather than wiping out the field and saving, perhaps it would be more preferable to simply undo the last action and then exit editing the field.\n\nCan we overwrite the native behaviour?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-28T09:15:37.000-0400",
      "body": "in the bSpace example (<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>)  this only  occurs after pressing the 'esc' key twice after the caret is displayed\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:53:27.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-30T10:00:39.000-0500",
      "body": "After erasing a single field with the escape key, just activating other fields will cause them to erase as well.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-06T19:25:17.000-0500",
      "body": "Fixed at revision 6444\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-09T08:42:20.000-0500",
      "body": "Seems to be working in all but one example.\\\n<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-09T11:35:32.000-0500",
      "body": "Fixed further, at revision 6448 - it seems IE will only \"sometimes\" allow this cancellation, unless it is on onkeydown, rather than onkeypress\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-10T08:28:19.000-0500",
      "body": "Verified fix using:\n\nIE6 (Win XP)\\\nIE7 (Win Vista)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-10T08:28:56.000-0500",
      "body": "forgot to delete bug parade comment, will reopen and close again after deletion of the comment\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-10T08:29:37.000-0500",
      "body": "deleted bug parade comment, closing again.\n"
    }
  ]
}
---
Pressing the 'esc' key, while in a an inline edit field, will erase the content

Steps to reproduce:

1\) Open the inline edit demo from the daily build site:

2\) Navigate to one of the inline edit fields

3\) Activate the inline edit field

4\) Press the 'esc' key. notice that the content is erased and the change is saved

        