---json
{
  "title": "FLOE-182",
  "summary": "Where should the existing OER content for editing be defined",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2014-04-17T16:45:12.498-0400",
  "updated": "2014-04-17T16:45:12.498-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the metadata demo, in order to editing an existing content, this content is currently defined in

<https://github.com/fluid-project/metadata/blob/master/demos/js/predefinedOER.js>

as an object that has 2 elements: video url and content.

The content contains a video tag having the source pointing to different format of the video url.

Where can this content be better defined? Perhaps a template that can be loaded into the component? The video url can also be extracted from the content rather than being defined as a separate element.

        