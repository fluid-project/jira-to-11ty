---json
{
  "title": "ENGAGE-70",
  "summary": "The fluid-all externals are named ambiguously and the Eclipse projects for engage-server and engage-client are incorrectly named",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-09-16T15:38:29.000-0400",
  "updated": "2009-11-23T15:21:31.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Kettle",
    "Mobile"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-88/",
      "key": "ENGAGE-88",
      "summary": "Create the directory structure for the Engage 0.1 release and move the relevant pieces from the incubator "
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-168/",
      "key": "ENGAGE-168"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-10-05T11:50:43.000-0400",
      "body": "Some experimentation shows that it is unreliable to name directories differently to project files within Eclipse - so to ensure consistency, the externals, as well as the project names align. It should not be necessary to rename the base SVN paths themselves - from the channel today:\n\n(09:18:05) colinclark: So we're all on the same page, you proposal is:\n\n(09:18:14) colinclark: fluid-all/\\\n(09:18:31) colinclark:     fluid-infusion/  -> <https://source.fluidproject.org/svn/fluid/infusion>\\\n(09:19:15) colinclark:   fluid-engage-client/ -> <http://source.fluidproject.org/svn/incubator/engage-client/trunk/>\\\n(09:19:33) colinclark:   fluid-engage-server/ -> <http://source.fluidproject.org/svn/incubator/engage-sketches/>\\\n(09:20:00) colinclark: And to go with this, we'll ensure that the client and server directories are properly named when we promote them from the incubator to core.\n\n(09:18:13) Bosmo1: But we would have to make sure that any project \"cross-links\" were made assuming the fluid- prefix was in place\\\n(09:18:36) Bosmo1: So, I left some things behind in the <https://fluidproject.atlassian.net/browse/ENGAGE-96#icft=ENGAGE-96> work that still assume the \"inter-project relative path\" is simply \"infusion\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-05T18:48:49.000-0400",
      "body": "Bug Parade Engage 0.1&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-19T12:32:13.000-0400",
      "body": "When this is done, the build scripts for Engage will need to be updated\n"
    }
  ]
}
---
At the moment, the externals in fluid all are named like this:

engage/ -> the client-side for Engage (JS code, components etc.)\
kettle/ -> the server-side for Engage, including the server-side portions of the Artifact VIew component and Kettle

These should be renamed:

engage-client/\
engage-server

Also, the Eclipse projects for both are misleading. Here's how they should be renamed:

MobileFSS -> fluid-engage-client\
fluid-engage-sketches -> fluid-engage-server

        