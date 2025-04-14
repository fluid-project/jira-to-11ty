---json
{
  "title": "FLUID-4232",
  "summary": "Paths to chili for base and context demos are incorrect",
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
  "date": "2011-05-11T16:51:05.330-0400",
  "updated": "2011-05-11T16:57:18.158-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-11T16:57:18.152-0400",
      "body": "Adjusted the paths and pushed up to the project repo at bed094531c70f7fc4bca5cd5b609b9632abb7161\n"
    }
  ]
}
---
When chili was moved out of the portal directory and into the demo's lib directory, the paths to it in the base and context portal pages weren't updated.&#x20;

        