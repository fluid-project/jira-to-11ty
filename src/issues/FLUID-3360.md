---json
{
  "title": "FLUID-3360",
  "summary": "The Infusion Builder should clean up its temporary data on a periodic basis.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Colin Clark",
  "date": "2009-11-04T18:59:44.000-0500",
  "updated": "2013-04-11T17:43:18.269-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-2931/",
      "key": "FLUID-2931",
      "summary": "Determine server maintenance requirments"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-11-04T19:00:35.000-0500",
      "body": "This issue is a more specific articulation of one of the tasks noted in <https://fluidproject.atlassian.net/browse/FLUID-2931#icft=FLUID-2931>.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T13:55:08.000-0500",
      "body": "A script was created which cleans up temporary files every 24 hours. It needs to be installed as a cron job on the server to work. The script was written to clean up the files on the deploy server, so will need to be altered and installed as a cron job to clean up files on other servers such as the daily build server.\n\nlocation of the script is /infusion-builder-secure/scripts/cleanup.sh\n"
    }
  ]
}
---
At the moment, the Infusion Builder doesn't clean up its temporary files. If the server doesn't already clean up /tmp, we should create a script and cron job to do so.

Investigate cleaning up the /tmp directories - expiring the info via nightly cron job.\
A good command to do this would be\
find /tmp/build/\* -type f -cmin +1440 -exec rm -f {} \\;\
find /tmp/products/\* -type f -cmin +1440 -exec rm -f {} \\;

Will also need to make sure that the permissions work so that this cron job can delete files created by nobody.&#x20;

        