---json
{
  "title": "FLUID-5274",
  "summary": "Remove the \"src\" directory from the infusion build",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2014-02-12T15:42:36.125-0500",
  "updated": "2014-02-19T10:40:17.034-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-02-13T16:08:27.563-0500",
      "body": "Sent a pull request to extend grunt plugin \"grunt-modulefiles\" with a cwd option: <https://github.com/fluid-project/grunt-modulefiles/pull/5>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-02-14T12:00:01.059-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/grunt-modulefiles/pull/5> ) into the grunt-modulefiles project repo at eb4eb17e7017dc8cf11a336220e5a964022ba39b\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-02-19T10:40:14.860-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/469> ) into the project repo at a0b955e15268f7e59f465fecb776cca38c4d8b61\n"
    }
  ]
}
---
1\. Run the grunt build script with "grunt" or "grunt custom";\
2\. Unzip the generated infusion build file;\
3\. The output has the infusion-XXX.js file, and at the same level, a "src" directory that has the infusion code structure.

This "src" directory was not there in the old infusion build file and should be removed to maintain the backwards compatibility.

        