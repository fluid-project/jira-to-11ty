---json
{
  "title": "FLUID-6136",
  "summary": "Cannot override an invoker specified with \"changePath\" with one of a different form",
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
  "reporter": "Justin Obara",
  "date": "2017-02-27T15:32:06.838-0500",
  "updated": "2017-03-01T13:21:25.774-0500",
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
      "date": "2017-02-27T15:35:43.864-0500",
      "body": "PR to demonstrate issue: <https://github.com/fluid-project/infusion/pull/816>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-03-01T13:21:21.071-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/819> ) into the project repo at 1874b320f9236b5599be88e3b6eda7f2511f3827\n"
    }
  ]
}
---
If an invoker is specified using a "changePath" to directly update a model value, it cannot be overridden with an invoker of a different form.

Default config:

```java
invokers: {
            toOverride: {
                changePath: "value",
                value: "{arguments}.0"
            }
        }
```

overrideConfig:&#x20;

```java
toOverride: {
                    funcName: "fluid.tests.overrideInvokerChangePath.overridden",
                    args: ["{that}"]
                }
```

Additionally if we try to the work around of providing null for the "changePath" and "value" properties, an error is thrown. "Cannot read property 'segs' of null"

        