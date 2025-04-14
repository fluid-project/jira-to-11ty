---json
{
  "title": "FLUID-5511",
  "summary": "Create placeholder pages for any broken links",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2014-09-18T15:28:33.495-0400",
  "updated": "2014-10-08T13:56:29.599-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-10-08T13:56:27.171-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion-docs/pull/33> ) int the project repo at 8f2d6e6f37389d134de524410898a859c65d4e01\n"
    }
  ]
}
---
We don't want our new Markdown documentation to have broken links. We need to find any links in the documentation to pages that don't yet exist and create a 'stub' page to reference. These stub pages will be stored in a folder called "to-do" and will contain text to the effect of:

"This page is still under construction. An archived version can be found on the XXX page of the Infusion Documentation wiki"

The stub pages should have their final intended filename. When the time comes to create that documentation, the page will be moved out of the to-do folder and links to it will be udpated.

        