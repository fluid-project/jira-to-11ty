---json
{
  "title": "DECA-187",
  "summary": "genpdf should be able to take multiple input images and generate a single PDF",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2011-10-31T12:01:58.858-0400",
  "updated": "2012-01-10T11:13:18.148-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "genpdf"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-01-10T09:32:17.349-0500",
      "body": "I believe this is working now. Jon, could you please verify and update the jira as needed.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2012-01-10T11:13:05.530-0500",
      "body": "Hasan fixed this with an update in early November. Tested and confirmed fixed.\n"
    }
  ]
}
---
The genpdf script should be able to take in multiple input images in a directory or command line (space separated file names) and generate a single PDF file.

Example of execution:\
decapod-genpdf.py -d foo/ -p foo.pdf -t 1 -b images/

Example of execution:\
decapod-genpdf.py -d foo/ -p foo.pdf -t 1 -b image1.png image2.png image3.png

        