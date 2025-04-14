---json
{
  "title": "FLUID-4247",
  "summary": "Check licenses and copyrights for Infusion 1.4",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2011-05-17T12:13:14.078-0400",
  "updated": "2013-04-11T17:25:55.709-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T12:20:37.188-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-08T10:53:59.253-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/103> merged into project repo at fdd7f26fdc713ade66f4028cced04f4a89725f1e\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-29T11:05:56.231-0400",
      "body": "Justin, please take a quick look and see if we are done this task.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-09-30T14:37:46.815-0400",
      "body": "I've been working on this in a branch in my github fork <https://github.com/jobara/infusion/tree/FLUID-4247>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-30T14:44:17.267-0400",
      "body": "Justin mentioned in the channel that this is what is left to be done:&#x20;\n\n1\\) look through all the js and lib files in the src/webapp/tests directory and subdirectories \\\n2\\) wait to hear back from lahabana about his code contribution copyright \\\n3\\) we need to write up the changes that we made jscssp (you can look at the fast-xml pull as an example of how to document this) \\\n4\\) make sure the readme/release notes are up-to-date with the licences\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-10-03T12:45:30.517-0400",
      "body": "Sent a pull request <https://github.com/fluid-project/infusion/pull/180>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-10-03T15:50:15.521-0400",
      "body": "Merged into project repo at 521c4d7f6a9b26896ed334bde56e502ad07e92e7\n"
    }
  ]
}
---
Ensure all javascript files have a license and copyright. Also make sure thirdparty code is compatibly licensed and a license file is included in the same directory as the code.

        