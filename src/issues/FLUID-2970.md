---json
{
  "title": "FLUID-2970",
  "summary": "Ensure the daily build is building regularly and e-mail messages are being sent when it breaks.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Michelle D'Souza",
  "date": "2009-06-29T13:55:40.000-0400",
  "updated": "2011-03-17T15:06:05.539-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-06-29T14:49:05.000-0400",
      "body": "I have restarted Continuum, and successfully rebuilt all of the projects.\n\nThe Fluid nightly and the Uploader server were **not** configured to send email notifications - I have updated them to email the commits list (as the other projects do).\n\nI'm not sure why the system got stuck back on June 10 - maybe this is something that Jamon can help figure out?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-06-30T09:05:19.000-0400",
      "body": "It seems the builds are still not happening automatically. Will investigate...\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-20T09:27:36.290-0500",
      "body": "The nightly builds have been working consistently for some time now.\n"
    }
  ]
}
---
It appears that the last time the daily build ran was June 10. When looking at the Continuum web interface it appears that the build is constantly in the middle of running. Perhaps a restart of Continuum will do the trick. &#x20;

        