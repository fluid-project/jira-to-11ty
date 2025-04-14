---json
{
  "title": "INFRA-214",
  "summary": "Migrate ADOD to a static site",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2018-08-31T15:51:10.306-0400",
  "updated": "2020-10-05T09:07:31.960-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-08-31T16:47:42.042-0400",
      "body": "Running at <http://adod-static.idrc.ocadu.ca> needs testing and verification.\n"
    }
  ]
}
---
ADOD hasn't been updated for quite a few years, but continues to provide useful information for a number of office document suites.

It also runs on Version 6 of Drupal which no longer receives LTS updates.

The steps expected to be followed are:

1. Create a static snapshot of ADOD using a tool like wget
2. Deploy the static version of ADOD (probably in a Docker container)
3. Create rewrite rules for the nginx server that will rewrite the Drupal-style "clean" URLs to ones with .html extensions
4. Switch over the backend in the load balancer config: <https://github.com/inclusive-design/ops/blob/5356ebc267b08d05ba5807740e13fed43415ddf2/environments/production/group_vars/load_balancers#L327>

        