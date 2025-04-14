---json
{
  "title": "FLUID-4395",
  "summary": "Modify the jscssp parser to put urls into the model",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2011-08-08T21:54:34.335-0400",
  "updated": "2013-10-04T09:53:25.488-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4383/",
      "key": "FLUID-4383"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The jscssp parser is being used to dynamically modify the css stylesheets and write them out to a different location. In order to keep the stylesheets working we need to rewrite any relative urls in the stylesheets so the links are still appropriate. In order to do this, we need access to the urls in the stylesheets.&#x20;

        