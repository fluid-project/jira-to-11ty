---json
{
  "title": "FLUID-163",
  "summary": "Create a more robust way of passing in custom key bindings.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-01-17T12:36:07.000-0500",
  "updated": "2011-02-22T16:27:52.704-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-02-08T00:00:44.000-0500",
      "body": "I implemented a concept of a \"key binding,\" which is a simple object that specifies a connection between a keypress and an activation handler:\n\n{\\\nmodifier: undefined || null || CTRL || ALT || SHIFT,\\\nkey: key,\\\nhandler: function\\\n}\n\nThis allows users to specify different activation handlers for different key presses.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:52.702-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, users can only specify custom activation keys, all of which are bound to the same handler. It's not easy to customize bindings to the up/down actions. I'd like to develop a standard way of mapping keys to particular semantics and their handler functions.

        