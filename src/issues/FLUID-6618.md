---json
{
  "title": "FLUID-6618",
  "summary": "Source maps only work for dist builds.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-05-10T15:03:28.487-0400",
  "updated": "2024-07-22T10:35:22.173-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Ned Zimmerman",
      "date": "2021-05-10T16:52:56.932-0400",
      "body": "If I'm understanding this correctly I think that gracefully handling different root options through the buildModules.js API (option 2) would be preferable— putting \\`src\\` into \\`dist\\` seems potentially confusing.\n"
    }
  ]
}
---
When the source maps are generated they are provided with a [root](https://github.com/fluid-project/infusion/blob/6fdd188bab89fff034e58a5c0bcdcdc9543010bd/buildModules.js#L345) option. The root is set to `"../"` which works for dist builds because they are in the "dist" directory and refer to files that are in the "src" directory. However with package builds (e.g. `npm run build:pkg`), the src directory is a direct sibling of the concatenated file. In this case root should be `""`.

Two potential solutions:

1. Copy src into dist, so that the root can always be `""`. 
2. Make the root option configurable through buildModules.js's api so that dist builds and package builds can specify a different root value. 

        