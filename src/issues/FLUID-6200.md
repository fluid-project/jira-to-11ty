---json
{
  "title": "FLUID-6200",
  "summary": "Improve Fluid's demo website CI",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Giovanni Tirloni",
  "date": "2017-09-26T10:54:26.798-0400",
  "updated": "2024-07-22T10:35:26.154-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-29T20:32:19.962-0400",
      "body": "The strategy is to have Docker container for each component.\n\nChart Authoring Tool (branch <https://fluidproject.atlassian.net/browse/FLUID-6200#icft=FLUID-6200>): <https://github.com/gtirloni-fluid/chartAuthoring/commits/FLUID-6200>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-06-04T18:25:26.100-0400",
      "body": "Repositories:\n\n* build.fluidproject.org: <https://github.com/gtirloni-fluid/build.fluidproject.org/tree/FLUID-6200>\n* chart-authoring: <https://github.com/gtirloni-fluid/chartAuthoring/tree/FLUID-6200>\n* first-discovery: <https://github.com/gtirloni-fluid/first-discovery/tree/FLUID-6200>\n* infusion: <https://github.com/gtirloni-fluid/infusion/tree/FLUID-6200>\n* html5-video-player: <https://github.com/gtirloni-fluid/videoPlayer/tree/FLUID-6200>\n* prefs-editor: <https://github.com/gtirloni-fluid/prefsEditors/tree/FLUID-6200>\n* sjrk-story-telling: <https://github.com/gtirloni-fluid/sjrk-story-telling/tree/FLUID-6200>\n\ndocker-compose.yml: <https://github.com/gtirloni-fluid/build.fluidproject.org/blob/FLUID-6200/docker-compose.yml>\n"
    }
  ]
}
---
The build.fluidproject.org website is an amalgamation of different projects and the CI tasks aren't properly linked, leading to deployment errors.

        