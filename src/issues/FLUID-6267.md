---json
{
  "title": "FLUID-6267",
  "summary": "npm install and grunt output not visible in log files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-03-28T17:22:53.331-0400",
  "updated": "2024-07-22T10:35:08.853-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6269/",
      "key": "FLUID-6269",
      "summary": "Ansible error output is hard to read"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When spinning up a new Vagrant box, this is all we see:

```
default: TASK [nodejs : Run application related commands as the application user] *******
    default: changed: [localhost] => (item=npm install)
    default: changed: [localhost] => (item=grunt)
```

If those tasks fail, they will show "failed" instead of "changed".

Running Ansible in verbose mode outputs everything in a single-line string and is not readable.

The output of the build process should be easier to investigate.

        