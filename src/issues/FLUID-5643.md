---json
{
  "title": "FLUID-5643",
  "summary": "Create a new scrollTo component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2015-04-21T16:01:19.485-0400",
  "updated": "2015-11-03T11:31:46.219-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "scrollTo"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-305/",
      "key": "FLOE-305",
      "summary": "Improve the scrolling of the language panel to get rid of the tracking of the last moved height"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The language panel in the first discovery tool has an implementation of div scrolling to make sure the element not only being scrolled into the view but also being scrolled to precise positions to make sure other elements, such as buttons, are not shown in partial. This implementation can be considered to base upon to create a scrollTo plugin.

The implementation is located @ <https://github.com/cindyli/first-discovery/blob/FLOE-281/src/js/panels.js#L342-L408>&#x20;

        