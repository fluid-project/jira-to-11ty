---json
{
  "title": "FLUID-5127",
  "summary": "Implement \"compact syntax\" for invokers, expanders and listener definitions",
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
  "date": "2013-09-09T04:48:48.252-0400",
  "updated": "2014-03-03T11:28:50.021-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2013-09-17T15:01:24.691-0400",
      "body": "Reviewed and pushed to master at rev 74ac01a0cd935ca17cc646b3c0ff8fcdf42d0c1c.\n"
    }
  ]
}
---
The current "full syntax" for writing invoker, expander and listener declarations in IoC configuration is quite verbose and in particular extends over a significant amount of vertical whitespace - in general it is not possible to write one of these definitions in fewer than 4 lines. I believe it would significantly ease the burden of starting to use the framework for newcomers and other "people in a hurry" if we supported a compact, function-call-like syntax for these cases that would allow these definitions to be written in a single line. This would always just be a shorthand for the full JSON syntax and would be unpacked to its JSON-equivalent form before it was interpreted by the framework.

Suggested syntax:

invokers: {\
myInvoker: "fluid.thing.function({that}, {arguments}.0)",\
}\
listeners: {\
myEvent: "{that}.myInvoker({context}.thing, {arguments}.1)"\
}\
members: {\
myValue: "!expand:{that}.myInvoker({context}.otherValue)"\
}

To avoid encoding ambiguity, this syntax could only be used where all of the arguments were strings or direct IoC expressions. If the user requires to supply literal arguments of other JSON types, the full syntax must be used.

        