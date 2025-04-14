---json
{
  "title": "FLUID-1105",
  "summary": "OSDPL: Investigate OSDPL bug with user logins",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Allison Bloodworth",
  "date": "2008-08-05T19:36:48.000-0400",
  "updated": "2011-02-22T16:28:01.408-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-08-05T19:36:56.000-0400",
      "body": "Iteration20\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-23T12:56:32.000-0400",
      "body": "Have not noticed this to be a problem. Perhaps it is fixed or Login Toboggan has improved things.\n\nI propose closing this and re-opening if it occurs again.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:28:01.406-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Sometimes a user will log on and will be shown in the "Logged on users," but the "My Options" menu isn't shown and an empty logon block is shown (which generally indicates that the user is not logged on). If we upgrade to 6.3 and maybe even 5.9 this may not be a concern but I wanted to document the problem as it's been reported by several people (and I've experienced it myself).

        