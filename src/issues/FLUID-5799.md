---json
{
  "title": "FLUID-5799",
  "summary": "Reduce fragility of standard workflow of fluid-publish",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2015-10-27T11:59:50.751-0400",
  "updated": "2018-03-15T14:59:38.158-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts",
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-11-27T10:33:09.889-0500",
      "body": "Have started working on this in my <https://github.com/jobara/fluid-publish/tree/FLUID-5799> branch.\n\ni) added an option to specify the remote name, it will default to \"upstream\" but can be changed via the --options command line argument.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-08-04T15:17:22.872-0400",
      "body": "Talked more about this in the IRC channel today ( <https://botbot.me/freenode/fluid-work/2016-08-04/?msg=70783796&page=1> ). Will add templates for the hints as well and output those when an error occurs.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-15T14:59:33.166-0400",
      "body": "PR ( <https://github.com/fluid-project/fluid-publish/pull/5>  ) merged into the project repo.\n"
    }
  ]
}
---
The "standard" workflow of fluid-publish is a bit fragile -&#x20;

i) it depends on the existence of a git remote named "upstream" - at the very least we should document this clearly, and, if possible, add a CLI task that can take this as a copy from an existing remote in order to assist the user

ii) if part of the workflow is already complete, the plugin will bomb out -&#x20;

$ node publish.js --standard\
fatal: tag 'v1.1.0' already exists\
child\_process.js:484\
throw err;\
^

Error: Command failed: git tag -a v1.1.0 -m 'Tagging the 1.1.0 release'\
fatal: tag 'v1.1.0' already exists

In cases like this there should be some assistance to the user in how they could get the task to run - perhaps a command hint that they could run to get the repo into a suitable condition

iii) It would be nice if the default behaviour of the plugin in all cases was to echo commands that it was executing to the terminal as an indicator of progress

        