---json
{
  "title": "FLUID-908",
  "summary": "Convert Pager to use Renderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Michelle D'Souza",
  "date": "2008-07-15T19:42:47.000-0400",
  "updated": "2011-02-22T16:27:47.724-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-902/",
      "key": "FLUID-902",
      "summary": "Port Pager to new component structure"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-10-01T13:37:00.000-0400",
      "body": "dev-iteration45\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-10-01T13:38:28.000-0400",
      "body": "This will require using the client side renderer.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:47.723-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The Pager is currently a 'markup driven' component in that it expects the server to create all the markup and merely inform the Pager component of the interesting pieces. It would be nice for developers to be able to use the Pager component in a 'data driven' way perhaps using JSON.&#x20;

dev-iteration47

        