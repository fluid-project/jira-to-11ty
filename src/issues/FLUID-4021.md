---json
{
  "title": "FLUID-4021",
  "summary": "Pager demo sets unnecessary options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2011-01-05T16:15:30.602-0500",
  "updated": "2014-03-03T11:48:02.132-0500",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-05T16:22:24.353-0500",
      "body": "Jon, you did a fair bit of work on the Pager demo - do you know if there is a reason why this option is being set?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-07-22T21:19:21.365-0400",
      "body": "Demo options improved to alter the required page size to 20, different from the defaults. the debugMode flag is now commented in the demo code. Merged into trunk at revision acf4633\n"
    }
  ]
}
---
The Pager demo code sets a "model" option in the options argument to the creator function, as so:\
demo.pager = fluid.pager(".demo-pager-container", {\
dataModel: model,\
model: {\
pageSize: 10\
},\
....

In fact, the default value for pageSize is 10, so this is completely unnecessary. Since the demo is meant to be an exemplar, this might be confusing to readers. We might want to change it to something other than the default.

Also:\
The bodyRenderer options include an option to set the renderer debugMode to false.\
bodyRenderer: {\
type: "fluid.pager.selfRender",\
options: {\
selectors: {\
root: ".demo-pager-table-data"\
},\
renderOptions: {debugMode: false}\
}\
}\
I believe this is the default; if so, we could remove this.

        