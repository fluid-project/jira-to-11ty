---json
{
  "title": "FLUID-4998",
  "summary": "Convert icons used in FSS to font icons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2013-04-29T10:34:28.108-0400",
  "updated": "2014-04-04T15:32:59.821-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4998/FSS-theme-template.ai",
      "filename": "FSS-theme-template.ai"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4998/FSS-theme-template-03.svg",
      "filename": "FSS-theme-template-03.svg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4998/FSS-theme-template-04.svg",
      "filename": "FSS-theme-template-04.svg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4998/FSS-theme-template-05.svg",
      "filename": "FSS-theme-template-05.svg"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4998/InfusionIcons-FSS34239.zip",
      "filename": "InfusionIcons-FSS34239.zip"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2013-07-03T14:37:16.182-0400",
      "body": "Note, the attached EOT and TTF file are improperly named. They should say \"InfusionIcons-FSS\" not \"InfusionIcons-Uploader\".\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-09-06T09:17:51.721-0400",
      "body": "Some icons used in different themes in FSS (i.e. Coal theme) have special visual effects which would be removed if implemented as a font-icon equivalent (font icons are monotone).\n\nThis brings up an issue where changing the visual appearance of FSS may have undesired consequences for integrators (i.e. if someone has used FSS's coal theme and expected it to look a particular way).\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-04T15:32:59.807-0400",
      "body": "FSS is currently deprecated and will be removed for 2.0.\n"
    }
  ]
}
---
Create font icons for all the icons used by FSS, and updated FSS to make use of them.

        