---json
{
  "title": "FLUID-2275",
  "summary": "The jquery.tinymce plugin assumes that TinyMCE is present and invokes a method on it immediately upon load without checking first.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-02-19T19:01:37.000-0500",
  "updated": "2011-02-28T16:45:17.889-0500",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-05-11T18:33:57.000-0400",
      "body": "I fixed this issue in r7160.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:17.878-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
At the moment, the jquery.tinymce plugin invokes the following code immediately upon being parsed:

// Invoke this immediately to prime TinyMCE.\
tinyMCE.init({\
mode: "none",\
theme: "simple"\
});

However, to properly be included in Fluid-all.js, the plugin should not assume that TinyMCE is present, in case a user is using Fluid-all.js without being interested in TinyMCE-related code.

The correct implementation should be:

if (typeof(tinyMCE) !== "undefined") {\
// Invoke this immediately to prime TinyMCE.\
tinyMCE.init({\
mode: "none",\
theme: "simple"\
});\
}

        