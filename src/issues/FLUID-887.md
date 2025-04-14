---json
{
  "title": "FLUID-887",
  "summary": "multiple 'space' characters are displayed as a single space, using FF and Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Justin Obara",
  "date": "2008-07-10T14:38:15.000-0400",
  "updated": "2017-01-16T09:26:11.757-0500",
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
    "1.1.2",
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
  "environment": "FF 50 (macOS 10.12)\\\nFF2, FF3 (Mac OS X, Win XP), \\\nSafari 4 (OS X 10.5), \\\nSafari 5 (OSX 10.6), \\\nFF4 (OSX 10.6)\\\nChrome 35, Firefox 30, Safari 7 (Mac OS 10.9)\\\nIE 11 (Win 7)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-972/",
      "key": "FLUID-972"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2016/",
      "key": "FLUID-2016"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2499/",
      "key": "FLUID-2499"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-886/",
      "key": "FLUID-886",
      "summary": "'tab' character is displayed as single space"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-887/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-887/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-10T14:40:25.000-0400",
      "body": "'screenshot-1' shows the text with multiple spaces, in edit mode.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-10T14:41:34.000-0400",
      "body": "'screenshot-2' shows the multiple spaces reduced to a single space, between the brackets.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T09:33:29.000-0400",
      "body": "design-watched\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T21:34:31.000-0500",
      "body": "See comments on <https://fluidproject.atlassian.net/browse/FLUID-886#icft=FLUID-886>. Whitespace normalisation is a standard aspect of HTML and the XML family in general.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-11-18T17:47:24.000-0500",
      "body": "I would like to revisit this (along with 886).  The right thing to do for users is represent their text exactly as they typed it in.  Apparently folks have used some pretty extensive algorithms to get this behavior – particularly in wikis.  Eli knows about some of these algorithms and basically it is about representing space as non breaking and breaking spaces. &#x20;\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-11-19T14:01:21.000-0500",
      "body": "The reasoning behind this design decision is that otherwise the text jumps around when the user \"opens\" and \"closes\" the inline edit field. We've seen in user testing that this can be very disconcerting for users and want as much as we can to maintain the illusion that they are editing in place.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2009-03-13T15:17:36.000-0400",
      "body": "Unassigning so this can go into the development pool of bugs.\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-12-21T13:02:28.031-0500",
      "body": "safari 5 and FF4 show the white spaces as one space.\n"
    }
  ]
}
---
When entering in multiple spaces inside an in-line edit field, the spaces are reduced to a single space outside of edit mode.

Steps to reproduce:

1\) Open the in-line edit demo from the daily build site\
<http://build.fluidproject.org/infusion/demos/inlineEdit/>

2\) Open one of the in-line edit fields into edit mode and enter in some text with multiple spaces (or cut and paste this "there should be (          ) 10 spaces inside the brackets")

3\) Press 'enter' to leave edit mode. Notice that the multiple spaces have been reduced to a single space

If you re-enter edit mode, notice that the multiple spaces are still there

        