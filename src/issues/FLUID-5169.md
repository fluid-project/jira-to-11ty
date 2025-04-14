---json
{
  "title": "FLUID-5169",
  "summary": "Dynamically contributed grades with defined invokers are not merged correctly.",
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
  "reporter": "y z",
  "date": "2013-10-03T16:32:34.807-0400",
  "updated": "2014-03-03T11:27:40.069-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-11-20T14:14:09.114-0500",
      "body": "Fix and test case merged into trunk at revision 04a85a4\n"
    }
  ]
}
---
Whenever we have a dynamic grade that has an invoker in its defaults definition, that invoker does not get resolved against the actual component instance that the dynamic grade is attached to.

This is very relevant for cases where we want to have a conditional invoker based on some dynamic grade resolution process.

The test case is attached here: <https://github.com/fluid-project/infusion/pull/413>

        