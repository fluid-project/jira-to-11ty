---json
{
  "title": "FLUID-4281",
  "summary": "Add ability to specify dimensions of the Uploader component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2011-06-02T15:58:13.937-0400",
  "updated": "2015-06-09T13:34:26.194-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T13:34:26.194-0400",
      "body": "I think the presentation should be done in css as opposed to component options.\n"
    }
  ]
}
---
Currently the Uploader's default presentation is about 434 pixels in width, with a variable height that grows to approximately 285 pixels.

This is problematic in implementations that require the Uploader to be a consistent fixed (or relatively consistent) size.

Options should include:

* width: em, pixels, or percentage.
* default height: specify the initial height of the uploader in em, pixels, or percentage.
* max height: specify the maximum height the uploader can become in em, pixels, or percentage.

Setting the default height and max height to the same value will in effect create an uploader of a fixed (relative) height.

        