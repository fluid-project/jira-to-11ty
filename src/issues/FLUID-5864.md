---json
{
  "title": "FLUID-5864",
  "summary": "Export functionality for the UIO and GPII integration",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2016-02-16T11:22:12.740-0500",
  "updated": "2024-07-23T11:04:29.074-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-02-23T14:52:56.976-0500",
      "body": "In progress work is at <https://github.com/cindyli/infusion/tree/FLUID-5837>\n\nRefer to <https://issues.fluidproject.org/browse/FLUID-5837#comment-29521> for details.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T11:04:28.936-0400",
      "body": "GPII is no longer supported\n"
    }
  ]
}
---
Implement the functionality of the export button: collect and prepare the UIO-adjusted preference set to the server. This functionality covers scenario 1, 2 in the wireframe:

<https://www.dropbox.com/s/i4c3pni6cnnwuts/uioptions%20GPII%20integration.pdf?dl=0>

As the server side used to communicate with the UI Options is still in the discussion and planning stage, this implementation does not include the part that sends http requests to the server to update the preference set.

        