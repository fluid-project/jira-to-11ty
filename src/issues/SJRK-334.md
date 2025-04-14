---json
{
  "title": "SJRK-334",
  "summary": "Update Karisma Stories site and deploy it from fluid-project fork",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-03-27T15:15:05.143-0400",
  "updated": "2022-07-29T00:09:29.005-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-04-23T14:00:59.774-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/64) has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/1bf1c121172ce9b2c477123e285a2ff5c6a19bef).\n\n[The stories-karisma-production branch](https://github.com/fluid-project/sjrk-story-telling/tree/stories-karisma-production) is created based off the master branch for the karisma production deployment.\n"
    }
  ]
}
---
The Karisma Stories site (<https://karisma-stories.floeproject.org/>) is [currently being built](https://github.com/inclusive-design/ci-service/blob/master/jenkins_jobs/stack-karisma-stories.floeproject.org.yml#L8) from @@Alan Harnum's fork and hasn't been updated in over a year. In that time, many changes of considerable substance have been made to the code, so it will likely need a bit of work to get it up to date again.

The work should proceed thus:

1. Make sure the Karisma theme still works properly with the current \`master\` branch contents
2. Create a new branch in the main fork called "stories-karisma-production" and merge master into it
3. Add a CI job to back up the site manually
4. Adjust the [Karisma site CI job](https://ci.incd.ca/job/stack-karisma-stories.floeproject.org/) to point to "stories-karisma-production" on the main fork
5. Run tests and otherwise ensure everything is working properly

        