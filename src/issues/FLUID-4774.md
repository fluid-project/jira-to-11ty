---json
{
  "title": "FLUID-4774",
  "summary": "Create a wiki page describing the \"all tests\" feature of Infusion's test suite, and how to maintain it",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2012-08-17T18:28:10.239-0400",
  "updated": "2024-07-31T07:40:52.184-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Tech. Documentation",
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4753/",
      "key": "FLUID-4753",
      "summary": "Upgrade qunit to jquery's trunk, as well as introducing \"composite\" plugin for running all framework tests at a glance"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-31T07:40:42.818-0400",
      "body": "The all tests files document a search command for locating tests files. It would still be better to have a way of generating these automatically, but in the meantime this is probably sufficient documentation. Or at least it has been so far.&#x20;\n"
    }
  ]
}
---
The new version of QUnit, which we have recently upgraded to, brings with it the excellent feature of allowing us to run all our tests on a single page. The only caveat with this feature is that it requires us to manually keep a list of test files up to date in the all-test.html file.

In the long run, we'll upgrade our build scripts to do this automatically with Grunt. In the meantime, a wiki page might help.

        