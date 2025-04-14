---json
{
  "title": "FLUID-6048",
  "summary": "Demo: initial aria-selected state for fruits is incorrect",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-08T13:30:40.565-0500",
  "updated": "2016-11-08T13:31:53.377-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6042/",
      "key": "FLUID-6042",
      "summary": "Fruit rankings visually start with one star rating, but actually nothing is checked by default"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6048/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-08T13:31:24.982-0500",
      "body": "screenshot.png shows that the Mangosteen thumbnail has its `aria-selected` attribute set to `false`.\n"
    }
  ]
}
---
Despite the fact that the Mangosteen is selected by default, the `aria-selected` attribute is set to `false` in the thumbnail group.&#x20;

Steps to reproduce:

1\. Open the [Keyboard Accessibility demo](http://build.fluidproject.org/infusion/demos/keyboard-a11y/)\
2\. Using the browsers developer tools inspect the Mangosteen thumbnail

Notice that the `aria-selected` attribute is set to `false`. It also means you cannot set the state to `true` unless you select another fruit first and come back to it.

        