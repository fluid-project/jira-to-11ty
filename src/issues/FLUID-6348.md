---json
{
  "title": "FLUID-6348",
  "summary": "The selection reader play button will go behind content that has a z-index set",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-10-24T11:58:54.684-0400",
  "updated": "2018-10-24T14:02:07.711-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The play button from the Orator's selection reader is injected at the end of the "body"; however, if content has a z-index set, it will remain lower in the stacking order and placed below. 

This was first reported from the APCP testing ( see: <https://issues.gpii.net/browse/GPII-3470> )

        