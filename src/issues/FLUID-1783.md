---json
{
  "title": "FLUID-1783",
  "summary": "The \"Edit Saved\" tag appears unless you edit the field it is beside, using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-11-10T09:07:16.000-0500",
  "updated": "2008-11-17T09:00:21.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6, IE7, Opera 9.5 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1783/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-11-10T09:08:44.000-0500",
      "body": "'screenshot-1' shows the \"Edit Saved\" tag displayed beside all inline edit fields, except the one that has been editted\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-11-16T18:51:42.000-0500",
      "body": "css has been updated so that the Saved bug does not appear in IE unless there is an actual save\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-17T09:00:21.000-0500",
      "body": "Verified fix using:\n\nIE7 (Win Vista)&#x20;\n"
    }
  ]
}
---
The "Edit Saved" tag appears unless you edit the field it is beside

Steps to reproduce:

1\) Open the bSpace example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

Notice that all of the inline edit fields have the "Edit Saved" tag beside them. They should only be visible briefly after redo/undo

2\) Edit one of the fields

Notice that the "Edit Saved" tag, now fades away.

        