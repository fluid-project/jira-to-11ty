---json
{
  "title": "FLUID-5457",
  "summary": "Supplying a custom theme can cause the default preference option to not be properly styled",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-06-27T13:43:04.247-0400",
  "updated": "2014-10-21T15:01:02.865-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5469/",
      "key": "FLUID-5469",
      "summary": "Remove FSS from Infusion"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5457/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-27T13:43:55.986-0400",
      "body": "screenshot.png shows the default option styled the same as the light-grey-dark-grey option\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-27T13:44:43.839-0400",
      "body": "joanna vass should the default option always be a black on white with a crossout or should it take the style of whatever the integrator specified theme is?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-10-09T13:42:29.711-0400",
      "body": "Being addressed in the <https://fluidproject.atlassian.net/browse/FLUID-5469#icft=FLUID-5469> work.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-10-10T13:37:39.934-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/565>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-10-21T15:00:58.861-0400",
      "body": "The pull request has been merged into the project repo @ e90b1a875d9abbd586ff4b0cb6dbe2a0f9a2149d\n"
    }
  ]
}
---
When a default theme is provided it is used in place of the standard "fl-theme-prefsEditor-default". However, there are specific styles applied to "fl-theme-prefsEditor-default" to properly style the colour and contrast adjuster option for it.

<http://build.fluidproject.org/infusion/tests/manual-tests/html/SomeKindOfNews.html>

This manual test uses a custom default theme. Since it didn't supply the correct styling, the cross out effect is missing. Additionally the default option picks up the style of whichever theme is activated.&#x20;

        