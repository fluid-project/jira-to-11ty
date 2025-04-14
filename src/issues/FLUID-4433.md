---json
{
  "title": "FLUID-4433",
  "summary": "Can't delete file with keyboard & sometimes hitting delete makes browser go 'back'",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "heidi valles",
  "date": "2011-09-07T13:35:33.121-0400",
  "updated": "2017-01-16T09:36:36.672-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF6, Safari 5, Mac10.6\\\nIE8, FF6, WinXP\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6108/",
      "key": "FLUID-6108"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-09-07T14:57:35.708-0400",
      "body": "on mac laptop style keyboards you have to use fn+del this is because the delete key is actually backspace, but will switch to a true delete key when you hold down the function key.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-09-07T15:22:24.135-0400",
      "body": "The issue is that on Mac laptop keyboards Delete = Fn+Delete\n\nWe need to include this information in the hover, or with keyboard instructions somewhere. (Documentation on the wiki isn't sufficient - needs to be stated within the component)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T14:19:57.671-0400",
      "body": "Maybe the correct terminology would be to specify that it's a forward delete. I don't think we want to be too specific about the implementation of various keyboards.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-07-29T11:25:23.344-0400",
      "body": "Testing this at both 1.5 and with the new \"monster branch\" that will become 1.9:question:, this error is still happening.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-07-30T08:26:13.464-0400",
      "body": "The monster branch will be part of 2.0. What's in master before it goes in, will be part of branch that we will split off for a possible 1.9 release. (it may just remain as a branch).\n"
    }
  ]
}
---
Load <http://build.fluidproject.org/infusion/demos/uploader/html/uploader.html> and add files\
tab to file area, choose a file with arrow keys, hit delete key

Should delete the file from list but doesn't. Sometimes makes the browser go "back" a page.

        