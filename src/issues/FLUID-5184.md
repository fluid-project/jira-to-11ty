---json
{
  "title": "FLUID-5184",
  "summary": "Cannot override a this-ist invoker with a that-ist one",
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
  "date": "2013-10-18T12:48:55.653-0400",
  "updated": "2019-07-12T09:13:40.916-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5714/",
      "key": "FLUID-5714",
      "summary": "The framework does not correctly merge invoker specifications when both \"func\" and \"funcName\" are used"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-18T12:52:54.664-0400",
      "body": "Submitted a pull request with a unit test demonstrating the issue.\\\n<https://github.com/fluid-project/infusion/pull/418>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-10-18T13:06:26.138-0400",
      "body": "It's necessary to the way invokers are used that their configuration is merged together, rather than them replacing each other wholesale. For example, it is necessary to the use case where the user wants to override either the argument list or the function name without changing the other. In this case you need to ensure that the original invoker fields are eliminated, for example by overriding them with \"null\", so that the record can be interpreted as a different invoker record type - for example\n\n```java\ninvokers: {\r\n    log: {\r\n        method: null,\r\n        \"this\": null,\r\n        funcName: \"console.log\"\r\n        }\r\n    }\n```\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-06T13:33:10.002-0400",
      "body": "I think that is is really a usability bug after all. We should resolve it together with <https://fluidproject.atlassian.net/browse/FLUID-5714#icft=FLUID-5714>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T15:50:15.109-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
If the default configuration of an invoker uses the "this-ist" notation, it cannot be overridden\
with a that-ist implementation.

For example:

```java
fluid.defaults("fluid.logger", {
    ...
    invokers: {
        log: {
            "this": "thisistThing",
            "method": "log"
        }
    }
    ...
})

var logger = fluid.logger({
    invokers: {
        log: {
            funcName: "console.log"
        }
    }
})
```

A call to logger.log would call the original this-ist function instead of the overriding function provided.

        