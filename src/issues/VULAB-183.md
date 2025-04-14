---json
{
  "title": "VULAB-183",
  "summary": "Survey Creation Usability",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "In Progress",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-02-23T14:33:18.000-0500",
  "updated": "2009-02-23T14:33:24.000-0500",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-02-23T14:33:24.000-0500",
      "body": "vulab17\n"
    }
  ]
}
---
This task is to improve the usability of the survey creation process, because it is a little awkward by nature and furthur explanations should eb given.

I've outlined it from a programming perspective at this issue:\
<http://issues.fluidproject.org/browse/VULAB-180>

To expand or maybe summarize...

The Situation:

* new survey creation is done using an iframe due to the nature of the phpESP (the survey processes are entirely legacy to phpESP)
* since the new survey creation tool or the "survey tool" is included within an iframe, I have used a $\_SESSION variable to communication between the iframe's php and the parent system's php.
* the bridge between survey tool and system php is done by sending a javascript flag when the survey is saved (that is, any button within the iframe is clicked)

The Current Implementation:

* currently I show a dotted red outline around the survey tool when a new one is instantiated AND it won't be saved.
* once the survey tool is saved within the iframe, the javascript on the survey tool's page tells the parent page that its been saved and the dotted outline switches to green and solid.
* there are simple one line explanations for each of these stages within the survey tool.

Improvements:

* We need to explain what needs to happen for the survey to be saved/associated with the project.
* We should add a "cancel" button of some sort, (probably and X icon of sorts)
* \- clicking on this will simulate the clicking of the "no pre-survey" radio button, which is currently the only way to cancel the survey creation process.

        