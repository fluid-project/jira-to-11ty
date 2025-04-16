---json
{
  "title": "FLUID-5932",
  "summary": "When running grunt from a downloaded ( zip file ) infusion, a git error thrown",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-07-20T14:44:48.460-0400",
  "updated": "2019-07-12T09:15:21.112-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-07-20T14:47:09.296-0400",
      "body": "The issue is likely that the grunt build now adds the git hash that the build was created from, however the zip download is not a git repo and does not have the ability to run git commands.\n\nsee: <https://github.com/fluid-project/infusion/commit/c02f46714a773e88ca1bd59cb22acbe05675f43a>\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2016-07-21T13:40:52.849-0400",
      "body": "Justin Obara, I was unable to provision a test environment using Infusion master due to the issue you mentioned above:\n\n```java\nfatal: Not a git repository (or any parent up to mount point /tmp)\r\nStopping at filesystem boundary (GIT_DISCOVERY_ACROSS_FILESYSTEM not set).\r\nLoading \"Gruntfile.js\" tasks...ERROR\r\n>> Error: Command failed: git rev-parse --verify --short HEAD\r\n>> fatal: Not a git repository (or any parent up to mount point /tmp)\n```\n\nThe `vagrant up` process is affected because we run provisioning commands in a temporary directory as part of a [VirtualBox Windows shared folder workaround](https://github.com/idi-ops/ansible-nodejs/blob/master/tasks/configure.yml#L31-L39). `.git` directories are not copied in an effort to speed up the overall provisioning process. [Your changes](https://github.com/fluid-project/infusion/pull/729) allow for successful `vagrant up` runs.\n\nI did however see the following test fail when I ran `grunt tests`:\n\n```java\nnot ok 24 Firefox 47.0 - Framework Tests: ./framework-tests/preferences/html/SeparatedPanelPrefsEditor-test.html\r\n    ---\r\n        stack: >\r\n            runLoggingCallbacks@http://localhost:7357/105/tests/lib/qunit/js/qunit.js:1609:4\r\n            .pushFailure@http://localhost:7357/105/tests/lib/qunit/js/qunit.js:996:3\r\n            window.onerror@http://localhost:7357/105/tests/lib/qunit/js/qunit.js:1242:4\r\n\r\n        message: >\r\n            Prefs editor with composite panel: Rendering: NS_ERROR_NOT_AVAILABLE:\r\n        Log: |\r\n    ...\n```\n\nAre you able to reproduce this?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-22T09:46:59.501-0400",
      "body": "Avtar Gill I tried this out using the \"grunt tests\" facility and also running the test directly in Firefox on Mac OS. I was unable to reproduce the test failure you mentioned. I even destroyed and rebuilt the vagrant VM used by \"grunt tests\".\n"
    }
  ]
}
---
Steps to reproduce:

1\) Download a zip file of the infusion repo\
<https://github.com/fluid-project/infusion>

2\) Extract the zip and open the directory

3\) run "npm install" from a command line from within the infusion directory

4\) run "grunt" from a command line from within the infusion directory\
Notice a git error is thrown.

Error:

fatal: Not a git repository (or any of the parent directories): .git\
Loading "Gruntfile.js" tasks...ERROR\
Error: Command failed: git rev-parse --verify --short HEAD\
fatal: Not a git repository (or any of the parent directories): .git

        