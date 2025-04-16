---json
{
  "title": "INFRA-189",
  "summary": "CLAassistant hosting",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Giovanni Tirloni",
  "date": "2018-05-16T10:35:44.405-0400",
  "updated": "2020-04-14T08:59:50.113-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-13T08:03:54.340-0400",
      "body": "Justin Obara do you know if we still want to host our own CLAassistant instance? It seems GitHub, JIRA, Confluence all had some sort of CLA assistant installed in the past year? Could you confirm if we can close this ticket?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-14T08:42:24.948-0400",
      "body": "Giovanni Tirloni I don't think we do.\n\n \n\nJira and Confluence were updated with a plugin to inform of our license and CLA. However, if we switch to the cloud based version of the Atlassian products we won't have access to plugins. I'm not sure what we'll do in that case. Maybe remove or see if there is an alternative.\n\nFor GitHub we're using [https://cla-assistant.io](https://cla-assistant.io/) so we don't need to host anything for that. At the moment I think I'm the only one that can manage it, which isn't ideal. They have a [GitHub Actions version](https://github.com/cla-assistant/github-action) in alpha but this will require that the data be stored in the repo. It's something we should discuss before switching to it.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-14T08:59:35.818-0400",
      "body": "Thanks Justin! I'm going to close this ticket and we can re-open if the need arises.\n"
    }
  ]
}
---
Investigate what would be needed to host CLAassistant.

        