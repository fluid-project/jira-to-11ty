---json
{
  "title": "ENGAGE-213",
  "summary": "Kettle: Browser environment env.js doesn't send HTTP body",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Svetoslav Nedkov",
  "date": "2009-12-10T12:10:34.000-0500",
  "updated": "2014-03-03T14:17:51.022-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": "Kettle, Rhino, env.js\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-213/ENGAGE-213.patch",
      "filename": "ENGAGE-213.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-213/ENGAGE-213-demonstration.patch",
      "filename": "ENGAGE-213-demonstration.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-213/env.js.patch",
      "filename": "env.js.patch"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-12-10T14:02:00.000-0500",
      "body": "Thanks so much for this report and patch, Sveto. I have taken the ideas from it and moved some of the implementation into pure Java code, where it is easier to have correct exception semantics. Some other existing code in env.js has also been subsumed into this, since it had a bare \"close\" statement which could have caused problems.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-12-15T03:55:36.000-0500",
      "body": "Fixed at revision 8879. However, we still need to upgrade to the \"B\" version of PonderUtilCore for some other minor fixes. A patch is supplied to demonstrate successful use of PUT to a Couch DB from Kettle.\n"
    }
  ]
}
---
The problem is that ajax calls through jQuery use the XMLHttpRequest object which exists for all modern browser but is supplied by a third party javascript for Rhino. This javascript called env.js in the version we are using in its XMLHttpRequest.send method doesn't send any payload through the connection - it writes out the HTTP headers and then jumps to read the response.

A patch will use the existing connection object, get an output stream from it and simply send the data after the HTTP headers are written.

        