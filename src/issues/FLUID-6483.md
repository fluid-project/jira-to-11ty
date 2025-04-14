---json
{
  "title": "FLUID-6483",
  "summary": "Broken link in  IoCAPI page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Bate martins",
  "date": "2020-04-02T18:01:08.708-0400",
  "updated": "2020-04-02T20:09:22.235-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": "OS: Ubuntu 18.04.4 LTS\\\nNode: 12.13.1\\\nChrome: 80.0.3987.122 (Official Build) (64-bit)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-04-02T20:01:05.919-0400",
      "body": "The link labelled \"IoC References\" on <https://docs.fluidproject.org/infusion/development/IoCAPI.html> is pointing at <https://docs.fluidproject.org/infusion/development/IocReferences.html> and returns a 404.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-02T20:09:18.550-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion-docs/pull/175> ) into the project repo at d07101ceda57b06b17f4116c9c41316c97eb7433\n"
    }
  ]
}
---
Broken link:

the Link to IoCReferences page from the  IoCAPI page is broken.Gives a 404 error code.

        