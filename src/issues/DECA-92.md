---json
{
  "title": "DECA-92",
  "summary": "decapod-genpdf script missing argument causes pdf export to fail",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2010-04-01T11:36:44.000-0400",
  "updated": "2012-01-10T09:48:33.364-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4",
    "0.5"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-04-01T16:13:11.000-0400",
      "body": "Specifying the -t flag was not quite enough - an error is being thrown about not being able to find the directory that is passed with the -d flag\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-04-01T16:13:52.000-0400",
      "body": "There also appears to be a regression with the actually pdf generation. Jon was able to generate a pdf from the command line but the quality was very low - in fact unreadable.&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-06-10T16:27:46.357-0400",
      "body": "For 0.4 / 0.5, confirm fix and close.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-06-17T15:10:09.651-0400",
      "body": "Confirmed fixed in version e46d1748a910 of genpdf. Jun 17, 2010. Tested on Ubuntu 9.10, FF 3.5.8.\n"
    }
  ]
}
---
With Version 22 of decapod-genpdf, the script expects a "-t" flag. If the flag is missing, the export process fails.

-t should not be mandatory. Instead a good default should be used.

Until this bug is fixed, the Decapod server should specify a -t flag to work around this problem.

        