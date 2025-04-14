---json
{
  "title": "FLUID-907",
  "summary": "Document 'best practises' for markup for screen reader friendliness",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-15T17:27:07.000-0400",
  "updated": "2015-07-27T11:21:06.513-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-07-18T14:48:28.000-0400",
      "body": "Hopefully we can reuse some of the work that the DHTML style guide group is doing.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-07-27T11:21:06.471-0400",
      "body": "<https://wiki.fluidproject.org/display/docs/Quick-and-Dirty+Website+Accessibility+Tests+-+and+Fixes>\n"
    }
  ]
}
---
For many components, problems with a screen reader not speaking appropriate things would be addressed by changes in the mark-up, e.g. adding title attributes, etc. We probably don't want our components to need to be responsible for this, so we should document for implementors just what they should be doing when they create markup for the various components.

        