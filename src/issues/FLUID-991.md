---json
{
  "title": "FLUID-991",
  "summary": "Double clicking a word in an inline edit field will not select the entire word if there is an apostrophe",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-07-23T13:28:15.000-0400",
  "updated": "2009-11-04T12:24:35.000-0500",
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
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6 (Mac OS 10.5, Win XP)\\\nFF3 (Win Vista)\\\nFF3 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-991/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-991/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-23T13:29:52.000-0400",
      "body": "'screenshot-1' shows that only the chacacters before the apostrophe are shown, if double clicked in front of the apostrophe\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-23T13:30:40.000-0400",
      "body": "'screenshot-2' shows that only the apostrophe and characters after it are selected if double clicked after the apostrophe\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-04T12:24:35.000-0500",
      "body": "This seems to be how Firefox handles double clicking of text\n"
    }
  ]
}
---
Double clicking a word that contains an apostrophe will only select the characters before or after the apostrophe, not the whole word.

Steps to reproduce:

1\) Open the inline edit demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Click the middle inline edit field, which has the word "Tuesday's" in it

3\) Double click the word on a letter before the apostrophe. Notice that the character after the apostrophe is not selected.

        