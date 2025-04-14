---json
{
  "title": "ENGAGE-216",
  "summary": "Path depth is incorrect in rendered pages from embedded app",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2009-12-15T03:44:49.000-0500",
  "updated": "2014-03-03T14:17:32.177-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T14:28:07.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-24T13:31:03.000-0500",
      "body": "Did a quick test by viewing the page source, but the local eclipse version and standalone versions are showing paths starting with ../ instead of ../../../../\n"
    }
  ]
}
---
we have a recurrence of the "excessive path depth" syndrome in the mounted URLs which will mean that the standalone version of Engage is almost certainly broken again. Here is a standard link from the head of the page below:

\<link type="text/css" rel="stylesheet" href="../../../../fluid-infusion/src/webapp/framework/fss/css/fss-layout.css">\</link>&#x20;

As you can see it has grown four up-segments where only two are required.&#x20;

        