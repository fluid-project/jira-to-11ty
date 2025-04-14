---json
{
  "title": "FLUID-3388",
  "summary": "onSelect event in Reorderer is fired multiple times on a single mouse click.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Boyan Sheytanov",
  "date": "2009-11-23T11:34:19.000-0500",
  "updated": "2009-11-27T09:10:53.000-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "Debian Lenny 64-bit, Iceweasel 3.0.6 (should be identical to Firefox 3.0.6 on other platforms).\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3388/FLUID-3388.patch",
      "filename": "FLUID-3388.patch"
    }
  ],
  "comments": [
    {
      "author": "Boyan Sheytanov",
      "date": "2009-11-25T10:29:39.000-0500",
      "body": "This patch should resolve the bug. It was caused by a typo in the Reorderer.js where we iterate over all selectables in a for statement, and modify them all on each iteration (in the body of the for statement). When we modify only the current selectable, the bug is no longer present. All occurences of \"selectables\" (plural) in the body of the for statement have been replaced by \"selectable\" (singular).\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-11-26T17:59:58.000-0500",
      "body": "Thanks for this fix Boyan, it correctly identifies the typo and fixes it. I have committed the fix at revision 8757. It was really helpful to have a working patch along with the issue report. Some administrative details:\\\ni) When making patches, please select \"Project\" as the patch root rather than \"multiProject\" since otherwise it becomes hard or impossible for others to apply the patch 😛\\\nii) It is even more helpful if every fix includes a test case fixture or adjustment of an existing one that demonstrates the issue, to prevent regressions in the future. In the course of making a test case for this issue in ImageReorderer.js I discovered that we actually so far had no test cases at all for the \"onSelect\" event function !!\\\niii) JIRA status discipline - an issue should not be marked as \"Fixed\" unless the issue is actually resolved in trunk. When posting patches for review, the issue should instead just be \"Assigned\" generally to the component or framework lead. When an issue is \"Fixed\" by the committer, at this stage it should be then assigned to the testing lead (currently Justin) who can then consider to take it to the \"Closed\" status.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-27T09:10:53.000-0500",
      "body": "I added in a missing comma.&#x20;\n\nUnit tests appear to be running.\n"
    }
  ]
}
---
When clicking with the mouse on an image in the ImageReorderer, the onSelect event is fired multiple times instead of once. Should be valid for all Reorderer types since the logic is in Reorderer.js. Does not happen when selection is made using the keyboard. The number of times the event is fired is the same as the number of images in the Reorderer. Here's a simple testing scenario that shows the bug:

1\. Find and edit infusion/src/webapp/demos/reorderer/imageReorderer/js/imageReorderer.js by adding:

* A counter variable right after the line demo.formBasedImageReorderer = function () {\
  &#x20;       var i = 0;
* A listener for the onSelect event in the options, passed to the reorderImages component\
  &#x20;        listeners: {\
  &#x9;			onSelect: function(item) {\
  &#x9;				document.title = i++;\
  &#x9;			}\
  &#x9;		}\
  2\. Open infusion/src/webapp/demos/reorderer/imageReorderer/html/imageReorderer.html in your browser.

Expected result: The document title should increment with 1 on each click on any of the images.

Actual result: The document title increments with 6 on each click on any of the images (6 is the number of images in the demo).

        