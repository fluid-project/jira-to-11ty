---json
{
  "title": "FLUID-5918",
  "summary": "Provide source maps for CSS generated from Stylus",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2016-06-16T14:15:27.334-0400",
  "updated": "2021-03-23T12:49:51.220-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5832/",
      "key": "FLUID-5832",
      "summary": "Generate Source Maps When Minifying"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5915/",
      "key": "FLUID-5915"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-06-16T14:17:43.591-0400",
      "body": "We are currently using the \"grunt-contrib-stylus\" grunt plugin for compiling Styl files to css. However, this plugin does not explicitly support source maps. It is possible to get it to generate inline source maps, but this causes the css file size to double. A more appropriate method would be to create distinct map files.\n\n<https://github.com/gruntjs/grunt-contrib-stylus/issues/118#issuecomment-98195500>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-03-23T12:49:51.214-0400",
      "body": "As part of the work on <https://fluidproject.atlassian.net/browse/FLUID-6496#icft=FLUID-6496> the CSS Preprocessing in Infusion was migrated to Sass\n"
    }
  ]
}
---
Some of our CSS, in particular the styles for the preferences framework, are generated using Stylus. These files are compiled into proper CSS files which are used by preference editors. However, there is no mapping between the two when debugging the styles in the browser. We should look into providing source maps for the stylus files.

see: <http://stylus-lang.com/docs/sourcemaps.html>

        