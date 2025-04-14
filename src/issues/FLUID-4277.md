---json
{
  "title": "FLUID-4277",
  "summary": "UI Options: asynchronous multi-templates loading issue ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-06-02T10:00:53.748-0400",
  "updated": "2011-06-09T16:19:47.777-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Confirmed with firefox 3.6 on windows.\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-06-02T16:16:52.473-0400",
      "body": "Bug Parade Infusion&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-07T10:30:47.362-0400",
      "body": "Part of the fix has been merged into project repo with the UI Options merging jira <https://fluidproject.atlassian.net/browse/FLUID-4276#icft=FLUID-4276>, at commit aa5efc1e1a20aaa152f2. More to follow.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-09T16:19:39.056-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/66> was merged into the project repo at a72d1807d656dce28edf3629b97f101f50ec52e3\n"
    }
  ]
}
---
Since the UI Options controls template was split into 4 templates: the top parent template that has DIVs for title, button, preview and 3 placeholder DIVs for 3 sub-templates that each corresponds to one section of controls, the asynchronous template loading issue was detected by unit tests (src/webapp/tests/component-tests/uiOptions/html/UIOptions-test.html).

The js errors below were reported at calling refreshView() in each renderer components that load and render the 3 sub-templates:

"Error during rendering - component with id textSize which has a queued decorator was not found in the output markup" etc.

        