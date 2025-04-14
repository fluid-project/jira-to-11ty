---json
{
  "title": "INFRA-176",
  "summary": "MDID - Secure Mediawiki",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-05-07T11:11:21.639-0400",
  "updated": "2018-05-10T17:32:44.555-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-10T17:32:44.553-0400",
      "body": "MDID website was archived and removed from the infrastructure configuration.\n\nArchive stored at i-0009:/backups/misc\n"
    }
  ]
}
---
MDID ([http://mdid.idrc.ocadu.ca](http://mdid.idrc.ocadu.ca/)) has an embedded Mediawiki installation inside ATutor running at "/mw". It's version 1.19 which has 32 security vulnerabilities officially reported: <https://www.cvedetails.com/vulnerability-list/vendor_id-2360/product_id-4125/version_id-129224/Mediawiki-Mediawiki-1.19.html>

Try to upgrade it to the latest MediaWiki version (or convert to a static website if no changes will be done to it).

        