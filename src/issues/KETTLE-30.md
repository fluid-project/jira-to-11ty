---json
{
  "title": "KETTLE-30",
  "summary": "Adjust path of Kettle request objects so that they are inline with apps rather than servers",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-12-30T17:05:54.437-0500",
  "updated": "2017-10-17T17:09:14.917-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-10-17T17:09:14.914-0400",
      "body": "This was resolved for the first 1.0.0 release of Kettle\n"
    }
  ]
}
---
The current positioning of instantiated kettle request components makes it awkward to resolve expected material using IoC references. For example, in the GPII's OAuth-enabled cloud-based flow manager, a request handler definition looks as follows:

```java
handle: {
            funcName: "gpii.request.flowManager.onOauth2Settings",
            args: ["{request}", "{that}", "{gpii.flowManager.cloudBased.oauth2}.oauth2DataStore"],
            dynamic: true
        }
```

The resolution onto the "dataStore" is awkward, requiring it to be found via a member reference, whereas the author of the "app" into which this request is mounted would expect to be able to simply use the expression "{dataStore}" as elsewhere in the definition of the app.

This results from the current awkward positioning of request objects as descendents of a member "requests" held on the server, rather than the app - here are the paths of the relevant members of this hierarchy:

```java
"tests.configuration.server.flowManager.oauth2DataStore": { typeName: "gpii.oauth2.inMemoryDataStore"}

"tests.configuration.server.requests.request-5.handler": { typeName: "kettle.requests.request.handler"}
```

Since requests are descended at the level of "server" rather than "flowManager", descendents of flowManager cannot directly be identified. Of course, this problem would be eliminated naturally once we had a resolution for <https://fluidproject.atlassian.net/browse/FLUID-5556#icft=FLUID-5556>.

        