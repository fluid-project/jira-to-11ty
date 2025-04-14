---json
{
  "title": "FLUID-1589",
  "summary": "Keyboard navigation does not follow up/down wrap behaviour when the rows are not all equal in length",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2008-09-18T16:24:58.000-0400",
  "updated": "2008-09-24T15:31:29.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1589/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-18T16:26:27.000-0400",
      "body": "'screenshot-1' shows an example of the layout. Pushing the down arrow when focus is on the Kiwano will place focus on the banana. Focus should be on the cherry&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:58:17.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-24T12:14:52.000-0400",
      "body": "Fixed at revision 5663\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-24T13:54:35.000-0400",
      "body": "I've reviewed this commit (r5663) and it looks good, though I'd really like to see a different name for the option than \"sentinelize\" (a boolean) - how about \"extendDropTarget\" ?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-24T13:57:14.000-0400",
      "body": "Antranig - comments on the suggested option name change from \"sentinelize\" to \"extendDropTarget\" ?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-24T15:15:49.000-0400",
      "body": "Antranig and I discussed this, and agreed that the 'sentinelize' options should not be public, and therefore should not be documented, and therefore doesn't need a new name.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-24T15:31:29.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
If the rows do not all contain an equal number of elements, when in a column with fewer elements the up/down wrapping will place you on the last element of the last row.

Steps to reproduce:

1\) Open the lightbox demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>

2\) Adjust the browser window size so that the images are laid out with the bottom row having fewer images than the other rows

3\) Using the keyboard navigate to one of the shorter columns of images. Press the down arrow key. Notice that the at the end of the column, pressing down will place you on the last image of the last row instead of wrapping you around to the top.

        