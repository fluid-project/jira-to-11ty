---json
{
  "title": "INFRA-124",
  "summary": "Private Fedora mirror",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-02-26T10:20:21.859-0500",
  "updated": "2018-03-01T08:38:51.765-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-26T14:34:41.800-0500",
      "body": "Private mirror is available at <http://mirror.inclusivedesign.ca/fedora>\n\nIt was added to Fedora's MirrorManager and will be used automatically by hosts on the 205.211.168.0/24 (OCAD) and 205.211.169.0/24 (IDRC) networks. No need for reconfiguration of clients.\n\nI'm working on making the update script a bit more robust before closing this ticket.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-26T14:51:16.810-0500",
      "body": "Sent an email to rit.edu asking our mirror to be added to their ACL so we can mirror from a faster server.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-27T09:36:56.260-0500",
      "body": "Disk space used on h-0005 (\\`mirror\\` user):\n\n```\n/home/mirror/public_html/fedora:\r\n\r\n79G\treleases/26\r\n82G\treleases/27\r\n23G\tupdates/26\r\n22G\tupdates/27\n```\n\nMirror script committed to ops repo.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-01T08:38:51.765-0500",
      "body": "I should add a comment about why I chose h-0005 for this. This mirror server can grow a lot in the near future (>500GB) and using a QCOW2 virtual disk (like our VMs do) didn't seem like a good option, for backup/performance reasons. That made me focus on our physical servers. Out of all the h-\\* servers, only h-0005 is public so that settled it.\n"
    }
  ]
}
---
Private Fedora 27 mirror for x86\_64 platform.

        