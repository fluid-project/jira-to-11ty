---json
{
  "title": "FLUID-3710",
  "summary": "Provide an indication of the current reorderable element that has focus",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-09-07T10:13:02.786-0400",
  "updated": "2011-01-10T15:38:35.225-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3730/",
      "key": "FLUID-3730",
      "summary": "Create a little component that will manage the items that should be announced audibly through a screen reader."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-09-07T10:13:23.676-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-09-17T17:46:22.036-0400",
      "body": "This indication will be achieved by implementing <https://fluidproject.atlassian.net/browse/FLUID-3730#icft=FLUID-3730>, a component that can automatically associate reorderable elements with labels using aria-labelledby. By default, the strategy should be to calculate row and column identifiers (eg. \"A1\") for tables, and users can specify their own labeling strategies.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:03:09.510-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-23T15:38:30.137-0500",
      "body": "Please determine if this is done and should be closed or if it should be put into another release.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-10T15:38:25.890-0500",
      "body": "I believe that this has been resolved with <https://fluidproject.atlassian.net/browse/FLUID-3730#icft=FLUID-3730> and <https://fluidproject.atlassian.net/browse/FLUID-3711#icft=FLUID-3711>\n"
    }
  ]
}
---
A label on each element containing the column/row location seems to be a likely solution

        