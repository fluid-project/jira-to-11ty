---json
{
  "title": "FLUID-4997",
  "summary": "Convert icons used in Uploader to font icons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2013-04-29T10:33:43.490-0400",
  "updated": "2013-07-02T14:55:18.194-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4997/buttons-01.svg",
      "filename": "buttons-01.svg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4997/buttons-02.svg",
      "filename": "buttons-02.svg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4997/buttons-03.svg",
      "filename": "buttons-03.svg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4997/buttons-04.svg",
      "filename": "buttons-04.svg"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4997/InfusionIcons-Uploader.eot",
      "filename": "InfusionIcons-Uploader.eot"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4997/InfusionIcons-Uploader.ttf",
      "filename": "InfusionIcons-Uploader.ttf"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2013-05-14T11:03:06.844-0400",
      "body": "From <http://192.168.2.11/git_heidi/infusion/src/webapp/demos/uploader/html/uploader.html>\n\nNeed the following icons:\n\nAdd (green circle w white plus sign)\\\nDelete (red circle w white X)\\\nUploaded (green checkmark)\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-06-10T12:43:22.977-0400",
      "body": "Created font based on the attached SVG files.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-07-02T14:55:14.745-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/346> ) into the project repo at 8dd707097e3fb4503abff6e821bb16e0ff26e813\n"
    }
  ]
}
---
Create font icons for all the icons used by Uploader, and updated Uploader to make use of them.

        