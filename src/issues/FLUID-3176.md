---json
{
  "title": "FLUID-3176",
  "summary": "Off screen class would be useful for some a11y fixes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Jacob Farber",
  "reporter": "Michelle D'Souza",
  "date": "2009-09-15T12:39:25.000-0400",
  "updated": "2009-09-22T10:46:11.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3178/",
      "key": "FLUID-3178"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2652/",
      "key": "FLUID-2652"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-09-22T10:46:11.000-0400",
      "body": "<http://issues.fluidproject.org/browse/FLUID-3178> resolved this issue\n"
    }
  ]
}
---
Sometimes we require something on a page that should not be visible to the user but can't be hidden in the usual way because screen readers will not read them. An example is in FLUID-2652. The class in question is called "hiddenForScreenReaderUsers"

        