---json
{
  "title": "ENGAGE-335",
  "summary": "Review lingering changes in ResourceUtils.java and env.js in My Collection branch",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-02-08T11:53:42.000-0500",
  "updated": "2014-03-03T14:12:53.407-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-335/ENGAGE-335.patch.txt",
      "filename": "ENGAGE-335.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-08T11:54:56.000-0500",
      "body": "Here is a patch containing the relevant changes.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-02-12T18:36:28.000-0500",
      "body": "Thanks for assembling this patch, Colin. I can confirm that the functionality that it addresses is already in trunk.\n"
    }
  ]
}
---
While merging Sveto's My Collection branch, there are a couple of changes to ResourceUtil and env.js that may or may not be relevant anymore. They appear to be connected with ENGAGE-213, so I'm assuming these changes are actually out of date and the underlying issue was resolved with Antranig's fix based on Sveto's original patch.

Antranig, can you take a look at these changes and confirm whether or not they need to be merged?

        