---json
{
  "title": "FLUID-4568",
  "summary": "Separate dependence of core framework on jQuery",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-12-13T01:51:57.775-0500",
  "updated": "2012-01-20T16:50:11.235-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-01-20T16:50:11.232-0500",
      "body": "Merged into the project repo at 1e7f0d8f071a69ef5d9cd75e18fc0fe3da170622 with several framework change issues:\n\n<https://fluidproject.atlassian.net/browse/FLUID-4525#icft=FLUID-4525>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4532#icft=FLUID-4532>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4537#icft=FLUID-4537>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4539#icft=FLUID-4539>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4564#icft=FLUID-4564>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4563#icft=FLUID-4563>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4568#icft=FLUID-4568>\n"
    }
  ]
}
---
A number of use cases have emerged over time where it would be better to have a looser coupling between the core framework and jQuery utilities. The most immediate is the use of Infusion as part of the server-side within node.js for Cloud4All. Whilst we have historically maintained a "fake DOM" approach to allowing jQuery to boot up to support the core framework, this is becoming increasingly expensive as the relevant libraries (jsdom, etc.) are quite unstable and every upgrade seems to cause an expensive maintenance cycle.\
Also, there are other use cases where the expense of loading jQuery when no DOM-dependent operations are required might be avoided, as well as perhaps cases whether other frameworks' core functions might become desirable (e.g. upcoming YUI version).

The idea suggested today was to create a "standalone jQuery" implementation which just "mocks up" (or rather, "implements") the few features of jQuery (inArray, extends) which are required by the non view-dependent parts of the core framework. On the serverside, this mock can extended with features supporting node-based I/O in place of jQuery AJAX functions.

        