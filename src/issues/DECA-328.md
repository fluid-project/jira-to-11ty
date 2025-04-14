---json
{
  "title": "DECA-328",
  "summary": "Restructure decapod-ui to handle better identify the ui code for each of the various servers.",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-10-12T14:41:20.902-0400",
  "updated": "2012-12-03T10:49:54.184-0500",
  "versions": [],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-10-12T14:41:54.749-0400",
      "body": "After talking things over with Michelle, Cindy, and Jon we came up with this structure\n\ncore\n\n* components\n* styles\\\n  export\n* components\\\n  dewarp\\\n  capture\\\n  lib\\\n  mock-book\\\n  tests\n* core\n* export\n* dewarp\n* capture\n"
    }
  ]
}
---
The code in decapod-ui is geared towards export. Now that we'll have to add code for the dewarp and capture servers, it makes sense to restructure it to make the various parts more identifiable.

        