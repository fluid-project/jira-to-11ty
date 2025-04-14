---json
{
  "title": "FLUID-4186",
  "summary": "Make the reset file more flexible to use",
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
  "reporter": "Justin Obara",
  "date": "2011-04-14T16:17:13.875-0400",
  "updated": "2011-04-29T14:08:31.821-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-04-29T14:08:13.353-0400",
      "body": "Split the Reset file into fss-reset-global.css, fss-reset-context.css, fss-base-global.css, fss-base-context.css. This allows users to pick the parts that they want as well as to use the changes globally or scoped to a specific context. The fss-reset.css file is there for backwards compatability, but is deprecated.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-29T14:08:31.819-0400",
      "body": "Merged into the master branch of the project repo at b4fcfdf8996a146f90701fba6bb00d9b237f2420\n"
    }
  ]
}
---
Break up the fss-reset into multiple files. For example fss-global-reset.css and fss-global-base.css (names are just examples, not necessarily what we will use). The fss-reset file would remain, but would only include information to link in the other two files. 

Additionally we would add a contextual/scoped version. This would be similar to how YUI3 has an in-context version. In this case the user would be able to only reset portions of the document, rather than having it affect the entire page when included.

        