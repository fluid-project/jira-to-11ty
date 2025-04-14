---json
{
  "title": "DECA-349",
  "summary": "Memory cards present in attached cameras may prevent them from being controlled",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2012-12-03T11:16:22.650-0500",
  "updated": "2012-12-03T11:16:22.650-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
If a memory card is present in a camera when it is attached to the OS, the OS may mount the memory card and lock Decapod / gphoto from controlling the camera.

Currently we have overcome this through documentation, but ideally Decapod software should be able to manage this situation better.

        