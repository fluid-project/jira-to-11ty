---json
{
  "title": "FLUID-4333",
  "summary": "Injection of events via IoC is error-prone - missing \"events\" section in path can go unnoticed",
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
  "reporter": "Cindy Li",
  "date": "2011-07-08T16:43:25.315-0400",
  "updated": "2013-09-06T13:00:21.493-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Injecting an event using syntax like&#x20;

onUIOptionsTemplateReady: "{templateLoader}.onUIOptionsTemplateReady",

will fail without a helpful diagnostic, even though it is almost inconceivable that an event firer could be injected from any path other than "{that}.event" - this should either happen automatically or an informative diagnostic produced

        