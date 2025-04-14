---json
{
  "title": "FLUID-4528",
  "summary": "Create a prototype of a code generation authoring tool to help streamline the process of developing with Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2011-10-26T18:49:18.540-0400",
  "updated": "2011-10-26T18:50:57.079-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-10-26T18:50:56.896-0400",
      "body": "I've started a Github repository for this project:\n\n<https://github.com/colinbdclark/infusion-authoring>\n"
    }
  ]
}
---
At the moment, there are a number of patterns and conventions used by Infusion developers when they are creating new code files, components, and modules. In the long run, we'd like to have authoring supports and IDE plugins available to help streamline the process of creating such boilerplate code.

Let's start this process by create a prototype of such an authoring environment, perhaps using the CodeMirror code editor along with Infusion itself.

        