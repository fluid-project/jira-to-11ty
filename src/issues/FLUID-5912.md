---json
{
  "title": "FLUID-5912",
  "summary": "\"{arguments}\" IoC references in dynamicComponents model block are incorrectly interpreted as implicit model relays ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Alan Harnum",
  "date": "2016-05-31T14:32:10.729-0400",
  "updated": "2024-07-22T10:35:27.809-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-05-29T10:54:38.057-0400",
      "body": "I'm also finding a similar issue with trying to use the \"{arguments}\" context name in a members block.\n\nsee: <https://botbot.me/freenode/fluid-work/2017-05-29/?msg=86288307&page=1>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-11-08T12:34:47.018-0500",
      "body": "Wow, I can't believe this didn't get fixed...  must have fallen into an informational black spot ...\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-01-12T11:46:55.336-0500",
      "body": "This also happens within member blocks, as demonstrated here:\n\n<https://gist.github.com/the-t-in-rtf/6a85c3cf9676d227748a20180a09b929>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2019-09-30T09:16:21.436-0400",
      "body": "This is now fixed in the <https://fluidproject.atlassian.net/browse/FLUID-6148#icft=FLUID-6148> branch <https://github.com/fluid-project/infusion/pull/824>\n"
    }
  ]
}
---
Based on the example at <http://docs.fluidproject.org/infusion/development/SubcomponentDeclaration.html#dynamic-subcomponents-with-a-source-event>, it should be possible to use the context name "{arguments}" to refer to "the argument list that was used to fire the event which triggered the creation of the particular dynamic subcomponent".

This currently fails within a model options block because the framework interprets {arguments} as an implicit model relay to a nonexistent component if found within model options.

The recommended workaround at this time is to put any {arguments} references in a plain options area and then refer to that from the model.

—

IRC conversation about the issue: <https://botbot.me/freenode/fluid-work/2016-05-31/?msg=67028698&page=2>

Gist with example code at <https://gist.github.com/waharnum/8c1abcbec3f9786c899f9e6637564c8c>

        