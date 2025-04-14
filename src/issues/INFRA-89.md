---json
{
  "title": "INFRA-89",
  "summary": "Review all static websites deployed through Jenkins",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2017-02-02T18:25:38.100-0500",
  "updated": "2017-09-21T10:54:58.152-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T10:54:58.149-0400",
      "body": "<https://github.com/inclusive-design/websavv> - fixed webhook URL\\\n<https://github.com/fluid-project/sojustrepairit.org> - added webhook\n\n<https://github.com/fluid-project/docs-inclusive-learning> - OK\\\n<https://github.com/inclusive-design/guide.inclusivedesign.ca> - OK\\\n<https://github.com/fluid-project/fluidproject.org.git> - OK\\\n<https://github.com/fluid-project/floeproject.org.git> - OK\\\n<https://github.com/inclusive-design/courses.idrc.git> - OK\n"
    }
  ]
}
---
Double-check that:

1\. The correct branch is specified in the Jenkins configuration\
2\. The repo's README correctly indicates the proper way to deploy that website\
3\. The webhooks are correctly set and pass a 'ping' test (POST is received, job runs)

        