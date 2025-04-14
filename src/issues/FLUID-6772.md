---json
{
  "title": "FLUID-6772",
  "summary": "Removal of UIO iframe in Infusion 4.5.0 causes overflow issue on Webkit/Chromium browsers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Ned Zimmerman",
  "date": "2023-07-07T09:01:32.415-0400",
  "updated": "2025-01-15T10:52:26.011-0500",
  "versions": [
    "4.5",
    "4.6"
  ],
  "fixVersions": [
    "4.8.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Webkit (Safari), Chromium (Chrome, Edge)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-08-02T19:55:33.881-0400",
      "body": "Merged PR <https://github.com/fluid-project/infusion/pull/1109>&#x20;\n"
    }
  ]
}
---
The change in which removed the UIO iframe has caused a horizontal content overflow issue in Webkit and Chromium browsers. The same issue cannot be reproduced in Firefox.

For a minimal reproduction, see the following:

✅ <https://github.com/greatislander/uio-bug/tree/infusion-4.4.0> (deployed to <https://infusion-4-4-0--uio-bug.netlify.app> )

❌ <https://github.com/greatislander/uio-bug/tree/infusion-4.5.0> (deployed to <https://infusion-4-5-0--uio-bug.netlify.app> )

❌ <https://github.com/greatislander/uio-bug> (Infusion 4.6.0, deployed to <https://uio-bug.netlify.app> )

Visit the deployment of each branch in a Webkit or Chromium browser, open the UIO panel, and scroll all the way to the right. Not the excess white space. The same issue does not present itself in Firefox.

        