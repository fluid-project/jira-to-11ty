---json
{
  "title": "FLUID-4949",
  "summary": "Add icon fonts to the UIO demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2013-03-27T08:38:01.699-0400",
  "updated": "2013-04-29T09:08:35.886-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Using the icon fonts from FLUID-4934, add them to the UIO demo.\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4938/",
      "key": "FLUID-4938"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4949/UIO70427.zip",
      "filename": "UIO70427.zip"
    }
  ],
  "comments": [
    {
      "author": "Arash Sadr",
      "date": "2013-03-27T11:07:09.896-0400",
      "body": "I will upload the latest icon fonts here, replacing them with the older ones.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-03-28T07:18:48.342-0400",
      "body": "The following are instructions on how to update the CSS and HTML for new fonts.\n\nStep 1 Preparation:\\\n1\\. Download and extract new font bundle.\\\n2\\. Load Index.html from the font bundle in a browser\\\n3\\. Open Index.html in an editor so you can see the markup.\\\n4\\. Copy the \\*.EOT, \\*.WOFF, and \\*.TTF font to the destination /font directory\n\nStep 2 Integration:\\\n1\\. In the browser with the loaded Index.html file, locate the class-name of the font you want. This can be found in the bottom half of the page and should show the icon with the classname \"icon-\\<something>\" below.\\\n2\\. In the editor with the loaded index.html file, search for the classname matching the icon you want. \\\n3\\. Locate the second instance of the classname and copy the entire .icon-\\<name>:before { content: ashgdhasgdjad } block.\\\n4\\. Paste this block into font section of UIOptions.css.\\\n5\\. Prefix name the class from .icon-\\<name> to .fl-icon-\\<name>\\\n6\\. Go back to the editor with Index.html\\\n7\\. Copy the two @font-face blocks (should be roughly lines 5 to 15) at the top of the file.\\\n8\\. Paste and replace the two @font-face blocks in the font section of UIOptions.css file.\n\nNote: #7 and #8 above are critical, otherwise the icon font will not appear.\n\n9\\. Now with styles and fonts in place, you can add .fl-icon-\\<name> to your HTML markup and the icon should appear.\n"
    }
  ]
}
---

        