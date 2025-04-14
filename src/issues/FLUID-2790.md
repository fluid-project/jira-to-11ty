---json
{
  "title": "FLUID-2790",
  "summary": "If the pager has only one page it should be numbered as \"1\" not \"1 (last)\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "y z",
  "date": "2009-05-27T13:20:33.000-0400",
  "updated": "2014-03-03T14:30:38.300-0500",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": "FF3, OPERA 9.6, IE6 - WIN XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-09-26T17:20:09.414-0400",
      "body": "Fixed at revision 10048\n"
    }
  ]
}
---
steps to reproduce:

* open the renderer version of pager example: <http://build.fluidproject.org/infusion/standalone-demos/pager/html/pager-render.html#>
* switch number of items per list to 50
* notice that there is only one page number "1 (last)" which should be just "1"

        