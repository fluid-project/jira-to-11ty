---json
{
  "title": "FLUID-3787",
  "summary": "IE8 does not support aria live region",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Escalated",
  "assignee": "Justin Obara",
  "reporter": "Golam Chowdhury",
  "date": "2010-10-07T16:32:04.728-0400",
  "updated": "2011-01-11T10:13:15.864-0500",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Progress"
  ],
  "environment": "WinXP:\\\nChrome4\\\nFirefox3.6\\\nFirefox3.0\\\nIE8.0\\\nIE7.0\\\nIE6.0\n\nWin7:\\\nFirefox3.6\\\nIE8.0&#x20;\n\nMac10.5:\\\nSafari 4\n\nMac10.6:\\\nFirefox3.6\\\nSafari 4\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-23T15:50:09.017-0500",
      "body": "Justin, what should be do with issues like this?&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-01-11T10:13:15.859-0500",
      "body": "ARIA Live region seems to not working with IE8. Please see the following link for compatibility \\\n<http://tink.co.uk/2009/06/screen-reader-support-for-ajax-live-regions/>\n"
    }
  ]
}
---
Currently using IE8, NVDA2010.2, and JAWS10. NVDA2010.2 and JAWS10 won't read out content inside the live region.

        