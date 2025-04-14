---json
{
  "title": "FLUID-6361",
  "summary": "OpenSans not included in dist directory",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Simon Bates",
  "date": "2019-01-14T09:58:15.268-0500",
  "updated": "2024-07-19T08:07:22.615-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6359/",
      "key": "FLUID-6359",
      "summary": "Make the dist directory self contained"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2019-07-29T13:56:34.597-0400",
      "body": "This was done as part of the work in <https://github.com/fluid-project/infusion/pull/956>\n"
    }
  ]
}
---
In the NPM package of Infusion, we include a `dist` directory with builds of Infusion and built assets, such as generated CSS files.

In the `dist` directory, the following Preferences Editor files make reference to the OpenSans font:

* `dist/assets/src/framework/preferences/css/SeparatedPanelPrefsEditor.css`
* `dist/assets/src/framework/preferences/css/SeparatedPanelPrefsEditorFrame.css`

And they do so via a relative URL such as:

* `src: url("../../../lib/opensans/fonts/OpenSans-SemiBold.woff");`

However, OpenSans is not included in the `dist` directory and if the above CSS files are used in-place, the OpenSans font files will fail to load. The font files will be resolved relative to the location of the CSS files and fail to be found. For example at:

* `/infusion/dist/assets/src/lib/opensans/fonts/OpenSans-SemiBold.woff`

        