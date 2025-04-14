---json
{
  "title": "FLUID-3587",
  "summary": "TinyMCE's popups do not work : i.e. image/anchor insert functionality, etc ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "y z",
  "date": "2010-04-01T13:52:18.000-0400",
  "updated": "2011-01-10T14:14:35.671-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "WIN 7, FF3.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-10T14:14:35.670-0500",
      "body": "Duplicate of <http://issues.fluidproject.org/browse/FLUID-3295>\n"
    }
  ]
}
---
This is happening due to the permission restriction and the error looks like this:\
"Permission denied for <[http://tinymce-fluid.appspot.com](http://tinymce-fluid.appspot.com/)> to get property Window.tinymce from <[http://build.fluidproject.org](http://build.fluidproject.org/)>. in tiny\_mce\_popup.js"\
Possibly it should work if this files are included in advance in the markup.

        