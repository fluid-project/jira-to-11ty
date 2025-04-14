---json
{
  "title": "FLUID-3149",
  "summary": "provide caching for download files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-09-01T15:40:49.000-0400",
  "updated": "2009-11-06T16:23:11.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
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
      "date": "2009-09-03T09:06:26.000-0400",
      "body": "It may be interesting to have a counter associated with each of these saved files so that we can keep track of how many times each is hit.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-21T15:07:03.000-0400",
      "body": "Checked in a first pass at this. Further tasks to follow related to this task.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-22T09:43:03.000-0400",
      "body": "I'm reopening this task as a place to file sub tasks for the Builder caching work, in order to keep the tasks more organized.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-23T13:08:55.000-0400",
      "body": "Accidently resolved this.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-09-30T12:25:30.000-0400",
      "body": "reviewed revision 8047, it's mislabelled as <https://fluidproject.atlassian.net/browse/FLUID-3149#icft=FLUID-3149> (should be <https://fluidproject.atlassian.net/browse/FLUID-3189#icft=FLUID-3189>) but the review is done.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-11-04T18:39:35.000-0500",
      "body": "This issue was resolved awhile back through the implementation of a MySQL-based file caching scheme.\n"
    }
  ]
}
---
Develop a caching mechanism so that files that have been build already are saved for future downloads. Relate model to file details in DB.

        