---json
{
  "title": "FLUID-3252",
  "summary": "adding multiples of same files to the upload images does not cause an error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Laurel Williams",
  "date": "2009-10-07T15:39:10.000-0400",
  "updated": "2014-03-03T14:21:47.115-0500",
  "versions": [
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-08T10:24:13.000-0400",
      "body": "This is a duplicate of <https://fluidproject.atlassian.net/browse/FLUID-687#icft=FLUID-687>\n"
    }
  ]
}
---
Go to <http://wiki.fluidproject.org/display/fluid/Uploader+QA+Test+Plan> and search for the test entitled "Upload identical files". This test fails - the second addition of the files is allowed and no error message is displayed.

Upon attempt to upload (which is not part of the test), the files are not uploaded twice.

        