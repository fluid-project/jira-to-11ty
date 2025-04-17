---json
{
  "title": "INFRA-112",
  "summary": "DVCS account are slow to sync",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Justin Obara",
  "date": "2018-02-08T09:26:50.872-0500",
  "updated": "2018-02-19T10:03:35.189-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-08T09:29:02.810-0500",
      "body": "We are being rate-limited by GitHub\n\n```\n2018-02-07 20:04:21,608 DVCSConnector.EventService:thread-1 INFO ServiceRunner     [c.a.j.p.dvcs.service.RepositoryServiceImpl] Could not load user [jhung, jhung] - java.lang.RuntimeException: org.eclipse.egit.github.core.client.RequestException: API rate limit exceeded for gtirloni. (403)\r\n...\r\n2018-02-07 22:09:18,846 DVCSConnector.MessageExecutor:thread-1 ERROR ServiceRunner     [c.a.j.p.d.service.message.MessageConsumer] Github rate limit exceeded, requests: 5000, remaining requests: 0, reset time: 2018-02-07T22:13:38.000Z\n```\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-08T09:29:58.772-0500",
      "body": "<https://developer.github.com/apps/building-github-apps/rate-limits-for-github-apps/>\n\n> GitHub Apps use the installation's minimum rate limit of 5,000 requests per hour. Organization installations with more than 20 users receive another 50 requests per hour for each user. Installations that have more than 20 repositories receive another 50 requests per hour for each repository.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-08T09:33:38.685-0500",
      "body": "<https://confluence.atlassian.com/jirakb/dvcs-github-sync-failed-779160781.html>\n\nI've added the dark feature \"dvcs.connector.pr-synchronization.disabled\" and will remove it tomorrow. The rate limits should be okay by then.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-09T06:01:58.295-0500",
      "body": "After stopping GitHub polling, it seems we're not rate limited anymore. <https://fluidproject.atlassian.net/browse/FLOE-535#icft=FLOE-535> is showing the merged PR now.\n\nJustin Obara could you confirm everything is okay? It seems it might take up to 60min to get a PR reflected in JIRA (if we're not rate limited).\n\nI also updated JIRA to version 7.7.1 and it might help with that (as there are some fixes for DVCS in it).\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-19T10:03:35.117-0500",
      "body": "It seems all PRs synced. I cannot see any errors related to GitHub since the JIRA instance was restarted a few days ago.\n"
    }
  ]
}
---
DVCS accounts in Jira are very slow to sync (and PRs are going unnoticed).

        