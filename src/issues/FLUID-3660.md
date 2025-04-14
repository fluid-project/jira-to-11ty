---json
{
  "title": "FLUID-3660",
  "summary": "Add logic to inject the inject.js file needed for our unit tests to run in  testswarm",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-05-27T12:57:35.383-0400",
  "updated": "2011-01-14T10:41:50.805-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3660/FLUID-3660.patch.txt",
      "filename": "FLUID-3660.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-27T14:32:14.831-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3660#icft=FLUID-3660>.patch.txt adds the inject.js script as well as a function in jqunit that automatically adds in the inject script when tests are run in the testswarm environment\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-05-31T11:45:16.599-0400",
      "body": "I've reviewed Justin's patch and suggested one change--we're missing () in the call to new Date. Once Justin's makes this change and tests it, this patch looks ready to be committed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-31T12:04:47.924-0400",
      "body": "Committed the inject.js script as well as changes to jqunit.js to automatically insert inject.js when the test is run in the testswarm environment\n"
    }
  ]
}
---
Testswarmr requires the inject.js file to be imported in all testsuite html pages. jqUnit should determine if the unit test is being run in the testswarm environment and add the inject.js file if it is.

        