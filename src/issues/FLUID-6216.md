---json
{
  "title": "FLUID-6216",
  "summary": "The default text style options aren't available across all platforms",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2017-10-30T09:50:57.991-0400",
  "updated": "2021-07-29T01:51:33.493-0400",
  "versions": [
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6182/",
      "key": "FLUID-6182"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6655/",
      "key": "FLUID-6655"
    }
  ],
  "attachments": [],
  "comments": []
}
---
By default the text style adjuster/enactor offers Times New Roman, Comic Sans, Arial, and Verdana. However, these may not be available on all platforms. For example Comic Sans is not available on iOS. We should explore having better fall backs or replacing the default set with web fonts.

        