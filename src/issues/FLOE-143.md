---json
{
  "title": "FLOE-143",
  "summary": "Create a panel which summarizes the metadata content",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2014-01-06T15:37:35.771-0500",
  "updated": "2014-01-08T14:17:21.641-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-141/",
      "key": "FLOE-141",
      "summary": "Metadata demo should more than two adaptations / alternatives to be specified"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLOE-148/",
      "key": "FLOE-148"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When a media object is not selected, a summary of the metadata currently specified is displayed in the sidebar.

The design can be seen on page 9 of this document:\
<http://wiki.fluidproject.org/download/attachments/37854510/FLOE-metadata-design%20Dana%20Dec%204.pdf?version=2&modificationDate=1386627061381&api=v2>

This summary panel is only applicable after multiple content items is permitted in the demo (<https://fluidproject.atlassian.net/browse/FLOE-141#icft=FLOE-141>)

        