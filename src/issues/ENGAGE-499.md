---json
{
  "title": "ENGAGE-499",
  "summary": "No email received after sending My Collection to self",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "James Yoon",
  "date": "2010-03-08T10:22:50.000-0500",
  "updated": "2010-03-09T10:33:57.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-499/499.patch",
      "filename": "499.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-03-08T13:18:12.000-0500",
      "body": "This appears to be a regression. Looks like email addresses are not correctly being sent to Hugues' server.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-03-08T17:17:01.000-0500",
      "body": "This is still an issue even after the patch from the morning of March 8, 2010.\n\nSometimes the user receives the email, sometimes not. So far the scores are:\\\n0 successes out of 2 attempts w/ VO (one in each language)\\\n2 successes out of 4 attempts w/out VO (two in each language)\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-03-09T10:33:57.000-0500",
      "body": "Tested send functionality half a dozen times. Success on all counts.\n"
    }
  ]
}
---

        