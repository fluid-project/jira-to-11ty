---json
{
  "title": "FLUID-4057",
  "summary": "Pager shouldn't use ellipses if the gap is 1 for gapped strategy",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Harris Wong",
  "date": "2011-02-10T16:09:51.953-0500",
  "updated": "2021-07-15T08:32:50.474-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "All Browsers\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3475/",
      "key": "FLUID-3475"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Pager now shows "1 2 3 ... 5 \[6] 7" for gapped strategy.  "4" should be shown in this case because it makes no sense to hide it.

        