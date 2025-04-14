---json
{
  "title": "SJRK-343",
  "summary": "Add individual config file for each SJRK production branch",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Gregor Moss",
  "reporter": "Cindy Li",
  "date": "2020-04-20T20:31:47.061-0400",
  "updated": "2020-06-02T16:36:22.535-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-266/",
      "key": "SJRK-266",
      "summary": "Add separate config files for Stories sites"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-04-20T21:25:53.253-0400",
      "body": "When we originally made the config file system, I believe the intention was to separate settings like that from the codebase. In hindsight, though, I think this change makes sense. It shifts the balance of that work away from our infrastructure lead (usually one person) and towards fluid-project committers (several people).&#x20;\n\nOur current multi-branch deployment approach means we have copies of the file regardless, so this would seem to make sense. We'll have to carefully plan out the deployment, once the codebase is in order.\n"
    }
  ]
}
---
Right now, the server admin needs to create the individual config file (sjrk.storyTelling.server.config.json5) when deploying a production branch. This file should be created and committed into each branch itself to reduce the admin work.

        