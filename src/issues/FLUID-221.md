---json
{
  "title": "FLUID-221",
  "summary": "Finding elements by ID with jQuery should be done using the \"[id=\" + myId + \"]\" selector syntax, rather than \"#myId\" because of issues with special characters.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2008-02-06T17:07:41.000-0500",
  "updated": "2008-02-11T12:51:49.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-02-11T12:51:03.000-0500",
      "body": "There is function called jById in Fluid.js that will get a jQuery DOM node by id using this strategy. I updated the code and markup examples to use this function but did not update all the tests.&#x20;\n"
    }
  ]
}
---
The jQuery # selector will interpret any special CSS selector characters, such as . or :, as part of the selector. So for example, a query like this will fail unless the id has been escaped first.

\<div id="foo.bar" />\
jQuery ("#foo.bar");

On the other hand, the following selector will work without requiring the id to be escaped first:

jQuery ("\[id=" + "foo.bar" + "]");

The latter selector is probably simpler and easier to implement. Let's use it ubiquitously throughout the Reorderer

        