---json
{
  "title": "FLUID-602",
  "summary": "Progress tests partially fail on IE6 and IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Jonathan Hung",
  "date": "2008-05-15T11:23:22.000-0400",
  "updated": "2008-11-13T13:32:33.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "True WinXP, IE7 and IE6\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-681/",
      "key": "FLUID-681"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-602/IE7-progressbar.PNG",
      "filename": "IE7-progressbar.PNG"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-28T10:26:45.000-0400",
      "body": "I think the tests are showing that the progress bar is buggy in IE. When playing with the uploader in IE, I don't see a consistent relationship between the amount of the progress bar that is filled in and the percentage complete.\n\nJonathan has attached a screen shot to show what this looks like.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-05-28T12:00:13.000-0400",
      "body": "I have known for a while that the way that I'm doing percentage updates in the progress indicator was potentially buggy. It comes down to a problem with using percentages at all. They are wonderfully convenient. There is this delightful syntax of \"set something to a width of x%\" built into JS but eventually that has to get converted into pixels so it's better that we do the conversion, store the converted value and do any comparisons and settings based on our numbers not the browsers interpretations of %.&#x20;\n\nSo there's about an hours work there.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-06-16T22:46:46.000-0400",
      "body": "With the many updates that I have made to both the way that progress is tracked and the way that it is displayed this bug is fixed.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:32:33.000-0500",
      "body": "Verified fix using:\n\nIE6, IE7 (Win XP)\n"
    }
  ]
}
---
Using the latest code (Rev. 4952), Progress tests partially fail in IE6 and IE7:

In IE6 running in Virtual PC:\
8\. After update to 0, indicator width should be 1 expected: 1 actual: 4\
10\. After an update to a smaller value (10), style should include 'width: 10%;'

In IE7 true:\
10\. After an update to a smaller value (10), style should include 'width: 10%;'

dev-iteration35

        