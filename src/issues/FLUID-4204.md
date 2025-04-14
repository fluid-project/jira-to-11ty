---json
{
  "title": "FLUID-4204",
  "summary": "\"Rust\" theme doesn't style menus well",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2011-05-05T10:08:03.372-0400",
  "updated": "2011-10-14T16:09:51.963-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4204/rust-theme-1.3.png",
      "filename": "rust-theme-1.3.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4204/rust-theme-1.4.png",
      "filename": "rust-theme-1.4.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-05-05T10:09:23.806-0400",
      "body": "These two screen shots show how the \"rust\" them looks in versions 1.3 and 1.4\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-07-07T09:53:43.734-0400",
      "body": "Rust has been deprecated.\n"
    }
  ]
}
---
The "rust" theme doesn't seem to be applying to menus properly: The styling is basically white with a blue background, more like the "mist" theme. Everything else in the "rust" theme is brown and yellow.

This problem was present in 1.3, and seems to have gotten worse with changes leading up to 1.4: In 1.3, at leas the links were coloured properly, now they're blue.

Note that the demos for the themes don't include the "rust" theme for some reason, which might be why the problem was never noticed.

        