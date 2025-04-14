---json
{
  "title": "FLUID-5409",
  "summary": "The on/off toggles don't render properly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-06-06T09:36:33.465-0400",
  "updated": "2014-06-11T08:43:43.244-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": "IE 8 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5409/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-06T09:37:16.432-0400",
      "body": "screenshot.png shows the enabled \"speak text\" and \"magnification\" adjusters appearing to be off.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-09T15:01:10.560-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/525>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-10T15:36:32.362-0400",
      "body": "Merged at 9b6b2ada67b9444fbeab0a844f72ef42fc8cc1b8\n"
    }
  ]
}
---
Steps to reproduce

1\) Open the conditional adjuster instructional demo <http://build.fluidproject.org/infusion/instructionalDemos/framework/preferences/conditionalAdjusters1/conditional.html>

2\) open 'show preferences'

3\) attempt to enable "speak text" or "magnification" \
Notice that while the controls are enabled, they still appear to be in the off position

        