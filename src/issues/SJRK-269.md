---json
{
  "title": "SJRK-269",
  "summary": "Use JSDoc syntax for code comments",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-08-28T14:47:30.785-0400",
  "updated": "2020-07-14T01:50:45.332-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-07-14T01:50:45.315-0400",
      "body": "This work was done as part of <https://fluidproject.atlassian.net/browse/SJRK-321#icft=SJRK-321> review, but it was not mentioned in commit messages so it didn't close automatically on merge.\n"
    }
  ]
}
---
Use [JSDoc ](https://jsdoc.app/) syntax for the code comments throughout the project.

According to the [Laser Eye Checklist](https://wiki.fluidproject.org/display/fluid/Laser+Eye+Checklist), the public API code should be commented. While this is broadly the case in the project already, using JSDoc can enable automatic generation of API documentation and take advantage of syntax highlighting in various IDEs & editors.

        