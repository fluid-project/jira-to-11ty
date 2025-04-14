---json
{
  "title": "FLUID-2000",
  "summary": "Add Tools link not immediately displayed in preview window, when switching to simple layout: Using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-12-17T10:10:17.000-0500",
  "updated": "2009-05-05T16:37:07.000-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "IE6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2000/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-17T10:10:56.000-0500",
      "body": "'screenshot-1' shows the \"Add Tools\" button missing\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-05T16:37:07.000-0400",
      "body": "Appears to have been fixed, likely with fix for <https://fluidproject.atlassian.net/browse/FLUID-2425#icft=FLUID-2425>\n"
    }
  ]
}
---
Add Tools link not immediately displayed in preview window, when switching to simple layout: Using IE6

Steps to reproduce:

1\) Open the Sakai mock-up:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Click "Edit Appearance"&#x20;

3\) Change the layout to simple

Notice that in the preview window, the "Add Tools" link is not displayed. If you click on the radio button for simple layout again, or change another option, it will be displayed

        