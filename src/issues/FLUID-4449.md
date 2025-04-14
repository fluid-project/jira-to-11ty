---json
{
  "title": "FLUID-4449",
  "summary": "The \"Emphasize Links\" setting is not persistent for the table of contents links.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-09-14T13:41:27.494-0400",
  "updated": "2011-09-15T16:16:43.446-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": "Safari, FF 3.6 - Mac OS 10.6\\\nSafari, FF 3.6 - Mac OS 10.7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-09-15T16:16:43.444-0400",
      "body": "Merged Antranig's pull request ( <https://github.com/fluid-project/infusion/pull/165> ) into the project repo at fd98e24b4fbe5ed0fc3277ac5fe8afaee514fd54\n"
    }
  ]
}
---
Steps to  reproduce:

1\) Open the UIO demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html>

2\) Turn on the "Table of Contents" and  the "Emphasize Links" options, and save the change. Notice that the links are now bigger.

3\) Refresh the page using the browsers refresh. Notice that the size of the links for the Table of Contents have gone back to normal, and  the option is still set.

        