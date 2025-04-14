---json
{
  "title": "FLUID-3290",
  "summary": "Provide alternative ways to upload multiples files with the Uploader instead of requiring Flash",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2009-10-13T18:29:10.000-0400",
  "updated": "2011-01-04T16:00:34.842-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1673/",
      "key": "FLUID-1673",
      "summary": "Uploader 2: Add Google Gears support"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2041/",
      "key": "FLUID-2041"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-13T18:31:12.000-0400",
      "body": "Gears support is one promising alternative to Flash for the Uploader\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:57:11.168-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-04T16:00:34.840-0500",
      "body": "See <https://fluidproject.atlassian.net/browse/FLUID-3718#icft=FLUID-3718>.   An HTML5 multi-file uploader has been implemented for the 1.3 release. &#x20;\n"
    }
  ]
}
---
This is an umbrella issue that encompasses a number of potential tasks for providing alternatives to Flash for multi-file upload. The most promising of these options include support for Gears and the native multi-file features in the latest HTML 5 browsers such as Safari and Firefox. Java applets or other solutions may also be worth investigating.

        