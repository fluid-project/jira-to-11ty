---json
{
  "title": "DECA-141",
  "summary": "Path for some images in markup are incorrect",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "James Yoon",
  "reporter": "James Yoon",
  "date": "2010-07-14T13:40:40.163-0400",
  "updated": "2010-07-15T09:54:45.611-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Calibration",
    "Capture",
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-07-14T15:05:40.869-0400",
      "body": "Bug Parade Decapod 0.4&#x20;\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-07-14T15:09:07.390-0400",
      "body": "Fixed here: <http://bitbucket.org/jameswy/decapod-ui/changeset/85d66f5a7b56>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-07-15T09:54:45.603-0400",
      "body": "Reviewed james' changes and pushed to the master.&#x20;\n"
    }
  ]
}
---
After the style refactoring, some of the image paths are pointing in the wrong place (e.g., profiling cameras indeterminate progress indicator is pointing to a child directory, but it was moved to the shared images directory)

        