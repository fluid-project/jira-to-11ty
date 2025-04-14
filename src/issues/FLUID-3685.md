---json
{
  "title": "FLUID-3685",
  "summary": "Scratchpad build broken due to externals in FSOSS-2009 directory",
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
  "date": "2010-08-12T08:48:54.347-0400",
  "updated": "2010-08-12T09:41:09.945-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-08-12T09:41:09.939-0400",
      "body": "I updated the external to point at the latest  revision of the <https://fluidproject.atlassian.net/browse/FLUID-3335#icft=FLUID-3335> branch before it was removed.&#x20;\n\nHere is a link to a page that is being served through the scratchpad build.\\\n<http://build.fluidproject.org:8095/scratchpad/FSOSS-2009/MobileInfusionApp/fliquor/html/fliquor.html>\n"
    }
  ]
}
---
The FSOSS-2009 project used an external to the FLUID-3335 branch. When this branch was removed, the external would throw an error. This is causing the nightly build of the scratchpad to break.

        