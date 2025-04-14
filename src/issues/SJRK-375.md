---json
{
  "title": "SJRK-375",
  "summary": "Migrate daily cleanup Jenkins job to GitHub Actions",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-07-03T15:02:30.823-0400",
  "updated": "2020-07-04T09:14:54.197-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
<https://github.com/inclusive-design/ci-service/blob/master/jenkins_jobs/stack-staging-stories.floeproject.org-nightly-cleanup.yml>

```
- job:
    node: i-0033.tor1.incd.ca
    name: stack-staging-stories.floeproject.org-nightly-cleanup
    project-type: freestyle
    display-name: stack-staging-stories.floeproject.org-nightly-cleanup
    triggers:
      - timed: "@midnight"    
    properties:
      - inject:
          properties-content: |
            PROJECT_ID=006fb6eb
            PROJECT_HOME=/srv/$PROJECT_ID
    builders:
        - shell: |
            #!/bin/sh -ex
            sudo rm -rf "$PROJECT_HOME/couchdb"
            sudo rm -rf "$PROJECT_HOME/uploads"
            sudo rm -rf "$PROJECT_HOME/deleted_uploads"
    publishers:
      - email:
            recipients: ops-notifications@lists.inclusivedesign.ca
```

        