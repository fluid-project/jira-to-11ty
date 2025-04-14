---json
{
  "title": "FLUID-396",
  "summary": "Add ARIA roles to portlets",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-03-24T11:05:34.000-0400",
  "updated": "2009-06-03T13:43:45.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-07T15:47:20.000-0400",
      "body": "Let's take a few minutes to review the existing ARIA roles to ensure that there aren't more appropriate roles than our default (gricell).\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-08T13:36:30.000-0400",
      "body": "I've reviewed the ARIA roles again, and I don't see any roles that seem more appropriate than the grid/gridcell that we are currently using.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-05-27T17:42:09.000-0400",
      "body": "In discussions with Rich Schwerdtfeger (of IBM) and Rob Gallo (of Freedom Scientific), it came to light that grid/gridcell are not appropriate roles, and that a role of 'region' (or something like that) would be more appropriate for a portlet.\n\nWe should check the ARIA best practices and find out exactly what the role is, and change it.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-03T17:13:45.000-0400",
      "body": "Used \"section\" and \"region\" instead of \"grid\" and \"gridcell\"\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-04T14:19:39.000-0400",
      "body": "Apparently, \"section\" is an abstract role, and shouldn't be used directly. I'll investigate an alternative.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-09T15:55:26.000-0400",
      "body": "We now use \"main\" and \"article\" for the container and the portlets.\n"
    }
  ]
}
---
dev-iteration35

        