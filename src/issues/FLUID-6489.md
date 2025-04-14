---json
{
  "title": "FLUID-6489",
  "summary": "Poor content organisation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Source",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Bate martins",
  "date": "2020-04-11T08:44:29.417-0400",
  "updated": "2020-09-14T13:28:20.450-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": "OS: Ubuntu 18.04.4 LTS\\\nNode: 12.13.1\\\nChrome: 80.0.3987.122 (Official Build) (64-bit)&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2020-09-14T13:28:20.446-0400",
      "body": "This issue is now covered by <https://fluidproject.atlassian.net/browse/FLUID-6550#icft=FLUID-6550>.\n"
    }
  ]
}
---
Currently,documents are all mixed together irrespective of their front-matter categories(tutorials,infusion,etc). This becomes a big problem during development,developers cannot easily locate documents for a particular category,hence making development and debugging slow.

        