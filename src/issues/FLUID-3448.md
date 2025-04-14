---json
{
  "title": "FLUID-3448",
  "summary": "Buttons visually break when clicking",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-12-18T08:52:04.000-0500",
  "updated": "2010-12-13T16:36:54.550-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "IE 7 & 8 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3448/builder_buttons_3448.patch",
      "filename": "builder_buttons_3448.patch"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2010-11-17T12:19:15.906-0500",
      "body": "remove button background images. will solve IE6 opacity issue as well (change bg colour instead)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T08:58:41.374-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-11-19T14:39:18.861-0500",
      "body": "This patch replaces button images and opacity with background/foreground colours for both enabled and disabled states.\n\nIE renders disabled button text with a drop shadow and I don't think this can be controlled with css.\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-11-19T14:53:26.412-0500",
      "body": "my patch includes style fixes from 3841\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-13T15:35:18.400-0500",
      "body": "I've reviewed Heidi's fix for this and it looks good. I've committed it, but Justin: You should test this on Vista before closing it, since that's where the problem was observed. I only have XP.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-13T16:36:54.521-0500",
      "body": "Tested on IE in Windows Vista. All looking good now.\n"
    }
  ]
}
---
Buttons visually break when clicking

about 10% of the button at the far left hand side stays fixed, while the remainder depresses on click.

Steps to reproduce:

1\) check one of the checkboxes

2\) click the "Reset Selection" button

        