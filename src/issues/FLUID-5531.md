---json
{
  "title": "FLUID-5531",
  "summary": "Links to Infusion Readme.md should be replaced with a link to the HTML version when available",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2014-10-21T09:18:28.809-0400",
  "updated": "2024-07-25T15:07:01.815-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation",
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "YashJipkate",
      "date": "2020-04-06T11:27:28.890-0400",
      "body": "I think the issue needs some updates:\n\n* The 'Download Infusion' link at fluidproject.org is now present in the 'Infusion' section rather than the 'Projects' section. Also, it no longer references the README of the docs repo, but the repo itself. \n* The [build site](https://build.fluidproject.org/) no longer contains link to the README or the infusion-docs repo. Should it include one?\n\nAs for the 'Download Infusion' link at fluidproject.org, the link should point specifically to the '[How Do I Get Infusion](https://github.com/fluid-project/infusion#how-do-i-get-infusion)' section rather than linking to the GitHub repo as a whole. What do you think?\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-25T15:07:01.648-0400",
      "body": "It seems the issue is outdated, and things are sufficient as they stand even if not perfectly ideal. I think we can revisit this when we have time to refresh the fluid project website.\n"
    }
  ]
}
---
Currently the links from the Fluid project website, and the build website reference readme.md of the Infusion documents (<https://github.com/fluid-project/infusion-docs/blob/master/src/documents/README.md>).

Specifically these links reference the Readme:

* "Download Infusion" link on the Projects page on fluidproject.org
* "Download Latest Infusion" link on the build site

These links should be replaced with links to the rendered HTML (not the markdown file) once available.

        