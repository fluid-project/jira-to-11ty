---json
{
  "title": "FLUID-4049",
  "summary": "Automate dynamic reorderer manual-test",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Michelle D'Souza",
  "reporter": "heidi valles",
  "date": "2011-02-02T14:17:05.768-0500",
  "updated": "2014-04-02T15:04:34.053-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3904/",
      "key": "FLUID-3904",
      "summary": "Review and clean up manual-tests and escalated-tests"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1405/",
      "key": "FLUID-1405"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5103/",
      "key": "FLUID-5103"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-02-09T03:49:06.678-0500",
      "body": "It might also be useful to take this opportunity to create an automated test covering mouse-based interaction for the Reorderer which is something, like the issue reported here, which can often fall between the cracks until we get around to running some manual tests again. It seems that since we wrote the Reorderer, improvements in the \"jquery simulate\" plugin (currently held here: <https://github.com/jquery/jquery-simulate> ) have made it much more straightforward to produce test cases simulating complex mouse interactions, including dragging.\n"
    }
  ]
}
---
Turn the following from a manual-test to automated.

From readme:

Dynamic Reorderer  - this will be turned into a unit test\
To run this test:\
1\. open dynamic-reorderer.html in a browser\
2\. move one of the items to a different place in the list\
3\. click the new div button\
4\. move the item above the new div to below the new div\
5\. move the new div to a different place in the list

        