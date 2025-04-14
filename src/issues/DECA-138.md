---json
{
  "title": "DECA-138",
  "summary": "Determine the correct revision numbers for OCRopus, genpdf, and stitching for the Decapod 0.4 release",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-07-14T09:51:41.656-0400",
  "updated": "2010-07-26T17:46:42.421-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-07-14T11:21:23.642-0400",
      "body": "Bug Parade Decapod 0.4\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-07-19T10:47:24.331-0400",
      "body": "At the decapod meeting today, it was decided to use the same versions of OCRopus, genpdf, and stitching that shipped with Decapod 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-26T17:46:25.188-0400",
      "body": "After the various bugs discovered during Decapod 0.4 QA testing, we finalized on the following revisions for this release:\n\ndecapod-genpdf: 39:31498aa65bd5\\\ndecapod-server: 151:f7e03504e2fa\\\ndecapod-stitching: 10:c13c9ee54133\\\ndecapod-ui: 238:f5335173b462\\\ninfusion: tip\\\nOCRopus: ocropus-0.4.4\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-26T17:46:42.419-0400",
      "body": "This issue was resolved and all tags were created for the final release.\n"
    }
  ]
}
---
As a community, we should settle on specific revisions of OCRopus, genpdf, and the stitching scrips in preparation for freezing and releasing Decapod 0.4

        