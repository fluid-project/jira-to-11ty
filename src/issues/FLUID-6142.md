---json
{
  "title": "FLUID-6142",
  "summary": "convert icons used in Infusion to use SVG icons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2017-03-07T09:27:46.219-0500",
  "updated": "2021-07-29T01:50:19.271-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework",
    "Infusion-Icons",
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4996/",
      "key": "FLUID-4996"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-03-07T10:00:34.217-0500",
      "body": "Icons used in Infusion. There probably should be separate builds tasks for icons that are used for demos as opposed to framework and components. If possible should modularize so that only icons for components / framework items that are requested are included.&#x20;\n\nInline Edit\n\n* pencil\n\nKeyboard a11y\n\n* star ??\n\nOverview Panel\n\n* asterisk ( fluid logo )\n* demo code icon\n* api icon\n* design icon\n* get infusion icon\n\nPrefs framework\n\n* text size icon\n* text style icon\n* line spacing icon\n* small line spacing icon\n* large line spacing icon\n* contrast icon\n* table of contents icon\n* emphasis icon\n* text to speech icon ( currently missing )\n* simplify icon\n* reset icon\n* small A icon ??\n* large A icon ??\n* icon ( future: for stepper )\n* \\+ icon ( future: for stepper )\n\nReorderer (layout reorderer)\n\n* lock icon ?\n* move icon ?\n\nUI Options\n\n* Infusion Debugging icon\n\nUploader\n\n* \\+ ( add files icon )\n* x ( remove file / close icon )\n* ! ( warning icon )\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-03-14T08:51:57.854-0400",
      "body": "Unfortunately at this time it does not seem like it will be possible to use SVG icons in Infusion. The primary reason is that we make use of HTML templates for the preferences framework and other components. However, the method of referencing external SVGs through \\<use> would require that an URL be provided in the template. However, this URL would need to be relative to the document that the template was inserted into.&#x20;\n\nSee: <http://lists.idrc.ocad.ca/pipermail/fluid-work/2017-March/010329.html>\n\nPerhaps when we have a solution for URL rebasing in templates or other mechanisms for easily including SVGs that can be styled, we can re-investigate using SVG icons.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-06-22T15:43:48.292-0400",
      "body": "This was further [discussed](https://matrix.to/#/!mDigWuPWilYGiEcOCA:matrix.org/$Z3q7dvMzMaThBRxzROSXoqbQNobcCF0p9OQmgmadDrk?via=matrix.org) in the Fluid-General Matrix room on Wed May 12, 2021. The general suggestion was to inline the SVGs into the template or page and refer to them with `<use>`. A similar approach was used on the WeCount project site.\n"
    }
  ]
}
---
Currently Infusion has a mix of image and font icons. A recent [exploration](https://wiki.fluidproject.org/display/fluid/Research+SVG+Icons) has lead to the possibility of switching these to all use SVG icons.

This work should include the following:

* Compiling a directory of SVG icons used in Infusion
* Creating a build task for generating the SVG sprite sheet
* Replacing existing icons with SVG icons ( including styling and markup changes as needed )
* Using a polyfil such as [svg4everybody](https://jonathantneal.github.io/svg4everybody/) for IE 11 support.

(See: <http://fluid.2324889.n4.nabble.com/SVG-Icons-tt9952.html> )

        