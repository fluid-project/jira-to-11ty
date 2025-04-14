---json
{
  "title": "FLUID-4048",
  "summary": "Upgrade qunit now that jQuery 1.5 has been released",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-02-02T10:47:07.493-0500",
  "updated": "2011-02-02T13:31:20.819-0500",
  "versions": [],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-02-02T13:31:20.817-0500",
      "body": "Updated to the latest qunit and pushed to the master. <https://github.com/fluid-project/infusion/commit/2dc794e96f6033e64cc407cfb7e659e3eaa16e58>\n"
    }
  ]
}
---
Now that jQuery 1.5 has been released we should look into and if possible upgrade qunit. They aren't dependent on each other so we could do them independently.&#x20;

        