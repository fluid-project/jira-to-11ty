---json
{
  "title": "FLUID-4536",
  "summary": "Improve core framework to provide support for component trees which span iframe boundaries",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2011-11-11T15:20:52.207-0500",
  "updated": "2016-09-21T16:28:59.043-0400",
  "versions": [
    "1.4"
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
      "type": "Related to",
      "url": "/browse/FLUID-5966/",
      "key": "FLUID-5966"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-01-20T17:25:12.099-0500",
      "body": "Fixed by today's merge of changes into the framework\n"
    }
  ]
}
---
The version of UIOptions delivered for 1.4 featured a "belt and braces" approach to cross-iframe support - the entire framework was included on both sides of the iframe boundary. Although this was eventually made to work, development is very difficult and the solution is very hard to work with as a result of the component tree not being connected, and being derived from demands blocks in 2 different iframes, etc. \
For early in the 1.5 cycle, we decided/discovered that a simpler approach was possible, with only jQuery included in the "other world". The only real risk in an iframe situation is direct DOM manipulation code - given this is all deferred to jQuery, we can limit our exposure just to that - although given that jQuery UI plugins are tightly bound to jQuery, all of these need to be included in the "correct world". However, we can make do with just a SINGLE version of the framework - assuming the framework is suitably upgraded to provide some assistance for \
i) allowing the correct jQuery to be specified in crucial areas, such as to the renderer, and when forming a component's container\
ii) assisting this jQuery to be injected via IoC (in practice, "jQuery cascading" is generally "the right thing" - having started with a particular jQuery, the reasonable expectation is that it should continue to be used for subcomponents unless countermanded)

        