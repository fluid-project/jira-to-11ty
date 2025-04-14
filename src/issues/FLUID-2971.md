---json
{
  "title": "FLUID-2971",
  "summary": "Create incubator and scratchpad areas in svn",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-06-29T15:52:13.000-0400",
  "updated": "2009-08-31T11:31:50.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-06-30T14:49:02.000-0400",
      "body": "Right now the sandbox has been renamed but we still need to clean up any links that point to it. Also, the incubator has been created and things are moving over there slowly.&#x20;\n"
    }
  ]
}
---
There was a conversation on list about changing the repository so that anyone can commit to an area called 'incubator'. <http://www.fluidproject.org/pipermail/fluid-work/2009-June/004602.html>

This work includes:&#x20;

* renaming sandbox to scratchpad
* creating a new area called incubator
* adding new users who can commit to scratchpad and incubator but not to fluid - these users include Alison, Armin, David, Heidi, Laurel, Yura
* moving code that is destined for release from scratchpad to incubator - this includes the engage sketches, mobile FSS work and the custom builder

        