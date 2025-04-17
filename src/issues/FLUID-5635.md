---json
{
  "title": "FLUID-5635",
  "summary": "Improve grouping of Infusion docs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2015-04-20T09:53:19.336-0400",
  "updated": "2022-03-14T12:35:34.408-0400",
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
      "author": "Anastasia Cheetham",
      "date": "2015-12-10T11:07:23.956-0500",
      "body": "Antranig Basman, the documentation table of contents has been reworked a fair amount recently. Could you re-examine this issue, and either a) update it with ideas for further improvement, or b) close it if you think it's fine now.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-03-14T12:35:34.352-0400",
      "body": "Closed as per Anastasia's comments. It appears that the restructuring has taken place.\n"
    }
  ]
}
---
Antranig made the following suggestions for grouping the Infusion documentation table of contents:\
The current split of some material into "Infusion" and others into "API" doesn't make too much sense. Certainly whatever top-level grouping we have, material such as "ChangeApplier API" should go together with "Events", "IoC", "Framework API", etc.

I suggest that we have one area called "Infusion" or "Framework" which includes

* everything currently in "Infusion", plus ChangeApplier API, Framework API, DOM Binder API

Another area called "Components" which includes

* everything else currently in API - that is, everything from "Inline Edit" down to "Table of Contents".

I suggest we do away with the top-level name "API" since we don't really believe in having APIs anyway.

We should either put "Preferences Framework" in a top-level grouping of its own, or else at the bottom of the "Framework" area or the top of the "Components" area to emphasise that it lives at a special level of abstraction - it is less abstract than all the rest of the "framework", but more abstract than any component.

        