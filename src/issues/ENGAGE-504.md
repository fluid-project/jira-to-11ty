---json
{
  "title": "ENGAGE-504",
  "summary": "My Collection \"send\" email entry dialogue doesn't always come down fully",
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
  "date": "2010-03-08T17:33:35.000-0500",
  "updated": "2010-03-09T10:34:45.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2010-03-08T17:43:33.000-0500",
      "body": "There's a way to consistently recreate this issue if you follow this steps:\\\n1\\) open engage app in chromeless mode\\\n2\\) choose language i.e. english\\\n3\\) go to enter object code\\\n4\\) enter object code i.e. 10\\\n5\\) click on collect and then go to my collection by clicking on the sliding message\\\n6\\) click on send (notice that dialog is fully expanded) and then click cancel\\\n7\\) click on home button\\\n8\\) from the home page click on my collection again\\\n9\\) click on send and notice that you recreated the bug\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-08T18:29:15.000-0500",
      "body": "I followed these steps on my Android phone (Motorola Droid) and couldn't reproduce the issue. Looks like it truly is iPod specific.&#x20;\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-03-09T10:34:38.000-0500",
      "body": "Lookin' good now.\n"
    }
  ]
}
---
Sometimes, when tapping "send" under "My Collection", the email entry dialogue doesn't come down fully--the entry field is hidden above the screen fold, and all that is visible are the two buttons, submit and cancel. Furthermore, the keyboard doesn't show up when this occurs.

Unable to replicate consistently.

        