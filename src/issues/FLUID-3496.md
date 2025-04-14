---json
{
  "title": "FLUID-3496",
  "summary": "fluid.parseSelector() can't handle selectors with \":\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2010-02-12T15:32:33.000-0500",
  "updated": "2011-03-25T09:55:49.487-0400",
  "versions": [
    "1.1.1",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-06-02T23:21:45.599-0400",
      "body": "There are no plans currently to support more selectors than the basic set of selectors (descendant, child, class and tag) - writing a generalised selector engine is a big job and would also reduce the performance of the renderer a lot. John Resig in any case reports that these selectors account for about 90% of the use \"in the wild\" <http://ejohn.org/blog/selectors-that-people-actually-use/>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-03-25T00:16:49.758-0400",
      "body": "I think this is one of those few cases for which the \"won't fix\" resolution is appropriate. The problem is as described, but the it is not the intention of the Fluid framework to implement a fully powerful selector engine - this task ties up groups with far more resources than ours for years at a time. The basic set of selector components, build out of tag names, class names, ids, descendent and > has been shown in surveys by jQuery and other to account for over 95% of practical selector usage, and is a subset which is easy to parse and read. Given one generally has full control over the markup that is supplied to the renderer (so far - perhaps one day we may try parsing \"markup in the wild\" as templates but this raises many difficult problems of stability and workflow) it is best to reorganise the selector requirements so that the markup can be identified using this set. Generally this has been done in practice by expanded use of many classname-based selectors, which has been specially optimised in the framework since 1.2.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-25T09:55:49.429-0400",
      "body": "Closed as per Antranig's previous comment\n"
    }
  ]
}
---
Use case:\
".myclassname:parent"

        