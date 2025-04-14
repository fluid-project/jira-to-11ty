---json
{
  "title": "FLUID-1924",
  "summary": "Improve the UI Options template",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-12-05T12:05:24.000-0500",
  "updated": "2008-12-11T15:18:51.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-12-05T14:16:17.000-0500",
      "body": "Added some breathing room, hardcoded the default preview styles into the preview window. \\\nRendering the preview window accoridng to the selections should probably be done automatically by the component.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-05T15:28:06.000-0500",
      "body": "The template does not show the initial selected options accurately. To reproduce, load the template and click \"Save and apply changes\" without making any changes. You will notice a slight difference to the current display from the initial load.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-08T09:32:11.000-0500",
      "body": "Bug Parade: 0.6 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-11T14:20:19.000-0500",
      "body": "Added overrides to font family and theme buttons, added default theme to ui options window\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-11T14:49:05.000-0500",
      "body": "I've had a look at this issue, and it all looks good to me. There should be a JIRA created for programmatically setting the 'checked' settings, but that is in the works.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-11T15:18:51.000-0500",
      "body": "verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Currently the template does not look very good on first load. \
1\. There is no space on the left side - text and options are directly against the window edge\
2\. The preview does not represent the options that are selected accurately

        