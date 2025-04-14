---json
{
  "title": "FLUID-5224",
  "summary": "UI Options component needs a way for integrator to specify relative path to templates and messages",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Anastasia Cheetham",
  "date": "2013-11-26T17:14:38.860-0500",
  "updated": "2013-11-27T10:00:48.665-0500",
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
      "author": "Anastasia Cheetham",
      "date": "2013-11-27T10:00:48.564-0500",
      "body": "Duplicate of <https://fluidproject.atlassian.net/browse/FLUID-5181#icft=FLUID-5181>\n"
    }
  ]
}
---
The UI Options component relies on the templatePrefix and messagePrefix in the starter schemas, but these paths were inadvertantly defined to function for the specific relative location of the uiOptions demo. Those paths will not work for an integrator who has downloaded a build of Infusion and placed it in any other relative location with respect to his files.

        