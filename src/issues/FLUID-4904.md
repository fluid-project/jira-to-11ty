---json
{
  "title": "FLUID-4904",
  "summary": "Determine the schema for preferences that are new to the latest UIO wireframes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "y z",
  "date": "2013-01-18T11:43:19.665-0500",
  "updated": "2013-10-04T09:19:05.187-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4903/",
      "key": "FLUID-4903",
      "summary": "Determine the schema for preferences that already exist in UIO."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4907/",
      "key": "FLUID-4907",
      "summary": "Create the UIO builder responsible for mapping from UIO Schema to enactors and settingsPanels"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-06-05T14:33:10.386-0400",
      "body": "The schema for UIO existing preferences (<https://fluidproject.atlassian.net/browse/FLUID-4903#icft=FLUID-4903>) and new preferences (<https://fluidproject.atlassian.net/browse/FLUID-4904#icft=FLUID-4904>) are sketched out @ <http://wiki.fluidproject.org/display/fluid/Schema+for+UIO+preferences>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-08-15T07:43:15.310-0400",
      "body": "Addressed with work for <https://fluidproject.atlassian.net/browse/FLUID-4907#icft=FLUID-4907>\n"
    }
  ]
}
---
Latest wireframes can be found here: <http://wiki.fluidproject.org/display/fluid/User+Interface+Options+design+high+fidelity%2C+C.1>\
This is similar to FLUID-4903 but deals specifically with the settings which have yet to be implemented in UIO/UIE.

A UIO builder (FLUID-4907) will make use of a primary schema, in json schema format, and an "auxiliary schema" (FLUID-5061) to construct grades used by UIO to determine the settings panels, enactors, and etc. used.&#x20;

Goals of the schema: \
1 enable entire work of constructing a UIO component with completely declarative information \
2 harmonize with work in GPII - Common Terms Registry - create a stable and global identity for every pref in a UIO panel&#x20;

The schema will contain information describing the setting(s). The primary schema will be the version used by UIO/UIE and will not necessarily be identical to that of the one stored in the GPII - Common Terms Registry. Any discrepancies between the two is assumed to be handled by transformations through the "ontology manager". An "ontology transformation document" will be provided to facilitate the transformation. This means that the values and formats of the primary schema should not require any further transformations to be used by the UIO builder. All other information required to construct a component will be provided in the "auxiliary schema". This "auxiliary schema" is not required to be in json schema format nor will it be in a typcial IoC structure. It will be a json structure that is flate, easily transformable, and easily written.&#x20;

The grade(s) created by the UIO builder will likely resemble those already created for the various starter grades used by UIE and UIO.&#x20;

Example of the schema: \
{ \
"type": "object", \
"properties": { \
"fluid.uiOptions.textSizer": { \
"type": "number", \
"default": 1, \
"minimum": 1, \
"maximum": 2, \
"divisibleBy": 0.1 \
} \
} \
}

More info on the mailing list:\
<http://lists.idrc.ocad.ca/pipermail/fluid-work/2013-June/009115.html>

        