---json
{
  "title": "FLUID-5614",
  "summary": "Options merging process is faulty in the case of \"double deep trees\"",
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
  "date": "2015-04-05T15:49:09.664-0400",
  "updated": "2024-07-22T10:35:28.126-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6148/",
      "key": "FLUID-6148",
      "summary": "Implement \"potentia II\" constituting aligned, transactional records of author's creational intent"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5594/",
      "key": "FLUID-5594"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-05-22T13:49:38.550-0400",
      "body": "It appears that this bug is more basic and threatening than was first thought - it seems capable of corrupting even plain options definitions that appear along two different paths through \"deep trees\" - see discussion in IRC at <https://botbot.me/freenode/fluid-work/2015-05-22/?msg=39911542&page=1>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-01-29T16:49:23.675-0500",
      "body": "A use case of a failure with broadcasting \"deep trees\" options: <https://github.com/cindyli/universal/tree/GPII-1521-distributeOptions>\n\nThe distributeOptions target in question: <https://github.com/cindyli/universal/blob/GPII-1521-distributeOptions/gpii/node_modules/preferencesServer/src/preferencesServer.js#L105>\n\nTo produce the failure:\\\n1\\. Use the new universal with node 4.2.1\\\n2\\. Start GPII with the config file \"preferencesServer.development.all.local\"\n\n```java\nNODE_ENV=preferencesServer.development.all.local node gpii.js\n```\n\n3\\. This error is thrown:\n\n```java\nError in invoker record: could not resolve members func, funcName or method to a function implementation - got undefined from {\r\n    \"func\": \"{dataStore}.findAuthorizedClientsByUserId\",\r\n    \"funcName\": undefined,\r\n    \"listener\": undefined,\r\n    \"this\": undefined,\r\n    \"method\": undefined,\r\n    \"componentSource\": \"gpii.oauth2.authorizationService\"\r\n}\n```\n\nThe error was due to \"inMemoryDataStore\" that's constructed at preferencesServer.js, line 96 is not distributed to the target.\n\nCurrently, switching the target to use line 106 fixes the issue.\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> work kicked up the observation that our options merging implementation is faulty when grades are merged containing multiple representations of "deep trees" - because our support for mergePolicies cannot see into the "components" area and we do not store their contents in an appropriate way when merging.

For example, in the case where we have

```java
fluid.defaults("gradeA", {
    components: {
        sub: {
            gradeNames: "gradeC"
         }
    }
```

and&#x20;

```java
fluid.defaults("gradeB", {
    gradeNames: "gradeA",
    components: {
        sub: {
            gradeNames: "gradeD"
         }
    }
}
```

we then end up with the subcomponent grade of "gradeC" eliminated completely from gradeB's tree rather than merging additively as one would expect. This is because we don't have any appropriate representation for the "superposition of deep trees" that would allow the normal grade merging algorithm for "sub" to apply the proper merge policy to its grades when it comes to resolve. This is a pretty serious fault that will end up upsetting someone before long. The workaround is to ensure that we only attempt such "deep" definitions along a single path in the grade hierarchy, which in the end is going to end up excluding some valid designs.

        