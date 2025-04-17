---json
{
  "title": "FLUID-6448",
  "summary": "DataSource.get callback mentioned but not working",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-01-16T11:25:28.782-0500",
  "updated": "2020-01-21T07:58:48.951-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-01-16T11:29:02.768-0500",
      "body": "Antranig Basman do you have any thoughts on how to best address this?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-01-16T11:30:10.663-0500",
      "body": "The documentation that has been prepared by Justin Obara but hasn't yet been merged into the Infusion docs does not mention callbacks at all: <https://github.com/fluid-project/infusion-docs/blob/82e47765367fc51b804794ac5e504b47cdd03966/src/documents/DataSourceAPI.md>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-01-21T07:58:48.951-0500",
      "body": "I think it is best to cleanly axe callback support from impl and docs, this is rather old-fashioned and and unlikely to be of help to anybody.\n"
    }
  ]
}
---
The in-code documentation for fluid.dataSource mentions optional callback arguments in the get and set methods, but these don't seem to be able to work.

The documentation in question: <https://github.com/fluid-project/infusion/blob/46a1b887dcc4d78a78b3c3f8faaab498afc782cd/src/framework/core/js/DataSource.js#L61-L79>

The issue seems to be that the function fluid.dataSource.defaultiseOptions (the first thing called by both get and set) will error out (TypeError) if a function or string are passed in as the second argument. This would suggest that callback support is leftover from a previous factoring.

Further complicating matters, the last thing called by both get and set is fluid.dataSource.registerStandardPromiseHandlers which **does** include setting up a callback called on promise resolution.

Does it make sense to reinstate callback support, or would it be better to remove the comment and setup? It seems odd to return a promise **and** pass in a callback, but, in the absence of a task-like fixture outside of the IoC testing framework, I can imagine if it were being called in an invoker or listener that the callback arg would be useful.

        