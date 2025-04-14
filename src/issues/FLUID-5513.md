---json
{
  "title": "FLUID-5513",
  "summary": "Implement \"micropromises\" to ease manipulation of asynchronous code sequences",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-09-20T12:45:33.959-0400",
  "updated": "2015-08-20T15:36:10.266-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4982/",
      "key": "FLUID-4982",
      "summary": "Implement \"globally asynchronous ginger world\" aka \"wave of promises\" allowing arbitrarily asynchronous progress through the ginger algorithm"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4883/",
      "key": "FLUID-4883",
      "summary": "Implement new event type of \"latched events\" which represent \"promise/deferred\" type events which may fire only once"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T15:36:10.253-0400",
      "body": "Merged into trunk at revision 0da0209c63c97cb3f422b8a21e4c8d33f4156d47\n"
    }
  ]
}
---
Clients of the framework, especially in Kettle, require the affordances that "promises" offer, for encapsulating an element of an algorithm which may be both i) asynchronous, and ii) fallible, in a self-contained unit. Other related concepts include "deferreds" or "futures", the relationship between which is discussed, for example, at <http://stackoverflow.com/questions/6801283/what-are-the-differences-between-deferred-promise-and-future-in-javascript>&#x20;

The existing popular promises libraries (e.g. "bluebird" or "when.js") are too heavyweight to appear as a mandatory dependence of Infusion. Also, once a library's support becomes elaborated beyond the most basic requirements of the Promises API, it comes to support a programming idiom which is incompatible with the wider goals of Infusion. The standard semantic advertised for promises libraries supports an in-code "chaining" idiom, where complex asynchronous constructs are organised by chained function calls to promises API methods such as "then", "catch", etc. to create trees which broadly mirror the overall syntax tree of the equivalent synchronous code. In Infusion, we plan for such details to be hidden within declarative configuration, with only the most minimal support required to bridge between plain call-back idioms and the algorithms/configuration which ingest promises to weave them into larger-scale algorithms.

This work package relates to FLUID-4982 and FLUID-4883.&#x20;

We can base our implementation on the following minimal gist written by "unscriptable": <https://gist.github.com/unscriptable/814052>

        