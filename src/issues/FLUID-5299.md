---json
{
  "title": "FLUID-5299",
  "summary": "Resizing browser window or long text causes parts of OverviewPanel to disappear off screen",
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
  "date": "2014-04-01T16:54:55.900-0400",
  "updated": "2014-05-08T12:39:42.055-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Overview Panel"
  ],
  "environment": "Windows - IE8, FF, Chrome\\\nMac - FF\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-04-23T13:02:02.374-0400",
      "body": "Pull request:\\\n<https://github.com/fluid-project/infusion/pull/496>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-08T12:39:38.587-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/496> ) into the project repo at 785721dc2d221d7db1b4c4db1627899aa1ec02bb\n"
    }
  ]
}
---
Resizing the browser window causes part of the overview panel to disappear off the screen. A horizontal scrollbar doesn't appear, so there's no way to see the content that is offscreen.

Similarly if the text inside the panel is long, parts of the panel may disappear off screen and can not be seen.

To fix this we would likely need to use absolute positioning of the panel and have overPanel-Contents stretch to fill available space.

        