---json
{
  "title": "FLUID-1064",
  "summary": "Entering in none standard symbols pushes text up, in edit mode: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-07-29T13:24:21.000-0400",
  "updated": "2009-08-13T13:09:05.000-0400",
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
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1064/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-29T13:26:17.000-0400",
      "body": "'screenshot-1' shows the text displayed too high. Especially noticable for Tuesday, where the bar at the top is completely missing.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-13T13:09:05.000-0400",
      "body": "Browser support for Infusion 1.2 ( <http://wiki.fluidproject.org/display/fluid/Prior+Browser+Support> ) does not include Opera 9.6 for Mac OS\n"
    }
  ]
}
---
Entering in some none-standard symbols causes text to display too high in the text field, when in edit mode.&#x20;

Steps to reproduce:

1\) Open the inline edit demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Cut and paste a none-standard symbol into an inline edit field.\
(You can grab one from this site: <http://www.alanwood.net/unicode/miscellaneous_symbols.html>)

3\) Type some text next to th symbol. Notice that it is displayed too high in the text field and that the tops of the characters are hidden

        