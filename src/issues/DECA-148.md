---json
{
  "title": "DECA-148",
  "summary": "Profiling cameras hangs when certain unsupported cameras are connected",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-07-21T10:01:27.548-0400",
  "updated": "2012-05-25T15:51:16.134-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Calibration"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-07-21T10:05:02.139-0400",
      "body": "On relevance of issue:\n\nWhile we might not think it reasonable that users try and use the Storm as a camera for Decapod, the problem is still relevant for at least two reasons:\\\n1\\) A user could conceivably have their phone connected to the computer when Decapod is running, for reasons that are entirely independent of Decapod (e.g., they're charging their phone, they're syncing it, etc.)\\\n2\\) This hanging issue might exist for other unsupported cameras\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-25T15:51:16.133-0400",
      "body": "The calibration workflow was removed from the Decapod 0.5 release\n"
    }
  ]
}
---
When the Blackberry Storm 2 9550 is connected, profiling cameras screen hangs (possibly indefinitely--definitely at least 15 minutes).

This may be a bug with gphoto. Running --summary while the Storm is connected gives the following error:\
\> gphoto2 --summary

*
  *
    * Error \*\*\*              \
      PTP I/O error

-
  *
    * Error \*\*\*              \
      An error occurred in the io-library ('Unspecified error'): No error description available
    * Error (-1: 'Unspecified error') \*\*\*

        