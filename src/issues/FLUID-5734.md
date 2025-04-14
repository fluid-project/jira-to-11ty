---json
{
  "title": "FLUID-5734",
  "summary": "Default contrast option takes the styling of the currently selected contrast theme",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2015-08-07T10:14:43.983-0400",
  "updated": "2022-02-03T10:26:36.063-0500",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Chrome, Firefox, IE 11, Safari\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5734/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-08-07T10:15:30.656-0400",
      "body": "screenshot.png shows the default contrast option with styling from the light-grey-dark-grey contrast theme\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-02-03T10:26:36.062-0500",
      "body": "Likely fixed with changes to <https://fluidproject.atlassian.net/browse/FLUID-6260#icft=FLUID-6260> / <https://fluidproject.atlassian.net/browse/FLUID-6605#icft=FLUID-6605>\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the Assorted Content manual test\
<http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/assortedContent/>

2\) Open the preferences editor

3\) Select one of the contrast themes

4\) Hide the prefs editor and re-open it\
Notice that the default contrast theme assumes some of the styling from the currently selected contrast theme.

        