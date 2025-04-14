---json
{
  "title": "FLUID-4979",
  "summary": "Investigate why overflow-x and overflow-y being injected via FatPanelUIOptions.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2013-04-15T10:33:21.394-0400",
  "updated": "2015-06-15T10:15:27.213-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:15:27.190-0400",
      "body": "It appears that the overflow style injections have been removed from the code base\n"
    }
  ]
}
---
On line 189 of FatPanelUIOptions.js, the following appears:

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

* fluid.uiOptions.fatPanel.renderIframe \*\
  &#x20;    \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/

&#x20;   \
fluid.defaults("fluid.uiOptions.fatPanel.renderIframe", {\
gradeNames: \["fluid.viewComponent", "autoInit"],\
finalInitFunction: "fluid.uiOptions.fatPanel.renderIframe.finalInit",\
events: {\
afterRender: null\
},\
styles: {\
containerFlex: "fl-container-flex",\
container: "fl-uiOptions-fatPanel-iframe"\
},\
prefix: "./",\
markupProps: {\
// This overflow specification fixes anomalous x overflow on FF, but may not on IE\
style: "overflow-x:hidden; overflow-y:auto;",\
"class": "flc-iframe",\
src: "%prefix/uiOptionsIframe.html"\
}\
});

The line "style: "overflow-x:hidden; overflow-y:auto;"," may not be necessary and there isn't a JIRA attached to the "fix" either. Removing the line does not appear to do anything in current browsers.

Investigate where this line came from and decide whether it can be removed.

        