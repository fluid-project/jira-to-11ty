---json
{
  "title": "DECA-24",
  "summary": "Port decapod server from CherryPy to Kettle",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2009-11-13T16:33:35.000-0500",
  "updated": "2012-06-08T14:29:25.132-0400",
  "versions": [],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/KETTLE-5/",
      "key": "KETTLE-5",
      "summary": "System call support in Kettle"
    }
  ],
  "attachments": [],
  "comments": []
}
---
As per <https://fluidproject.atlassian.net/browse/FLUID-3318#icft=FLUID-3318> we have decided to move from CherryPy to Kettle. This will require a modification to Kettle which adds system call support.&#x20;

        