---json
{
  "title": "FLUID-402",
  "summary": "Avatar is opague, not semi-transparent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2008-03-24T13:51:15.000-0400",
  "updated": "2008-04-07T14:08:37.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 7 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-395/",
      "key": "FLUID-395",
      "summary": "Change avatar to small grey rectangle, as in mockups"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-07T14:02:10.000-0400",
      "body": "We changed the avatar to be like the mockups.\n"
    }
  ]
}
---
While dragging an element, it's avatar remains opague. It should be semi-transparent.

This only seems to be an issue with IE 7, as it works properly in Firefox 2 (Mac OS 10.5, Win XP)

Link to sites:&#x20;

<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/uportal3-newskin/new_theme_sample_html.htm>

<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/abstract/portal/portlets.html>

        