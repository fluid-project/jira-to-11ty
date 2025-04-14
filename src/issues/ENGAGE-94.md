---json
{
  "title": "ENGAGE-94",
  "summary": "Ensure the template for artifact view is previewable from the file system",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Michelle D'Souza",
  "date": "2009-09-22T14:45:14.000-0400",
  "updated": "2009-11-03T11:54:23.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Artifact View",
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-22T14:48:13.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-24T14:37:17.000-0400",
      "body": "We'll need to move fluid.littleComponent() from Kettle into the Infusion framework as part of this issue.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-09T18:42:52.000-0400",
      "body": "Yura, another one for you--probably fixed, but take a look just in case.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:54:23.000-0500",
      "body": "Verified with Yura that this is ready to be closed\n"
    }
  ]
}
---
Currently there are two artifact view templates - we should consolidate the two template and ensure that it works both inside Kettle and when opened from the file system.&#x20;

        