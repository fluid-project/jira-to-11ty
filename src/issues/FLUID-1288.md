---json
{
  "title": "FLUID-1288",
  "summary": "OSDPL Content: Empty field titles are being displayed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-08-21T12:05:34.000-0400",
  "updated": "2013-04-11T17:45:51.878-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1740/",
      "key": "FLUID-1740"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-10-30T09:31:12.000-0400",
      "body": "iteration22\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-11-16T00:49:31.000-0500",
      "body": "Fixed this problem by using Contemplate. By putting some logic into the template using PHP, we can now detect whether a pattern is missing information. In those cases, an appropriate message is displayed along with an Edit link.\n"
    }
  ]
}
---
If a design pattern has an empty field, the title of that field is rendered anyway when viewed.

Empty fields should be omitted from viewing.

        