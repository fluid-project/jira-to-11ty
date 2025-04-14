---json
{
  "title": "FLUID-6332",
  "summary": "Add ability to skip bind mount on Vagrant boxes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-08-29T12:51:20.715-0400",
  "updated": "2024-07-22T08:55:48.481-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-08-29T12:53:48.617-0400",
      "body": "<https://github.com/fluid-project/infusion/pull/927>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-08-29T13:57:06.160-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/927> ) into the project repo at c62b79db0ebe0eb669f1e4011cbee0f2e90b8727\n"
    }
  ]
}
---
In certain situations, it's perfectly fine to have the node\_modules shared between host and a vagrant box:

* When host/VM architecture are the same
* When all work happens inside the VM

That is the situation in CI Linux build nodes, so he bind mount is not necessary there.

Skipping the bind mount where it's possible has the advantage that certain operations like publishing the build artifacts can happen outside the VM (as they need access to credentials that would be hard to import into the VM) without having to run npm install a second time.

        