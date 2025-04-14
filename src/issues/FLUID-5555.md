---json
{
  "title": "FLUID-5555",
  "summary": "Consider using github and grunt to simplify design, development, and deployment of icon fonts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eloisa Guerrero",
  "reporter": "Jonathan Hung",
  "date": "2014-11-13T09:01:24.365-0500",
  "updated": "2018-04-27T07:36:01.256-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework",
    "Infusion-Icons",
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-02-19T08:12:50.537-0500",
      "body": "@@Jonathan Hung pointed me at  <https://github.com/sapegin/grunt-webfont>. It should address at least some of the above concerns as you can specify which glyph uses which PUA value.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-02-19T09:11:56.112-0500",
      "body": "Grunt does support pulling data from an external JSON file (<http://gruntjs.com/configuring-tasks#importing-external-data>), so we could have JSON files for each project that uses the icons. However it might be easier to just source all this information via the command line, similar to how the Infusion build script currently work.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-03-14T12:52:46.260-0400",
      "body": "A short blog post about how to use grunt-webfont including information about font height, ascent and descent. <https://medium.com/sketch-app-sources/font-icons-workflow-with-sketch-and-grunt-16b161d97c5e#.tqibe05z5>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-03-16T09:09:31.502-0400",
      "body": "I had trouble getting good looking fonts using <https://github.com/sapegin/grunt-webfont> without installing fontforge. Unfortunately fontforge isn't installed via NPM which would pose a problem for using in Infusion. I did have more success with <https://www.npmjs.com/package/webfonts-generator>; however, it is a straight NPM package ( not grunt ) and needed to set the fontHeight option. It appears that both grunt-webfont and webfont-generator use <https://github.com/nfroidure/svgicons2svgfont> as the node engine, so perhaps tweaking the settings for grunt-webfont would get it to work.\n\nWe may also need to rebuild our svgs for the icons. For example use consistent art board sizes for all of them.&#x20;\n"
    },
    {
      "author": "Eloisa Guerrero",
      "date": "2017-10-19T16:13:16.843-0400",
      "body": "Documentation for standardising workflow for icon fonts over here: <https://wiki.fluidproject.org/display/fluid/Standard+workflow+in+maintaining+and+creating+icon+fonts>\n"
    },
    {
      "author": "Eloisa Guerrero",
      "date": "2017-10-19T16:17:57.329-0400",
      "body": "See wiki documentation: <https://issues.fluidproject.org/browse/FLUID-5555>\n\nAnd infusion-icons Github repository: <https://github.com/fluid-project/infusion-icons>\n"
    }
  ]
}
---
Currently in Fluid / Floe related projects, we are using an ad-hoc system to generate fonts: whenever a project needs a font, an existing icon font is duplicated, or another icon font is created from scratch. This creates a problem where icons are hard to maintain.

A possible solution (open for discussion and refinement):

* create a font project in github to store the SVG vectors used for font icons
* SVG files are not binary, so they can be versioned easily by github and still editable by vector editors
* use a grunt plugin capable of generating fonts from an arbitrary list of SVGs
* have an index file / contact sheet which shows all available icons.

There are some questions to address:

* How is it possible to maintain a font set for a particular project? i.e. Project A may use 10 of 20 fonts, whereas Project B may use 12 of 20. How is this information stored?
* How are Unicode PUA's specified for each glyph / SVG? Are PUA's globally unique in the font repository, or do projects define their own PUA's?&#x20;
* If someone deletes an SVG from the repository, do the PUAs change automatically?
* Can Readme documentation be automatically generated for each font set? The readme would contain instructions on how to use the icon font in CSS/HTML, and list the PUA codes for each glyph.

        