---json
{
  "title": "FLUID-1871",
  "summary": "Remove Uploader 1 from the source code repository in favour of Uploader 2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Colin Clark",
  "date": "2008-11-29T12:01:50.000-0500",
  "updated": "2008-12-01T12:09:28.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-11-29T12:54:05.000-0500",
      "body": "Anastasia, can you update the daily build site to reflect the new paths for Uploader 2 and the removal of the old version of Uploader?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-01T09:56:31.000-0500",
      "body": "I have updated the build site:\n\n* one link to the template\n* no more actual sample-code\n* a link to the springboard\n* links to the unit tests and manual tests\n\nBut:\n\nMany of the tests are not working properly, seemingly due to bad paths? Oddly, they work find on my local copy. I will investigate. It may be a redeployment issue.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-01T12:09:19.000-0500",
      "body": "Justin figured out that some file references were not capitalized properly. Fixed now.\n"
    }
  ]
}
---

        