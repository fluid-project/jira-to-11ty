---json
{
  "title": "FLUID-3708",
  "summary": "Dynamic messages need to be conveyed as aria status role",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-09-07T10:01:38.852-0400",
  "updated": "2011-05-17T11:27:08.543-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-09-07T10:01:55.419-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:03:54.176-0400",
      "body": "Bug Parade 1.3 tag deleted by order of THER KINGG\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-10T15:35:26.867-0500",
      "body": "An implementation for this functionality was provided in the work completed at revision 10364 - unfortunately it does not succeed in announcing anything at all in dynamic cases under any of the screenreaders tried (JAWS, NVDA). It seems there is something special about the condition of moving nodes around in the DOM that causes readers to falls silent even if there are changes in their status (labelling, component condition) etc. that should be announced. We will need to look at this issue in more detail post release.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T11:27:08.537-0400",
      "body": "This was fixed in Infusion 1.3, any new issues should be filed under new jiras\n"
    }
  ]
}
---
Dynamic messages like the notice about locked portlets should be conveyed as aria status role

        