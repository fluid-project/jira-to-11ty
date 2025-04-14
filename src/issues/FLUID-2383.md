---json
{
  "title": "FLUID-2383",
  "summary": "jQuery UI Slider is not screen reader accessible",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alison Benjamin",
  "reporter": "Justin Obara",
  "date": "2009-03-19T12:11:38.000-0400",
  "updated": "2011-02-28T16:45:19.371-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 7 - WIN XP\\\nFF3 - WIN XP\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3011/",
      "key": "FLUID-3011"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2383/FLUID-2383.txt",
      "filename": "FLUID-2383.txt"
    }
  ],
  "comments": [
    {
      "author": "Alison Benjamin",
      "date": "2009-05-05T15:13:48.000-0400",
      "body": "FF3: The jQuery UI Slider is skipped by JAWS when tabbing through page elements\n\nIE7: JAWS announces: \"HTML slash UI Options Link\" when it reaches the slider.&#x20;\n\n<http://www.w3.org/TR/wai-aria/#slider>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T08:54:41.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T14:55:30.000-0400",
      "body": "a11y issue&#x20;\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-05-25T14:42:30.000-0400",
      "body": "This patch adds aria support to the thumb of the slider.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-05-26T15:30:25.000-0400",
      "body": "I reviewed the results in Firebug, and +1\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-26T15:34:39.000-0400",
      "body": "I had committed a slight reworking of Alison's patch which included tests.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:19.367-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
jQuery UI Slider not screen-reader accessible.&#x20;

        