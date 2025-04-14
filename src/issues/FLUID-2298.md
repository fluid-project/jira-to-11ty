---json
{
  "title": "FLUID-2298",
  "summary": "id relation rewrite on branch causes exception \"branchfullID is not defined\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2009-02-27T16:58:20.000-0500",
  "updated": "2009-02-28T08:56:08.000-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-02-27T23:20:38.000-0500",
      "body": "Fixed at revision 6619\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-28T08:56:08.000-0500",
      "body": "Tested again using the same code that produced the error. It is now working properly.&#x20;\n\nComponent tree had a structure that looked like this. The offender had been the decorator on a branch.\n\nvar progressComponentTree = {\\\nchildren: \\[\\\n{\\\nID: \"progress-bars:\",\\\ndecorators: {identify: \"in-design-bar\"},\\\nchildren: \\[\\\n{\\\nID: \"fl-progress\"\\\n}\\\n]\\\n},\\\n{\\\nID: \"progress-bars:\",\\\ndecorators: {identify: \"in-dev-bar\"},\\\nchildren: \\[\\\n{\\\nID: \"fl-progress\"\\\n}\\\n]\\\n},\\\n{\\\nID: \"progress-bars:\",\\\ndecorators: {identify: \"stable-bar\"},\\\nchildren: \\[\\\n{\\\nID: \"fl-progress\"\\\n}\\\n]\\\n}\\\n]\\\n};\n"
    }
  ]
}
---
On rendering a branch with an id already defined, produces:

branchfullID is not defined\
file:///F:/workspace/progress-indicator/fluid-components/js/fluid/renderer/fluidRenderer.js\
Line 300

        