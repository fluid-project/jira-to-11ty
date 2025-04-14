---json
{
  "title": "FLUID-6432",
  "summary": "Improve contrast support to handle a wider variety of cases",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2019-11-21T13:25:03.581-0500",
  "updated": "2024-07-19T07:50:32.185-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-02-03T08:06:58.001-0500",
      "body": "Along with these changes look into using CSS variables instead of the hardcoded colour values that are currently used. This can be done with or without stylus, so may also want to revisit the need for stylus.\n\nsee example: <https://codepen.io/greatislander/pen/VwYJVvK>\n\nHowever, CSS variables are not supported in IE 11 ( <https://caniuse.com/#feat=css-variables> )\n"
    }
  ]
}
---
The out of the box contrast themes attempt to handle many situations, but would require integrator intervention for full support. With UIO+ this is harder because it operates on any page. We should review the contrast themes to ensure that they are support sites that use the latest techniques and best practices for styling their pages. In particular for use with multimedia and etc.

See: <https://wiki.fluidproject.org/pages/editpage.action?pageId=183796360> which lists some issues that users found while using UIO+

        