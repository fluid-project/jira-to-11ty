---json
{
  "title": "FLUID-6771",
  "summary": "Using custom css styles without UIO enactors break UIO panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "High",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Daniel Cho",
  "date": "2023-06-28T12:14:17.332-0400",
  "updated": "2024-12-05T07:31:49.244-0500",
  "versions": [
    "4.6"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "macOS Monterey v12.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-12-05T07:31:49.244-0500",
      "body": "[PR #1110](https://github.com/fluid-project/infusion/pull/1110) merged into the project repo at [9dfe6ec](https://github.com/fluid-project/infusion/commit/9dfe6eccbb6026d101eb4b62d49e3ec4dcd80d92).\n"
    }
  ]
}
---
UIO enactors use !important css rules to force apply styles in different contrast themes and I need to apply some custom css styles, so I changed stylesheet to use “uioStyleProps” instead of “uioStyles”. After the change, I am seeing that the UIO panel is broken in contrast themes.&#x20;



Steps to reproduce:

1. Get a copy of dev branch from [here](https://github.com/inclusive-design/idrc/tree/dev)&#x20;
2. Change the eleventy-plugin-fluid version to 1.0.2
3. Change uioStyles in line 2 of stylesheets.njk to uioStyleProps
4. Run npm start
5. Change the theme using UIO panel to contrast theme on the local build
6. Notice that the panel’s background colour and foreground are incorrect&#x20;

        