---json
{
  "title": "FLUID-4043",
  "summary": "Passing incorrect file count to the afterFileDialog event.  ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Mike Lam",
  "date": "2011-01-24T15:00:59.048-0500",
  "updated": "2011-02-04T13:18:43.122-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4043/FLUID-4043.patch",
      "filename": "FLUID-4043.patch"
    }
  ],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-25T12:02:26.254-0500",
      "body": "Small fix to pass in files that were just added to the queue, rather than the sum of all the files queued.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-25T13:17:04.135-0500",
      "body": "Awaiting review.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-02-04T13:18:43.079-0500",
      "body": "Bug fixed from <https://fluidproject.atlassian.net/browse/FLUID-4033#icft=FLUID-4033> patch. &#x20;\n"
    }
  ]
}
---
We shouldn't be passing the sum of all the files that have added to the queue.  Instead, we should be passing the number of files that were just added to the queue. &#x20;

        