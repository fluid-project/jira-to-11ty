---json
{
  "title": "FLUID-3144",
  "summary": "security review and server issues to discuss with Jamon",
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
  "date": "2009-08-28T14:05:14.000-0400",
  "updated": "2009-10-22T16:25:54.000-0400",
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
      "author": "Laurel Williams",
      "date": "2009-09-03T14:26:12.000-0400",
      "body": "Discussed these issues with Jamon. Much of the problems were resolved with the move to the new virtual machine. The rest of the issues are ok.\n"
    }
  ]
}
---
here are the following areas I need to check with Jamon about:

1\) cron job to delete files (see <https://fluidproject.atlassian.net/browse/FLUID-2931#icft=FLUID-2931>) - note that the commands work fine except that user has no permission to delete the files created by nobody.\
2\) php execution time (see <https://fluidproject.atlassian.net/browse/FLUID-2931#icft=FLUID-2931>) - will the new configuration Jamon discussed still have this setting in place.\
3\) permissions and possibilities of hacking in the following directories.\
/home/.m2 and below\
/home/website/customBuild\
/home/website/docs/customBuild - particularly the customBuild.sh file\
4\) parallel execution of ant, maven by multiple web users - is this ok?\
5\) load testing - alternative location to load test??

        