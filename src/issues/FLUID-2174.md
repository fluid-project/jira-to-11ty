---json
{
  "title": "FLUID-2174",
  "summary": "Layout Reorderer unit test 7.1 fails",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-01-29T09:40:26.000-0500",
  "updated": "2009-01-30T08:45:07.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-01-29T14:26:07.000-0500",
      "body": "LayoutReorderer tests failed due to unexpected \"stray\" dependence on manual-tests area which was reorganised yesterday. Contents of file \"portlets.js\" has been folded into ModuleLayoutTestConstants, and the entirety properly namespaced, so that it could sensibly be included from other locations if required. As it happens, the contents of former \"portlets.js\" is no longer required.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-30T08:45:07.000-0500",
      "body": "Verified fix using:\n\nSafari 3.1 (Mac OS 10.5)\\\nIE 7 (Win Vista)\n"
    }
  ]
}
---
Layout Reorderer unit test 7.1 fails\
<http://build.fluidproject.org/fluid/tests/fluid-tests/LayoutReorderer-test.html>

Appears to have been broken at revision 6362

        