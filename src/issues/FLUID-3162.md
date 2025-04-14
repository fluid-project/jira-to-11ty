---json
{
  "title": "FLUID-3162",
  "summary": "Add the Infusion Builder to the Fluid daily build server",
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
  "reporter": "Laurel Williams",
  "date": "2009-09-08T14:04:44.000-0400",
  "updated": "2009-12-11T12:49:13.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3160/",
      "key": "FLUID-3160"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T12:45:29.000-0500",
      "body": "The Infusion builder is available on the daily build server here:\n\nbuilder: <http://build.fluidproject.org:8095/incubator/custom-build/trunk/docs/infusion-builder/html/CustomBuild.html>\\\nunit tests: <https://source.fluidproject.org/svn/incubator/custom-build/trunk/docs/infusion-builder/tests/html/customBuild-tests.html>\n\nphp unit tests are not yet available due to the php unit testing framework not being compiled into the php version on this server. see <https://fluidproject.atlassian.net/browse/FLUID-3160#icft=FLUID-3160>\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T12:46:25.000-0500",
      "body": "Except for the providing the php unit tests (<https://fluidproject.atlassian.net/browse/FLUID-3160#icft=FLUID-3160>), the Infusion Builder is available on the daily build server.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T12:51:44.000-0500",
      "body": "need to configure the software for the build server.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T14:43:18.000-0500",
      "body": "Don't forget to get the cleanup script working too.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-04T10:54:13.000-0500",
      "body": "* continuum build task for infusion builder\n  * check out\n  * run script to do build and deploy\n    * modify current deploy script or write new script to this deploy\n\n– check mysql, create database, user passwork\n\n– new tomcat, different port, deploy in separate web server, port number?\n\n– check in script for build deploy in infrastructure svn.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-04T17:59:34.000-0500",
      "body": "Bug Parade Builder 1.1.2\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-10T12:27:20.000-0500",
      "body": "Links to continuum and the daily build can be found at forge.fluidproject.org. The existing deploy script worked without any changes. The build should occur at 1:30am each morning.\n\nTo do:\n\n* ensure daily build schedule is adhered to - get Jamon to fix server time.\n* Improve home page for forge.fluidproject.org\n* Maybe add daily build and unit tests to pages at build.fluidproject.org\n* php unit tests may be able to run because simpletest is compiled into the php, but need to move the tests in the code structure for this to happen\n* update QA pages to point to the daily build.\n* add forge info to documentation\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-11T12:49:13.000-0500",
      "body": "The Builder is now running nightly at:\n\n<http://forge.fluidproject.org/infusionBuilder/html/InfusionBuilder.html>\n\nThe new Continuum instance is located here:\n\n<http://forge.fluidproject.org/continuum/groupSummary.action>\n\nI've filed separate JIRA issues for Laurel's list of minor to-dos, so this one is good to go for Builder 1.1.2\n"
    }
  ]
}
---
The Builder should be part of our regular daily build infrastructure for all production Fluid products. This should include the Builder PHP, JS, and unit test code.&#x20;

        