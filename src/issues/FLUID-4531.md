---json
{
  "title": "FLUID-4531",
  "summary": "Refactor UIOptions to aggregate individual options handlers as \"ants\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2011-10-31T02:50:38.662-0400",
  "updated": "2013-10-04T09:31:20.405-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4266/",
      "key": "FLUID-4266",
      "summary": "Refactor UIOptions to be an orchestrating component "
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-05-03T04:16:02.260-0400",
      "body": "Branch merged into project repo at 6933c19d8dbc8ed6272d6d78b11f6f09a4030c64\n"
    }
  ]
}
---
UIOptions is currently extremely hard to configure in order to handle different options. Anastasia has explored some of the requirements and it has been found that we require to touch the codebase in upwards of 6 places in order to successfully integrate a new option. Some of these problems were also seen in the work on the "content simplification demo".\
An "ant" (so named after a discussion in Toronto during July) encompasses all of the aspects necessary to deal with a new option in one "component". These are, presentation, persistence, and activity. \
Presentation governs an interaction with the user to configure the option.\
Persistence enables the user's set value to be persisted to a profile.\
Activity honours the option's value in a particular context (for example, transforms a web page).

This work is necessary for further embedding of UIOptions in other contexts (FLOE content) as well as GPII profiles/preferences work

        