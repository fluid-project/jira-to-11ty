---json
{
  "title": "FLUID-5645",
  "summary": "API tables \"Name\" column should have monotype text styling",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Jonathan Hung",
  "date": "2015-04-22T09:50:08.574-0400",
  "updated": "2022-03-14T12:53:13.528-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-03-14T12:53:13.508-0400",
      "body": "Closing as won't do because it needs to be re-evaluated as part of a larger site redesign in the future. Also not all tables have a name column and make use of \\<code> blocks for styling.\n"
    }
  ]
}
---
The "Name" column in API pages should have a class that defines a monotype style. This way the names in that column will appear distinct from regular text.

Example:

td.monotype {\
font-family: 'Roboto Slab';\
}

        