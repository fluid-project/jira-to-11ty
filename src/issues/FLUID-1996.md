---json
{
  "title": "FLUID-1996",
  "summary": "User Interface Options border, only displayed around header in simple layout",
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
  "date": "2008-12-17T09:30:19.000-0500",
  "updated": "2009-01-06T09:22:52.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1996/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-17T09:31:50.000-0500",
      "body": "'screenshot-1' shows the border not sourounding all of the content\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-06T09:22:52.000-0500",
      "body": "Appears to have been fixed\n\nVerified using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
User Interface Options border, only displayed around header in simple layout

Steps to reproduce:

1\) Open the Sakai mock-up:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Click "Edit Appearance"

3\) Change the layout to simple and save the change

Notice that the border, which was around all of the UI Options, is now only around the header

        