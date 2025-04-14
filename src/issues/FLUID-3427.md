---json
{
  "title": "FLUID-3427",
  "summary": "At the moment, the PHP and JavaScript unit tests for Infusion aren't publicly visible on the daily build",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Colin Clark",
  "date": "2009-12-11T12:36:01.000-0500",
  "updated": "2009-12-15T12:21:50.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3427/FLUID-3427-1-patch.txt",
      "filename": "FLUID-3427-1-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-12-11T13:58:06.000-0500",
      "body": "Bug Parade Builder 1.1.2&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-14T11:18:34.000-0500",
      "body": "php unit tests are now available at:\\\n<http://forge.fluidproject.org/infusionBuilder/tests/php/PostClassTest.php>\\\n<http://forge.fluidproject.org/infusionBuilder/tests/php/ModuleClassTest.php>\\\n<http://forge.fluidproject.org/infusionBuilder/tests/php/BuilderUtilitiesClassTest.php>\\\n<http://forge.fluidproject.org/infusionBuilder/tests/php/GroupClassTest.php>\n\njs unit tests are available at:\\\n<http://forge.fluidproject.org/infusionBuilder/tests/html/InfusionBuilder-tests.html>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-14T17:50:44.000-0500",
      "body": "Here's a correct URL to the BuilderUtilities test:\n\n<http://forge.fluidproject.org/infusionBuilder/tests/php/BuilderUtilitiesTest.php>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-14T18:02:54.000-0500",
      "body": "I've reviewed all of Laurel's changes to the tests and the Ant deploy script for this issue, and they look good with one exception.\n\nLooking at the dependencies for the \"daily\" target, I notice that we depend on another target that backs up an old version of the Builder before proceeding with the deployment. I can see how this is very useful for real production builds--always keep a copy of the old, working version around while deploying a new version. But for a daily build, I wonder if this is necessary? Seems like one place where extra backup cruft will accumulate, forgotten?\n\nThoughts?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-15T12:21:50.000-0500",
      "body": "I've reviewed Laurel's third revision to this issue, which includes backups for the deploy stage but not the daily build, and it looks good. Good to go for the Builder 1.1.2 release.\n"
    }
  ]
}
---
Since we're using the standard deploy task, we're currently pruning out the JavaScript unit tests so that they're not visible on the daily build server. We also have the PHP tests outside of the public space, so they're not visible either. Steps to fix:

1\. Parameterize the unit test pruning action from the current deploy script so that it is an optional phase\
2\. Restructure the current directory layout so that the PHP unit tests are web-visible by default\
3\. Extend the test pruning target to also prune out the PHP tests upon deploy

        