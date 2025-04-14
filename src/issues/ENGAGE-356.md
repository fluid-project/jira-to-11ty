---json
{
  "title": "ENGAGE-356",
  "summary": "Message Bundles are not being located for the standalone (war file) version, for services using spouts",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jess Mitchell",
  "reporter": "Justin Obara",
  "date": "2010-02-08T17:26:52.000-0500",
  "updated": "2014-03-03T14:12:32.294-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-324/",
      "key": "ENGAGE-324"
    },
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-319/",
      "key": "ENGAGE-319"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-08T17:27:34.000-0500",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-02-12T19:21:15.000-0500",
      "body": "I am investigating this, but currently finding this working on a standalone build on Windows.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-02-13T02:17:35.000-0500",
      "body": "Apparently an issue due to spurious removal of leading \"/\" in a pathname when roundtripping through canonicalisation functions. Believed resolved at rev 9397\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-02-18T12:55:34.000-0500",
      "body": "Now appears fixed on the daily build site by the commit at 9426.\n"
    }
  ]
}
---
Message Bundles are not being located for the standalone (war file) version, for services using spouts.

This means that the default strings will appear and the component will not be internationalized.

It appears that this may have something to do with the path rewriting as it is working fine in the local version.

        