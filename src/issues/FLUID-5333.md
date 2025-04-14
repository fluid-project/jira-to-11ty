---json
{
  "title": "FLUID-5333",
  "summary": "Create support for \"abortable events\" in the framework, to deal with cases where the holding component is destroyed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-04-28T02:06:07.563-0400",
  "updated": "2015-10-08T14:16:17.679-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Framework",
    "IoC System"
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
      "url": "/browse/FLUID-5332/",
      "key": "FLUID-5332",
      "summary": "Renderer's data binding will continue with notifications after source markup is destroyed"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5499/",
      "key": "FLUID-5499"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5578/",
      "key": "FLUID-5578"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5592/",
      "key": "FLUID-5592"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5790/",
      "key": "FLUID-5790"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-08-21T18:47:34.953-0400",
      "body": "Merged into master at revision f5403d5027923475e0c4314005f6723d2e732759\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:32.508-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
This requirement was raised by FLUID-5332. A difficult form of race condition can emerge where a component holding an event or a listener is destroyed as a result of servicing one of the listeners. A clean solution to this issue would involve being able to formally abort the processing of a listener queue when the component holding its event is destroyed partway through the process. This is similar to the "preventable events" system that we still retain in outline, but is signalled by collateral action around the component tree rather than specific knowledge held within a listener as signalled by its return value.

This kind of race should not really occur in practice, but is unfortunately at a much greater risk as a result of our current renderer implementation which causes large-scale destruction of segments of the component trees that it manages whenever re-rendering occurs.

This implementation will interact well with our upcoming asynchronous models for communicating failure, when these are configured to do so by propagating a "ball of fire" up the component tree destroying components. In this case it is highly appropriate to abort any further listener notifications that are in progress when the error occurs - this is consistent with the standard semantics for "failed promises", not to say the analogous monadic model.

        