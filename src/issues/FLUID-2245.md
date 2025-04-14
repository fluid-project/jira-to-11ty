---json
{
  "title": "FLUID-2245",
  "summary": "Add an FSS target to the Infusion build scripts, which will package up all the files required to use the skinning system in a stand-alone configuration.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2009-02-17T11:48:12.000-0500",
  "updated": "2011-02-22T16:27:42.793-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-224/",
      "key": "FLUID-224",
      "summary": "Provide the ability to create custom packages for each component"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:42.781-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, it's hard to tell exactly what files you need to use the Fluid Skinning System. Our build process should be expanded to create a stand-alone FSS bundle.

        