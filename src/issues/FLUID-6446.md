---json
{
  "title": "FLUID-6446",
  "summary": "split off responsibility for loading enactors from the auxSchema",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2019-12-19T18:55:27.069-0500",
  "updated": "2019-12-19T18:56:20.444-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Enactors should no longer be defined in the auxiliary schema, which should just be for configuring the panels. 

From Antranig Basman:

The indirection between auxSchema and enactors will always be via the "setting names" established via the primary schema grades (which, in practice, will likely end up being mapped as "application specific terms" in the GPII ontology of things).

Related to work for <https://issues.gpii.net/browse/GPII-4276>

        