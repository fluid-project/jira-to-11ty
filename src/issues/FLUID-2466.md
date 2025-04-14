---json
{
  "title": "FLUID-2466",
  "summary": "Sorting column on later page does not then display page 1",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Herb Wideman",
  "date": "2009-04-02T09:57:29.000-0400",
  "updated": "2009-04-14T09:42:11.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Pager"
  ],
  "environment": "XP: FF3, Opera 9.6\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2498/",
      "key": "FLUID-2498"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-14T09:42:11.000-0400",
      "body": "This issue was fixed as part of <https://fluidproject.atlassian.net/browse/FLUID-2498#icft=FLUID-2498>\n"
    }
  ]
}
---
On the Sakia test page, if you sort a column when you are not on the first page, it sorts and remains on that page, rather than returning to page one following the sort (which it is supposed to do if I am interpreting the test procedure correclty, it is a somewhat unclear on this point).

        