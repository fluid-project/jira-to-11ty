---json
{
  "title": "FLUID-6293",
  "summary": "Buildkite unblocker fails to unblock non-PR build",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Giovanni Tirloni",
  "date": "2018-07-01T16:27:49.293-0400",
  "updated": "2018-09-08T12:46:22.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-07-01T16:30:28.951-0400",
      "body": "Avtar Gill could you take a quick look at this? I'm not sure the behavior is expected or not.\n\nThis has happened to manually triggered builds that I used to test the pipeline as well as a merge by Antranig Basman on the Kettle repository.\n\nI know we talked about my PRs never getting unblock but it seems this is a different error. For that error, the unblocker returns \"Invalid Buildkite webhook payload\" but for this one it seems to crash.\n"
    }
  ]
}
---
Unblocker fails to unblock non-PR build (build.pull\_request == null, manually triggered build or merging a PR into master).

Build: <https://buildkite.com/fluid-project/infusion/builds/302>

Error:

```
20:14:41.996:  Validating payload...
20:14:42.025:  Validating pull request author...
(node:27) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): TypeError: Cannot read property 'repository' of null
(node:27) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
[object Object]
```

Request:

```
POST https://buildkite.fluidproject.org/unblock
Headers

Accept: */*
User-Agent: Buildkite-Request
Content-Type: application/json
Accept-Encoding: gzip;q=1.0,deflate;q=0.6,identity;q=0.3
X-Buildkite-Event: build.finished
X-Buildkite-Token: xxx
X-Buildkite-Request: 98c11d1e-d181-45dc-a60f-64d0fc89f6a3
Body

{
  "event": "build.finished",
  "build": {
    "id": "1517afce-dbe4-4baf-89a8-42fb4f0aace6",
    "url": "https://api.buildkite.com/v2/organizations/fluid-project/pipelines/infusion/builds/302",
    "web_url": "https://buildkite.com/fluid-project/infusion/builds/302",
    "number": 302,
    "state": "passed",
    "blocked": true,
    "message": "20180701",
    "commit": "HEAD",
    "branch": "master",
    "tag": null,
    "source": "ui",
    "creator": {
      "id": "b02fdc4c-54f3-4bfd-8173-28a7d39b24d9",
      "name": "Giovanni Tirloni",
      "email": "gtirloni@ret.cx",
      "avatar_url": "https://www.gravatar.com/avatar/6eb363b38ee754bb21edcf99d8e299c2",
      "created_at": "2017-10-17 20:30:51 UTC"
    },
    "created_at": "2018-07-01 20:14:38 UTC",
    "scheduled_at": "2018-07-01 20:14:38 UTC",
    "started_at": null,
    "finished_at": "2018-07-01 20:14:39 UTC",
    "meta_data": {
    },
    "pull_request": null
  },
  "pipeline": {
    "id": "91ed2371-e584-4216-9708-d919073425e1",
    "url": "https://api.buildkite.com/v2/organizations/fluid-project/pipelines/infusion",
    "web_url": "https://buildkite.com/fluid-project/infusion",
    "name": "infusion",
    "description": "",
    "slug": "infusion",
    "repository": "https://github.com/fluid-project/infusion.git",
    "branch_configuration": "master",
    "default_branch": "master",
    "skip_queued_branch_builds": false,
    "skip_queued_branch_builds_filter": null,
    "cancel_running_branch_builds": false,
    "cancel_running_branch_builds_filter": null,
    "provider": {
      "id": "github",
      "settings": {
        "trigger_mode": "code",
        "build_pull_requests": true,
        "pull_request_branch_filter_enabled": false,
        "skip_pull_request_builds_for_existing_commits": false,
        "build_pull_request_forks": true,
        "prefix_pull_request_fork_branch_names": true,
        "build_tags": false,
        "publish_commit_status": true,
        "publish_commit_status_per_step": true,
        "repository": "fluid-project/infusion",
        "pull_request_branch_filter_configuration": "",
        "commit_status_404s": 4,
        "publish_blocked_as_pending": true
      },
      "webhook_url": "https://webhook.buildkite.com/deliver/f2f2f45dd2efd3e090b75f6a9937b1bd27bccf42fb08787137"
    },
    "builds_url": "https://api.buildkite.com/v2/organizations/fluid-project/pipelines/infusion/builds",
    "badge_url": "https://badge.buildkite.com/5c8634255695aaaeda0e48799272f9f0e758e6512829737c94.svg",
    "created_at": "2017-12-04 23:40:20 UTC",
    "env": {
    },
    "scheduled_builds_count": 0,
    "running_builds_count": 1,
    "scheduled_jobs_count": 3,
    "running_jobs_count": 1,
    "waiting_jobs_count": 1,
    "steps": [
      {
        "type": "manual",
        "label": "Run this CI job"
      },
      {
        "type": "script",
        "name": ":pipeline:",
        "command": "buildkite-agent pipeline upload",
        "artifact_paths": "",
        "branch_configuration": "",
        "env": {
        },
        "timeout_in_minutes": null,
        "agent_query_rules": [
          "env=dev",
          "type=physical",
          "hypervisor=virtualbox",
          "vagrant=true"
        ],
        "concurrency": null,
        "parallelism": null
      }
    ]
  },
  "sender": {
    "id": "b02fdc4c-54f3-4bfd-8173-28a7d39b24d9",
    "name": "Giovanni Tirloni"
  }
}
```

Error from buildkite:

```
Timed out waiting to read from the connection (timeout was 5 seconds)
```

        