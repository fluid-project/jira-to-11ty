---json
{
  "title": "FLUID-4000",
  "summary": "\"Larger\" inputs doesn't change input size",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2010-12-21T15:09:11.548-0500",
  "updated": "2021-06-22T12:59:06.452-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Win XP, IE8, Chrome, FF3.6; Windows 7 FF6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-03T16:33:11.060-0400",
      "body": "Testing 1.4 in IE9 on Win7, I notice that \"make input larger\" doesn't affect the textarea field. The single-line input field does get larger, but not the textarea.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-06-22T12:59:01.530-0400",
      "body": "Addressed with changes to <https://fluidproject.atlassian.net/browse/FLUID-5686#icft=FLUID-5686>\n"
    }
  ]
}
---
Under "easier to find", selecting the "Inputs: Larger" checkbox doesn't change input size at all.

        