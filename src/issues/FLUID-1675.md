---json
{
  "title": "FLUID-1675",
  "summary": "Document the event model, and the supported events, more thoroughly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-10-10T10:57:34.000-0400",
  "updated": "2009-06-03T13:46:27.000-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Framework",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1117/",
      "key": "FLUID-1117"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-11-12T10:36:36.000-0500",
      "body": "I've drafted something, at\\\n<http://wiki.fluidproject.org/display/fluid/Events+for+Component+Developers>\\\nand\\\n<http://wiki.fluidproject.org/display/fluid/Events+for+Component+Users>\\\nand have asked Michelle to 'beta test' it.\n\nOne thing that is still needed is for the individual component pages to better document the parameters supported by the event listeners.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-01-05T11:50:21.000-0500",
      "body": "The event documentation was in fairly good shape for the 0.6 release. There are a couple of things that could still be done.&#x20;\n\n1\\. Create an 'Events' landing page: <http://wiki.fluidproject.org/display/fluid/Events> or rework <http://wiki.fluidproject.org/display/fluid/The+Fluid+Event+System> into the landing page\\\n2\\. Remove the duplication of the Event Type table - pull it in from a single source. It currently exists in 3 places and each is slightly different.\\\n3\\. Move the Event Firer table to the component developer docs page. \\\n4\\. Remove the warnings\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-01-06T15:41:46.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-11T10:31:38.000-0500",
      "body": "I've taken care of points 1, 2 and 4 in Michelle's comments. I need to clarify #3 with her before proceeding.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-11T11:51:20.000-0500",
      "body": "I have addressed all of Michelle's comments.\n"
    }
  ]
}
---
We have the beginning of some documentation around the event system:\
<http://wiki.fluidproject.org/display/fluid/The+Fluid+Event+System>\
but we need more developer-centric api docs explaining the events supported by each component, when they fire, and what kinds of things you might want to do with them. A page has been started for this:\
<http://wiki.fluidproject.org/display/fluid/Events>

dev-iteration46

        