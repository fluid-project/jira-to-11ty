---json
{
  "title": "FLUID-6330",
  "summary": "Provide scheme to suppress carriage returns in logging of any JSON objects sent to fluid.log",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2018-08-29T12:28:19.779-0400",
  "updated": "2018-10-16T12:23:40.495-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-10-16T12:23:37.064-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/939> ) into the project repo at b1a1d8e8d60db6a72e9a93048fbbd420d97f90fb\n"
    }
  ]
}
---
<https://issues.gpii.net/browse/GPII-3310> has reported an issue where the output from fluid.log is sent to centralised logging, and it becomes hard to interpret multi-line messages. In the architecture meeting at <https://pad.gpii.net/p/arch-2018-08-29-kvl4nfd>? we decided that a useful interim solution to the problem would be to supply an option which would allow carriage returns to be suppressed where JSON objects are sent to fluid.log - a more mature solution would supply these as structured JSON via some explicit facility, together with some contextual information as described on GPII-3310.

        