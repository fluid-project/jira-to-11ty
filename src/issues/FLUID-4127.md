---json
{
  "title": "FLUID-4127",
  "summary": "Make global comments consistent across all js files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-03-01T16:27:48.860-0500",
  "updated": "2011-03-06T21:08:13.319-0500",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-03-06T21:08:13.266-0500",
      "body": "Pushed changes at d800c49b532c6535b323. I've tried to standardize the globals comments by adding a comment above \"Declare Dependencies\" in all cases, and ordering the globals by browser/javascript, infusions, third party. Also updated the declared globals for all files. This included removing ones that our jslint settings already took care of, removing ones that weren't actually necessary, and adding in any that were missing. If variables appeared to be global in error, I didn't add them to the set of declared globals.\n"
    }
  ]
}
---
The global comments that are used for jslint are not consistent across all js files.

Some are on a single line, others are all declared on separate lines.

We should make this consistent, also we should add a comment about what this is (e.g. // Declare dependencies.) and make sure that all global variables that are writable in the file have :true added. (e.g. /\*global fluid\_1\_4:true \*/)

        