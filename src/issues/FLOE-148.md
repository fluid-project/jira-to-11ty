---json
{
  "title": "FLOE-148",
  "summary": "Provide audio feedback to confirm that a video has been inserted and that the features panel has appeared.",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Dana",
  "date": "2014-01-06T16:45:20.705-0500",
  "updated": "2014-01-14T09:07:52.828-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-143/",
      "key": "FLOE-143",
      "summary": "Create a panel which summarizes the metadata content"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-01-14T09:07:52.828-0500",
      "body": "I think we'll need to do some research on what is appropriate. Perhaps we should push focus to the video features bucket associated with the inserted video.\n"
    }
  ]
}
---
At the moment there is no audio feedback to confirm that content (video) has been inserted into the editor and that this has triggered the opening of an editable features panel.  Is it possible to provide audio feedback for screen reader users? Could this be achieved by updating a content summary each time media content is inserted, and a status update would be announced?&#x20;

See p9 of <http://wiki.fluidproject.org/download/attachments/37854510/FLOE-metadata-design%20Dana%20Dec%204.pdf?version=2&modificationDate=1386627061381&api=v2>&#x20;

        