---json
{
  "title": "FLUID-6329",
  "summary": "`npm install` fails when running with Grunt 1.0.3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-08-22T07:35:07.478-0400",
  "updated": "2021-03-23T13:28:04.146-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-08-22T08:43:40.792-0400",
      "body": "@@Tony Atkins \\[RtF] thanks for filing this. I ran into the same issue the other day and just didn't get around to filing a Jira for it yet. The issue seems to be stemming from the use of the \"relativeDest\" option ( <https://github.com/fluid-project/infusion/blob/master/Gruntfile.js#L276> ) when writing to the dist directory. Possibly to do with this being a path that needs to be created along with changes they have made between 1.0.2 and 1.0.3 to file.js ( <https://github.com/gruntjs/grunt/commit/01055249b3a6493ee2c0ef43168f1d4d591f31f4> ).\n\n \n\nOne potential solution, which I haven't tested yet, would be to make the stylus directory a sibling of css instead of a child.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-03-23T13:28:04.143-0400",
      "body": "As part of the work on <https://fluidproject.atlassian.net/browse/FLUID-6496#icft=FLUID-6496> the CSS Preprocessing in Infusion was migrated to Sass. Infusion has updated to use Grunt v1.3.0.\n"
    }
  ]
}
---
In recent work in other areas, I updated the dependencies in infusion and suddenly encountered \`npm install\` failures like the following:

```java
Running "stylus:dist" (stylus) task
Warning: Unable to write "dist/assets/src/components/switch/css/stylus/../Switch.css" file (Error code: ENOENT). Use --force to continue.

Aborted due to warnings.
```

I was able to track this down to the grunt update from 1.0.2 -> 1.0.3.  Until we can investigate, we need to stay at 1.0.2.

        