---json
{
  "title": "FLUID-6189",
  "summary": "fluidproject.org points to mixed-content",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Giovanni Tirloni",
  "date": "2017-09-03T09:44:54.127-0400",
  "updated": "2024-07-24T12:35:08.220-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-03T09:58:28.520-0400",
      "body": "I've temporarily fixed this in production by running this comment on the deployed website:\n\n```\nfind . -type f -exec sed -i 's/http:\\/\\/fluid/\\/\\/fluid/g' {} +\n```\n\nThis replaced all ocurrence of [http://fluid](http://fluid/) with a schemaless URL //fluidproject.org and fixed the mixed-content warnings\n\nJonathan Hung Justin Obara, could you take a look at this? It seems that site.url should be defined to \"//fluidproject.org\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-24T12:35:07.993-0400",
      "body": "While there are still http urls, they aren’t blocked by Chrome. Tested using Chrome 126 on macOS 14.5.\n"
    }
  ]
}
---
After enabling HTTPS for fluidproject.org, some URLs got blocked by Chrome because they're HTTP (mixed-content).

        