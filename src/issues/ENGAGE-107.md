---json
{
  "title": "ENGAGE-107",
  "summary": "Engage should use a single app/servlet approach to reduce duplication among handlers and resolve problems with URL routing.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-10-05T20:58:38.000-0400",
  "updated": "2009-11-03T11:56:03.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Artifact View",
    "Browse",
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-107/ENGAGE-107-engage-client.patch",
      "filename": "ENGAGE-107-engage-client.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-107/ENGAGE-107-kettle.patch",
      "filename": "ENGAGE-107-kettle.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-05T21:01:50.000-0400",
      "body": "Here are two patches, one for the kettle directory and one for engage, which implement a nearly-working version of this fix.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-06T13:30:59.000-0400",
      "body": "Bug Parade Engage 0.1&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-06T14:24:24.000-0400",
      "body": "This issue should also address issues of duplication within Engage, including things like the fact that Browse and Artifact have very similar, yet separate code.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-09T18:32:31.000-0400",
      "body": "This issue was resolved by my commits to engage-server and -client at r8258 and 8259, with subsequent tweaks from Yura and Antranig.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:56:03.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
At the moment, Engage is structured awkwardly, causing problems with URL routing and more. We register each Engage handler (artifact View, browse, and each of their couch data feeds) as separate servlets in web.xml, then creating separate Kettle apps for each.

In practice, we should have a single Kettle app for the whole of Engage, and each of the handler logic should be initialized by the app or the framework.

Mounting shared resources such as Infusion or Engage Client should also be done once in the App, not in each handler init.

        