---json
{
  "title": "FLUID-1770",
  "summary": "Remove the deprecated finishedEditing() function from Inline Edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2008-11-05T14:56:07.000-0500",
  "updated": "2009-06-03T13:46:27.000-0400",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-02-13T22:25:31.000-0500",
      "body": "Callback removed at revision 6506, and tests updated to use modern \"afterEditFinish\" callback\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T22:25:55.000-0500",
      "body": "I'm not sure if this issue was on the bug parade, but I've reviewed the change, and it's a simple and sensible fix. We agreed to be sure to deprecate a number of our APIs and leave them in for several releases to ensure backwards compatibility.\n\nThis was particular issue was one of the first API changes we made as a result of the framework's event system in Infusion 0.5. It seems to me that now is a good time to let it go.\n\n+1.\n"
    }
  ]
}
---

        