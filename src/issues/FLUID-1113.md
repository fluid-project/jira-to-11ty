---json
{
  "title": "FLUID-1113",
  "summary": "Create springboard markup for Uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Anastasia Cheetham",
  "date": "2008-08-07T14:09:31.000-0400",
  "updated": "2011-01-14T09:53:22.807-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Demos",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1113/vco-30-03-2009_uploaderHTML.patch",
      "filename": "vco-30-03-2009_uploaderHTML.patch"
    }
  ],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-11-18T13:16:49.000-0500",
      "body": "First pass is complete, further refinements on the way\n"
    },
    {
      "author": "Valerie",
      "date": "2009-03-30T11:08:40.000-0400",
      "body": "\\=== ROUND 1 ===\\\nWhat I did:\n\n* Commented out \\<link href=\"../css/fluid.components.uploader.css\" rel=\"stylesheet\" type=\"text/css\">\n* Deleted all table attributes that are supposed to be settled with CSS (ie. cellpadding, cellspacing, etc.)\n* Uploaded 7 files\n\nWhat I found:\n\n* There's no flexibilty with the existing template markup\n* Template markup for the file queue rows uses table rows \\<tr id=\"queue-row-tmplt\" class=\"row fluid-templates\">, but jQuery code for showing/hiding adds an extra \\[style=\"display: block;\"], which isn't something that should be applied to tables as it messes up the layout (causes uneven row widths)\n* Scrollable area not working as it should (no scroller--content spills into the foot of queue and the upload buttons); the CSS code \\[max-height: 180px] that JavaScript automatically inserts into \\<div class=\"fl-scroller\"> does not include \\[overflow: auto]\\\n  \\==> Question: Can the max-height be user-specified?\n* While uploading, there's no clear indication of which files have been uploaded in the file queue rows themselves--the foot of queue only indicates how many files have been uploaded, not which (not that it's supposed to)\n"
    },
    {
      "author": "Valerie",
      "date": "2009-03-30T11:31:21.000-0400",
      "body": "\\=== ROUND 2 ===\\\nWhat I did:\n\n* Added \\[class=\"fl-fix\"] to \\<div class=\"fl-scroller\">\n* Added \\<link href=\"../../../framework/fss/css/fss.theme.mist.css\" rel=\"stylesheet\" type=\"text/css\" />\n* Applied fl-theme-mist to the body tag\n* Added FSS Layout classes to queue tables and cells\n  *\n    * \\[fl-container-flex50] to tables and fileName\n    * \\[fl-container-flex25] to tables and fileSize\n    * \\[fl-container-flex75] to first cell in foot of queue table\n\nWhat I found:\n\n* Applying FSS Layout classes helps aesthetically with the table layout problem\n* Same with \\[class=\"fl-fix\"], but scroller sticks to the right of the screen\n* FSS Mist doesn't have an icon to replace the \"Remove file from queue\" button (but I guess its not supposed to?)\n\nQuestion: Just noticed \"File Upload Queue:\" at the top of Uploader--It's not supposed to be there, is it?\n"
    },
    {
      "author": "Valerie",
      "date": "2009-03-30T11:49:52.000-0400",
      "body": "\\=== ROUND 3 ===\\\nWhat I did:\n\n* Moved \\[fl-container-flex50] from file queue table to \\<div class=\"fl-scroller\"> and added \\[fl-container-flex] to file queue table\n* Added \\[style=\"display: none;\"] to \\<caption>File Upload Queue:\\</caption>\n* Added \\<style type=\"text/css\">\ttable, th, td { border: none !important; padding: 0; margin: 0; } \\</style> to document \\<head>\n* Applied different themes\n\nWhat I found:\n\n* \\[fl-container-flex50] in \\<div class=\"fl-scroller\"> helps with moving scroller to where it should be\n* \\[style=\"display: none;\"] effectively hid \"File Upload Queue:\"\n* \\<style type=\"text/css\"> table, th, td { border: none !important; padding: 0; margin: 0; } \\</style> takes out all padding and margins for tables and cells, BUT TD tags still have borders\n* FSS Coal and Slate doesn't have a background-colour specified for TH tags\n* FSS HCI isn't exactly the inverted version of HC; it's actually black text and borders on white, when it should really be white on black, right?\n"
    },
    {
      "author": "Valerie",
      "date": "2009-03-30T12:34:11.000-0400",
      "body": "March 30, 2009\n\n* Stripped Uploader.html of component-specific CSS file and applied FSS classes\n* Tweaked and added a few things\n* All details of what I did and what was found are in the previous three comments (ROUND 1 to 3)\n"
    }
  ]
}
---
dev-iteration47

        