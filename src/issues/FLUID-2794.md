---json
{
  "title": "FLUID-2794",
  "summary": "Handling of illegal values in progress bars (Manual progress bar test)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Armin Krauss",
  "date": "2009-05-27T15:42:35.000-0400",
  "updated": "2015-06-26T09:59:23.729-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Progress"
  ],
  "environment": "Mac OS X 10.4.11 - Safari 3.2.1 (4525.27.1)\\\nIE 8, IE9, IE 10, IE 11 FF4 (Win7)\\\nFF4 (Mac OS 10.6)\\\nFF 29, Chrome 35, Safari 7 (Mac OS 10.9)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2010-12-15T16:13:11.834-0500",
      "body": "Also, if you enter non-numerical values, it says NaN% when it should use the previous values.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-11-05T14:23:47.770-0500",
      "body": "This manual test has been replaced.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:50.045-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
If a value greater than 100 is entered into the progress field, the bar goes to 100 % and shows 100 %.\
However, if a negative value is entered the bar goes to zero, but it does not show 0 but the negative value instead. Both concatenations of values should work similar (changing an illegal value to the nearest legal value, e.g. -10 to 0 and 999 to 100 %)&#x20;

        