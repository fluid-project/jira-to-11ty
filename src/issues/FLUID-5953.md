---json
{
  "title": "FLUID-5953",
  "summary": "Evaluate Testem and Sauce Labs integration",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Avtar Gill",
  "reporter": "Avtar Gill",
  "date": "2016-09-08T18:34:35.219-0400",
  "updated": "2019-11-06T15:53:22.863-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Avtar Gill",
      "date": "2016-09-08T19:43:42.244-0400",
      "body": "A WIP branch can be found here: <https://github.com/avtar/infusion/tree/FLUID-5953>\n\nIn order to use this work you'll need to create a `provisioning/secrets.yml` file using the example in that directory. The following commands can be then be used to start a test run with the browsers listed in the `tests/testem-saucelabs.json` configuration file:\n\n```java\nvagrant up\r\ngrunt saucelabs-tests\n```\n\nResults from a test run:\n\n<https://gist.githubusercontent.com/anonymous/4307adec728ebd762cd2c73a9f38b7f6/raw/cd3eb401a7199f7a9193bcf78259cc65705e5d6f/gistfile1.txt>\n\nChrome running on Windows 10 seems to be the only browser that passes all the tests. The Firefox failures can be observed while using the [IDI Windows 10 VM](https://github.com/idi-ops/packer-windows). The Edge test failure is covered by <https://fluidproject.atlassian.net/browse/FLUID-5862#icft=FLUID-5862>.\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2016-09-09T15:44:33.319-0400",
      "body": "It's possible to control a remote browser session by visiting the [Sauce Labs dashboard](https://saucelabs.com/beta/dashboard/tests) while tests are running. Alternatively you can start a manual session and visit the [Builds site](http://build.fluidproject.org/infusion/tests/all-tests.html).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-11-06T15:07:59.673-0500",
      "body": "@@Avtar Gill can this be closed?\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2019-11-06T15:53:04.471-0500",
      "body": "Yes, I'll go ahead and close it.\n"
    }
  ]
}
---
Infusion's master branch contains configuration required to spin up a Fedora VM for the purpose of running browser tests using Testem. This is a convenient way of performing quick test runs but having access to more browsers on different platforms, including mobile devices, would be preferable.

        