---json
{
  "title": "ENGAGE-338",
  "summary": "The \"user\" component in the My Collection branch is unnecessarily stateful and View-oriented",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-02-08T13:17:39.000-0500",
  "updated": "2010-03-01T16:56:40.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-03-01T16:56:27.000-0500",
      "body": "I fixed this midway through our push for Engage 0.3b1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-01T16:56:40.000-0500",
      "body": "Fixed during Engage 0.3b1 bug parade\n"
    }
  ]
}
---
My Collection contains a file called user.js which contains a "component" designed to make it easier to create user cookies. It is, however, unnecessarily stateful (it should just be a collection of free functions, rather than an instantiatable object). It also uses a component-style creator, including a container option, when it is not actually rooted in any view.

        