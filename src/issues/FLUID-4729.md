---json
{
  "title": "FLUID-4729",
  "summary": "the direct use of $.ui.keyCode prevents customBuilds that don't include jQuery UI Core",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2012-07-12T10:53:48.323-0400",
  "updated": "2020-08-04T09:20:33.468-0400",
  "versions": [
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit",
    "Keyboard Accessibility",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6102/",
      "key": "FLUID-6102"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6538/",
      "key": "FLUID-6538"
    }
  ],
  "attachments": [],
  "comments": []
}
---
If a user already has there own version of jQuery UI and wants to create a custom build that includes everything but that, there will always be errors because of the hard dependence on $.ui.keyCode. A work around would be to have the user provide there own version of jQuery as well.&#x20;

An example of where this sort of issue could arise, is when a user wants an updated version of jQuery UI that relies on the same vernon of jQuery that we already provide in the build.

        