---json
{
  "title": "FLUID-3855",
  "summary": "Simple Inline Edit Demo - Invitation text should be more informative and in a different colour and style.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2010-11-18T14:46:36.382-0500",
  "updated": "2010-12-01T17:04:58.348-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3855/FLUID-3855-1.patch",
      "filename": "FLUID-3855-1.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3855/FLUID-3855-2.patch",
      "filename": "FLUID-3855-2.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3855/FlUID-3855-3.patch",
      "filename": "FlUID-3855-3.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-19T16:19:06.800-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-26T14:03:28.967-0500",
      "body": "Some of the changes shown in the demo patch should become new defaults for the component:\\\n1\\. component's defaultViewStyle style should be changed to match that of .demo-inlineEdit-invitation in the patch.\\\n2\\. component's defaultViewText variable in the JS file should change to \"Edit this\".\n\nAlso:\\\n3\\. the Demo's Javascript is overloading classnames in some places (class used for both selecting and styling)\\\n4\\. some classes need better naming to follow convention.\\\n5\\. some instances where custom selector or style is defined where the component's default should be enough.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-26T15:11:20.210-0500",
      "body": "Moved the defaultViewStyle from the demo to the component.   Some CSS tweaks may be needed as the demo-inlineEdit-title style is overriding the italic styling of the defaultViewStyle.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-26T16:00:45.810-0500",
      "body": "Set the demo font-size to 2em and removed 'normal'\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-01T17:04:58.341-0500",
      "body": "I code reviewed this and am happy with it.&#x20;\n"
    }
  ]
}
---
In the Simple Inline Edit Demo, the default invitation text (the text that appears when the editable text field is empty), should be in a different style and colour. As well, the text itself should be useful to the user giving them an indication of what to do.

Suggested style: italics with a grey colour.\
Suggested invitation text: "Edit me", "Edit this", "Edit this text"

Currently the invitation text is indistinguishable from editable text.

        