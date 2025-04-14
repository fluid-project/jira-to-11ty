---json
{
  "title": "KETTLE-44",
  "summary": "Update Kettle to use ESLint and Grunt 1.0.x",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2016-06-07T07:09:22.331-0400",
  "updated": "2016-06-08T14:56:47.712-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-07T07:09:55.490-0400",
      "body": "We need some small discussion around the right \"strict\" setting before this can proceed:\n\n<https://issues.fluidproject.org/browse/FLUID-5914>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-07T07:59:33.543-0400",
      "body": "I proceeded with everything else (including a new Gruntfile, etc.).  I would also like to add a \"test\" script to the package.json, but get odd errors when doing so.  @@Antranig Basman, we should look at this together, it should not take more than five minutes.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-07T08:09:32.963-0400",
      "body": "Here is the branch:\n\n<https://github.com/the-t-in-rtf/kettle/tree/KETTLE-44>\n\nIf I run `node tests/all-tests.js`, I get:\n\n```java\n> node test/all-tests.js\r\nfunction\n```\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-07T15:34:22.292-0400",
      "body": "<https://github.com/fluid-project/kettle/pull/23>\n"
    }
  ]
}
---
Following up on <https://fluidproject.atlassian.net/browse/FLUID-5120#icft=FLUID-5120>, we should update Kettle to:

1\. Use ESLint and remove JSHint\
2\. Use a 1.0.x version of Grunt and all Grunt plugins.

@@Antranig Basman, I was planning to submit a small PR for this unless you, @@Cindy Li, or someone else on the team was already taking it on.

        