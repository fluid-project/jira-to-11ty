---json
{
  "title": "FLUID-5990",
  "summary": "Add webdriver tests to verify user functionality of Infusion components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2016-10-25T18:07:09.208-0400",
  "updated": "2024-07-22T09:20:15.971-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5989/",
      "key": "FLUID-5989",
      "summary": "Add webdriver tests to ensure sliding panel is open when the show button is pressed"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Many of our Infusion components have functionality that cannot adequately be tested by jqUnit-style "in-browser" tests. There are hard limits on fidelity of simulation of browser primitives such as keystrokes, mouse movements, tab navigation, etc. An upcoming W3C API, webdriver - <https://www.w3.org/TR/webdriver/> - and some concrete implementations such as <http://www.seleniumhq.org/projects/webdriver/> promise to make it easier to deliver portable tests that verify these operations.

We should collect together a list of functions that we have been used to only be able to check during manual QA (for example, mouse operation of the reorderer, tab navigation of keyboard-a11y, etc.) and write comprehensive webdriver tests for these, allowing us to move Infusion releases to a much more rapid schedule.

        