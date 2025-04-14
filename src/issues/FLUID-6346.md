---json
{
  "title": "FLUID-6346",
  "summary": "fluid.isArrayable faultily considers any object with a property named \"jquery\" is an array",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2018-10-16T21:46:27.970-0400",
  "updated": "2018-10-18T08:46:49.403-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-10-17T09:08:04.871-0400",
      "body": "jQuery is in the devDependencies because Infusion's dependencies are now pulled in from NPM. It's not in the dependencies block because the NPM package of infusion includes it in the dist builds. See <https://fluidproject.atlassian.net/browse/FLUID-6253#icft=FLUID-6253>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-10-17T12:23:22.519-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/940> ) into the project repo at 787f7d5e5b9a3565f4843be491e64dcc9e5fe355\n"
    }
  ]
}
---
Our current implementation looks like this - 

```java
fluid.isArrayable = function (totest) {
        return totest && (totest.jquery || Object.prototype.toString.call(totest) === "[object Array]");
    };
```

which is extremely generous and will catch any object with a property named "jquery". We finally fell foul of this when passing our own package.json file through fluid.copy in a Kettle test and it ended up truncating the entire "devDependencies" block which now includes an entry for jQuery (for some reason).

We should tighten up this test so it cannot be tripped by any plain object.

        