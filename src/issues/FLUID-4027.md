---json
{
  "title": "FLUID-4027",
  "summary": "jqUnit appends div with main id to div with main id for all consequent (after the initial one) tests that fetchTemplate.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "y z",
  "date": "2011-01-07T16:18:57.735-0500",
  "updated": "2011-06-22T17:12:27.159-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4027/FLUID-4027.patch.txt",
      "filename": "FLUID-4027.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2011-01-07T16:20:34.226-0500",
      "body": "Apply to jqUnit.js&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:48:19.379-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-20T16:36:04.047-0400",
      "body": "Yura's fix was merged into the project repo at 73025e5319598d0fa500c474cc0af526ef558434\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-22T17:12:27.156-0400",
      "body": "already in project repo, see previous comment\n"
    }
  ]
}
---
Currently testCase.fetchResources caches the container with fetchedTemplate inside so during the consequent tests it appends this container's clone to the container in the dome and thus incorrectly nests the same divs with id main inside each other.

        