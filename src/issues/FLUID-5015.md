---json
{
  "title": "FLUID-5015",
  "summary": "Built UI Options is missing font",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-05-09T10:13:02.896-0400",
  "updated": "2013-06-04T08:01:49.471-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-06-03T14:32:44.190-0400",
      "body": "I've sent a pull request ( <https://github.com/fluid-project/infusion/pull/333> ) which fixes the issue by adding in a json dependency file for the fonts.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-06-03T15:42:15.968-0400",
      "body": "Merged into project repo at c964c3928816e4ef3fa58039a246a953deb8e07b\n"
    }
  ]
}
---
The new UIO uses a font, OpenSans-Light, that is now present in Infusion's lib/fonts folder. However, when the build scripts are used to package UIO, the font file is not being included in the resulting bundle.

UIO works fine, defaulting to the default font, but a console log is produced by the failure to find the font.

        