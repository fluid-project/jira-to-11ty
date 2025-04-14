---json
{
  "title": "KETTLE-6",
  "summary": "Implement \"Kettle\", server-side Javascript framework, on the Rhino Platform",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2009-06-19T22:47:07.000-0400",
  "updated": "2010-08-19T18:26:46.269-0400",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-08-19T18:26:41.778-0400",
      "body": "Kettle, as a proof of concept, was successfully implemented on top of Rhino and Env.js. For the 0.3 release, we will move it to the faster Node.js environment and remove the dependency on Env.js\n"
    }
  ]
}
---
Server-side framework with user code written in pure Javascript, initially implemented using Fluid Renderer and CouchDB as back end.\
Use fluid.fetchResources -> jQuery.ajax for I/O, upon basic implementation of env.js for server-side browser mockup.

        