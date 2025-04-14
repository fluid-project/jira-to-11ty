---json
{
  "title": "FLUID-111",
  "summary": "Drag and Drop not working in IE7 Standalone",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2007-11-13T19:51:46.000-0500",
  "updated": "2007-11-19T13:53:33.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "WinXP SP2, IE7 (standalone from <http://tredosoft.com/IE7_standalone>)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2007-11-19T13:53:33.000-0500",
      "body": "It appears that this is only an issue with the standalone version of IE7. The issue was not reproducable on an installed version of IE7.\n"
    }
  ]
}
---
Dragging and dropping an image using the mouse has an issue. The image will pick up and drag as normal, with the exception that no drop points are shown. When the user attempts to drop the image, it releases from the mouse but stays where it was released. It still appears to be hovering as it did while being dragged by the mouse. There are now two copies of the image, the original in its orignal location and the dragged version left where it was released; most likely overtop of some other image(s).

        