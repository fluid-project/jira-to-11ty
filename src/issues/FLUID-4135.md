---json
{
  "title": "FLUID-4135",
  "summary": "Implement \"Event injection and boiling system\" for IoC-driven event firer resolution",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-03-10T02:46:55.288-0500",
  "updated": "2014-03-03T13:14:07.252-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-03-25T00:11:42.595-0400",
      "body": "This is now stable and in trunk for a week or so.\n"
    }
  ]
}
---
Events are a crucial means for decoupling notification source and multiplicity details from their clients in an architecture. In more complex component trees, abstracting the location and number of event firers themselves is also essential. At the moment, our "20th century" framework assumes that event firers are configured "in-line" for each component they are attached to - that is, each component constructs exactly one of its own event firers for each event that it wishes its clients to be able to subscribe to. In many contexts (CollectionSpace, the Uploader, and others) it has been found useful to "delegate" the construction and identity of the event firer to some other part of the component tree - that is, to "share" a firer which was actually created elsewhere in the tree.\
Furthermore, a long-needed piece of functionality is "event boiling" - the ability to subscribe to an event with one signature as if it had another. In many cases, Fluid components have achieved "production grade" whilst their event signatures have not been perfectly adapted for their task. A recent discussion on infusion-users, for example, highlights a case with InlineEdit: <http://fluidproject.org/pipermail/infusion-users/2011-February/000242.html> \[Damian Sobieralski, infusion-users, Feb 10th 2011, Inline Edit - cancelling an edit]. Since production grade components must maintain backwards compatibility, these mistakes in API design cannot be corrected for multiple release cycles. "Event boiling" allows these to be adjusted by the individual user without needing to disturb component implementation code.

        