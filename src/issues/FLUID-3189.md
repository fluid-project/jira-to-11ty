---json
{
  "title": "FLUID-3189",
  "summary": "add fluid version details to cache key",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-09-21T15:11:11.000-0400",
  "updated": "2009-09-30T09:51:31.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-21T16:47:28.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-22T15:38:06.000-0400",
      "body": "Appended the fluid version to the cache key (side effect was changing the directory name where the cached files are stored - since the key is also the directory name).\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-29T16:40:35.000-0400",
      "body": "I accidentally committed the changes to PostClass.php for this fix under <https://fluidproject.atlassian.net/browse/FLUID-3149#icft=FLUID-3149>. See revision 8047 to find this.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-30T09:51:31.000-0400",
      "body": "Jacob reviewed\n"
    }
  ]
}
---
Alter the cache key by adding the Infusion version (obtained from build.properties) to the key. This will ensure that the Builder won't accidentally deliver old builds to users when we upgrade to new versions of Infusion.

        