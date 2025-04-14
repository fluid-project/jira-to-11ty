---json
{
  "title": "SJRK-181",
  "summary": "Increase the storage size of the VM hosting the tool",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Gregor Moss",
  "date": "2019-01-16T16:31:23.528-0500",
  "updated": "2019-01-17T06:36:21.412-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2019-01-17T06:36:21.403-0500",
      "body": "I've increased the VM's hard disk size to 650GB from 160G. Since about 100G was used, there's now half a terabyte available for storage.\n\n \n\n**df -h** output:\n\n`Filesystem Size Used Avail Use% Mounted on`\\\n`/dev/vda1 650G 94G 557G 15% /`\n"
    }
  ]
}
---
Increase the available storage size of the drive available to the Storytelling Tool server. We anticipate that 500GB or so will be sufficient.

        