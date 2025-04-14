---json
{
  "title": "FLUID-2018",
  "summary": "An inline edit field containing only a space character is niether discoverable nor activatable using the mouse",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2008-12-17T15:01:54.000-0500",
  "updated": "2014-07-08T10:59:40.254-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "Safari 3 (Mac OS 10.5)\\\nIE 7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1315/",
      "key": "FLUID-1315",
      "summary": "Replacing the content of an inline edit field with a space character removes the inline edit field: using Safari"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2496/",
      "key": "FLUID-2496"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1330/",
      "key": "FLUID-1330",
      "summary": "inline edit - control chars make field \"disappear\""
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gonzalo David Silverio",
      "date": "2009-01-26T09:59:50.000-0500",
      "body": "Would ensuring that componentThat.model.value (InlineEdit.js line 527)  is not empty after trimming whitespace be appropriate?\n\n* &#x20;              if (componentThat.model.value) {\\\n  \\+                if (componentThat.model.value && (jQuery.trim(componentThat.model.value) !='')){\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:03:59.000-0500",
      "body": "Bug Parade  0.8 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-11T17:31:50.000-0500",
      "body": "This is fixed, though I definitely request a code review!\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-02-13T11:38:20.000-0500",
      "body": "Code was reviewed, and it looks good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-13T12:10:30.000-0500",
      "body": "It doesn't seem to be working for the themed inline edit scenarios and the sakai announcements version doesn't get highlighted on mouse over when there is only a space char. These occur in at least IE 7 (Win Vista).\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-16T18:00:17.000-0500",
      "body": "I have checked this out in FF2, FF3 and Opera and IE6 and it looks ok. Downgraded to minor since only occuring on 1 platform.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-18T13:17:29.000-0500",
      "body": "This still occurs on Safari as well\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-02T10:43:03.000-0400",
      "body": "Resetting to major, because with a lack of keyboard accessibiltity, it is impossible to re-open it in edit mode in Safari\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T09:04:47.526-0400",
      "body": "I just revisited this after the 1.4 release, and I'm unable to reproduce it. Justin, if you concur, do you want to close it?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T09:06:54.824-0400",
      "body": "Testing this after 1.4, it still seems to be ocurring. The cursor does change to a pointy-finger, but you can't seem to actually click anywhere that does anything.\n"
    }
  ]
}
---
An inline edit field containing only a space character is niether discoverable nor activatable using the mouse

Steps to reproduce:

1\) Open the inline edit springboard:\
<http://build.fluidproject.org/infusion/demos/inlineEdit/simple/demo.html>

2\) Click on one of the inline edit fields and replace the text with a space character

3\) Save the inline edit field to leave edit mode (i.e. by pressing the enter key)

Notice that the inline edit field is no longer activatable nor discoverable using the mouse.

        