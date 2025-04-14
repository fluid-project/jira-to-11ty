---json
{
  "title": "FLUID-885",
  "summary": "Font styling displayed differently in edit vs non-edit mode",
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
  "date": "2008-07-10T13:34:11.000-0400",
  "updated": "2011-01-04T13:34:21.536-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
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
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-937/",
      "key": "FLUID-937"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1311/",
      "key": "FLUID-1311"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-885/Picture 2.png",
      "filename": "Picture 2.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-885/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-885/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-885/screenshot-3.jpg",
      "filename": "screenshot-3.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-885/screenshot-4.jpg",
      "filename": "screenshot-4.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-10T13:40:27.000-0400",
      "body": "'screenshot-1' shows how the '&' symbol looks in edit mode\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-10T13:41:11.000-0400",
      "body": "'screenshot-2' shows how the '&' looks outside of edit mode\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-10T13:43:57.000-0400",
      "body": "'screenshot-3' shows an example of a non-standard character/symbol in edit mode. It's supposed to be a smiley face.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-10T13:45:37.000-0400",
      "body": "'screenshot-4' shows the same non-standard character/symbol as 'screenshot-3', but this time out of edit mode. Notice how it's now represented by a small square.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-11T19:57:38.000-0400",
      "body": "Daphne, could you try this out, and see what you think? Is this an issue? It's probably a side effect of the font that this sample page uses, but let me know what you think.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-07-14T19:52:38.000-0400",
      "body": "This is weird.  The \"&\" is particularly handled bad here.  I can't figure out what font it is being displayed in.  The real problem is that, at least to me, it doesn't even look like an ampersand in the font it's displayed in.\n\nWhile checking this out I found that the edits are happening in a different font generally than display.  So on the daily build site Justin points to, the text is displayed in Times but when edit mode kicks in it displays in Arial.   In this particular case it isn't a big deal but will be when users are editing formatted text.  We know users want a wysiwyg interaction.\n\nI'm attaching a screen shot that show the 2 different fonts. &#x20;\n\nCan the component know what font the application is using for display of that field and use the same?\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-07-14T19:54:12.000-0400",
      "body": "screen shot showing different fonts used in display versus edit mode.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-07-17T17:50:42.000-0400",
      "body": "Another complication with the different display versus edit font is that the text is larger than the edit field so the user can't see all the text they want to edit once they are in edit mode.  I'm assuming we are calculating text field size based on the text pre-edit.  This doesn't seem to happen in Safari only in Firefox (both on macs, not sure about PCs)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-26T09:36:39.000-0400",
      "body": "The font styling issue does not seem to occur in the bspace example (<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>), or it could be that the font styling is similar.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T09:34:11.000-0400",
      "body": "design-watched\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2009-03-13T15:16:38.000-0400",
      "body": "Unassigning so this can go into the development pool of bugs.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-04T13:26:40.687-0500",
      "body": "This issue is covered by the Simple Inline Edit Test plan.\\\nInfusion 1.3 release testing did not reveal any issues related to mis-coding of characters.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-04T13:34:21.530-0500",
      "body": "Fixed in Infusion 1.3.\n"
    }
  ]
}
---
When editing the text in an in-line edit field, the text appears correctly in Lucida Grande font (e.g. &); however, it is displayed with a different font style. Copying and pasting the incorrect style into another program (e.g. ms word) shows the correct font.

Steps to reproduce:

1\) open the inline edit demo page from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Edit one of the in-line edit fields by replacing the text with an '&'. Notice the font.

3\) Press 'enter' on the keyboard to close the edit mode. Notice the font styling has changed.

This also effects the display of non-standard characters. You can find some here:\
<http://www.alanwood.net/unicode/miscellaneous_symbols.html>

        