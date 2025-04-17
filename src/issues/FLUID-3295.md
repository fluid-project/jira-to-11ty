---json
{
  "title": "FLUID-3295",
  "summary": "Rich text editor features in demo which launch popup window do not seem to work",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Laurel Williams",
  "date": "2009-10-14T13:44:54.000-0400",
  "updated": "2017-03-10T09:00:01.093-0500",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3",
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 3.2 OSX 10.5 \\\nFF 3.5 Windows\\\nIE8 Windows 7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3085/",
      "key": "FLUID-3085",
      "summary": "Tiny MCE quick start example causes an error when inserting an anchor"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4118/",
      "key": "FLUID-4118"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-01-12T08:53:00.472-0500",
      "body": "This is possibly due to the fact that we are using a CDN to pull in the rich text editors. This was done to minimize the code size of our examples, since these ship with our full distribution.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-03-10T09:00:01.078-0500",
      "body": "Can no longer reproduce this issue. This was likely fixed when the CDN reference was updated.\n"
    }
  ]
}
---
The rich text editor for inline edit in the demo page does not seem to be able to edit using any features which launch a popup window\...for example Anchor, Insert/Edit Image, etc.

This is happening due to the permission restriction and the error looks like this:\
"Permission denied for <[http://tinymce-fluid.appspot.com](http://tinymce-fluid.appspot.com/)> to get property Window\.tinymce from <[http://build.fluidproject.org](http://build.fluidproject.org/)>. in tiny\_mce\_popup.js"\
Possibly it should work if this files are included in advance in the markup.

        