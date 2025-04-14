---json
{
  "title": "FLUID-2962",
  "summary": "Ready core framework for use on server-side",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2009-06-18T18:49:56.000-0400",
  "updated": "2014-07-11T15:02:22.444-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3494/",
      "key": "FLUID-3494",
      "summary": "FastXmlPull parser is not threadsafe, through use of global Regexp objects"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4609/",
      "key": "FLUID-4609",
      "summary": "Package the Infusion framework as a node package, suitable for use with node.js and the node package manager (npm)"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2980/",
      "key": "FLUID-2980"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-02-09T19:57:44.000-0500",
      "body": "See <https://fluidproject.atlassian.net/browse/FLUID-3494#icft=FLUID-3494> - fastXmlPull also needs fixing.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-11T15:01:10.373-0400",
      "body": "This was fixed in work for Infusion 1.5 however note that:\n\n\"making it ready for the server-side\" no longer means \"make it thread safe\"\n\n(see channel logs: <https://botbot.me/freenode/fluid-work/2014-07-11/?tz=America/Toronto> )\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-11T15:02:22.444-0400",
      "body": "This was completed on work for <https://fluidproject.atlassian.net/browse/FLUID-4609#icft=FLUID-4609>\n"
    }
  ]
}
---
Server-side environments place particular demands on the integrity of Javascript code. This principally relate to threading and concurrency. The libraries should be made safe for concurrent access where this is a risk, and also made robust with respect to variations in concurrency (synchronous operations where asynchronicity has been assumed).

There are two main areas currently known - \
i) fluid.fetchResources assumes a standard asynchronous AJAX cycle. It needs to be upgraded to function in the presence of synchronous I/O\
ii) the template renderer has an inappropriately large closure scope for its state - this needs to be shrunk to just the scope of the initiation point.

        