---json
{
  "title": "FLUID-2804",
  "summary": "Cannot see the title of unopened accordion panels in High Contrast, with Background Images off",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-05-28T11:32:07.000-0400",
  "updated": "2011-03-04T15:42:11.259-0500",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2804/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-28T11:32:47.000-0400",
      "body": "'screenshot-1' shows the title for the unopened accordion panel is not visible\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-03-04T15:42:11.257-0500",
      "body": "This is no longer an issue because the new designs do not have an accordion.&#x20;\n"
    }
  ]
}
---
Cannot see the title of unopened accordion panels in High Contrast, with Background Images off. Note you can see the title when the focus is placed on it.

Steps to reproduce:

1\) Open the sakai mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>

2\) Set the contrast to the "High Contrast" theme and background images to "no", save changes

3\) Re-open the UI Options dialog notice that the "Easier to find" title is not visible.

        