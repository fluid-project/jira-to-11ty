---json
{
  "title": "FLUID-4032",
  "summary": "Add perma comment to Infusion code",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-01-17T11:58:51.464-0500",
  "updated": "2011-01-17T14:22:11.793-0500",
  "versions": [],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-01-17T14:22:11.791-0500",
      "body": "Added the perma comment with the specified format  to the Fluid.js file, at r10461.\n"
    }
  ]
}
---
A perma comment can be used to keep a comment from being stripped out by the minifier. I believe the syntax is just to have \*! in front. (see jQuery's code for how to implement). We should put this at the top of the first linked file to place a comment over all of the Infusion code.&#x20;

It's probably adequate to have the comment as something such as the following:

Fluid Infusion vX.X.X

Infusion is distributed under the Educational Community License 2.0 and new BSD licenses: \
\<link>

For information on copyright, see the individual Infusion source code files: \
\<link>

        