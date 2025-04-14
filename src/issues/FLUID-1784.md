---json
{
  "title": "FLUID-1784",
  "summary": "When in edit mode, the text field becomes smaller than the length of the text in display mode",
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
  "date": "2008-11-10T09:42:43.000-0500",
  "updated": "2008-11-11T08:17:37.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1784/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1784/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-11-10T09:43:45.000-0500",
      "body": "'screenshot-1' shows the text in display mode\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-10T09:44:40.000-0500",
      "body": "'screenshot-2' shows the text in edit mode. Notice that the text field is too small to properly display the text\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-10T11:30:50.000-0500",
      "body": "Sorry about this, all - I had \"temporarily\" added a correction to force the inline edit width to be inappropriately small so that I could better test my corrections to <https://fluidproject.atlassian.net/browse/FLUID-992#icft=FLUID-992> and <https://fluidproject.atlassian.net/browse/FLUID-1528#icft=FLUID-1528>, but had forgotten to remove it (it was skulking at the end of a line).\n\nCorrected at revision 5987\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-11T08:17:37.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
When in edit mode, the text field becomes smaller than the length of the text in display mode

Steps to reproduce:

1\) Open either the sakai announcements or bSpace examples from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Edit one of the editable text fields. (e.g. replace text with "Change 1")

3\) Save the change

4\) Reopen in edit mode, Notice that it is not fully displayed in edit mode and that the text field is shorter in length than the text was in display mode

        