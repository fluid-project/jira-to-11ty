---json
{
  "title": "FLUID-4138",
  "summary": "Rename the keyboard a11y unit test, to follow convention",
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
  "date": "2011-03-10T12:52:44.386-0500",
  "updated": "2015-06-26T09:58:38.464-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-17T10:24:17.468-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/610>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-18T08:31:35.681-0400",
      "body": "The pull request discussion identified that Keyboard-a11y-test.html and Keyboard-a11yTests.js would be a better renaming as they align more closely to the underlying file being tested.\n\n<https://github.com/fluid-project/infusion/pull/610#issuecomment-112890938>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-18T10:30:08.393-0400",
      "body": "Merged @ 47b15a3f8a2c16ee3474c7baf13c8a2798dce244\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:49.305-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Currently the keyboard a11y test is named keyboard-a11y-tests.js, by convention this should start with a capital letter and be camel cased (KeyboardA11yTests.js).

        