---json
{
  "title": "FLUID-2388",
  "summary": "The UI Options dialog does not have a default background colour that is not dependend on the entire site using an FSS theme",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Anastasia Cheetham",
  "date": "2009-03-20T12:40:04.000-0400",
  "updated": "2009-05-21T11:04:51.000-0400",
  "versions": [
    "0.8",
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "FSS",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2380/",
      "key": "FLUID-2380"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2388/FLUID-2388.patch",
      "filename": "FLUID-2388.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2388/FLUID-2388-screen-capture.tiff",
      "filename": "FLUID-2388-screen-capture.tiff"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2388/FLUID-2388-screen-capture-2.tiff",
      "filename": "FLUID-2388-screen-capture-2.tiff"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-20T12:42:38.000-0400",
      "body": "This screen capture shows the transparent UI Options dialog in the Fluid website.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-20T12:50:45.000-0400",
      "body": "Patch includes a basic set of colors. Themes will now override them,\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-20T13:20:40.000-0400",
      "body": "Jacob's patch goes a long way - but there are still some element that are not quite right - see second attachment.\n\nThere seems to be an area above the white background - where the close box is - that is still transparent.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:06:58.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-05-21T11:04:51.000-0400",
      "body": "This does solve the problem, but the resolution to 2380 will make this look even better.\n"
    }
  ]
}
---
If you try to use the UI Options dialog "out of the box", with the necessary FSS styles for the component itself, but WITHOUT an FSS theme on the body tag, then the UI Options dialog has no background i.e. it is transparent.

Despite the fact that the component uses the FSS, I don't think the component should be dependent on the entire site using the FSS.

        