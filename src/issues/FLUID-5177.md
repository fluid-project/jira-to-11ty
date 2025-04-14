---json
{
  "title": "FLUID-5177",
  "summary": "slidingPanel does not pass dom events",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2013-10-09T11:10:15.146-0400",
  "updated": "2014-06-25T16:16:10.519-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Sliding Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-18T13:14:13.333-0400",
      "body": "Submitted pull request <https://github.com/fluid-project/infusion/pull/419>\n\nThis pull request doesn't actually pass down the DOM event object. However, now that the DOM event is bound declaratively it is less strange to bind another handler declaratively, and possible to override the existing one. I believe this should be sufficient for solving any issues requiring the event object.\n"
    }
  ]
}
---
The slidingPanel does not pass on dom events, thus listeners have to define their own invokers which is not desirable.

        