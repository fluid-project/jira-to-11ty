---json
{
  "title": "FLUID-3174",
  "summary": "Progress demo would \"feel\" better if the progress amount was rounded to the nearest Integer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Eli Cochran",
  "date": "2009-09-14T18:07:57.000-0400",
  "updated": "2014-03-03T14:24:20.567-0500",
  "versions": [
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3174/FLUID-3174.a.patch",
      "filename": "FLUID-3174.a.patch"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-09-14T18:13:41.000-0400",
      "body": "I offer up this humble patch <https://fluidproject.atlassian.net/browse/FLUID-3174#icft=FLUID-3174>.a.patch to fix this lack of round-i-ness.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-09-17T10:12:03.000-0400",
      "body": "Thanks for this. I applied the patch!\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-09-17T13:48:59.000-0400",
      "body": "Patch has been applied. Thanks Jacob!\n"
    }
  ]
}
---
When observing the Progress demo:\
(<http://build.fluidproject.org:8095/finalreport/infusion/src/webapp/demos/progress/demo.html>)

The progress percentage sometimes jumps between a whole number and a number with decimal fraction. This is a bit jarring and the whole experience would be easier to read and more pleasing to watch if the percentages were rounded up or down before being displayed.

(I'm trying to decide if this should be a function of the Progress component itself, but I don't think so. The component just wants a percentage and there may be cases when passing in factional percentages are just fine. So it really should be changed in the demo only. We already do this rounding in the Uploader.)

        