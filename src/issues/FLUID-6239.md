---json
{
  "title": "FLUID-6239",
  "summary": "Transitional all icon fonts to be built using grunt-webfont",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-01-18T13:50:56.843-0500",
  "updated": "2019-07-11T14:32:55.824-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Build Scripts",
    "Infusion-Icons"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-01-18T13:51:32.616-0500",
      "body": "Prefs Framework / UIO icons are being moved as part of <https://fluidproject.atlassian.net/browse/FLUID-6204#icft=FLUID-6204> because a new icon for the letter-spacing adjuster is needed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-11T14:32:45.622-0400",
      "body": "This was accomplished along with the work for <https://fluidproject.atlassian.net/browse/FLUID-6354#icft=FLUID-6354>\n"
    }
  ]
}
---
Currently there are icon fonts used for the overview panel, uploader and prefs framework. These should all be transitioned to make use of the [Infusion-Icons](https://github.com/fluid-project/infusion-icons) repo and [grunt-webfont](https://github.com/sapegin/grunt-webfont) to construct the font at build time. This makes it easier to maintain and add new icons later, keep track of the PUA codes used in the font, keep the font as small as possible, and to easily reference what icons are included and what their source is.

See: <https://wiki.fluidproject.org/display/fluid/Standard+workflow+in+maintaining+and+creating+icon+fonts>

        