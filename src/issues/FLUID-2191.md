---json
{
  "title": "FLUID-2191",
  "summary": "Layout Reorderer unit test throws errors: using opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-02-04T09:08:37.000-0500",
  "updated": "2009-02-05T08:17:02.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-04T09:36:22.000-0500",
      "body": "It appears that these scripts, while called in script tags in the head, are not actually used in the tests\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-04T15:19:26.000-0500",
      "body": "Removed the import of two no longer existing script files&#x20;\n\nportlets.js and reordererLayoutTests.js\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-05T08:17:02.000-0500",
      "body": "Verified fix using:\n\nOpera 9.5 (Mac OS 10.5)\n"
    }
  ]
}
---
Layout Reorderer unit test throws errors

<http://build.fluidproject.org/fluid/tests/fluid-tests/LayoutReorderer-test.html>

All of the tests still  pass.

Opera Error log:

JavaScript - <http://build.fluidproject.org/fluid/tests/fluid-tests/manual/portal/portlets.js>

Linked script not loaded\
JavaScript - <http://build.fluidproject.org/fluid/tests/fluid-tests/js/ReorderLayoutTests.js>

Linked script not loaded

        