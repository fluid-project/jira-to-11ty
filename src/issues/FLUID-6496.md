---json
{
  "title": "FLUID-6496",
  "summary": "Running grunt tasks throws error with new grunt versions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Ned Zimmerman",
  "reporter": "Cindy Li",
  "date": "2020-05-12T11:44:54.856-0400",
  "updated": "2020-10-29T13:17:26.364-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-10-28T12:15:11.687-0400",
      "body": "Here are the changes from Grunt v1.0.2 to v1.0.3. It looks like it's related to mkdir.\n\n<https://github.com/gruntjs/grunt/compare/v1.0.2...v1.0.3>\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2020-10-28T15:11:06.998-0400",
      "body": "grunt-contrib-stylus hasn't received updates since 2016 and seems unlikely to.\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2020-10-29T07:16:23.687-0400",
      "body": "See notes on <https://github.com/fluid-project/infusion/pull/1024>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-10-29T13:17:22.613-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1024> ) into the project repo at 99ef9fb2012822418e800b2ad86a0808b96cc4e6\n"
    }
  ]
}
---
1\. At the root directory of the infusion project, open a terminal and run "npm install";\
2\. [Grunt version 1.1.0](https://github.com/fluid-project/infusion/blob/master/package.json#L46) will be installed;\
3\. Run "grunt distributions" or "sudo grunt distributions", this warning will be thrown:

```java
Unable to write "dist/assets/src/components/switch/css/stylus/../Switch.css" file (Error code: ENOENT). Use --force to continue
```

4\. This warning will go way by following [this instruction](https://gruntjs.com/installing-grunt) to downgrade the grunt version to 1.0.2.

        