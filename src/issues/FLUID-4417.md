---json
{
  "title": "FLUID-4417",
  "summary": "Fix the UIO full page with preview demo to get rid of the horizontal scrollbar",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "assignee": "Jonathan Hung",
  "reporter": "Michelle D'Souza",
  "date": "2011-08-31T11:22:10.317-0400",
  "updated": "2016-07-08T11:00:32.539-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4417/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-31T11:23:47.205-0400",
      "body": "James, can you please provide us with some design guidance for the preview?&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-08T10:59:35.231-0400",
      "body": "Replaced the missing screenshot. It seems that the issue is likely less pronounced that before.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-08T11:00:29.269-0400",
      "body": "Real world implementation will depend on the content used for the preview by an integrator. Perhaps for the manual test we can use a min-width on the preview window.\n"
    }
  ]
}
---
At smaller screen widths a horizontal scroll bar will appear on the preview.\
<http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/fullPage/>

        