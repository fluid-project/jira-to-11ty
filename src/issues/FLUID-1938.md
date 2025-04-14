---json
{
  "title": "FLUID-1938",
  "summary": "Selecting a font spacing other than \"No Preference\" causes an overlap of the text in the Colour section: using FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-12-08T10:16:45.000-0500",
  "updated": "2009-01-23T14:18:53.000-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1938/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-08T10:17:41.000-0500",
      "body": "'screenshot-1' shows the overlap of text in the colour section with the wide font spacing selected\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-23T14:18:53.000-0500",
      "body": "Example no longer has this section\n"
    }
  ]
}
---
Selecting a font spacing other than "No Preference" causes an overlap of the text in the Colour section

Steps to reproduce:

1\) Open the sakai mock-up example\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Click on the "Edit Appearance" button&#x20;

3\) Change the font spacing to either "wide", "wider", or "widest" and save the change

Notice that the text in the Colour section now overlaps

        