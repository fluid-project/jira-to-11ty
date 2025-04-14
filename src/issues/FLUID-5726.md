---json
{
  "title": "FLUID-5726",
  "summary": "Automate links controls composite panel test",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Kaye Mao",
  "date": "2015-07-29T10:26:27.263-0400",
  "updated": "2015-07-29T10:46:23.879-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5700/",
      "key": "FLUID-5700"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Attempts were made to automate the fetching of test templates for the linksControls panel by using a template loader and nesting the sub-components.&#x20;

There seems to be a procedural flaw or collision when attempting to make linksTester wait for linksControls and its sub-panels to be ready before running a refreshView and then running the tests. The issue seems to be with refreshView and troubles instantiating the emphasizeLinks as a sub-component.

        