---json
{
  "title": "ENGAGE-29",
  "summary": "Generalize the artifact view component to work with different data",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Armin Krauss",
  "reporter": "Michelle D'Souza",
  "date": "2009-07-13T13:28:09.000-0400",
  "updated": "2011-01-13T11:19:43.719-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-07-13T13:30:29.000-0400",
      "body": "Implementing this may involve a lookup table for the model similar to the UI Spec used in collection space.\n"
    },
    {
      "author": "Armin Krauss",
      "date": "2009-07-14T14:33:31.000-0400",
      "body": "I changed the artifact component so it has know knowledge about the data structure of the JSON used.\\\nA loadData.js script is at the moment pulling the JSON from the local file system and describing the path\\\nto the data in \"lookup\".\n\nI will commit this and the next step is to pull the data in loadData.js from the CouchDB. loadData.js will\\\nserve as an example how to call the artifact component\n"
    },
    {
      "author": "Armin Krauss",
      "date": "2009-08-07T11:06:19.000-0400",
      "body": "The artifact.js file is not depending on the structure of the JSON file. Selectors can be used to\\\ntell the artifact.js where to expect data in the JSON\n"
    }
  ]
}
---
Currently the artifact view component knows the exact format of the data that is imported into CouchDB from the example McCord data. This needs to be generalized to work with other formats of data.&#x20;

        