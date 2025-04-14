---json
{
  "title": "DECA-155",
  "summary": "In left-right calibration proper, after doing a test capture, focus is lost on the test capture again button",
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
  "date": "2010-07-21T16:09:48.124-0400",
  "updated": "2012-05-25T13:44:43.984-0400",
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
      "author": "Justin Obara",
      "date": "2012-05-25T13:44:43.983-0400",
      "body": "The calibration work flow has been removed from the decapod 0.5 release\n"
    }
  ]
}
---
To replicate:\
1\. Using the keyboard, perform an explicit test capture (i.e., test capture one more time after initial on-page-load captures)\
2\. Focus is no longer on the test capture button

        