---json
{
  "title": "FLUID-5045",
  "summary": "Improve Model Transformation system to support transforms contextualised by IoC expressions",
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
  "date": "2013-06-11T13:00:32.233-0400",
  "updated": "2015-06-26T09:53:15.296-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "IoC System",
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5047/",
      "key": "FLUID-5047"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5024/",
      "key": "FLUID-5024"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-06-15T11:02:57.838-0400",
      "body": "Initial implementation for this feature was merged into trunk at revision cc3fd22e253d139ddc4179a1cb55ed40a92c7b8a on Dec 15, 2013\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:44.583-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Our initial use case for this facility is the linkage between the Video Player's language-dependent settings (transcripts and captions) and a UIOptions instance which is used to configure them. This is described in the main writeup for <https://fluidproject.atlassian.net/browse/FLUID-5024#icft=FLUID-5024> - right now this is operated by a custom "modelRelay" system which is good only for this particular situation. The main impediment to improving modelRelay itself for <https://fluidproject.atlassian.net/browse/FLUID-5024#icft=FLUID-5024> is that it is currently impossible to describe this kind of transformation since the framework currently doesn't permit interleaving of model transformation documents and IoC expressions.

The main impediment to resolving THAT problem is initially syntactic - the keyword "expander" is used both within the IoC system as well as within Model Transformations for describing a modular unit indexed by type name which does a unit of work by processing some JSON material from an input to an output form via the named function. Unfortunately there is no common ground at all between these two usages of "expander" and their functional APIs are also completely different. In fact, all IoC expanders have recently been folded into one single omni-capable "expander" which does the work of the previous "deferredInvoke" expander and the type field is now optional (post FLUID-4330).

In fact the usage of "expander" for model transformation expanders is quite unidiomatic and is not really recognised by users. We propose to rename this use to "transform" as is being reflected in some recent GPII documentation, both to eliminate the ambiguity as well as to improve readability. We can allow the keyword used to become part of the configuration to ModelTransformations itself, in order to support old documents if we require. After that, the work for this JIRA should be relatively simple, then preparing for <https://fluidproject.atlassian.net/browse/FLUID-5024#icft=FLUID-5024>.

        