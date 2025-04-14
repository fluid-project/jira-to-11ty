---json
{
  "title": "FLUID-983",
  "summary": "Put together a list of requirements for progress bar ARIA support",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Colin Clark",
  "date": "2008-07-22T19:04:43.000-0400",
  "updated": "2011-02-22T16:27:59.774-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-07-23T16:59:57.000-0400",
      "body": "To date, global progress bas has:\n\nStatic attributes:\\\n\\-----------------------------\n• role = progressbar\\\n• valuemax = 100\\\n• valuemin = 0\\\n• live = assertive\n\nDynamic attributes:\\\n\\-----------------------------\n• valuenow (number)\\\n• valuetext (string \"VALUENOW% complete\")\\\n• busy (boolean)\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-23T19:15:47.000-0400",
      "body": "We will likely add the same roles/states/properties to the file row progressbar, but make it's \"live\" property \"none\" so that it is silent.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:59.773-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
There are still a number of outstanding questions on the best way to support ARIA for the Uploader, particularly in terms of live regions and handling multiple progress bars. Do some research and put together a strategy for how to  best implement ARIA in Uploader.

        