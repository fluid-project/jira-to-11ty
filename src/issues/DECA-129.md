---json
{
  "title": "DECA-129",
  "summary": "Replace the server's mock images with better examples",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Colin Clark",
  "date": "2010-07-09T15:09:35.642-0400",
  "updated": "2010-07-16T10:44:10.523-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-129/Near best case scenario page captures (10 pages).zip",
      "filename": "Near best case scenario page captures (10 pages).zip"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-07-09T15:12:48.698-0400",
      "body": "Try using these images in the repository:\\\n<http://source.fluidproject.org/svn/design/decapod/Resources/Images/Books/Ferns/>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-14T00:31:22.830-0400",
      "body": "James sent along some good-quality sample images from IUPR that he's recommending we use instead of the ferns book. I'll attach them to this JIRA.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-14T00:34:26.822-0400",
      "body": "James' choice for good quality images to use with testing and the --no-cameras mode. These images came from the IUPR team, I believe.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-07-14T11:17:19.206-0400",
      "body": "Bug Parade Decapod 0.4\n"
    }
  ]
}
---
At the moment, the sample images we use when the server is started in "no cameras" mode are of poor quality. They're badly cropped, low resolution, and often strangely rotated.

Jonathan mentioned that there are better quality images in the design SVN repository. We should replace the current images with these ones instead.

        