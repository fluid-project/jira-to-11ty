---json
{
  "title": "FLUID-6573",
  "summary": "UglifyJS does not work with ES6 syntax",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Ned Zimmerman",
  "reporter": "Ned Zimmerman",
  "date": "2020-11-05T08:35:34.933-0500",
  "updated": "2024-07-22T10:35:17.276-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Ned Zimmerman",
      "date": "2020-11-05T08:49:12.179-0500",
      "body": "One note is that terser does not support a `banner` option.\n"
    }
  ]
}
---
The adoption of some ES6 syntax (notably the spread operator) in FLUID-6548 appears to be causing problems with UglifyJS, which does not support ES6. We'll need to explore alternatives; a potential option is [Terser](https://github.com/terser/terser) and [grunt-terser](https://www.npmjs.com/package/grunt-terser).

        