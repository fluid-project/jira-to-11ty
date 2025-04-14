---json
{
  "title": "FLUID-5079",
  "summary": "Create non-transparent icons for Discovery Tool",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2013-07-02T12:22:34.152-0400",
  "updated": "2013-07-30T15:10:18.084-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5079/FLUID-5079.zip",
      "filename": "FLUID-5079.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5079/FLUID-5079-final.zip",
      "filename": "FLUID-5079-final.zip"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5079/FLUID-5079-icon.png",
      "filename": "FLUID-5079-icon.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5079/FLUID-5079-stacked-icons.png",
      "filename": "FLUID-5079-stacked-icons.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2013-07-03T09:05:10.708-0400",
      "body": "A working implementation using two fonts stacked.\n\n* the background silhouette (background colour for the icon) appears in the :before pseudo element.\n* the foreground details appears in an element's :after pseudo element.\n* the foreground details position is adjusted using position:relative and left.\n\n@font-face {\n\nfont-family: 'InfusionIcons'; \\\nsrc:url('./fonts/InfusionIcons-test.eot?#iefix') format('embedded-opentype'), \\\nurl('./fonts/InfusionIcons-test.eot'), \\\nurl('./fonts/InfusionIcons-test.ttf');\\\n}\n\n.icon {\\\nfont-family: 'InfusionIcons';\\\nbackground-color: #ffd429;\\\nwidth: 2em; /\\* give the container some width and height \\*/\\\nheight: 2em;\\\n}\n\n.icon:before {\\\ncontent: \"\\e002\"; /\\* the background silhouette. \\*/\\\ncolor: #ffffff;\\\n}\\\n.icon:after {\\\ncolor:#424242;\\\ncontent: \"\\e003\"; /\\* the foreground of the icon (i.e. outline) \\*/\\\nposition:relative;\\\nleft: -1.16em; /\\* lay it over the background silhouette. \\*/\\\n}\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-07-03T14:32:06.206-0400",
      "body": "I did a few more experiments using this technique. The left position adjustment only needs to be done manually once and will hold true for all icon fonts of the same dimensions.\n\nFor example, if all glyphs for a font is generated from a 24x28 canvas, then the left adjustment of -1.16em will work for all overlaid glyphs. If the font contains a mix of dimensions, then the left position adjustment will be different for each glyph of a particular size.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-07-05T14:13:57.390-0400",
      "body": "Attached final Discovery Tool demo icons in FLUID-5079-final.zip. Includes font, CSS, HTML, and original assets.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-07-30T15:10:14.651-0400",
      "body": "Merged into the gpii/prefsEditors repo ( <https://github.com/GPII/prefsEditors> ) at 8bae7e3054b40a585808f687967d8a697e848d4d\n"
    }
  ]
}
---
Investigate how to create an icon font that is not transparent.

For example, an icon of a circle will typically have a black outline and a transparent interior. But for the new Discovery Tool, we want the icon to have a solid colour in the middle.

        