---json
{
  "title": "KETTLE-74",
  "summary": "npm packages include coverage data.",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-12-18T07:55:10.684-0500",
  "updated": "2018-12-18T07:55:10.684-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
I recently discovered that coverage cruft is being packed up and shipped with the kettle npm package:

> duhrer-macbook:Downloads duhrer$ npm pack kettle
>
> ...
>
> duhrer-macbook:kettle duhrer$ tar -xvzf kettle-1.9.0.tgz\
> x package/package.json\
> x package/.eslintrc.json\
> x package/.jshintrc\
> x package/Gruntfile.js\
> x package/History.md\
> x package/init.js\
> x package/kettle.js\
> x package/LICENSE.txt\
> x package/README.md\
> x package/Vagrantfile\
> x package/.nyc\_output/cb1551b8-a5b0-440a-b670-6c3dc614ac69.json

        