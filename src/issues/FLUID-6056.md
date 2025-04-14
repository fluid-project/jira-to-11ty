---json
{
  "title": "FLUID-6056",
  "summary": "Activating the Browse button on Edge and IE11 with keyboard causes the browser to refresh",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2016-11-09T14:44:57.280-0500",
  "updated": "2016-11-14T12:14:49.912-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Edge and IE 11\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6065/",
      "key": "FLUID-6065",
      "summary": "The focus remains on the \"Browse Files\" button with 2 keyboard tabbings in IE 11 and IE Edge"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-10T10:35:34.773-0500",
      "body": "The issue seems to be caused by the fact that \"enter\" triggers a form submission. In our demos and etc, there are not onSubmit handlers, so the page reloads. In other browsers the file input is treated as a single entity. Hitting enter interacts with the button that triggers the OS's file dialog. In IE and Edge it is separated into two parts – textfield and browse button. ( See: <https://msdn.microsoft.com/en-us/library/ms535263(v=vs.85).aspx>, \"Also, to improve accessibility, the input type=file element now contains two accessible elements—one for the input box and one for the Browse button. This change is applicable only to accessibility tools; script implementations are not affected.\" ).\n\nWhen using keyboard navigation, focus is placed between these two parts ( although i can't seem to directly interact with the textfield and the cursor only appears inside the textfield sometimes ). When the focus is actually on the browse button, pressing enter does, in fact, work as expected. (see: <https://jsfiddle.net/8agLemkv/1/> for a simple example of file input fields ). This also explains the variation in behaviour between tabbing and shift-tabbing to the browse button in the Uploader. shift-tab lands focus on the native browse button first. You can also see that tabbing to the browse button in the Uploader and pressing the tab a second time, retains focus and allows for the enter key to work.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-10T11:25:12.939-0500",
      "body": "It seems that just having a `<input type=\"text\">` before the `<input type=\"file\">` enables the enter key to work as expected with the file upload. This was found when trying to test solutions, and is not something that could be used for the Uploader.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-11-14T12:14:41.856-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/783> has been merged into the master branch at 828f0340897012eadf5a419655e16d37914c7a92\n"
    }
  ]
}
---
On Edge and IE 11, using keyboard to activate the Browse button with the Enter key causes the browser to refresh.

To reproduce:\
1\. Go to the Uploader demo: <http://build.fluidproject.org/infusion/demos/uploader/>\
2\. Using keyboard press TAB key until focus appears on Browse button.\
3\. Press Enter - note that browser refreshes.

However...

* The Browse button can be activated by the Spacebar.
* The Browser button can be activated by Enter if you go reverse by pressing Shift + TAB repeatedly until focused and press Enter.

Happens in both IE11 and Edge on Windows.

        