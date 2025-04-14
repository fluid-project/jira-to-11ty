---json
{
  "title": "FLUID-6072",
  "summary": "Increasing line-spacing causes the contrast selection indicator to slide under the contrast option",
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
  "date": "2016-11-15T13:59:26.963-0500",
  "updated": "2024-07-24T11:29:25.399-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Safari 10 ( macOS 10.12 )\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6072/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-15T14:00:15.550-0500",
      "body": "screenshot.png shows the contrast selection indicator mostly obscured by the default contrast option, when the maximum line-spacing is set.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-24T11:29:25.399-0400",
      "body": "Could not reproduce with Safari 17.5 on macOS 14.5\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open a full page prefs editor such as ( <http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/fullPage-schema/index-nativeHTML.html> )\
2\. increase line-spacing\
3\. save and apply the change

Notice that the indicator for the contrast adjuster is partially covered by the contrast option.

        