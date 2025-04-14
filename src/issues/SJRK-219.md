---json
{
  "title": "SJRK-219",
  "summary": "Create a staging environment for stories.floeproject.org",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2019-02-12T11:49:48.471-0500",
  "updated": "2019-02-13T16:56:39.223-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2019-02-13T16:56:35.214-0500",
      "body": "This is done at <http://staging-stories.floeproject.org/> except for getting SSL working, which I'll make a separate JIRA for.\n"
    }
  ]
}
---
Copied from planning document, details need to be worked out:

1. Set up a staging environment
2. Branch names:
3. stories-floe-production
4. stories-floe-dev

1) For both sjrk-story-telling and sjrk-story-telling-server
2) Recreate outstanding pull requests against new dev branch
3) Create new staging environment (Wait for Alan)
4) Set up new Jenkins job to deploy to staging
5) Update existing production Jenkins job for new production branch name
6) Make (re-use) job to wipe staging environment each night

        