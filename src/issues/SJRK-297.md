---json
{
  "title": "SJRK-297",
  "summary": "Create SJRK-themed Storytelling Tool",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2019-09-23T16:58:53.124-0400",
  "updated": "2019-11-18T17:38:39.880-0500",
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
      "date": "2019-10-02T19:08:49.449-0400",
      "body": "\\[The pull request]\\(<https://github.com/fluid-project/sjrk-story-telling/pull/45>) has been merged at \\[this commit]\\(<https://github.com/fluid-project/sjrk-story-telling/commit/a870c8afe9609a484f9005778039a0fe73974545>).\n\nThe new branch for hosting SJRK-flavoured theme is created at <https://github.com/fluid-project/sjrk-story-telling/tree/stories-sojustrepairit-production>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-10-03T13:45:16.065-0400",
      "body": "sjrk-story-telling code has been merged in, but the environment setup and config still remains\n"
    }
  ]
}
---
Set up an SJRK-themed version of the Storytelling Tool to link directly from the [SJRK site](https://www.sojustrepairit.org/)

Title: Social Justice Repair Kit: Storytelling\
URL: <https://stories.sojustrepairit.org/>

@@Gregor Moss will try to style the tool in a way that matches the SJRK site, i.e. the SJRK logo, colours and link styling, but may reach out to a designer for assistance.

The site will consist only of the core ST pages (Browse, View, Edit). Once stories are added, the editing is to be disabled and the link to the edit page removed (the same thing was done with the Cities theme, previously)

Once ready, CI jobs should be set up to host the site from the following GitHub branch, along with any required Docker containers:\
<https://github.com/fluid-project/sjrk-story-telling/tree/stories-sojustrepairit-production>

Config settings should be as follows:

```javascript
"theme": "sojustrepairit",
"authoringEnabled": true
```

**After deployment, please ensure the nginx client\_max\_body\_size value has been updated to 256 MB**

        