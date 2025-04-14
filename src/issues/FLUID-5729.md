---json
{
  "title": "FLUID-5729",
  "summary": "Font face embedding permission check (IE)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Kaye Mao",
  "date": "2015-07-30T11:44:35.155-0400",
  "updated": "2024-07-23T09:54:37.935-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Internet Explorer 11 on Windows 8.1\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T09:54:37.776-0400",
      "body": "Internet Explorer is no longer supported\n"
    }
  ]
}
---
Console log: "CSS3114: @font-face failed OpenType embedding permission check. Permission must be installable" in reference to the OpenSans ttf files.

This error is occurring for all files that require the fonts.

Doesn't seem to be affecting the display/rendering of the fonts though

        