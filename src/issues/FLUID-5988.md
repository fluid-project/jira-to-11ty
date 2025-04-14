---json
{
  "title": "FLUID-5988",
  "summary": "Declaratively define listeners used in UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2016-10-25T12:13:14.122-0400",
  "updated": "2017-01-19T11:23:22.865-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5740/",
      "key": "FLUID-5740",
      "summary": "Separated panel events binding should be more declarative"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5987/",
      "key": "FLUID-5987",
      "summary": "Sliding panel doesn't open unless \"reset\" is triggered"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5987/",
      "key": "FLUID-5987"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Due to the limited time available before the code freezing period for the infusion 2.0 release. These comments will need to be addressed after the release:&#x20;

<https://github.com/fluid-project/infusion/pull/768#issuecomment-255857644>\
<https://github.com/fluid-project/infusion/pull/768#issuecomment-255859975>

This improvement is to use the more up-to-date infusion way to declare listeners used by UIO on the component tree rather than explicitly calling \`addListeners\`.

        