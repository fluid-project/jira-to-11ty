---json
{
  "title": "FLUID-3579",
  "summary": "After using dropdown with keyboard, mouse interaction fails: using safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "James Yoon",
  "date": "2010-04-01T10:13:39.000-0400",
  "updated": "2024-07-22T12:29:33.550-0400",
  "versions": [
    "1.1.2",
    "1.2",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 4/OS X 10.5\\\nSafari 7 (Mac OS 10.9)\\\nSafari 8 (Mac OS 10.10)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-22T12:29:33.411-0400",
      "body": "Could not reproduce with Safar 17.5\n"
    }
  ]
}
---
To replicate:\
<http://build.fluidproject.org/infusion/demos/inlineEdit/>\
1\. With the keyboard, edit an inline dropdown element\
2\. With the mouse, attempt to bring down the same dropdown by clicking the element

N.B. #1: It's important that you have no other interactions between step 1 and 2\
N.B. #2: If you click outside the element (but inside the browser) between step 1 and 2, step 2 will be successful

        