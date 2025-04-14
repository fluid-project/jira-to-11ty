---json
{
  "title": "FLUID-4918",
  "summary": "Create new component record element \"members\" to automate transfer of IoC resolved material to component top level",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-02-19T05:43:59.102-0500",
  "updated": "2014-03-03T12:26:33.340-0500",
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
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4930/",
      "key": "FLUID-4930"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:50:14.866-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
The ultimate aim of the framework is to enable the great majority of component implementation to proceed without the requirement for code outside a collection of "free functions" whose content we imagine to be ultimately bounded. A good deal of the "busywork" in tradition component creator functions (moved by the middle-age framework out of component creator functions into initFunctions) consists of simply transferring some material, usually out of the component's options or perhaps the DOM binder, into a top-level member of the component where it is used as either a "cache" or a "crypto-model" that the component uses to track its internal state. A declarative directive to automate this busywork would help us slim down the code in these creator functions as well as improving the self-documenting nature of the component.

The new section will be called "members" and will consist of a simple hash with the following structure:&#x20;

members: {\
member1: "{that}.options.optionsValue",\
member2: "{theOther}.dom.otherSelector",\
etc.

The RHS of each member of this structure will be evaluated as an IoC expression and assigned to the top-level component path held on the LHS. Whereas an "invoker" creates a method which may be called repeatedly, an element of "members" is evaluated only once upon component construction. Naturally the RHS may contain an expander definition, which may perhaps itself resolve onto an invoker, etc. - normal rules of the FLUID-4330 "ginger world" will apply.

        