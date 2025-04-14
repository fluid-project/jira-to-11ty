---json
{
  "title": "ENGAGE-168",
  "summary": "All the Engage modules in SVN should be inside an \"engage\" folder, rather than just floating inside /fluid/",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2009-10-22T18:43:09.000-0400",
  "updated": "2009-11-10T15:21:20.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-70/",
      "key": "ENGAGE-70",
      "summary": "The fluid-all externals are named ambiguously and the Eclipse projects for engage-server and engage-client are incorrectly named"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-11-03T16:26:11.000-0500",
      "body": "Also the eclipse projects should have the same name as the folders\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-10T15:21:20.000-0500",
      "body": "This appears to have been fixed.\n\n<http://source.fluidproject.org/svn/fluid/engage/>\n"
    }
  ]
}
---
At the moment, all of the Engage-related code modules are located directly inside the <http://source.fluidproject.org/svn/fluid> directory. Just to make things a bit clearer, we should nest them inside a fluid/engage directory.

        