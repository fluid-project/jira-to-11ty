---json
{
  "title": "FLUID-3216",
  "summary": "render the custom build template on the website",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-09-30T15:18:06.000-0400",
  "updated": "2009-11-06T16:23:24.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder",
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-11-04T18:36:04.000-0500",
      "body": "I think this has been resolved in our recent move to separate the builder from the rest of the CMSMS website.\n"
    }
  ]
}
---
Currently the website has a cut and pasted version of the builder template as it's page content. This should be rendered instead.

        