---json
{
  "title": "DECA-99",
  "summary": "Consolidate source code repositories",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2010-04-20T15:41:37.000-0400",
  "updated": "2010-06-14T15:08:08.202-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-04-29T13:10:08.000-0400",
      "body": "we have decided to move the ui code over to the mercurial repository in google code\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-04-29T15:22:47.000-0400",
      "body": "I have moved the ui and server code over to the mercurial repository\n\nold SVN repo: <https://source.fluidproject.org/svn/fluid/decapod/trunk>\n\nnew Mercurial Repos\n\nserver: <https://server.decapod.googlecode.com/hg>\\\nui: <https://ui.decapod.googlecode.com/hg>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-05T11:07:40.309-0400",
      "body": "Reopening because the previous work did not capture the majority of the history from the code's life in svn\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-05-14T13:44:47.354-0400",
      "body": "Now that we've moved the code into Mercurial, our next step should be to update the install documentation and scripts to reference the new location for our source code.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-17T13:02:51.619-0400",
      "body": "Updated the installation instructions to reference the googlecode repo for the checkout. <http://wiki.fluidproject.org/display/fluid/Download+and+Install+Decapod+0.3>&#x20;\n\nNote: The instructions may seem slightly strange. It is because I've added in a tag for the Decapod 0.3 release. However, at that time the ui and server code was still colocated and their was no subrepo for Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-06-14T15:08:08.200-0400",
      "body": "all relevant code has been moved from svn to hg at the decapod.googlecode.com\n"
    }
  ]
}
---
Consolidate current source code repositories in either mercurial or SVN.

        