---json
{
  "title": "FLUID-6163",
  "summary": "Make preferences framework's Sass files more modular, configurable and reusable by 3rd parties",
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
  "date": "2017-06-08T09:48:25.576-0400",
  "updated": "2022-02-03T10:38:14.150-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-06-08T10:07:03.294-0400",
      "body": "We should also consider making the stylus directory a sibling to css instead of nested under it, to keep things cleaner and better separated.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-06-08T10:11:06.878-0400",
      "body": "Consider also making all the stylus files as specific as possible, to make it easier to reuse. These can then be compiled into a single css file at build time.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-02-03T10:38:14.148-0500",
      "body": "With the work on <https://fluidproject.atlassian.net/browse/FLUID-6260#icft=FLUID-6260> and <https://fluidproject.atlassian.net/browse/FLUID-6605#icft=FLUID-6605> the Sass files were split into modular parts based on the preference they are enacting. They are also recommending into an Enactors file to simplify usage and support backwards compatibility. \n"
    }
  ]
}
---
Currently the preferences framework uses Sass to generate CSS files. However, much of the features are not exposed in a way that can be easily manipulated by a 3rd party. In particular Enactors.styl should be completely modular similar to how contrast themes are broken out into Themes.styl. That way a 3rd party integrator that only wanted some of the enactor styling, or wanted to use a different class name for contrast themes could do so without having to fork the Enactors.styl file. 

        