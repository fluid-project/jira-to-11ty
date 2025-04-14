---json
{
  "title": "FLOE-108",
  "summary": "Implement a metadata display panel",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Michelle D'Souza",
  "date": "2013-11-22T12:25:17.954-0500",
  "updated": "2013-12-20T15:53:11.763-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-111/",
      "key": "FLOE-111",
      "summary": "Create a metadata demo"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-12-09T15:24:40.483-0500",
      "body": "Some of this work has been merged into the project repo at d7409eab6dbb0a1e2bd54f1b37d1fd14c2c1410f\n\nThere are some changes that need to be made:&#x20;\n\n1\\. We should not hard code the colour of the indicators in the class names. We should also change the references to 'indicatorColor' to make it clear that we are actually concerned about state.\\\n2\\. We should remove the duplication in the indicator tests.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2013-12-20T15:53:11.761-0500",
      "body": "Merged into the project repo @ 14307be84664e74dddfd01b5813d87450d810055\n"
    }
  ]
}
---
In the past, we did a proof of concept implementation of metadata annotations inside an authoring and viewing system.&#x20;

<http://wiki.fluidproject.org/display/fluid/%28Floe%29+OER+Commons+Access+for+All+metadata+design>

We now need to generalize this work and build it in a way that it can be integrated into production environments.&#x20;

Designs for this work have been started here:

<http://wiki.fluidproject.org/download/attachments/37854510/FLOE-metadata-design-1a-13.png>

We need to implement a panel that displays availability or unavailability of metadata that is shown as "Your video features" panel at the top right corner of the design.

        