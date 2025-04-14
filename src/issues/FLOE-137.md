---json
{
  "title": "FLOE-137",
  "summary": "\"Video Features\" context menu should show video object has focus",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2014-01-06T13:29:40.792-0500",
  "updated": "2014-01-06T14:32:05.748-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-138/",
      "key": "FLOE-138"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLOE-139/",
      "key": "FLOE-139"
    }
  ],
  "attachments": [],
  "comments": []
}
---
After the user has added a video file, upon focusing the video object in the editor - the "Video Features" context menu should appear.

This menu contains a set of icons indicating the metadata panels available for that media object. These icons are clickable to reveal the appropriate panel. The icons also indicate two statuses:

* whether the feature has been added (appears green. Icon is grey otherwise).
* whether the feature is recommended (as indicated by a star)

See page 3 of this PDF document for details:

<http://wiki.fluidproject.org/download/attachments/37854510/FLOE-metadata-design%20Dana%20Dec%204.pdf?version=2&modificationDate=1386627061381&api=v2>

The "Video Features" menu is also nicknamed "The Bucket".

        