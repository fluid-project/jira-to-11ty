---json
{
  "title": "FLUID-5007",
  "summary": "Design new UIO API, with tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2013-04-30T16:31:18.102-0400",
  "updated": "2013-10-23T15:20:25.377-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-06-17T12:13:24.438-0400",
      "body": "The API proposal is on the wiki here: <http://wiki.fluidproject.org/display/fluid/Proposal+-+New+UIO+API>\n"
    }
  ]
}
---
We would like to 'design' a new, super-simple API for UIO: The simplest possible API and options structures for integrators to use to implement and customize UIO. We will start by creating unit tests for the new API.

The design of the API will take into account use cases such as:

* basic integration
* internationalization
* addition of panels
* removal of panels

        