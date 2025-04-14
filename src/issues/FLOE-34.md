---json
{
  "title": "FLOE-34",
  "summary": "The \"View Resource\" page is completely devoid of any UIO",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2012-06-12T10:31:48.462-0400",
  "updated": "2012-06-12T10:46:55.490-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-06-12T10:46:55.489-0400",
      "body": "This only seems to be happening with one of my test resources; the rest are fine. I'm going to assume it's something weird with the one resource\n"
    }
  ]
}
---
To reproduce:\
1\) Use UIO to set some blatantly obvious settings, such as yellow-on-black, large font, comic sans\
2\) Use the Browse All to get to a resource summary page, and click the "View resource" page

Note that none of the UIO settings are applied to the resource page. The UIO button itself is not even present.

        