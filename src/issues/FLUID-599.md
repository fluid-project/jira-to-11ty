---json
{
  "title": "FLUID-599",
  "summary": "OSDPL Styling: Enlarging text size on IE and FF creates unexpected results.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2008-05-14T11:42:35.000-0400",
  "updated": "2013-04-11T17:45:52.110-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": "Win XP FF2, IE7\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-508/",
      "key": "FLUID-508"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1681/",
      "key": "FLUID-1681"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-10T14:02:34.000-0400",
      "body": "Iteration20\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-14T14:13:03.000-0400",
      "body": "Can be solved by using the Fluid-Clean theme. See this task:\\\n<http://issues.fluidproject.org/browse/FLUID-1681>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-21T14:32:45.000-0400",
      "body": "Fixed with Fluid-1681.\n"
    }
  ]
}
---
Enlarging the font size on FF2 and IE7 on Windows causes come unexpected layout / usability issues on the OSDPL. Much of this is likely caused by fixed div widths used throughout the site.

        