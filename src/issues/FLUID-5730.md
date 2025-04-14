---json
{
  "title": "FLUID-5730",
  "summary": "Self voicing enactor test failing in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Kaye Mao",
  "date": "2015-07-30T11:46:23.098-0400",
  "updated": "2016-07-08T08:48:32.667-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Internet explorer 11 for windows 8.1\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-11-27T08:27:26.315-0500",
      "body": "When run on its own, the failing tests actually passes in IE.\n\n<http://build.fluidproject.org/infusion/tests/framework-tests/preferences/html/SelfVoicingEnactor-test.html?testNumber=2>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-11-27T09:17:35.848-0500",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/658>\n"
    }
  ]
}
---
Only in IE11 on windows, tests/framework-tests/preferences/html/SelfVoicingEnactor-test.html is throwing an error for "2. the test to be spoken should have been queued correctly", the result is missing \
"},\
{\
"interrupt": false,\
"text": "Reading text from DOM"\
},\
{\
"interrupt": false,\
"text": "no image"\
}"

        