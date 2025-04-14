---json
{
  "title": "SJRK-134",
  "summary": "Move storyFabricator.js code away from the unit testing framework",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Alan Harnum",
  "reporter": "Gregor Moss",
  "date": "2018-06-01T15:50:50.853-0400",
  "updated": "2018-07-12T11:04:37.874-0400",
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
      "date": "2018-07-12T11:04:37.857-0400",
      "body": "Kettle itself actually does this in some places via an alternate function: <https://github.com/fluid-project/kettle/blob/9ff8c535d095249b03ea299dde42c503ebe1bd99/kettle.js#L44-L48>\n\nI'm closing this one because it reflects current \"best practice\" in Kettle itself for getting access to the useful request functions outside of a testing context.\n"
    }
  ]
}
---
**tests/utils/storyFabricator.js** is used to create random stories for development and testing purposes; it currently uses the unit testing framework to get access to some convenience functions, especially kettle.test.request.formData 

We should move away from this and create a real factory-style method, rather than misusing the unit test framework.

        