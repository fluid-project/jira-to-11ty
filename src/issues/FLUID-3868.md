---json
{
  "title": "FLUID-3868",
  "summary": "Inline edit doesn't gracefully handle multiple lines of text.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Michelle D'Souza",
  "date": "2010-11-30T16:31:29.655-0500",
  "updated": "2016-12-19T17:40:33.952-0500",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3868/Rich text inline edit mockup.png",
      "filename": "Rich text inline edit mockup.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3868/Screen shot 2010-11-25 at 8.00.30 AM.png",
      "filename": "Screen shot 2010-11-25 at 8.00.30 AM.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-11T10:33:25.939-0500",
      "body": "This is an outstanding issue, but this task should be broken down into concrete issues that can be addressed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-08T10:10:58.055-0400",
      "body": "The screenshots are missing, but I am unable to update them at this point due to <https://fluidproject.atlassian.net/browse/FLUID-5719#icft=FLUID-5719>\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/demos/inlineEdit/>\
The current inline edit doesn't gracefully handle multiple lines of text, as you can see in the screenshot (Screen shot 2010-11-25 at 8.00.30 AM.png) I've attached. It should look like "Rich text inline edit mockup.png" for multiple lines of text (additionally, the undo button should appear right after the edit button, not on a separate line - See issue FLUID-1613).&#x20;

This issue was found by James while testing FLUID-3801.&#x20;

        