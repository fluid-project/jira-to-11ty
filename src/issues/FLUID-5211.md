---json
{
  "title": "FLUID-5211",
  "summary": "Addtional options defined in the auxiliary schema for subpanels are not passed down",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-11-15T13:03:46.118-0500",
  "updated": "2013-11-15T13:44:33.423-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-11-15T13:44:33.385-0500",
      "body": "Merged in pull request ( <https://github.com/fluid-project/infusion/pull/435> ) into the project repo at f892153e2dcb9489abbb1f84df1519c97b556216\n"
    }
  ]
}
---
When additional options are defined in the auxiliary schema for subpanels that belong to a composite panel, those options are not passed down by the auxiliary builder to the constructed panel grade.

        