---json
{
  "title": "FLUID-3754",
  "summary": "Investigate redesigning the various reorderer demos",
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
  "reporter": "Justin Obara",
  "date": "2010-09-22T18:16:25.555-0400",
  "updated": "2010-11-24T16:29:49.347-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/Banana.jpg",
      "filename": "Banana.jpg"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/FLUID-3754-layout-reorderer.patch.txt",
      "filename": "FLUID-3754-layout-reorderer.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/FLUID-3754-layout-reorderer-2.patch.txt",
      "filename": "FLUID-3754-layout-reorderer-2.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/FLUID-3754-layout-reorderer-3.patch.txt",
      "filename": "FLUID-3754-layout-reorderer-3.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/FLUID-3754-layout-reorderer-4.patch.txt",
      "filename": "FLUID-3754-layout-reorderer-4.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/FLUID-3754-layout-reorderer-5.patch",
      "filename": "FLUID-3754-layout-reorderer-5.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/FLUID-3754-layout-reorderer-6.patch.txt",
      "filename": "FLUID-3754-layout-reorderer-6.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/FLUID-3754-layout-reorderer-7.patch",
      "filename": "FLUID-3754-layout-reorderer-7.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/FLUID-3754-list-reorderer.patch.txt",
      "filename": "FLUID-3754-list-reorderer.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/FLUID-3754-list-reorderer-2.patch.txt",
      "filename": "FLUID-3754-list-reorderer-2.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/FLUID-3754-list-reorderer-3.patch.txt",
      "filename": "FLUID-3754-list-reorderer-3.patch.txt"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/info.png",
      "filename": "info.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/Layout-reorderer.png",
      "filename": "Layout-reorderer.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/list-reorderer.png",
      "filename": "list-reorderer.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/locked.png",
      "filename": "locked.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/move.png",
      "filename": "move.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3754/RedApple.jpg",
      "filename": "RedApple.jpg"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-10-29T14:14:43.573-0400",
      "body": "New designs for list and layout reorderers.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-01T15:14:53.454-0400",
      "body": "Updated designs\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-04T10:07:29.341-0400",
      "body": "Clarified styling for list reorderer.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-04T10:38:39.932-0400",
      "body": "Patch for the list-reorderer demo, designed according to the <http://issues.fluidproject.org/secure/attachment/11287/list-reorderer.png>. &#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-04T13:35:50.077-0400",
      "body": "Disregard the first patch.  This 2nd patch changed the 'fl-' prefix to 'demo-', and declared them to the listReorderer.js accordingly.  Also took out \"!important\" from the css; and added \"filter: alpha\" for opacity fix for IE.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-04T13:40:45.280-0400",
      "body": "changed comment in css\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-04T13:56:59.702-0400",
      "body": "Reviewed and committed Harris' patch ( FLUID-3754-list-reorderer-3.patch.txt ) which updates the list reorderer demo to the latest wireframe.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-04T14:03:36.926-0400",
      "body": "icons for layout reorderer.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-04T17:29:02.903-0400",
      "body": "The patch for the layout reorderer demo.  The images(info.png, locked.png, move.png) are attached with the jira.  Each module has 3 divs so that I can create the dragbar and the content below it.  As a result, the css became less simple.  Please let me know if there can be any improvements on this.  Thanks.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-05T10:56:08.703-0400",
      "body": "image automatically scales by the width of the module; changed avatar internal divs' visibility to hidden, so all elements are automatically hidden; tested on chrome, ie8, ff3\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-05T14:14:22.237-0400",
      "body": "* code reviewed with Justin, changed some markups, added the skiplink, disabled \"a\" default event.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-08T10:10:57.915-0500",
      "body": "On the work list Jonathan stated that the list reorderer should enable wrapping, while the layout reorderer should have it disabled.\\\n<http://fluidproject.org/pipermail/fluid-work/2010-November/007233.html>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-08T14:28:54.994-0500",
      "body": "Took out hover effect, added no warp on the reorderer, fixed the border padding issue.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-08T15:12:46.706-0500",
      "body": "Added changes to portlet contents.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-08T17:00:13.122-0500",
      "body": "* Applied Jonathan's content changes.\n* Now passes JSLint test, changed tabs to spaces\n* Changed some padding units \"em\" to \"px\" because of browser calculation differences. (Justin: please let me know if you still experience a shift when you click on the portlets.  I tested on Chrome, FF3, IE8, seems ok on my machine, thanks!)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-10T12:46:03.255-0500",
      "body": "committed Harris'  patch ( FLUID-3754-layout-reorderer-6.patch.txt ) which implements the new layout reorderer demo\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-16T11:32:59.312-0500",
      "body": "Reopened for code clean-up.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-19T14:45:30.816-0500",
      "body": "Mark-up cleanup and adding new images.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-19T15:17:44.529-0500",
      "body": "Regarding FLUID-3754-layout-reorderer-7.patch, the files RedApple.jpg and banana.jpg should be saved to the demo's ./images/ directory.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-24T16:29:49.289-0500",
      "body": "Reviewed Jonathan's latest commit. Made a minor commit to the css which was just about updating a comment and improving readability.\n"
    }
  ]
}
---

        