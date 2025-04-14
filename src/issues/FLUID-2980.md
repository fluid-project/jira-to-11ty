---json
{
  "title": "FLUID-2980",
  "summary": "Renderer decorators can only be attached to one node at a time",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2009-07-03T10:12:02.000-0400",
  "updated": "2009-10-04T23:38:26.000-0400",
  "versions": [
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2962/",
      "key": "FLUID-2962",
      "summary": "Ready core framework for use on server-side"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-22T08:33:22.000-0400",
      "body": "I'm noticing that only the first use of the fluid decorator, in a component tree, will render a fluid component\n\nAttempting to have multiple sibling nodes in a component tree call the fluid decorator, will result in only the first one actually rendering out the component.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-09-22T08:33:43.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-10-01T01:03:41.000-0400",
      "body": "I made a test case for this issue, but cannot so far make it fail - could you supply more details of a failing case? \\\nCheers,\\\nantranig.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-10-01T14:14:39.000-0400",
      "body": "Fixed at revision 8193 with the following comment:\n\n<https://fluidproject.atlassian.net/browse/FLUID-2980#icft=FLUID-2980>, <https://fluidproject.atlassian.net/browse/FLUID-2962#icft=FLUID-2962>: Fixes and test case for multiple decorator issue. This was actually caused by failure of re-entrancy in the renderer, which was being invoked recursively in the case where the fluid decorator designated a component which itself invoked the renderer. Establishing reentrancy for the renderer actually puts this work also under the heading of <https://fluidproject.atlassian.net/browse/FLUID-2962#icft=FLUID-2962> which required to enable the renderer for multi-threaded access for use on the server-side, which work had been incomplete but seen as lower priority for this release until now. This reorganisation creates a new top-level API fluid.renderer which follows the \"that-ist\" convention that is now standard for the framework, but which had not been in place when the renderer was initially designed. The original low-level API fluid.renderTemplates is preserved for backwards compatibility, but should be deprecated in a future release - in this implementation, it forwards to an invocation of the that-ist API which can be \"stealthed\" for this release but which should be advertised in future ones. The fluid.renderTemplates API does not provide any mechanism for decorators to be honoured - but it never did in any case, so this behaviour remains consistent. More thought and design is needed over future releases to create a family of strategies for honouring decorators, which will become very important as they begin to be used more cooperatively between client and server with the implementation of Kettle.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-02T15:39:35.000-0400",
      "body": "I've reviewed this fix as well as I can. It was a bit difficult given the amount of change in the file. I have tested the renderer demos and ran the tests and all of that is fine.&#x20;\n"
    }
  ]
}
---
Right now, the process of adding a decorator to a node will only add the decorator to one node at a time.

        