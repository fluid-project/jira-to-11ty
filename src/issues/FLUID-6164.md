---json
{
  "title": "FLUID-6164",
  "summary": "Need to clarify / explain how options merging for arrays works",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2017-07-04T15:18:53.961-0400",
  "updated": "2024-08-01T09:43:04.231-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Framework",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-08-01T09:42:55.206-0400",
      "body": "Migrated to <https://github.com/fluid-project/infusion-docs/issues/300>&#x20;\n"
    }
  ]
}
---
The documentation for [options merging](http://docs.fluidproject.org/infusion/development/OptionsMerging.html) doesn't describe the default behaviour for how arrays are merged.

 

Currently it seems that arrays will merge by position, that is merging \[1, 2, 3] onto \["a", "b", "c", "d"] would produce \[1, 2, 3, "d"]. It also appears that if you want a shorter array that the original you'd need to specify a merge policy of "replace" for that option path.

 

see channel discussion: <https://botbot.me/freenode/fluid-work/2017-07-04/?msg=88145239&page=1>

        