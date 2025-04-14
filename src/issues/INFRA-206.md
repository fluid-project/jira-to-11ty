---json
{
  "title": "INFRA-206",
  "summary": "Buildkite Docker builds are leaving root-owned files behind",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-08-15T11:15:18.260-0400",
  "updated": "2018-08-15T11:16:29.411-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-08-15T11:16:29.407-0400",
      "body": "Created a pre-checkout hook script that cleans those files:\n\n```\n#!/bin/bash -ex\r\n\r\n# Safety check to ensure we're not being fed a bad path\r\nif [[ ${BUILDKITE_BUILD_CHECKOUT_PATH} == /var/lib/buildkite-agent* ]]; then\r\n\r\n  # Delete root-owned files that might have been created by an old containerized build\r\n  docker run --rm -v ${BUILDKITE_BUILD_CHECKOUT_PATH}:/src busybox sh -c \"cd /src && find /src/ -user root -exec rm -rf \\{\\} \\;\"\r\n\r\nfi\n```\n\nSuccessful build: <https://buildkite.com/fluid-project/kettle/builds/61>\n"
    }
  ]
}
---
This causes the checkout phase to fail (since git can't remove those files while running as buildkite-agent user):

```
$ cd /var/lib/buildkite-agent/builds/h-0005-tor1-incd-ca-1/fluid-project/kettle
$ git remote set-url origin https://github.com/fluid-project/kettle.git
$ git clean -fdq
# Fetch and checkout pull request head from GitHub
$ git fetch -v origin refs/pull/41/head
From https://github.com/fluid-project/kettle
 * branch            refs/pull/41/head -> FETCH_HEAD
# FETCH_HEAD is now `7606c18928b0ccd24e04ab23d9d32b44e11b3481`
$ git checkout -f 6fcb7476815d7ff2004bd2a529b598ccab083496
error: unable to create file tests/data/writeable/formenc.txt (Permission denied)
HEAD is now at 6fcb747... KETTLE-66: use *Resolver for invokers that result in Multer-style callback functions.
⚠️ Warning: Checkout failed! Error running `/usr/bin/git checkout -f 6fcb7476815d7ff2004bd2a529b598ccab083496`: exit status 1 (Attempt 1/3 Retrying in 2s)
```

        