---json
{
  "title": "FLUID-6086",
  "summary": "Branch and Revision Info missing from built infusion-all.js banner",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-11-24T13:40:14.152-0500",
  "updated": "2019-07-12T09:16:58.345-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Build Scripts",
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-11-24T14:18:52.107-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/790> has been merged into the master branch at 17a345b96f19c11fed4bef5cd45b2be01a5cf03c\n"
    }
  ]
}
---
Steps to reproduce:

1\. run a build :&#x20;

```java
grunt
```

2\. Open the infusion-all.js file

Notice that the branch and revision are empty. These should contain the branch and revision the build was generated from, or a message indicating that no information available if they are built outside of a git repo ( e.g. from a the zip downloaded from GitHub )

        