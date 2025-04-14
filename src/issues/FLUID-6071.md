---json
{
  "title": "FLUID-6071",
  "summary": "The default Infusion grunt task does not include built CSS files from Stylus",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2016-11-15T09:44:21.093-0500",
  "updated": "2016-11-15T13:13:04.347-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-11-15T13:13:00.868-0500",
      "body": "Merged the pull request <https://github.com/fluid-project/infusion/pull/784> into the master branch at 6effcf7ad9c9610646edb9fc7bcab56380c7e91e\n"
    }
  ]
}
---
Running the default grunt task does not include the built CSS files in the resulting infusion.zip file. Instead the zip file contains Stylus files.

To reproduce:\
1\. Get infusion and get its dependencies (run npm install)\
2\. Run grunt\
3\. Extract products/infusion-2.0.0.zip\
4\. Notice that infusion/src/framework/preferences/css/ contains only Stylus files and not the CSS files.

        