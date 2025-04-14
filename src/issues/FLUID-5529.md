---json
{
  "title": "FLUID-5529",
  "summary": "Modify urls pointing to \"../src/demos/..\" to \".../demos/...\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Cindy Li",
  "date": "2014-10-17T13:48:12.968-0400",
  "updated": "2014-10-17T14:19:36.992-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-10-17T14:19:36.972-0400",
      "body": "<http://issues.fluidproject.org/browse/FLUID-5523>\n"
    }
  ]
}
---
In the overview panel demo and demos that use overview panel and define panel options in config.json, the url for demo links are pointing to ".../src/demos/...". Since "demos" directory has been moved to be a sibling of "src" directory, these links should be pointing to "../demos/...".

        