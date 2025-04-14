---json
{
  "title": "FLUID-6490",
  "summary": "Lack of write flexibilty in \"rewriteMdLinks\" Helper function ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Bate martins",
  "date": "2020-04-13T08:05:36.296-0400",
  "updated": "2024-07-22T10:59:48.865-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": "OS: Ubuntu 18.04.4 LTS\\\nNode: 12.13.1\\\nChrome: 80.0.3987.122 (Official Build) (64-bit)&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-22T10:57:53.402-0400",
      "body": "This appears to be related to our old docs platform. It shouldn't be an issue after having switched to 11ty.\n"
    }
  ]
}
---
The Helper function in charge of rewriting \*.md links to \*.html lacks flexibility in case where there is a change of directory structure!. Currently  \*.md links are hand coded e.g ../../some-content.md. This leads to overhead in refactoring whenever there is a change of content organization.

        