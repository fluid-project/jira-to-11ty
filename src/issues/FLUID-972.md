---json
{
  "title": "FLUID-972",
  "summary": "Text with words seperated by multiple spaces, aren't completely  visible when re-entering edit mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2008-07-22T14:25:06.000-0400",
  "updated": "2008-12-03T11:48:43.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5, Win XP)\\\nFF3 (Win Vista)\\\nFF3 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-886/",
      "key": "FLUID-886",
      "summary": "'tab' character is displayed as single space"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-887/",
      "key": "FLUID-887",
      "summary": "multiple 'space' characters are displayed as a single space, using FF and Safari"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-957/",
      "key": "FLUID-957",
      "summary": "Investigate and formalise issues surrounding component size changes during change of state (\"seethe\", etc.)"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-957/",
      "key": "FLUID-957"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1528/",
      "key": "FLUID-1528"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-992/",
      "key": "FLUID-992"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-972/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-972/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-972/screenshot-3.jpg",
      "filename": "screenshot-3.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-22T14:26:59.000-0400",
      "body": "'screenshot-1' shows the text being entered\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-22T14:27:36.000-0400",
      "body": "'screenshot-2' shows the text after it is entered\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-22T14:28:38.000-0400",
      "body": "'screenshot-3' shows the text upon re-entering edit mode\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:54:05.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T21:33:12.000-0500",
      "body": "See comments on <https://fluidproject.atlassian.net/browse/FLUID-886#icft=FLUID-886>. Whitespace normalisation is a standard aspect of HTML.\n"
    }
  ]
}
---
After entering text seperated by multiple spaces, into an inline edit field, when you re-enter edit mode the edit field does not display wide enough to fit the entire string of text. This is because the inline edit field removes multiple spaces when it displays the text, but shows the spaces when it is displayed it edit mode. This makes the string of text longer in edit mode.

Steps to reproduce:

1\) Open the inline edit demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Activate an inline edit field to place it in  edit mode.

3\) Edit the text with a string such as "spaces                      hidden"

4\) Press the 'enter' key. Notice that the multiple spaces are removed

5\) Re-enter edit mode. Notice that the multiple spaces appear, and that the text field isn't large enough to hold the entire line of text. You should notice that only the beginning or end of the string of text is displayed

The text is all in the field, it just isn't all visible at once.&#x20;

        