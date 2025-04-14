---json
{
  "title": "FLUID-1405",
  "summary": "Simplify automated acceptance testing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "assignee": "Justin Obara",
  "reporter": "Michelle D'Souza",
  "date": "2008-09-02T14:09:20.000-0400",
  "updated": "2024-07-22T11:20:17.060-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4049/",
      "key": "FLUID-4049",
      "summary": "Automate dynamic reorderer manual-test"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1405/fluid-1405-patch-automated-testing.txt",
      "filename": "fluid-1405-patch-automated-testing.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1405/fluid-1405-patch-automated-testing2.txt",
      "filename": "fluid-1405-patch-automated-testing2.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1405/fluid-1405-patch-automated-testing3.txt",
      "filename": "fluid-1405-patch-automated-testing3.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1405/fluid-1405-patch-update-to-inlineEdit.txt",
      "filename": "fluid-1405-patch-update-to-inlineEdit.txt"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-25T15:51:28.000-0400",
      "body": "doh robot has been improving their API. Justin is going to work with Joseph to learn more.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-17T16:23:30.000-0500",
      "body": "attached a patch \"fluid-1405-patch-automated-testing.text\" containing my current work on the automated testing framework. It  includes, the framework, some tests and the necessary doh files.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-25T12:01:25.000-0500",
      "body": "added fluid-1405-patch-automated-testing2.txt&#x20;\n\nupdates:\n\n* fixed scrolling issue (through a modification of the robot.js file)\n* added a pager test file\n* rewrote the comments&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-02T12:26:49.000-0500",
      "body": "fluid-1405-patch-automated-testing3.txt\n\nContains tests for: Image Reorderer, Inline Edit, Layout Reorderer, Pager, Sortable jQuery Tabs, and  Sortable Vertical Lists\n\nImplements a strategy to reset the test page after each test case\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-02T12:30:33.000-0500",
      "body": "fluid-1405-patch-update-to-inlineEdit.txt\n\nContains an update to expose the an initialization function.\n\nThe tests require this to reset the page after a test case\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-04-02T15:04:34.136-0400",
      "body": "Note that we should now be able to deal with this without such heavy machinery as the \"doh.robot\" - see comment re jQuery.simulate on <https://fluidproject.atlassian.net/browse/FLUID-4049#icft=FLUID-4049>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T11:20:16.853-0400",
      "body": "We haven’t experimented with the doh robot for quite some time. Tests are currently handled via automated unit tests or manual testing.\n"
    }
  ]
}
---
Justin has made significant progress in creating acceptance tests. Now we require a simplified way of writing the actual tests. One possibility is to use jqUnit in conjunction with the doh robot.

dev-iteration47

        