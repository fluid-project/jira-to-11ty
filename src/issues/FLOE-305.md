---json
{
  "title": "FLOE-305",
  "summary": "Improve the scrolling of the language panel to get rid of the tracking of the last moved height",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Cindy Li",
  "date": "2015-04-21T16:07:02.142-0400",
  "updated": "2015-11-12T14:45:21.816-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5643/",
      "key": "FLUID-5643"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:45:21.813-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1383> and all activities should be carried on there.\n"
    }
  ]
}
---
scrollLangIntoView() in the language panel keeps track of the last moved height in a private variable.&#x20;

According to Antranig's comment (<https://github.com/fluid-project/first-discovery/pull/31/files#r28700565>), the use of this private variable is awkward and perhaps the biggest impediment to turning this into a generic fluid.scrollIntoView(controls, elements, index) function - is there perhaps some measurement that we can take from the DOM instead that will let us determine this? It seems that this will be fragile in the face of the user operating a scrolling control (if one appeared) in between invocations to this function.

        