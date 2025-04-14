---json
{
  "title": "DECA-232",
  "summary": "Upgrade to a pre-release version of Infusion",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-02-03T08:07:14.831-0500",
  "updated": "2012-06-11T16:27:53.352-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export",
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-02-29T15:31:34.568-0500",
      "body": "Upgraded to a snapshot/pre-release of Infusion 1.5 (at rev: f2a883efe711374f5340083314a6207a6ff7d4d)&#x20;\n\nThe changes are currently in my bitbucket repo. \\\n<https://bitbucket.org/jobara/decapod-ui-iteration3>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:24:42.781-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
There have been some improvements to Infusion since 0.5a. We should make a custom build of a pre-released version of Infusion to use in Decapod 0.5. Included in these changes is a fix to FLUID-4588 which resolves an issue we were having with setting the response, for successfully POSTing a file, to 201.

        