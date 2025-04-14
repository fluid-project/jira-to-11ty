---json
{
  "title": "FLOE-480",
  "summary": "Implement editable behaviours for inferredViews",
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
  "date": "2016-09-23T10:40:38.296-0400",
  "updated": "2018-05-08T14:59:17.394-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Learning Dashboard"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-476/",
      "key": "FLOE-476"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-05-08T14:59:17.392-0400",
      "body": "Closing since new work in starting on this project, being captured in <https://issues.fluidproject.org/projects/MYL3/issues/?filter=allopenissues>\n"
    }
  ]
}
---
A parallel feature required for the issues discussed in FLOE-476 is some affordance for end users to construct their own model components without having to write Infusion code.

The inferredViews implementation can, itself, be used to generate components capable of this editing behaviour. At a high level, the "editable" components will interpret the inferredView model path of a particular component, and generate its own inferredView configuration to support the editing of that model. Value and type changes can be relayed through standard Infusion model relay and transform approaches.&#x20;

Combined with the eventual persistence strategy, this will enable end users not only to record data, but build custom data gathering components.

        