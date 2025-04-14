---json
{
  "title": "FLUID-6376",
  "summary": "Infusion docs site lacks responsive layout",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Jonathan Hung",
  "date": "2019-04-29T15:50:48.014-0400",
  "updated": "2022-03-14T13:46:57.728-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6376/rsz_1screenshot_from_2020-04-08_12-51-19.jpg",
      "filename": "rsz_1screenshot_from_2020-04-08_12-51-19.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6376/rsz_screenshot_from_2020-04-08_12-48-00.jpg",
      "filename": "rsz_screenshot_from_2020-04-08_12-48-00.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6376/rsz_screenshot_from_2020-04-08_12-50-22.jpg",
      "filename": "rsz_screenshot_from_2020-04-08_12-50-22.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6376/Screenshot from 2020-04-08 12-36-03 (2).jpg",
      "filename": "Screenshot from 2020-04-08 12-36-03 (2).jpg"
    }
  ],
  "comments": [
    {
      "author": "YashJipkate",
      "date": "2020-04-08T03:40:51.148-0400",
      "body": "I have tried to fix a part of this by making the top-level navigation responsive. Here are some screenshots:\n\nDesktop (Full screen - no breakpoint - current default behaviour): \n\n<!-- media: file f44c057e-8db5-42a5-909e-63e5d4ef24d5 -->\n\nBreakpoint 1: \n\n<!-- media: file aa627a9d-bcc6-4022-86cf-12b51cf6e477 -->\n\nBreakpoint 2: \n\n<!-- media: file 249275d6-991a-45d0-a4dd-3ed172655788 -->\n\nBreakpoint 3: \n\n<!-- media: file cd51b6df-623f-4b87-865f-19610dee9ece -->\n\nI would like to get feedback from the community on the screenshots I provided above. Please let me know if there are any changes that need to be made in the design. If they look good, I would like to send a Pull Request to the infusion-docs repo proposing my changes.\n\nThanks!\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-03-14T13:46:57.712-0400",
      "body": "Migrated to Infusion-Docs [Issue #226](https://github.com/fluid-project/infusion-docs/issues/226)\n"
    }
  ]
}
---
The Infusion Docs site lacks any responsive design making it hard to use on mobile devices.

For example, resizing the browser causes the top-level navigation to wrap onto white space causing the text to be illegible.

        