---json
{
  "title": "FLUID-2163",
  "summary": "Implement demo for \"sakai-site-setting\" to demonstrate Pager Renderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2009-01-23T18:48:28.000-0500",
  "updated": "2011-02-22T16:27:54.791-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-02-17T12:35:02.000-0500",
      "body": "Basic demo now implemented. It is somewhat slow, and needs work on the CSS, but most of the core functionality is now there, including sorting, paging, as well as the \"highlight upcoming column range\" feature which was specified in the wireframe. Will be polished and rounded out for the 1.0 release.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:54.790-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
This is a standard page which is held in the main Sakai repository at <https://source.sakaiproject.org/svn/ux/trunk/uxportal/src/main/webapp/site_setting_members.html> - various implementations have been produced using yui pager, jqgrid, tablesorter, etc. It would be useful to produce our own implementation of this screen to show how we are better.

        