---json
{
  "title": "FLUID-4496",
  "summary": "Table of Contents setting causes gap at top of full-page UIO dialog when saved initially",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2011-10-03T14:37:17.017-0400",
  "updated": "2013-10-04T09:44:10.823-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Table of Contents",
    "UI Options"
  ],
  "environment": "IE and FF, Mac and Windows\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-10-11T11:19:28.145-0400",
      "body": "Confirmed the same issue with Chrome and Safari.\n"
    }
  ]
}
---
Turning on the Table of Contents option and saving the setting causes a gap to appear at the top of the full-page UIO dialog (both with and without preview). Turning the ToC off and saving will remove the gap.

With the ToC on, if you navigate back to the demo page and then to the full-page UIO dialog again, the gap is not present.

        