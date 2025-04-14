---json
{
  "title": "FLUID-5549",
  "summary": "Configure deployment of the Infusion Documentation to GitHub Pages",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Simon Bates",
  "date": "2014-11-07T13:43:03.746-0500",
  "updated": "2015-06-17T10:27:55.363-0400",
  "versions": [],
  "fixVersions": [
    "1.5.1"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2015-04-14T15:39:08.674-0400",
      "body": "Merged at 399fc7dbb16a452a2681452879677c1918bf45bd\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-04-16T16:22:25.116-0400",
      "body": "We're going to move \"latest\" to \"development\"\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-04-17T10:39:40.203-0400",
      "body": "Updated to development and merged at 1ce8a1ef33fd32bae32a0a8012a376bad2676a46\n"
    }
  ]
}
---
Configure deployment of the Infusion Documentation to GitHub Pages:

* configure the gh-pages DocPad plugin
* generate pages at out/infusion/latest
* configure redirection
* / -> /infusion/latest
* /infusion -> /infusion/latest

        