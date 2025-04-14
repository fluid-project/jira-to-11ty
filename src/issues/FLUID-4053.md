---json
{
  "title": "FLUID-4053",
  "summary": "A file queue test was not fixed when the default fileIdx value was changed from -1 to 0.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Mike Lam",
  "date": "2011-02-07T11:29:14.208-0500",
  "updated": "2011-02-10T13:16:24.553-0500",
  "versions": [],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-02-07T13:35:52.823-0500",
      "body": "The file queue test has been updated to reflect the change in the default value of the fileIdx from -1 to 0.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-10T13:16:24.551-0500",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/4> containing commit 808c59aa868f85f3547b was accepted and pushed to the infusion project master.&#x20;\n"
    }
  ]
}
---
A file queue test was not fixed when the default fileIdx value was changed from -1 to 0.  The expected value of the fileIdx in the test needs to reflect the code change.

        