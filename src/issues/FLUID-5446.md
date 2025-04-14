---json
{
  "title": "FLUID-5446",
  "summary": "IE11 with prefs framework full page demos: The background color is not reset at the first click on \"reset and apply\" or \"save and apply\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Cindy Li",
  "date": "2014-06-13T16:00:08.357-0400",
  "updated": "2014-06-16T08:53:07.640-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "IE11.0.9600.17301 on Win 8.1\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5406/",
      "key": "FLUID-5406",
      "summary": "Reset doesn't remove contrast theme background"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5446/missing link line.jpeg",
      "filename": "missing link line.jpeg"
    }
  ],
  "comments": []
}
---
1\. Open a prefs framework full page demo such as <http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullNoPreview.html>

2\. In "colour & contrast" section, select a non-default theme such as white on black;

3\. Click "save and apply" to apply the selected theme to the page;

4\. Click "reset and apply", the first click resets everything else back to the default including the foreground color. But the background color stays as black;

5\. Click "reset and apply" again, the background color is set to the default.

The issue occurs with both full page with or without preview demos.

        