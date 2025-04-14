---json
{
  "title": "FLUID-2540",
  "summary": "OSDPL: clean up Files directory.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2009-04-06T13:43:18.000-0400",
  "updated": "2014-04-02T16:35:55.345-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The ./files directory needs some cleaning up. It contains an disorganized collection of images and other files which should really be organized better. The OSDPL Drupal installation should be updated to point to these new directories.

For example:

./files\
./files/osdpl-graphics\
./files/uidp-content\
./files/backups\
etc.

Recommended approach:

* create copies of files into new target directories.
* update Drupal
* confirm the site still works (i.e. check imagecache, backup migrate, uploads, uidp content, other content.
* delete old/original copies
* confirm the site still works.

        