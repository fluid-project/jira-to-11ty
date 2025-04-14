---json
{
  "title": "FLUID-4034",
  "summary": "Protocomponent expander should implement a \"conditional expander\" allowing conditional inclusion of components",
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
  "date": "2011-01-19T16:47:18.344-0500",
  "updated": "2014-03-03T13:38:48.503-0500",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-01-27T17:30:45.182-0500",
      "body": "The last part of this required functionality is now complete at revision 10478, demonstrating a conditional expander used to select and exclude rows being iterated by a parent repetition expander.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-07T11:21:46.793-0500",
      "body": "Changed affect version to 1.3.1.\n"
    }
  ]
}
---
A crucial capability required alongside the existing "repetition expander" is the ability for conditional inclusion and selection of components.

        