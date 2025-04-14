---json
{
  "title": "FLUID-6599",
  "summary": "New DataSource implementation applies default port of 80 even if https URL is supplied",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-02-26T16:11:36.629-0500",
  "updated": "2024-07-22T10:35:21.438-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-455/",
      "key": "SJRK-455"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-02-26T16:12:25.029-0500",
      "body": "See report in fluid-work at <https://matrix.to/#/!mDigWuPWilYGiEcOCA:matrix.org/$mdY34Dsy1w5YzFWYjA3l2On63WcU8zpgefXSbjlUWeQ?via=matrix.org>\n"
    }
  ]
}
---
Since the new implementation (in the <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> etc.) branch defaults each element of a DataSource URL separately in the parsed structure, the inbuilt default port of 80 ends up being applied even if an https URL is supplied - in order to get the expected behaviour the user needs to explicitly supply port 443 in the URL or options, which is a usability failure.

        