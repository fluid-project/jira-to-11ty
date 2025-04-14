---json
{
  "title": "FLUID-5225",
  "summary": "Font icon character codes collide with characters used in iOS",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2013-11-27T14:26:47.091-0500",
  "updated": "2021-07-29T01:36:53.422-0400",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Safari iOS 7\n",
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5680/",
      "key": "FLUID-5680"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-03-14T12:39:42.388-0400",
      "body": "The suggestion from \"[Seriously Use Icon Fonts](https://benfrain.com/seriously-use-icon-fonts/#h-H2_3)\" is to use PUA codes starting from \"\\e600\" to avoid collisions.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-06-22T13:23:58.881-0400",
      "body": "Could also address by switching to SVG icons. See <https://fluidproject.atlassian.net/browse/FLUID-6142#icft=FLUID-6142>\n"
    }
  ]
}
---
The PUA character codes used for the font icons collide with ones that are used in iOS. Visibly they appear correct, but voiceover will read the assigned name, e.g. boys head, raised hand and etc.&#x20;

We need to try to minimize these collisions and if possible provide a means to avoid them. Possibly by setting them to presentational and/or providing alternative text.

The web site lists PUA character codes. Running it on different platforms will show what is already in use by that system.\
<http://jrgraphix.net/r/Unicode/E000-F8FF>

        