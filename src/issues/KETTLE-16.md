---json
{
  "title": "KETTLE-16",
  "summary": "Remove \"callbackWrappingDataSource\" as no longer required by new Infusion architecture",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2013-08-13T14:07:42.311-0400",
  "updated": "2013-08-28T02:28:06.757-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-08-28T02:22:39.567-0400",
      "body": "We realised today that resolution of this issue is impossible, largely for reasons related to error handling and debuggability. Full reasoning is summarised on the mailing list here: <http://fluid.2324889.n4.nabble.com/Kettle-and-the-Last-Thread-Local-td8798.html>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-08-28T02:28:06.757-0400",
      "body": "Note that in theory, we could gain some benefits from rewriting this facility in terms of node.js \"domains\" - <http://nodejs.org/api/domain.html> - we could stash the \"request component\" as a property onto the domain, even though this is a possibly dubious practice, and then use the reference \"domain.active\" to look it up again. We would replace the use of the callback wrapper with a call to domain.bind(callback) which has a very similar effect. It appears from the docs that we would not actually need to apply the wrapper in practice, due to \"If domains are in use, then all new EventEmitter objects (including Stream objects, requests, responses, etc.) will be implicitly bound to the active domain at the time of their creation.\". However, domains are still marked as an \"unstable\" API (level 2), and a major method was just deprecated this week, for example (\"dispose\"). Also, there will be considerable benefits to keeping all I/O under the eye of the framework - especially once we can start using increasingly declarative approaches as possible under the \"asynchronous ginger world\", <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982>\n"
    }
  ]
}
---
For early versions of delivered "new new Kettle" we implemented a "callbackWrappingDataSource" in order to properly contextualise callbacks which issued I/O when honouring a DataSource request. Since <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> was implemented in Infusion, every IoC-configured component can be used to recover its original "instantiator" and so this complexity in Kettle can be removed.

        