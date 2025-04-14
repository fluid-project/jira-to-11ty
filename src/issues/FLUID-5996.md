---json
{
  "title": "FLUID-5996",
  "summary": "Height of Inline Edit input control used for editing does not scale with font size",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Simon Bates",
  "date": "2016-10-26T15:58:35.624-0400",
  "updated": "2017-01-11T12:31:18.800-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Firefox 49, Linux\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6098/",
      "key": "FLUID-6098"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5996/Inline Edit text cut off.png",
      "filename": "Inline Edit text cut off.png"
    }
  ],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2016-10-27T10:16:47.044-0400",
      "body": "I've attached a screenshot. Text should read \"Ag\".\n"
    }
  ]
}
---
To reproduce:

* Open <http://build.fluidproject.org/infusion/demos/inlineEdit/>
* Activate the first Inline Edit control "Edit this"
* Type "Ag"

Expected:

* To see all of the letters being typed

Actual:

* The top and bottom of the letters are cut off

This is visible on the Inline Edit demo page in Firefox as is but can also be made more dramatic by changing the font size in the CSS for the demo.

        