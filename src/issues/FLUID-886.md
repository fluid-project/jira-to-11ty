---json
{
  "title": "FLUID-886",
  "summary": "'tab' character is displayed as single space",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Justin Obara",
  "date": "2008-07-10T14:21:37.000-0400",
  "updated": "2017-01-16T09:25:33.038-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
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
  "environment": "FF 50 (macOS 10.12)\\\nFF2, FF3 (Mac OS X, Win XP)\\\nChrome 35, FF 30, Safari 7 (Mac OS 10.9)\\\nIE 11 (Win 7)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-972/",
      "key": "FLUID-972"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2439/",
      "key": "FLUID-2439"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-887/",
      "key": "FLUID-887"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-886/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-886/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-10T14:23:02.000-0400",
      "body": "'screenshot-1' shows the tab spacing while in edit mode.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-10T14:24:40.000-0400",
      "body": "'screenshot-2' shows the 'tab' spacing reduced to a single space, when out of edit mode\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T09:33:42.000-0400",
      "body": "design-watched\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T21:32:24.000-0500",
      "body": "This behaviour is part of standard HTML semantics and should not be fixed. The contract of InlineEdit with a single text field is that the value stored as markup (element.text()) should be identical with that which was stored in field.value for the editable field. A standard aspect of HTML is that whitespace is normalised in this way when rendered.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-11-18T17:39:31.000-0500",
      "body": "I'd like to revisit this bug (along with 887).  The main goal here is display exactly what the user typed in.  I understand from Eli that html doesn't even recognize tabs.  How about if we convert tabs to 4 spaces?  Eli says this is what many wikis do.  4 spaces could be the default behavior but this needs to be configurable to allow for things like tab delimitation.&#x20;\n\nThe other thing to remember about this is that the only time there will be a tab is if it is copy and pasted in since a tab currently takes the user to the next field.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2009-03-13T15:17:13.000-0400",
      "body": "Unassigning so this can go into the development pool of bugs.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-04T13:34:41.671-0500",
      "body": "Still an issue in Infusion 1.3.\n"
    }
  ]
}
---
When cutting and pasting a 'tab' character into an in-line edit field, the tab is displayed as a single space outside of edit mode.

Steps to reproduce:

1\) Open the in-line edit demo from the daily build site:\
<http://build.fluidproject.org/infusion/demos/inlineEdit/>

2\) Cut and paste this text "before tab		after tab" into an in-line edit field.\
(Alternatively, you can cut and paste from a text editor. Make sure "Tabs to spaces" feature is disabled).

3\) Press 'enter' to leave edit mode. Notice that the tab has been reduced to a single space.

If you re-enter edit mode, notice that the tab spacing is still there.

        