---json
{
  "title": "ENGAGE-311",
  "summary": "Update the Artifact View to match the latest wireframes for Engage 0.3",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Justin Obara",
  "date": "2010-02-01T12:18:51.000-0500",
  "updated": "2014-03-03T14:14:14.343-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-311/artifactViewCore_b.txt",
      "filename": "artifactViewCore_b.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-311/artifactViewCore_c.txt",
      "filename": "artifactViewCore_c.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-311/artifactViewKettle_b.txt",
      "filename": "artifactViewKettle_b.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-311/artifactViewKettle_c.txt",
      "filename": "artifactViewKettle_c.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-311/ENGAGE-311-engage-core.d.patch",
      "filename": "ENGAGE-311-engage-core.d.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-311/ENGAGE-311-engage-core.e",
      "filename": "ENGAGE-311-engage-core.e"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-311/ENGAGE-311-engage-kettle-d.patch",
      "filename": "ENGAGE-311-engage-kettle-d.patch"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-02T10:15:02.000-0500",
      "body": "mccord-pilot\n"
    },
    {
      "author": "y z",
      "date": "2010-02-05T17:09:47.000-0500",
      "body": "core and kettle patches for new artifact view\n"
    },
    {
      "author": "y z",
      "date": "2010-02-09T17:52:57.000-0500",
      "body": "This is the latest patch that brings the artifact view closer to the latest wireframes. Still need to wait on related artifact thumbnails and internationalization bundles for artifactView and description components.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-10T18:05:09.000-0500",
      "body": "Here's an in-progress patch with suggested refactoring for Yura. He will finish it up and submit a version \"e\" patch which will be a candidate for commit.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-10T18:05:19.000-0500",
      "body": "Here's an in-progress patch with suggested refactoring for Yura. He will finish it up and submit a version \"e\" patch which will be a candidate for commit.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-24T13:50:20.000-0500",
      "body": "All sub-tasks have been completed. Just waiting on <https://fluidproject.atlassian.net/browse/ENGAGE-309#icft=ENGAGE-309> to be reviewed and closed\n"
    }
  ]
}
---
At the moment, the implementation of Artifact View is quite out of date when compared to the latest Draft 9 wireframes for Engage 0.3. It should be updated.

        