---json
{
  "title": "FLUID-6391",
  "summary": "Update the \"How to Create and Use Font Icons\" tutorial to mention infusion-icons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Justin Obara",
  "date": "2019-08-07T09:47:57.511-0400",
  "updated": "2024-07-22T10:35:28.978-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-08-07T09:51:49.444-0400",
      "body": "According to Google Search Console this is currently the top page from our docs site.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2019-08-07T09:52:46.692-0400",
      "body": "I feel we should also include something about using SVGs vs. icon fonts. We have a document here, but it is a bit rough / unpolished: <https://wiki.fluidproject.org/display/fluid/Research+SVG+Icons>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-05-13T13:26:18.763-0400",
      "body": "The PR has been mothballed because of the on going discussions around switching to using SVGs instead of icon fonts for icons. See: <https://github.com/fluid-project/infusion-docs/pull/149#issuecomment-839836389>\n"
    }
  ]
}
---
The [How to Create and Use Font Icons](https://docs.fluidproject.org/infusion/development/tutorial-iconFonts/HowToCreateAndUseFontIcons.html) tutorial should be updated to include information about how to use infusion-icons repo to generate font-icons. It's probably still useful to retain some of the current information for those that don't want to use our node module for generating the font. 

See: 

* <https://github.com/fluid-project/infusion-icons>
* <https://wiki.fluidproject.org/display/fluid/Standard+workflow+in+maintaining+and+creating+icon+fonts>
* <https://wiki.fluidproject.org/display/fluid/Infusion+Icons+Visual+Style+Guide>

        