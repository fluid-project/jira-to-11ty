---json
{
  "title": "FLUID-6170",
  "summary": "Consider including test util files in the npm package",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2017-07-11T09:53:00.256-0400",
  "updated": "2021-07-29T01:50:59.065-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently only the test lib files and test-core are included in the NPM package. These are present so that our testing infrastructure can be used in other packages. However, there are cases where having access to the other test util files would be useful. For example, while working on the UIO+ chrome extension I'm adding in a prefs editor panel. It would be useful to have the PanelTestUtils.js code available to use in with my tests as well. At the moment, I have to manually copy over that file.

        