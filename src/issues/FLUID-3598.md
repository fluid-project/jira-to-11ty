---json
{
  "title": "FLUID-3598",
  "summary": "Some of the demos' colour scheme choices do not follow WCAG2 colour contrast recommendations.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "y z",
  "date": "2010-04-05T16:02:06.000-0400",
  "updated": "2016-11-01T17:50:08.218-0400",
  "versions": [
    "1.2",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Demos",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:08:49.479-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-10T14:47:50.697-0500",
      "body": "Yura, most of the demos have undergone a redesign. Could you revisit this issue, and either resolve or update with your latest assessment?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-30T15:27:13.786-0400",
      "body": "Pager and Progress are now wcag 2 AA compliant. The uploader still has some issues. I've updated the description to reflect this.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-01T17:50:08.215-0400",
      "body": "Fixed as part of <https://fluidproject.atlassian.net/browse/FLUID-6008#icft=FLUID-6008>\n"
    }
  ]
}
---
UPLOADER:

* Upload button
* Browse Files link

Used WCAG Contrast Checker addon for firefox to check the contrast ratios.

        