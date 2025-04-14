---json
{
  "title": "FLUID-1241",
  "summary": "Inline Edit unit tests not using proper paddings names",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2008-08-19T15:01:47.000-0400",
  "updated": "2009-06-03T13:45:28.000-0400",
  "versions": [
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-09-16T12:59:29.000-0400",
      "body": "After taking a very quick peek at this, I fear that the tests should be failing in this case but aren't. They probably need to be rewritten to fail, then fixed.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-14T09:41:35.000-0500",
      "body": "It's unfortunately quite hard to ensure that the tests fail, since at base all they can do is check that an option of a particular name is passed through from the defaults or user options to the live options... which will always happen, independent of its name. It is probably too intricate/unstable to write tests which verify the **function** of this padding since it will depend a good deal on the natural browser sizes for things. In any case, the tests have been updated at revision 6036 for the new paddings names.\n"
    }
  ]
}
---
The Inline Edit unit tests are still using "paddings.add" and "paddings.minimum"  These have been renamed in the code, and the tests should be updated.

        