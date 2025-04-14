---json
{
  "title": "FLOE-482",
  "summary": "Create \"Preference Change Aware\" grades",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-09-26T13:12:25.826-0400",
  "updated": "2018-05-08T14:59:01.596-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Learning Dashboard"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1653/",
      "key": "FLUID-1653",
      "summary": "Access For All Binding"
    },
    {
      "type": "Related to",
      "url": "/browse/FLOE-481/",
      "key": "FLOE-481"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-09-26T13:38:26.657-0400",
      "body": "Simon suggests looking at the Ontology Manager components of GPII: <https://github.com/GPII/universal/tree/master/gpii/node_modules/ontologyHandler>\n\nDiscussed in the FLOE planning meeting by Michelle: the data model for UIO isn't the A4A model, but there was a vision of creating a translation facility for this.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2018-05-08T14:59:01.575-0400",
      "body": "Closing since new work in starting on this project, being captured in <https://issues.fluidproject.org/projects/MYL3/issues/?filter=allopenissues>\n"
    }
  ]
}
---
Broadly speaking, these grades should provide facilities to:

* monitor changes by a user to their preferences
* record changes to the preference including what was was changed, what value was it changed to, when was it changed

The data model of these grades should conform to that used by the preference sets in other contexts (the one rooted in the Access4All standard).

The Learning Dashboard prototype has some UIO-based work that could feed into this.

        