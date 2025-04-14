---json
{
  "title": "FLUID-5813",
  "summary": "Options distributions arriving via the \"early route\" are not properly sorted by priority",
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
  "date": "2015-11-08T21:16:31.868-0500",
  "updated": "2016-01-15T11:59:13.935-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5013/",
      "key": "FLUID-5013",
      "summary": "IoCSS does not pass down non-options blocks to the target component"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5621/",
      "key": "FLUID-5621",
      "summary": "Improve distributeOptions system so that priority of different distributions can be precisely controlled"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-11-08T21:19:25.107-0500",
      "body": "Note that after <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982>, the \"early route\" and the \"late route\" will become fused\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-01-15T11:59:10.861-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/654> ) into the project repo at 4e1b8c9a64665c67232901d2e57531926ec7247f  and 2f38c09d733925441f0ff2e6636f8886da8af5ea\n"
    }
  ]
}
---
The FLUID-5621 distributeOptions priority system is incompletely implemented - only distributions arriving via the "late route" (that is, for a component which has properly started instantiation and has a "that" allocated for it) are subject to the priority ordering.

The distributions collected via the "early route" (during fluid.assembleCreatorArguments) are simply collected at random -&#x20;

```java
var distributions = parentThat ? fluid.receiveDistributions(parentThat, upDefaults.gradeNames, options.memberName, fakeThat) : [];
...
        fluid.each(findKeys, function (name) {
            for (var i = 0; i < distributions.length; ++ i) { // Apply non-options material from distributions (FLUID-5013)
                if (distributions[i][name] !== undefined) {
                    localRecord[name] = distributions[i][name];
                }
            }
        });
```

This implies that it is impossible to arbitrate between multiple distributions trying to target the component's "type" - e.g. the following two:

```java
"distributeOptions": {
            "preferencesDataSource": {
                "record": {
                    "type": "kettle.dataSource.URL",
                    "options": {
                        "url": "http://localhost/preferences/%userToken",
                        "port": "{kettle.config}.options.mainServerPort"
                    }
                 },
                 "target": "{that flowManager preferencesDataSource}"
             },
```

and

```java
distributeOptions: {
        record: "gpii.tests.userSave.failingDataSource",
        target: "{that preferencesDataSource}.type",
        priority: "after:preferencesDataSource"
    },
```

Here, the directive "after:preferencesDataSource" is ignored - as is the tree distance rule - which we are increasingly considering is a very unreliable way to arbitrate distribution priority. We had originally thought that the inverse of the current rules - that is, more DISTANT distributions should take priority, is a more correct rule, but I remember thinking of important exceptions to this as well - need to try to recall.

        