---json
{
  "title": "SJRK-425",
  "summary": "Stories without \"published\" flag are inaccessible",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-11-12T18:24:49.888-0500",
  "updated": "2020-11-30T14:58:00.363-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-11-13T09:36:43.796-0500",
      "body": "I think for a longer term solution we may want to consider versioning the database records, and providing a tool/script for migrating between versions.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-11-30T12:42:59.214-0500",
      "body": "[The pull request with the migration script](https://github.com/fluid-project/sjrk-story-telling/pull/102) has been merged into the project repo main branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/d16dafeb8cc3487e62756deb8f3f5b06398e796c).\n"
    }
  ]
}
---
After <https://fluidproject.atlassian.net/browse/SJRK-289#icft=SJRK-289> was deployed to the server, all of the old stories ceased to be served because they're missing the "published" flag.

The work to solve this issue should be two steps:\
1\. Temporarily change the storiesById database view to allow both published stories AND those where the published flag is undefined, and make a similar change to the handleGetStory request handler\
2\. Update all of the old stories to have "published: true" in their data, then revert the step above to allow only published stories to be served publicly\
3\. Add tests to anticipate such issues as best as possible

As Justin Obara mentions in the comments, a better long-term solution would be version tracking for the records themselves and some migration tools.

        