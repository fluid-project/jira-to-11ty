---json
{
  "title": "SJRK-114",
  "summary": "Break renderTemplate function into smaller pieces",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T16:58:42.127-0400",
  "updated": "2019-09-12T19:22:24.955-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-117/",
      "key": "SJRK-117"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-04T18:18:00.824-0400",
      "body": "Some fairly drastic refactoring has been done to the invoker, splitting it in two and the function itself into four bits, with the timing rearranged a bit.\n\nTests should be added for the new invoker and functions.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-09-12T19:22:24.953-0400",
      "body": "see <https://fluidproject.atlassian.net/browse/SJRK-117#icft=SJRK-117> for remaining test coverage\n"
    }
  ]
}
---
The function sjrk.storyTelling.templateManager.renderTemplate does several things:

* combines all of the values to be injected into a template (as "dynamicValues")
* renders a template (currently via gpii.handlebars.renderer.standalone.render)
* injects the rendered template into the DOM
* fires a completion event

These steps can be further broken down into other functions. This would make the code a bit more modular and maintainable. This would allow us to decouple the gpii.handlebars renderer from this function, giving more flexibility to the developer to choose the particular method of rendering.

Consider setting up an invoker on the templateManager that calls the specific render function to be used, and then refer to this in renderTemplate.

        