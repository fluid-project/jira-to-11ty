---json
{
  "title": "FLUID-1768",
  "summary": "Uploader 2: Doesn't work with Flash 10",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2008-11-05T14:32:29.000-0500",
  "updated": "2008-12-18T13:51:12.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1849/",
      "key": "FLUID-1849"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1768/FLUID-1768-d.zip",
      "filename": "FLUID-1768-d.zip"
    }
  ],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-11-05T14:38:48.000-0500",
      "body": "SWFUpload has a transaprent overlay demo found here:\\\n<http://demo.swfupload.org/overlaydemo/index.php>\n\nwith the following settings drawing the overlay\n\n// Button Settings\\\nbutton\\_placeholder\\_id : \"spanButtonPlaceholder\",\\\nbutton\\_width: 61,\\\nbutton\\_height: 22,\\\nbutton\\_window\\_mode: SWFUpload.WINDOW\\_MODE.TRANSPARENT,\\\nbutton\\_cursor: SWFUpload.CURSOR.HAND,\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-11-07T11:57:55.000-0500",
      "body": "The overlay is currently in a \"beta 2\" (Oct 29, 08) version of the SWFUpload component, and not in the current \"stable\" version. We need to decide if we will take the beta or not. Perhaps we should build up a solution with it, test it and see if it's acceptable.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T13:59:18.000-0500",
      "body": "Bug Parade: 0.6 release\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-05T10:38:27.000-0500",
      "body": "I've closed <https://fluidproject.atlassian.net/browse/FLUID-1849#icft=FLUID-1849> as a duplicate of this issue.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-10T23:37:13.000-0500",
      "body": "This patch includes a successful upgrade to SWFUpload 2.2.0 beta 3, which is required for Flash 10 support. However, SWFUpload 2.2 also includes a bug in the callFlash() function that causes it to completely break when used with Flash 9.\n\nAs a result, this version of swfupload.js has been modified to include the old implementation of callFlash() as well.\n\nThis patch introduces a new decorator called the SWFUploadSetupDecorator, which is designed to setup the DOM and the SWFUploadManager correctly based on the environment.\n\nWhen it detects Flash 9, it swaps in the old implementation of callFlash() and ensures that the Flash movie isn't attached to DHTML buttons at all. When Flash 10 is detected, the Flash movie is instead attached to the Browse button.\n\nThis fix doesn't yet provide a fully workable Flash 10 implementation of Uploader, but it is the last step in the process. It should be identical in behaviour to the previous SWFUpload 2.1.0-based solution.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-13T16:46:13.000-0500",
      "body": "Here's a patch showing Flash 10 support for the Uploader. I'm not particularly happy with the solution: at the moment, the \"Browse files\" is displayed as an image within the Flash move. There are two intolerable consequences of this:\n\n1\\. Increasing the text size of the page will not scale the button accordingly in IE, and in FF3 will cause awful visual quirks\\\n2\\. The button does not currently change its text to \"Add More\" when files have been added to the queu.\n\nTo use this patch, you'll need to add swfupload\\_f10.swf to your flash/ directory.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-13T16:46:54.000-0500",
      "body": "Here's a copy of the SWFUpload 2.2.0b3 flash movie.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-13T16:59:06.000-0500",
      "body": "Patch showing Flash 10 support for Uploader using SWFUpload 2.2.0b3. This version in not ideal, in that it displays the Browse files button as an image with the Flash movie. This has two undesirable consequences:\n\n1\\. When text is enlarged in IE, the button doesn't grow with it. In FF3, it's even worse because the flash movie resizes but the image doesn't.\n\n2\\. At the moment, the button's text doesn't change to \"Add more\" when files are added to the queue. This can be implemented.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-14T10:40:34.000-0500",
      "body": "Added support for transparent overlays in non-IE options, as well as an override to force the transparent overlay even in IE.\n\nAdded fl-browse-button-overlay style to apply styling to the flash movie. This works in Firefox but not IE currently.\n\nThis is nearly it. Tests need to be updated, some consideration of the relationship between swfUploadManager's flashURL option and the swfUploadSetupDecorator's flash9URL and flash10URL options. Also need to merge this with Eli's <https://fluidproject.atlassian.net/browse/FLUID-1947#icft=FLUID-1947>.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-15T00:39:57.000-0500",
      "body": "Here's another patch for Uploader with Flash 10.\n\nInstructions for applying the patch:\n\n1\\. Apply the patch to a clean checkout of components/trunk. Ensure you check all the checkboxes, even the ones that have warnings beside them.\\\n2\\. Copy swfupload\\_f10.swf to components/trunk/src/webapp/fluid-components/flash\\\n3\\. Copy browse.png to components/trunk/src/webapp/fluid-components/images/uploader\n\nNote that this patch likely won't apply correctly with the patch <https://fluidproject.atlassian.net/browse/FLUID-1947#icft=FLUID-1947> already applied.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-18T13:51:12.000-0500",
      "body": "Uploader 10 support has been added, any new issues have been filed in specific jiras\n"
    }
  ]
}
---
dev-iteration46

        