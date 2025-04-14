---json
{
  "title": "FLUID-5301",
  "summary": "The transition effect for overviewPanel does not work when hiding the panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-04-07T14:01:53.623-0400",
  "updated": "2014-05-08T12:39:55.600-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-04-23T13:00:36.351-0400",
      "body": "Pull request:\\\n<https://github.com/fluid-project/infusion/pull/496>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-08T12:39:53.026-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/496> ) into the project repo at 785721dc2d221d7db1b4c4db1627899aa1ec02bb\n"
    }
  ]
}
---
The transition effect does not work when hiding the overviewPanel, but appears properly when unhiding.

To reproduce:\
1\. Load the overviewPanel sample page\
2\. hide the overviewPanel - notice that it just disappears.\
3\. unhide the overviewPanel - notice that the sliding transition appears.

        