---json
{
  "title": "FLUID-3045",
  "summary": "fluid.initSubcomponents() should probably throw an Error if the type of the subcomponent has not been properly defined in the parent component's options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2009-07-16T15:49:18.000-0400",
  "updated": "2014-03-03T14:26:45.120-0500",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
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
      "author": "Colin Clark",
      "date": "2010-03-30T19:18:01.000-0400",
      "body": "This issue is filed against 1.5 because it is largely a concern for the new IoC system.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-05-25T05:39:51.419-0400",
      "body": "The current implementations of \"fluid.initSubcomponents\" as well as \"fluid.initDependent\" will indeed throw an error if no type is defined for the component. fluid.initSubcomponent itself and related functions will be deprecated for Fluid 1.9 and removed for Fluid 2.0\n"
    }
  ]
}
---
At the moment, if a type isn't defined for a subcomponent within its parent's options, initSubcomponent() returns undefined. Any attempt to call the resulting subcomponent will of course cause an error. Perhaps we should explicitly throw an error?

Here's a snippet of the implementation:

fluid.initSubcomponents = function (that, className, args) {\
var entry = that.options\[className];\
if (!entry) {\
return;\
}

        