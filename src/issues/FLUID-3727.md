---json
{
  "title": "FLUID-3727",
  "summary": "The uploader should have a role of application",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-09-09T13:38:05.330-0400",
  "updated": "2014-03-03T13:41:17.847-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3321/",
      "key": "FLUID-3321",
      "summary": "All demos that use arrow key navigation should include the application role to enable screen readers to swtich cursor modes automatically"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-09-09T13:49:12.170-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:43:49.285-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-02T12:11:07.273-0500",
      "body": "This was fixed and committed to the <https://fluidproject.atlassian.net/browse/FLUID-3722#icft=FLUID-3722> branch at r10248\n"
    }
  ]
}
---
The multifile uploader should have an ARIA role of application on it.

        