---json
{
  "title": "FLUID-4206",
  "summary": "Upgrade jQuery 1.8.11 to 1.8.12",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Harris Wong",
  "reporter": "Harris Wong",
  "date": "2011-05-06T11:07:28.880-0400",
  "updated": "2011-05-12T09:47:34.597-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [],
  "environment": "N/A\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-05-06T14:11:43.695-0400",
      "body": "1.8.12 unittest fails on:\\\nuploader-test: ff4 win7\\\nlightbox test: ie9 win7  (#FLUID-4164, same failure from 1.8-> 1.8.11; Relates to #FLUID-3953)\\\nlayout reorderer test - 3.10: ie9 win7  (#FLUID-4164same failure from 1.8-> 1.8.11; Relates to #FLUID-3954)\\\nframework cache test - ie8 winxp (same on Master as of May 9)\\\nFluidIoC #24, Chrome, IE 8,9 Win 7 (<http://build.fluidproject.org/infusion/tests/framework-tests/core/html/FluidIoC-test.html>)\\\nUploaderCompatibility-test, IE 8,9 Win 7 (<http://build.fluidproject.org/infusion/tests/component-tests/uploader/html/UploaderCompatibility-test.html>)\n\npass on all others\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-09T11:16:47.174-0400",
      "body": "Safari 5 (Mac OS 10.6)\n\nThings seem to be working. I did have a problem with some of the unit tests, but after leaving them and coming back, I couldn't reproduce the failing tests.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-12T09:47:17.831-0400",
      "body": "Harris there were a few things missing in your branch. The demo-theme in the demos/lib directory and the jquery.ui.theme.css file were missed when you updated the rest of the themes. Also the updated themes were missing the jquery ui widget styling. I've addressed all of these issues.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-12T09:47:34.596-0400",
      "body": "Merged all changes into the project repo at 3e7fb7e7a5186987ce37be80848246d1c2cee7aa\n"
    }
  ]
}
---
Upgrade jQuery UI from 1.8 to 1.8.11

Updating the following files:\
jquery.ui.core.js\
jquery.ui.dialog.js\
jquery.ui.draggable.js\
jquery.ui.mouse.js\
jquery.ui.position.js\
jquery.ui.slider.js\
jquery.ui.widget.js

There are no new features or backward incompatible changes in 1.8.12, jQuery official guides for upgrading:\
<http://jqueryui.com/docs/Upgrade_Guide/1.8.12>

        