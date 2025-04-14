---json
{
  "title": "ENGAGE-378",
  "summary": "The importer also needs to be able to crawl through related artifacts, to ensure that all referenced artifacts are in the database",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-02-12T13:16:42.000-0500",
  "updated": "2010-02-16T10:27:14.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Data Import"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-378/ENGAGE-378.patch.txt",
      "filename": "ENGAGE-378.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2010-02-12T13:18:35.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-12T19:18:37.000-0500",
      "body": "Attaching a patch that contains changes to CouchdbUtility.java\n\nWorked with Yura to get crawling of related artifacts working.\n\nThen did some refactoring to also crawl highlight in the exhibition. (there are comments to distinguish this that should be removed when committed).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-16T09:48:47.000-0500",
      "body": "On Friday I was completely confused as to why some of the artifacts still weren't working; after crawling all of the related artifacts and the highlights. It turns out that where we are given the accession number it is capitalized like (M996X.3.327) but the artifact itself is lower case like (m996x.3.327).\n"
    },
    {
      "author": "y z",
      "date": "2010-02-16T10:27:14.000-0500",
      "body": "Worked together with Justin to resolve this issue.\n"
    }
  ]
}
---
The importer also needs to be able to crawl through related artifacts, to ensure that all referenced artifacts are in the database

This was discussed on the fluid-work mailing list.\
<http://old.nabble.com/Related-artifacts-relating-to-artifacts-outside-the--exhibition--design-or-error--to27523283.html>

        