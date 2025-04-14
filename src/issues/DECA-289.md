---json
{
  "title": "DECA-289",
  "summary": "\"Browse File\" button is not a string in exporter.js",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2012-06-28T15:51:17.706-0400",
  "updated": "2012-12-03T11:04:06.370-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-07-09T15:19:24.330-0400",
      "body": "There is a bug in the uploader ( FLUID-4726 ) that prevents it from using strings passed in to update the UI. When this is fixed, exporter.js should be able to take in a string for the browse file button and pass it down to the uploader.&#x20;\n"
    }
  ]
}
---
"Browse File" string is not in the Exporter.js file. It should be to be consistent with all other UI strings.

        