---json
{
  "title": "FLUID-3757",
  "summary": "Code cleanup for release 1.3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2010-09-26T04:47:57.986-0400",
  "updated": "2011-01-17T09:55:39.911-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3905/",
      "key": "FLUID-3905"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3757/FLUID-3757-delint-Escalated-tests-js.patch",
      "filename": "FLUID-3757-delint-Escalated-tests-js.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3757/FLUID-3757-delint-frameworkTests.patch.txt",
      "filename": "FLUID-3757-delint-frameworkTests.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3757/FLUID-3757-delint-renderer.patch.txt",
      "filename": "FLUID-3757-delint-renderer.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3757/FLUID-3757-jslint_componenttest.patch.txt",
      "filename": "FLUID-3757-jslint_componenttest.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3757/FLUID-3757-jslint_standalondemos.patch.txt",
      "filename": "FLUID-3757-jslint_standalondemos.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3757/FLUID-3757-lintingFramework-DOMUtil-Doc-Debug.patch.txt",
      "filename": "FLUID-3757-lintingFramework-DOMUtil-Doc-Debug.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3757/jslint_manualtests.patch",
      "filename": "jslint_manualtests.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3757/jslint_testcore.patch",
      "filename": "jslint_testcore.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:00:46.598-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-14T17:52:22.517-0500",
      "body": "JS linted bottom 3 framework files\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-14T18:01:38.139-0500",
      "body": "This file (FLUID-3757-lintingFramework-DOMUtil-Doc-Debug.patch.txt) delints the following framework files: FluidDOMUtilities.js, FluidDocument.js, FluidDebugging.js\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-14T18:11:22.391-0500",
      "body": "This file (FLUID-3757-jslint\\_standalondemos.patch.txt) is Heidi's de-linting of the stand-alone demos.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-14T18:16:11.652-0500",
      "body": "This file (FLUID-3757-jslint\\_componenttest.patch.txt) is Heidi's patch for the component test files. I'm not sure if it covers **all** of the tests - Heidi had to leave.\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-12-15T10:41:21.247-0500",
      "body": "linting for /tests/manual-tests attached\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-12-15T10:42:08.613-0500",
      "body": "Yes, component test patch is for entire dir\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-15T10:48:32.147-0500",
      "body": "This file (FLUID-3757-delint-frameworkTests.patch.txt) contains the de-linting of all JS files in the framework-tests folder. Not all files required changes.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-15T11:50:48.689-0500",
      "body": "I've reviewed and committed Heidi's delinting of the component tests.\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-12-15T12:05:38.260-0500",
      "body": "delinting of /tests/test-core patch\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-15T12:27:01.616-0500",
      "body": "I've reviewed and committed Heidi's patch that de-lints the test-core folder.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-15T12:36:19.385-0500",
      "body": "I've reviewed and committed Heidi's de-linting of the standalone demos.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-15T16:21:03.654-0500",
      "body": "Mike has linted some of the other framework files - he'll attach the patch after 1.3 QA\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-17T09:55:20.117-0500",
      "body": "Linting performed except for the framework code, which will be done for 1.3.1.\n"
    }
  ]
}
---
Clean up comments, ensure public APIs are fully commented and JSLint new javascript files.\
Note that this issue should only be in force before Code Freeze. Commits that alter actual code should not be permitted during Code Freeze.

        