---json
{
  "title": "ENGAGE-370",
  "summary": "Message Bundles are not being located at all by kettle.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-02-10T13:30:36.000-0500",
  "updated": "2010-02-12T14:25:46.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-10T13:44:29.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-10T13:51:33.000-0500",
      "body": "On line 144 there was a closing bracket in the wrong spot, so localPath wasn't being sent along. Which create a path like .../html/undefined.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T14:25:46.000-0500",
      "body": "I've reviewed Justin's fix for this issue and it looks good and works. +1 for inclusion in Engage 0.3b\n"
    }
  ]
}
---
Message Bundles are not being located at all by kettle.

This appears to be a problem with how kettle is resolving the path to the message bundle.

        