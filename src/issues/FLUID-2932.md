---json
{
  "title": "FLUID-2932",
  "summary": "Define module grouping information to be used by the custom builder",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-06-09T10:47:27.000-0400",
  "updated": "2009-08-24T11:02:17.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2994/",
      "key": "FLUID-2994"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-07-02T11:36:21.000-0400",
      "body": "module\\_inlineEdit-components=\"components/inlineEdit\"\n\nwe should be able to omit the \"-components\" part as we may be able to parse this out of the location information.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-07-02T16:16:14.000-0400",
      "body": "This is complete but needs to be tested by parsing within the server code.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-03T15:23:12.000-0400",
      "body": "need to remove the old moduleGroups.json file\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-03T15:26:32.000-0400",
      "body": "the moduleGroups.json file has been removed from trunk\n"
    }
  ]
}
---
Define module grouping information to be used by the custom builder

In the "build.properties" file. Define the groups. For the specific modules add the name of the group to the module reference

group\_id="components"\
group\_name="Infusion Component Modules"\
groupd\_descriptoin=""

module\_inlineEdit-components="components/inlineEdit"

        