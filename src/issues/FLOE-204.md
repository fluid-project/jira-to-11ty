---json
{
  "title": "FLOE-204",
  "summary": "Add jshint task to Metadata repo",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-07-23T08:40:50.389-0400",
  "updated": "2014-07-24T10:26:53.248-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Feedback Tool",
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-24T08:35:41.660-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/metadata/pull/30>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-07-24T10:26:50.280-0400",
      "body": "Merged into the project repo, the master branch @ b95c4c138ecaf07ce1a7e694f2c7829c9762ae6f\n"
    }
  ]
}
---
We should add a grunt task for running jshint as well as a jshintrc file. We should follow what is in infusion.

<https://github.com/fluid-project/infusion/blob/master/.jshintignore>\
<https://github.com/fluid-project/infusion/blob/master/.jshintrc>\
<https://github.com/fluid-project/infusion/blob/master/Gruntfile.js#L154-L160>\
<https://github.com/fluid-project/infusion/blob/master/package.json#L43>

        