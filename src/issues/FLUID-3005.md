---json
{
  "title": "FLUID-3005",
  "summary": "Refactor BuilderUtilityClass into utility functions (not a class)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-07-07T11:45:50.000-0400",
  "updated": "2009-08-24T11:25:05.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-07-07T11:46:36.000-0400",
      "body": "Colin comments: I can't quite tell why you've structured your BuilderUtilityClass as a full-fledged class with instance methods. There seems to be no state here, just a couple of standalone utility functions. Indeed the naming suggests as much--it's not an object with any real identity, just a collection of functions. Maybe it's easier to ditch the class and just invoke these functions directly? Or perhaps there's a bit more thinking about how to structure the various bits of logic in your code?\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-07-13T10:39:33.000-0400",
      "body": "Created GroupClass and ModuleClass to encapsulate details.\n"
    }
  ]
}
---

        