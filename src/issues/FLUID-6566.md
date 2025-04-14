---json
{
  "title": "FLUID-6566",
  "summary": "Use Browserslist configuration to process CSS/Sass with Autoprefixer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Minor",
  "status": "Open",
  "assignee": "Ned Zimmerman",
  "reporter": "Ned Zimmerman",
  "date": "2020-10-28T07:50:21.281-0400",
  "updated": "2021-03-23T13:10:30.756-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Once <https://fluidproject.atlassian.net/browse/FLUID-6479#icft=FLUID-6479> is merged, we can use Autoprefixer to process CSS according to the browser support specified in the [shared Browserslist configuration](https://github.com/fluid-project/browserslist-config-fluid).

        