---json
{
  "title": "FLUID-4770",
  "summary": "Emptying queue causes Browse Files button to be misaligned",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Anastasia Cheetham",
  "date": "2012-08-15T15:57:55.969-0400",
  "updated": "2018-09-17T20:57:33.337-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE9, IE 11\\\nSafari 10 ( macOS 10.12 )\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4770/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Neel Dalsania",
      "date": "2016-03-07T12:21:27.399-0500",
      "body": "pull request: <https://github.com/fluid-project/infusion/pull/680>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-09T11:13:34.036-0500",
      "body": "screenshot.png shows the \"Browse Files\" button clipped on the right side.\n"
    },
    {
      "author": "Akshay Agarwal",
      "date": "2016-03-14T14:59:15.596-0400",
      "body": "As per what I could see, the width of the button is not big enough to hold the text.\n\nAdding the code below to the uploader.css in the demo(<https://github.com/fluid-project/infusion/blob/master/demos/uploader/css/uploader.css>) could be a temporary fix and this makes the uploader demo work fine.\n\n.fl-uploader-browse {\\\nwidth:8em;\\\n}\n\n.fl-uploader-browse.fl-uploader-browseMore {\\\nwidth: 7em;\\\n}\n\nRemove these two stylesheet references from index.html inside the uploader demo and it would be fine without the above code too.\\\n\\<link rel=\"stylesheet\" type=\"text/css\" href=\"../../src/lib/normalize/css/normalize.css\" />\\\n\\<link rel=\"stylesheet\" type=\"text/css\" href=\"../lib/foundation/css/foundation.css\" />\n\nSo, this is only a temporary fix because change in the text size would again make the text disappear out of the button area. So the width of the button should be dynamically adjusted as per the text or the text inside button should be conforming to the button size.&#x20;\n\nI have to look more properly at the normalise .css and foundaion.css code to understand this better.&#x20;\n"
    }
  ]
}
---
When the last file is remove from the queue (via mouse or keyboard), when the "Add More" changes back to "Browse Files," the "Browse Files" button is positioned too far to the right, so it extends outside the main area. Hovering over it will move it back to the right place.

        