---json
{
  "title": "FLUID-3335",
  "summary": "Change mobile fss panel to repurpose fl-container* instead",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2009-10-27T15:51:03.000-0400",
  "updated": "2014-03-03T14:21:18.496-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Mobile FSS"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-180/",
      "key": "ENGAGE-180"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3335/MAJOR_PATCH_v3.patch",
      "filename": "MAJOR_PATCH_v3.patch"
    }
  ],
  "comments": []
}
---
Mobile FSS makes use of a new class name called fl-panel.\
Instead of a new class name, it should repurpose fl-container\* class names instead.

        