---json
{
  "title": "FLUID-3635",
  "summary": "Can't edit an empty inline edit field (that has no invitation text) with the mouse: using IE 8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-04-13T11:19:35.000-0400",
  "updated": "2010-12-08T17:36:26.846-0500",
  "versions": [
    "1.2beta1",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 8 (Win XP, Win 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3635/addVerticalPaddingOnEmptyText.patch",
      "filename": "addVerticalPaddingOnEmptyText.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3635/addVerticalPaddingOnEmptyTextV2.patch",
      "filename": "addVerticalPaddingOnEmptyTextV2.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:22:44.843-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-11-22T12:09:29.962-0500",
      "body": "Can recreate this on the manual-tests html page, but I think this code is out of date. When setting defaultViewText to \"\" in the simple inline edit demo, it works fine (except for a minor styling issue), the area is click-able.\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-11-24T15:54:34.617-0500",
      "body": "Never mind! Can recreate by editing value to be one space, or defaultViewText to = \" \" (once space). Empty is still clickable, just styled wrong (<https://fluidproject.atlassian.net/browse/FLUID-3860#icft=FLUID-3860>)&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-30T15:19:42.997-0500",
      "body": "Add vertical padding to empty inline edit so that it will work with IE8.  Styling is off with all the padding issues.   See <https://fluidproject.atlassian.net/browse/FLUID-3860#icft=FLUID-3860>.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-06T10:17:45.716-0500",
      "body": "Added more vertical padding (from 10 to 16px) so that the textEditButton can render properly. &#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-08T11:28:42.614-0500",
      "body": "I think we should move the padding into a CSS class and in the javascript code we can add or remove the class as appropriate. In the current implementation we hardcode padding to '16' in the javascript which means that changing the size of the image will cause this bug to reappear.&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-08T17:35:54.825-0500",
      "body": "Refactored original patch so that no newly hard-coded styling is introduced into the code. &#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-08T17:36:26.840-0500",
      "body": "Reviewed and committed!\n"
    }
  ]
}
---
Can't edit an empty inline edit field (that has no invitation text) with the mouse

Steps to reproduce:

1\) Open the inline edit manual test page\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/InlineEdit.html>

2\) Look for the inline edit filed that has no Invitation text.

Attempt to open that inline edit field into edit mode using the mouse. Notice that it can't be opened. Note that you can open it using the keyboard.

        