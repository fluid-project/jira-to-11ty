---json
{
  "title": "FLUID-4719",
  "summary": "Highlight styling in dropdowns does not change in high contrast",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2012-05-28T15:46:46.054-0400",
  "updated": "2024-07-22T14:29:38.875-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4969/",
      "key": "FLUID-4969",
      "summary": "Research the possibility of changing the highlight color while changing the contrast"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4719/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-10T14:03:29.929-0400",
      "body": "This is probably set by the browser, but more investigation is needed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-08T11:07:16.447-0400",
      "body": "Replace missing screenshot.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T14:29:38.875-0400",
      "body": "There is little to no support for styling options of a select element.\n"
    }
  ]
}
---
To recreate this issue, set your theme to a high contrast theme, close and open the panel so that it is styled using high contrast and use one of the drop downs.&#x20;

<http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/assortedContent/>

        