---json
{
  "title": "FLOE-138",
  "summary": "Replace single scrolling metadata editor panel with separate panels triggered by actions in the Content Features \"bucket\"",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2014-01-06T13:51:12.268-0500",
  "updated": "2014-01-06T14:31:00.738-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-137/",
      "key": "FLOE-137",
      "summary": "\"Video Features\" context menu should show video object has focus"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently the Metadata editor demo design uses a single panel to show all the editable metadata. Once the "Video Features" menu has been implemented, the single panel should be replaced by multiple metadata panels which are triggered depending on the option selected from the menu.

Example:\
If "Transcript" icon is selected from the Video Features menu, then the Transcript panel appears in the sidebar.

Reference:\
Page 5 of this PDF document (<http://wiki.fluidproject.org/download/attachments/37854510/FLOE-metadata-design%20Dana%20Dec%204.pdf?version=2&modificationDate=1386627061381&api=v2>) shows the user selecting Audio Descriptions from the menu and then appearing in the sidebar in Page 6.

        