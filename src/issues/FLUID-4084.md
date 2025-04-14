---json
{
  "title": "FLUID-4084",
  "summary": "Drop Down Font Selector Does Not Allow Changes With Mouse",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "John Kremer",
  "date": "2011-02-18T12:29:08.630-0500",
  "updated": "2011-02-23T10:25:37.489-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "IE 9 Win7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "John Kremer",
      "date": "2011-02-18T12:51:08.817-0500",
      "body": "Tried to re-create the error by:\\\n1\\. Closing and restarting browser\\\n2\\. Navigate to <http://build.fluidproject.org/infusion/integration-demos/sakai/html>\\\n3\\. Select ui-options-fss-sakai.html\\\n4\\. Click on edit appearance\\\n5\\. Click on font drop-down and make a selection\n\nNow it seems to be fine.\n"
    }
  ]
}
---
In the edit appearance section, the font drop down menu does not allow for the user to change the selection off of Serif when using the mouse.\
The menu populates fine, but when you move the mouse over any of the other options, the box closes out and the value is still set on Serif.

Note: Selections are able to be made with the keyboard.

<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

        