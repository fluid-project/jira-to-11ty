---json
{
  "title": "FLUID-5702",
  "summary": "Correct DOM binder behaviour of returning container on missing selector to reflect change in jQuery API",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-06-29T14:46:53.700-0400",
  "updated": "2021-05-05T08:29:44.538-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5821/",
      "key": "FLUID-5821",
      "summary": "that.locate should return an empty element if the selector cannot be found..."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-02-12T11:12:26.485-0500",
      "body": "Duplicate of <https://fluidproject.atlassian.net/browse/FLUID-5821#icft=FLUID-5821>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2021-05-05T08:29:44.538-0400",
      "body": "Actually it is rather more helpful to produce an error if the selector is missing. In fact implementing this in the <https://fluidproject.atlassian.net/browse/FLUID-6580#icft=FLUID-6580> branch revealed an extremely long-standing framework bug which attempted to resolve \"{that}.dom.locate\" into the DOM binder's selectors in the first instance.\n"
    }
  ]
}
---
Long in the past, when we wrote the DOM binder, jQuery had a very silly API contract which would return the context of a scoped selector if the selector itself was missing. jQuery fixed this in their own API in jQuery 1.4, but our conformance to this old contract has continued to annoy integrators. We should fix up our implementation to return a 0-length jQuery in this case:&#x20;

<http://api.jquery.com/jQuery/#returning-empty-set>

        