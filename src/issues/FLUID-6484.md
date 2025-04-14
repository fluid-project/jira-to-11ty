---json
{
  "title": "FLUID-6484",
  "summary": "Replacing deprecated Request library wtih Urllib",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Bate martins",
  "date": "2020-04-03T12:42:23.523-0400",
  "updated": "2024-08-01T10:12:11.152-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": "OS: Ubuntu 18.04.4 LTS\\\nNode: 12.13.1\\\nChrome: 80.0.3987.122 (Official Build) (64-bit)&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-08-01T10:12:01.798-0400",
      "body": "Migrated to <https://github.com/fluid-project/infusion-docs/issues/306>&#x20;\n"
    }
  ]
}
---
Due to the issue [#https://github.com/request/request/issues/3142 on the request](<#https://github.com/request/request/issues/3142 on the request>)library,Request has been deprecated and makes sense not to use again in the infusion documentation platform.A similar alternative with same structure and approach Urlib is used instead.

        