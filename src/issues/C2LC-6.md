---json
{
  "title": "C2LC-6",
  "summary": "Pressing Step while an action is being executed results in that step being executed again",
  "tags": "C2LC",
  "project": {
    "key": "C2LC",
    "title": "Coding to Learn and Create"
  },
  "type": "Bug",
  "status": "Won't Fix",
  "reporter": "Simon Bates",
  "date": "2019-04-03T17:05:26.741-0400",
  "updated": "2024-05-01T10:36:11.375-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/C2LC-71/",
      "key": "C2LC-71"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2024-05-01T10:36:05.624-0400",
      "body": "No longer relevant. Closing.\n"
    }
  ]
}
---
To reproduce:

* Run the prototype
* Connect to Dash
* Load the square program
* Press Step
* Press Step as soon as Dash has finished moving

Expected:

* Dash to turn left

Actual:

* Dash will move forward

Some solutions:

1. Disabled the Step button while a step is being executed
2. Queue Step presses
3. Remove the Step button

Discussed with Michelle and we decided on option (1) disable the button while a step is in action.

        