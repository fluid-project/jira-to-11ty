---json
{
  "title": "FLUID-5475",
  "summary": "Improve diagnostics when framework is used within node.js",
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
  "date": "2014-07-17T14:14:43.094-0400",
  "updated": "2015-08-20T15:41:37.452-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Framework",
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-11-20T15:34:18.368-0500",
      "body": "Note that the node built-in utility utils.inspect is capable of safely rendering any kind of material if it is used manually, with the options util.inspect(...., {depth: null}) - this has to be imported explicitly and invoked manually to convert the material to a string -\n\n<http://nodejs.org/api/util.html#util_util_inspect_object_options>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-11-20T17:37:20.186-0500",
      "body": "Minor pull still open at <https://github.com/fluid-project/infusion/pull/556>\n"
    }
  ]
}
---
The diagnostics when the framework is used within node.js are frequently unhelpful, especially those from the IoC testing framework.

Many of these issues stem from the formatting strategy used by the default console.log implementation in node.js, which is based on their utility "util.inspect" -&#x20;

<http://nodejs.org/api/util.html#util_util_inspect_object_options>\
<http://stackoverflow.com/questions/21524415/node-console-log-util-inspect-for-nested-object-array>

Many test fixtures take the form of applying a jqUnit.assertDeepEq between compound objects - when these fail, the user is unhelpfully faced with a diagnostic of the form - \
expected: \[object Object] found: \[object Object]

which is of no help in understanding the issue.&#x20;

As well as this we should improve some cases when using the IoC testing framework where IoC resolution fails to locate a listener - this will produce diagnostics of the form "undefined has no member called apply" which similarly provides no help in understanding the cause of the failure.

We will make improvements to fluid.prettyPrintJSON, a long-standing utility in FluidDebugging.json, including robustifying it for dealing with the case of circularly linked structures, and provide a capped complex object trace controlled by a new framework option fluid.logObjectRenderChars , by default to supply complex object traces capped at 1024 characters.

        