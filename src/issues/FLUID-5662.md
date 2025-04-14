---json
{
  "title": "FLUID-5662",
  "summary": "fluid.fetchResources stalls if defaultLocale and locale are identical, and forceCache option is supplied",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-05-06T14:30:21.687-0400",
  "updated": "2015-08-20T15:20:33.610-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T15:20:22.600-0400",
      "body": "Merged into trunk at revision 7b1fdc80a06339fb84ae8c07a128aefc5380c68c\n"
    }
  ]
}
---
Reported in #fluid-work at <https://botbot.me/freenode/fluid-work/2015-05-06/?msg=38471885&page=1>

The issue is that our "cache" only caches successes, not failures - therefore a request which fails, but which is requested from the cache, will never have its callback notified. Setting defaultLocale and locale to the same value can expose this bug, since it enters two requests into the collection which are for the same URL, but which is not present.

        