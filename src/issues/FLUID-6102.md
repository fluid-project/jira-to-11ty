---json
{
  "title": "FLUID-6102",
  "summary": "The jquery.keyboard-a11y plugin should not be included in a framework build of Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Colin Clark",
  "date": "2016-12-24T18:36:15.707-0500",
  "updated": "2017-01-11T13:53:22.382-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4729/",
      "key": "FLUID-4729",
      "summary": "the direct use of $.ui.keyCode prevents customBuilds that don't include jQuery UI Core"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6109/",
      "key": "FLUID-6109"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When I use Infusion's prebuilt dist/infusion-framework-no-jquery.js file, and provide my own version of jQuery, I receive errors in the console related to the fact that jQuery UI is missing:

```
jquery.keyboard-a11y.js:172
Uncaught TypeError: Cannot read property 'keyCode' of undefined
    at jquery.keyboard-a11y.js:172
    at jquery.keyboard-a11y.js:623
```

At least naively, it seems to me that a "no jQuery" version of the framework shouldn't include portions of the framework that are dependent on jQuery UI. In this particular case, I'm using Infusion without any particular UI components.

        