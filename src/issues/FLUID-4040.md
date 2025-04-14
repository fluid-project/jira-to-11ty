---json
{
  "title": "FLUID-4040",
  "summary": "Add a test to Uploader's QA plan, which tests file namescontaining non-ASCII characters",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2011-01-21T09:17:04.280-0500",
  "updated": "2011-07-26T11:24:58.748-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:28:03.574-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-26T11:24:37.260-0400",
      "body": "This has been added to the boundary tests section of the uploader test plan&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-26T11:24:58.743-0400",
      "body": "Link to uploader test plan <http://wiki.fluidproject.org/display/fluid/Uploader+QA+Test+Plan>\n"
    }
  ]
}
---
We currently don't test Uploader with files that have non-ASCII characters in their names. I have some lingering concerns that this may be an issue with one of the flavours of HTML5 Uploader, so a formal QA test for this will be very helpful.

        