---json
{
  "title": "FLUID-6466",
  "summary": "Apply declarative configuration to the Nexus music demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Open",
  "assignee": "Philip Tchernavskij",
  "reporter": "Philip Tchernavskij",
  "date": "2020-03-09T10:50:16.768-0400",
  "updated": "2020-03-09T10:50:16.768-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Nexus"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The Nexus music demo currently involves a manual setup step, running the script `constructNexusPeers.js`, which sets up the machinery for the different components of the music demo to interact. The Co-occurrence engine was developed to eliminate this sort of configuration work by declaratively specifying and dynamically constructing component interactions ([GPII-2670](https://issues.gpii.net/browse/GPII-2670)).

The music demo should be updated to use the Co-occurrence engine. This is a good learning exercise to become more familiar with the capabilities of the Nexus, and will make the demo easier to run.

        