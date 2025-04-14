---json
{
  "title": "SJRK-295",
  "summary": "Error thrown at loading \"Browse Stories\" page in firefox",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Gregor Moss",
  "reporter": "Cindy Li",
  "date": "2019-09-17T14:30:06.661-0400",
  "updated": "2019-09-17T14:32:33.697-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
1\. In firefox, open web developer console\
2\. Go to [https://staging-stories.floeproject.org](https://staging-stories.floeproject.org/)\
3\. Click "Browse Stories". In the console, this error is thrown: *pageComponent.model is undefined*

This issue is discovered with FF 69 on MacOS Mojave.

        