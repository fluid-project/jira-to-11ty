---json
{
  "title": "FLOE-164",
  "summary": "Separate simpleEditor code from the rest of the metadata demo",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-01-20T13:09:36.222-0500",
  "updated": "2014-01-29T11:27:54.467-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-01-29T11:27:51.578-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/metadata/pull/20> ) into the project repo at 179ab75f6eb595a8186014d56e6c7444c6b30de0\n"
    }
  ]
}
---
The metadata demo has a simpleEditor used to illustrate integration into an authoring tool. However the demo code has been mixed together with the code for creating the simpleEditor. This should be split apart to better represent the separate concerns and decoupled state that the integration should take in production environments.

simpleEditor.js should only contain the code needed to create the simple editor. A new demo js file should be created to house the integration.

        