---json
{
  "title": "FLUID-5807",
  "summary": "Stack traces from framework exceptions are no longer rendered in node 4",
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
  "reporter": "Antranig Basman",
  "date": "2015-11-03T13:58:01.880-0500",
  "updated": "2016-07-08T09:04:42.459-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-11-03T14:09:30.396-0500",
      "body": "Discoveries so far - the corruption appears to be part of the PROCESS OF ACCESS TO THE STACK MEMBER ITSELF - for example, the following two lines within the constructor of fluid.FluidError(descended from an Error)\n\n```java\nthis.stack = new Error().stack;\r\n        console.log(this.stack);\n```\n\nshow the same truncated stack - that is, the one belonging to the prototype, not ours. One wonders what is so tough about member access that the node team cannot get it right.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-11-04T08:39:39.302-0500",
      "body": "Simplified implementation available in new pull request\n"
    }
  ]
}
---
node 4.2.x LTS will be our core supported version of node.js for the upcoming year or two. Moving up to it has revealed that it uses a new and malign scheme for finding stack traces attached to "Error" objects that means that these no longer render properly for instances of fluid.FluidError, our standard framework Error class.

This is currently implemented by the following snippet:

```java
fluid.FluidError = function (message) {
        this.message = message;
        this.stack = new Error().stack; // line 174
    };
    fluid.FluidError.prototype = new Error(); // line 176
```

In new node 4.x, rather than getting the rendering of the "stack" attached as a member on line 174, we instead get the member attached to the prototype object at line 176.

The approach supplied in the following stackOverflow answer&#x20;

<http://stackoverflow.com/questions/8802845/inheriting-from-the-error-object-where-is-the-message-property#answer-17936621>

appears to work fine, but it is rather bulky and presumably not all the plumbing is necessary. We should take a little time to see if we can characterise the situation a bit better.

        