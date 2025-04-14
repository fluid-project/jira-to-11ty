---json
{
  "title": "SJRK-9",
  "summary": "Add gpii-handlebars to Storytelling Tool",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2017-09-27T18:01:13.609-0400",
  "updated": "2017-10-31T15:03:01.648-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2017-10-03T11:46:48.904-0400",
      "body": "A first step for this would be to replace or supplement the existing sjrk.storyTelling.templatedComponent grade's use of stringTemplate with the use of handlebars.\n\nThis can use the client-side renderer described at <https://github.com/GPII/gpii-handlebars/blob/master/docs/renderer.md>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2017-10-31T15:03:01.646-0400",
      "body": "Handlebars incorporated and working just fine\n"
    }
  ]
}
---
We're hitting the limitations of fluid.stringTemplate for use as an HTML templating solution. We should explore the use of [gpii-handlebars](https://github.com/GPII/gpii-handlebars) as an alternative.

        