---json
{
  "title": "FLUID-5863",
  "summary": "Import functionality for the UIO and GPII integration",
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
  "date": "2016-02-16T11:12:54.068-0500",
  "updated": "2024-07-23T11:03:50.828-0400",
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
      "date": "2016-02-23T14:53:21.522-0500",
      "body": "In progress work is at <https://github.com/cindyli/infusion/tree/FLUID-5837>\n\nRefer to <https://issues.fluidproject.org/browse/FLUID-5837#comment-29521> for details.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T11:03:50.686-0400",
      "body": "GPII is no longer supported\n"
    }
  ]
}
---
Implement the functionality of the import button: apply the received preference set to UI Options and the content. This functionality covers scenario 3, 4, 5 in the wireframe:

<https://www.dropbox.com/s/i4c3pni6cnnwuts/uioptions%20GPII%20integration.pdf?dl=0>

As the server side used to communicate with the UI Options is still in the discussion and planning stage, this implementation does not include the part that sends http requests to the server requesting the preference set but assumes the preference set is received.

        