---json
{
  "title": "FLUID-3857",
  "summary": "Fix fluid.remove_if to work with arrays and objects.",
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
  "reporter": "y z",
  "date": "2010-11-18T22:56:52.062-0500",
  "updated": "2010-11-19T14:04:00.131-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3857/FLUID-3857.patch.txt",
      "filename": "FLUID-3857.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-11-18T22:57:59.175-0500",
      "body": "Hi Antranig, could you please review the patch with tests\n"
    },
    {
      "author": "y z",
      "date": "2010-11-19T00:52:25.088-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3857#icft=FLUID-3857>.patch.txt - final patch with updated names for the fluid.remove\\_if jqUnit assertions.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T13:13:47.287-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-11-19T14:04:00.129-0500",
      "body": "Applied and reviewed at revision 10296\n"
    }
  ]
}
---
Currently fluid.remove\_if only handles arrays as an argument to iterate over. We need to update the utility so it accepts both arrays and object structures.

        