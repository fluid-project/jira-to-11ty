---json
{
  "title": "FLUID-6064",
  "summary": "Remove aria-role application from Uploader and Pager",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Christian Murphy",
  "date": "2016-11-13T11:18:29.167-0500",
  "updated": "2019-07-12T09:16:46.452-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.4.1",
    "2.0"
  ],
  "components": [
    "Pager",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-17T12:17:31.204-0500",
      "body": "Pager: Essentially a collection of links, does not seem to require role=application\n\nUploader: While the uploader use a table, the keyboard interaction for the file rows is not expected to follow standard table navigation. Rather the user selects whole rows to operate on, and can scroll through them using the mouse or keyboard. Rather than removing the role=application completely, i think it should be scoped more tightly to the file queue rows as these are the only parts that have the application style keyboard navigation.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-11-18T17:16:41.473-0500",
      "body": "Merged the pull request <https://github.com/fluid-project/infusion/pull/787> into the master branch at 59f8b39757823ef0609d85df2c99e4be29c2b87d\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-12-02T10:45:44.581-0500",
      "body": "Merged in PR ( <https://github.com/fluid-project/infusion/pull/785> ) into the project repo's Infusion 1.4.x branch at 84ed5b34ac277950771e48a9201417787e76b66c\n"
    }
  ]
}
---
aria-role application is not necessary for these plugins an may actually interfere with assistive technologies.

Reference: <https://www.marcozehe.de/2012/02/06/if-you-use-the-wai-aria-role-application-please-do-so-wisely/>

        