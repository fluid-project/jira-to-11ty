---json
{
  "title": "FLUID-5238",
  "summary": "Document 'dynamic components'",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2013-12-04T10:32:50.215-0500",
  "updated": "2014-03-03T11:26:00.751-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-01-29T04:14:56.420-0500",
      "body": "Sections now present in <http://wiki.fluidproject.org/display/docs/Subcomponent+Declaration> and <http://wiki.fluidproject.org/display/docs/Component+Configuration+Options> as suggested.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-01-29T04:15:45.891-0500",
      "body": "Tests for both facilities have been in trunk for a while - b) description above is incorrect - a component is created on every firing, the difference from standard subcomponents is that no existing subcomponent is destroyed first.\n"
    }
  ]
}
---
We need to add documentation for the new "dynamicComponents" option. A placeholder has been added to\
<http://wiki.fluidproject.org/display/docs/Component+Configuration+Options>\
but the details are not yet there, and we should probably discuss them in a bit more detail elsewhere, perhaps here?\
<http://wiki.fluidproject.org/display/docs/Subcomponent+Declaration>

My notes on dynamic components so far:

can do different things:\
a) create multiple copies of a component given a "sources" array (or object)\
b) create a component on an event, but only on the first event (normally, createOnEvent will create on every firing)

Tests exist for a) above, but not for b). Yura says Kettle uses them, so there may be some examples there.

        