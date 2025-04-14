---json
{
  "title": "FLUID-2605",
  "summary": "Semantics for event removal are inconsistent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2009-04-15T14:54:05.000-0400",
  "updated": "2011-02-28T16:45:16.235-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-04-15T14:57:55.000-0400",
      "body": "Looking at the code, it seems that the \"overload\" option is already implemented. This is really a documentation issue 😛\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:16.227-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
The current syntax for removeListener is eventFirer.removeListener(listener) - however, this is not fully integrated with the concept of a "listener namespace" - it should be possible to remove a listener knowing only its namespace. This could be done either by extending the argument list to eventFirer.removeListener(listener, namespace) or overloading on the type of the first argument.

        