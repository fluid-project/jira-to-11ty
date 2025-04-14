---json
{
  "title": "FLUID-6727",
  "summary": "Infusion 3.0 release notes do not advertise breaking change for strategy for configuring writable DataSources",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-05-05T11:50:25.425-0400",
  "updated": "2024-07-17T08:06:22.449-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "3.0.1"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-05-09T12:18:09.465-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion-docs/pull/236> ) into the Infusion-Docs repo at 04e01734587f8d22baa341a4045740460f29c82d\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-05-10T13:52:30.799-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1075> ) into the 3.x branch of the project repo at 681a08458ca5ac927ba28f5ee61e248e64b449e6\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-05-10T14:04:25.570-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1077> ) into the project repo at 3760d835803711d7834f240e77ec9cc3b47af9fb\n"
    }
  ]
}
---
Under <https://fluidproject.atlassian.net/browse/FLUID-6623#icft=FLUID-6623> we backported the KETTLE-49 scheme for configuring writable DataSources but did not advertise this in ReleaseNotes.md. The new strategy uses an option named `writableGrade` together with a flag `writable: true` in place of the clunky older system using a grade linkage. We updated the docs at <https://docs.fluidproject.org/infusion/development/datasourceapi#implementing-or-customising-a-datasource> but didn't remember to update the release notes.

The best response, as discussed in #fluid-tech today, should be, as well as updating our ChangeLog retrospectively, to issue a 3.0.1 Infusion release which features an updated ReleaseNotes.md.

        