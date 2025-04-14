---json
{
  "title": "FLUID-6039",
  "summary": "Inline edit tooltip and instructions overlay",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Alison Chow",
  "date": "2016-11-07T11:34:15.725-0500",
  "updated": "2017-01-11T12:31:19.358-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "MacOS 10.10, Chrome 54\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6098/",
      "key": "FLUID-6098"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6039/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-07T12:19:36.174-0500",
      "body": "screenshot.png shows the tooltip and instructions overlapping.\n"
    }
  ]
}
---
Steps to Reproduce: \
1\. Enter inline edit and type into field. \
2\. Exit field. \
3\. Mouse hover on field and click on field. \
4\. You should see the hover menu overlay on top of the click menu.&#x20;

        