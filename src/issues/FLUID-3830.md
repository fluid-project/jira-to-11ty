---json
{
  "title": "FLUID-3830",
  "summary": "Image Gallery application used to test the Uploader no longer builds correctly",
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
  "date": "2010-11-09T16:48:10.627-0500",
  "updated": "2010-11-10T10:15:22.799-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-11-10T09:46:50.344-0500",
      "body": "I've addressed this issue by removing Berkeley's maven repository from the Image Gallery's build configuration. Everything seems to be working nicely again.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-11-10T09:47:18.492-0500",
      "body": "Mike, can you verify that this issue is fixed and close it if so?\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-10T10:15:22.796-0500",
      "body": "Resolved by Colin Clark. &#x20;\n"
    }
  ]
}
---
The Image Gallery, which we use as a server back-end for testing the Uploader, no longer builds correctly. This is due to the fact that its maven configuration uses a repository from Berkeley which is no longer in existence, but whose web server returns back HTML error messages which Maven is foolish enough to think are the actual artifacts.

Removing the Berkeley repository from the Gallery's maven configuration should resolve this issue.

        