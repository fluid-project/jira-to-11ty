---json
{
  "title": "FLOE-111",
  "summary": "Create a metadata demo",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-11-29T12:29:41.434-0500",
  "updated": "2014-01-07T10:41:09.217-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-134/",
      "key": "FLOE-134",
      "summary": "An extra empty captions track metadata is also presented in the HTML viewer when only one captions is defined"
    },
    {
      "type": "Related to",
      "url": "/browse/FLOE-108/",
      "key": "FLOE-108"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-11-29T13:16:06.465-0500",
      "body": "We need to implement a nightly build of this demo.\n"
    }
  ]
}
---
Create a metadata demo that showcases an authoring environment. A user should be able to create some content and import some media. The user will then be able to set/adjust the metadata associated with it. This metadata will be displayed and written out to the DOM.

Designs: <http://wiki.fluidproject.org/download/attachments/37854510/FLOE-metadata-design-1a-13.png?version=2&modificationDate=1385737983131&api=v2>

        