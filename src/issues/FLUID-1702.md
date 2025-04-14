---json
{
  "title": "FLUID-1702",
  "summary": "Reorderer does not correctly account for dynamic changes in managed reordered list",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2008-10-23T11:49:55.000-0400",
  "updated": "2011-02-22T16:27:53.375-0500",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-10-23T11:52:45.000-0400",
      "body": "Fixed at revision 5808 with (manual) test case at <https://source.fluidproject.org/svn/fluid/components/trunk/src/webapp/tests/fluid-tests/manual/dynamic-reorderer/index.html>\\\nAutomated tests still required.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:53.373-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Despite being furnished with a "refresh" method, calling this method does not actually allow new reorderable elements to be correctly apprised by the reorderer. Original report in fluid-talk at <http://www.nabble.com/RE-initing-the-reorderer-td20000641.html#a20117323>

        