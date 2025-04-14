---json
{
  "title": "FLUID-5043",
  "summary": "Retrieve default UIO preferences from json schema",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-06-06T09:42:53.709-0400",
  "updated": "2013-10-04T09:04:01.338-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-08-15T07:45:17.658-0400",
      "body": "Addressed with work for <https://fluidproject.atlassian.net/browse/FLUID-4907#icft=FLUID-4907>\n"
    }
  ]
}
---
In favor of FLUID-4903, FLUID-4904, the UIO json schema has been proposed @ <http://wiki.fluidproject.org/display/fluid/Schema+for+UIO+preferences>

This jira is to refactor UIO to retrieve default UIO preferences from the proposed json schema.

Work to be done:

* move min/max out of the settings panels' models, into standard options
* write a starter schema ( for the settings in our starter grades )
* update the "model relay" to be "schema aware". To source defaults from the schema.
* source the values for max, min, and etc. from the schema when panels are configured in UIO

        