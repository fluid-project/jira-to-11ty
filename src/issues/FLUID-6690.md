---json
{
  "title": "FLUID-6690",
  "summary": "UIO is slightly clipped at the bottom in mobile presentation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-10-20T11:50:25.565-0400",
  "updated": "2024-07-22T10:35:21.587-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6690/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-10-20T11:52:19.238-0400",
      "body": "screenshot.png shows the UI Options demo in a mobile view. The \"black on white\" contrast is being previewed on the page, and the page colour is and panel colour all blend together with no visual separation.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-10-20T14:45:54.249-0400",
      "body": "Will address in the <https://fluidproject.atlassian.net/browse/FLUID-6605#icft=FLUID-6605> PR <https://github.com/fluid-project/infusion/pull/1060>\n"
    }
  ]
}
---
In the mobile presentation the bottom portion of UIO is slightly clipped. This doesn't prevent interacting with the prefs editor; however, it does cause the panels to blend in with the background of the page when contrasts are applied.

Steps to reproduce:

1. Open the [UI Options demo](https://build-infusion.fluidproject.org/demos/uioptions/)
2. Open the preferences editor
3. Notice that the bottom of the panels are directly over the page content.
4. Select a contrast theme such as "black on white" and notice that the panel and page blend together.

        