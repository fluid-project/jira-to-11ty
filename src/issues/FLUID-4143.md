---json
{
  "title": "FLUID-4143",
  "summary": "Due to recent framework changes, Uploader is broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2011-03-14T11:24:30.790-0400",
  "updated": "2011-04-21T13:13:23.307-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-03-14T17:42:56.916-0400",
      "body": "Fixed in the project repo at revision <https://github.com/fluid-project/infusion/commit/30917aa779fef4e4e03305fc75c24dde642378ea>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-03-15T11:27:57.635-0400",
      "body": "Unit tests are still borked\n"
    }
  ]
}
---
Recent changes to the Infusion framework--likely the event binding feature--has caused Uploader to regress.

Mon Mar 14 2011 11:22:27 GMT-0400 (EDT): Malformed context reference without }\
Fluid.js (line 91)\
Mon Mar 14 2011 11:22:27 GMT-0400 (EDT): Instantiator stack -1 to 3 for fluid.uploader.fileQueueView\
Fluid.js (line 91)\
Mon Mar 14 2011 11:22:27 GMT-0400 (EDT): Instantiator stack -1 to 2 for fluid.uploader.fileQueueView\
Fluid.js (line 91)\
Mon Mar 14 2011 11:22:27 GMT-0400 (EDT): Instantiator stack -1 to 1 for fluid.uploader.multiFileUploader\
Fluid.js (line 91)\
Mon Mar 14 2011 11:22:27 GMT-0400 (EDT): Instantiator stack -1 to 0 for fluid.uploader\
Fluid.js (line 91)\
Mon Mar 14 2011 11:22:27 GMT-0400 (EDT): Clearing instantiator with id 11 from threadLocal for end of fluid.uploader\
Fluid.js (line 91)\
message.fail is not a function\
\[Break On This Error] message.fail(); // Intenti...r by invoking a nonexistent function.\
Fluid.js (line 57)\
Issues with trunk Firefox for Firebug: <http://getfirebug.com/knownissues>

On casual inspection, it appears to be caused due to event-related brittleness in the Uploader's FileQueueView.

        