---json
{
  "title": "FLUID-2367",
  "summary": "UI Enhancer removes FSS font-size classes.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Michelle D'Souza",
  "date": "2009-03-17T12:24:23.000-0400",
  "updated": "2009-03-25T10:26:46.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-20T12:31:56.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-21T21:24:43.000-0400",
      "body": "The classes that need to be cleared are the ones in the UIEnhancer's classname map for settings which are applied to the container. Currently these settings are: font face, text spacing, theme, layout and background images. The classes need to be cleared from the entire contents of the container - not just from the container itself.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-22T18:36:56.000-0400",
      "body": "I just realized that there are probably several FSS classes that will cause clashes that haven't been removed. Jacob, can you determine what these are and add them to the classnameMap in UIEnhancer?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-24T10:31:42.000-0400",
      "body": "Thanks Jacob for reviewing the FSS clashing classes and adding the missing ones. I reviewed you commit. Commit revisions 6801 and 6806 still need to be reviewed.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-24T10:50:18.000-0400",
      "body": "Ok, 6801 and 6806 have been reviewed and they look good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-25T10:26:46.000-0400",
      "body": "there are no current implementations to test this against, closed based on code review\n"
    }
  ]
}
---
Before applying the appropriate styling, UI Enhancer removes the existing styling. This is the correct behaviour when it comes to things like font style however, font sizes should be left alone.&#x20;

        