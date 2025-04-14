---json
{
  "title": "FLUID-4116",
  "summary": "Uploader demo fails on IE 6 version 6.0.2800.1106.xpsp1.020828-1920",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Golam Chowdhury",
  "date": "2011-02-24T16:18:08.673-0500",
  "updated": "2014-05-22T14:30:25.666-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Windows XP IE 6 version 6.0.2800.1106.xpsp1.020828-1920&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-02-24T16:35:56.533-0500",
      "body": "It should be noted here that this issue can't be reproduced in Justin's WinXP SP2 version as well as my WinXP SP3 version.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:30:25.665-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    }
  ]
}
---
Uploader demo stops working when tried to upload a file. On IE 6 page shows the following errors:

Line: 844\
Char: 17\
Error: Exception thrown and not caught\
Code: 0\
URL: file://Y:\infusion-clean\src\webapp\demos\uploader\html\uploader.html

To reproduce make sure you have the right version of IE 6 with service pack1 running on Windows XP. Add your flash security settings then open the demo page.&#x20;

        