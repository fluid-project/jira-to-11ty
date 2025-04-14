---json
{
  "title": "FLUID-572",
  "summary": "Reorderer: calls to document.writeln() while moving an item can cause the page to break.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Michelle D'Souza",
  "date": "2008-05-09T14:15:25.000-0400",
  "updated": "2008-09-08T10:40:05.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-572/jquery-tabs.html",
      "filename": "jquery-tabs.html"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-09T14:27:20.000-0400",
      "body": "There is a work around for this issue:  using jQuery.append instead of document.writeln worked as expected.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-12T10:49:18.000-0400",
      "body": "I'm uploading jquery-tabs.html which contains a small modification to the jquery reorderable tabs example from the Fluid samples that shows the issue.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-16T15:53:57.000-0400",
      "body": "There is now a manual test that shows the problem clearly. \\\n<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/jQueryDnD/writeln.html>\n\nTo recreate the issue, try to drag 'Item 1'.&#x20;\n\nI've opened a ticket in jQuery's Trac: <http://dev.jquery.com/ticket/2887>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-03T19:51:05.000-0400",
      "body": "Update: In upgrading to jQuery 1.2.6 and UI 1.5.1, I checked this jQuery ticket: It is still open, and the bug still seems to be present.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-31T16:18:13.000-0400",
      "body": "infusion-05-wishlist\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-31T17:47:18.000-0400",
      "body": "Apparently calls to document.writeln() is standard practice for almost everything Google has written.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:03:52.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476\n"
    }
  ]
}
---
This issue came up when the Reorderer was added to aTutor for reordering sections of the UI. The 'menu' section had script in it that did a 'document.writeln'. This code was executed at the same time as the item was being moved (using jQuery.after). The result was an empty page that didn't finish loading.

dev-iteration43

        