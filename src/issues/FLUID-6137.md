---json
{
  "title": "FLUID-6137",
  "summary": "Cannot use distributeOptions to distribute an option when the source points at a value of 0",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2017-02-28T09:44:37.615-0500",
  "updated": "2017-03-01T11:05:43.789-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-02-28T09:48:03.557-0500",
      "body": "Test case PR: <https://github.com/fluid-project/infusion/pull/817>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-03-01T11:05:33.596-0500",
      "body": "merged PR ( <https://github.com/fluid-project/infusion/pull/818> ) into the project repo at 65b4073e25d0befb303cd19ff1e97685b4192b7e\n"
    }
  ]
}
---
When trying to use distribute options to pass along an option to another component, if using the source property to point at a value of 0, it is not passed along.

Example:

```java
fluid.defaults("fluid.tests.distributeOptionsZero", {
        gradeNames: ["fluid.component"],
        components: {
            child: {
                type: "fluid.component"
            }
        },
        toDistribute: 0,
        distributeOptions: [{
            source: "{that}.options.toDistribute",
            target: "{that child}.options.fromSource"
        }]
    });
```

However, if the "record" property is used instead, it will be passed along.&#x20;

Example:

```java
fluid.defaults("fluid.tests.distributeOptionsZero", {
        gradeNames: ["fluid.component"],
        components: {
            child: {
                type: "fluid.component"
            }
        },
        distributeOptions: [{
            record: 0,
            target: "{that child}.options.fromRecord"
        }]
    });
```

        