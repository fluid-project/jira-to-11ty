---json
{
  "title": "FLUID-5591",
  "summary": "fluid.each cannot be terminated. The comment should be corrected.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-01-26T09:20:48.186-0500",
  "updated": "2015-06-26T10:10:05.390-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-01-26T09:31:43.935-0500",
      "body": "Submitted a pull request\\\n<https://github.com/fluid-project/infusion/pull/579>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-01-26T12:17:46.485-0500",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/579> ) was merged into the project repo at 6cf6ba418880076ea009c5bbb68173863c6fb80a\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:12.979-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The fluid.each function has an incorrect comment indicating that it can be terminated. However, this is not the case, as it cannot be terminated.

<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/Fluid.js#L459>

see discussion in channel from Jan 26, 2015\
<https://botbot.me/freenode/fluid-work/2015-01-26/?tz=America/Toronto>

        