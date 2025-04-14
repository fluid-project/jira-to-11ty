---json
{
  "title": "FLUID-5861",
  "summary": "Tooltip test stuck at FLUID-5846 depending on mouse cursor position (IE11)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Giovanni Tirloni",
  "date": "2016-02-11T08:23:34.577-0500",
  "updated": "2024-07-23T11:03:12.538-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Tooltip"
  ],
  "environment": "Windows 10\\\nInternet Explorer 11.103.10586.0\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5861/infusion_win10_ie11_tooltip_test_standalone_fails.png",
      "filename": "infusion_win10_ie11_tooltip_test_standalone_fails.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5861/infusion_win10_ie11_tooltip_test_standalone_works.png",
      "filename": "infusion_win10_ie11_tooltip_test_standalone_works.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5861/infusion_win10_ie11_tooltip_test_stuck_at_FLUID5846.png",
      "filename": "infusion_win10_ie11_tooltip_test_stuck_at_FLUID5846.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-02-11T11:31:37.200-0500",
      "body": "I used a Surface Pro 3 running Windows 10 to try to reproduce this issue in IE 11, but was unable to.&#x20;\n\n@@Giovanni Tirloni I can't see in the screenshots where the mouse was exactly though. Could you highlight it?\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-02-11T11:43:20.593-0500",
      "body": "I made sure both laptops had all Windows updates applied before testing and cleared the cache betweens runs.\n\nUpdated screenshots.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-02-11T13:21:15.222-0500",
      "body": "Thanks for the updated screenshots. I had mistakenly been MS Edge. Using IE 11 now. I'm getting the issue but intermittently. If i reload the page after it stops, it will work.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T11:03:12.538-0400",
      "body": "Internet Explorer is no longer supported\n"
    }
  ]
}
---
Tooltip test fails if the mouse cursor is within the browser content area.

If the cursor is over the address bar or outside the browser window, then test FLUID-5846 always work.

        