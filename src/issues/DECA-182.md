---json
{
  "title": "DECA-182",
  "summary": "Setup numbering of files in the file queue during import",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2011-10-24T10:45:46.934-0400",
  "updated": "2012-06-11T16:27:53.257-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-05-18T14:12:04.598-0400",
      "body": "no longer using this design.\n"
    }
  ]
}
---
The file queue should show the current placement of the file in the queue. As files are added/removed the numbers should be updated as needed.&#x20;

An example from the wireframes:\
<http://wiki.fluidproject.org/download/attachments/27497390/Decapod-0.5+-+import+2.png?version=2&modificationDate=1318360323105>

Possible implementation could be an numbered list.

        