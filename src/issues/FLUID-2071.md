---json
{
  "title": "FLUID-2071",
  "summary": "Tech review of Subcomponents documentation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2009-01-06T15:43:18.000-0500",
  "updated": "2009-06-03T13:41:57.000-0400",
  "versions": [],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Framework",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2059/",
      "key": "FLUID-2059"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-01-12T10:53:17.000-0500",
      "body": "As per IRC logs of 2009-01-09 (<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-01-09>), the subcomponent documentation should clarify the use of the 'type' field in setting options: the definition of the defaults must use the type field explicitly, but implementors can set options using the shorthand.\n"
    }
  ]
}
---
A technical review of\
<http://wiki.fluidproject.org/display/fluid/Subcomponents>

* &#x20;Check page for correctness against current code base:\
  &#x20;         o function signatures\
  &#x20;         o etc.
* Check links between pages, add and update where appropriate.

Bug Parade 0.7 release&#x20;

        