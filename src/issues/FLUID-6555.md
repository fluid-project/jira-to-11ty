---json
{
  "title": "FLUID-6555",
  "summary": "Standardize stylesheet linting into a shareable configuration",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Ned Zimmerman",
  "reporter": "Ned Zimmerman",
  "date": "2020-09-24T09:17:16.876-0400",
  "updated": "2021-02-03T10:18:19.170-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-02-03T10:18:19.167-0500",
      "body": "Merged Infusion PR ( <https://github.com/fluid-project/infusion/pull/1014> ) into the project repo at 97c2fcc179cf71bcc2ce9af26d8750d4a8d80c69\n"
    }
  ]
}
---
[fluid-grunt-lint-all](https://github.com/fluid-project/fluid-grunt-lint-all) provides linting for JavaScript, JSON, and Markdown. With [grunt-stylelint](https://github.com/wikimedia/grunt-stylelint), we could support linting of stylesheets as well. Here's a few relevant links:

* We Count's SCSS linting configuration for Stylelint: <https://github.com/inclusive-design/wecount.inclusivedesign.ca/blob/dev/stylelint.config.js>
* The base `stylelint-config-standard` that the We Count project extends: <https://github.com/stylelint/stylelint-config-standard/blob/master/index.js>
* An experimental Stylus plugin for Stylelint: <https://github.com/ota-meshi/stylelint-plugin-stylus>
* Stylelint rules documentation: <https://stylelint.io/user-guide/rules/list>

Also related: FLUID-6551.

        