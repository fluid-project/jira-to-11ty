---json
{
  "title": "FLUID-5820",
  "summary": "Injected components are not correctly entered into fast scope lookup",
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
  "date": "2015-11-23T13:44:40.385-0500",
  "updated": "2016-01-15T11:59:41.849-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-11-23T14:03:59.227-0500",
      "body": "It turns out that this was caused by the misordering of the following blunt manipulation of the context keys in recordKnownComponent:\n\n```java\nkeys.push(name); // add local name - FLUID-5696\r\n                fluid.remove_if(keys, function (key) {\r\n                    return shadow.contextHash && shadow.contextHash[key] === \"memberName\";\r\n                });\n```\n\nIt turns out that the context scope was only missing in the case that the context name agreed with the remote \"member name\" - but hilariously, and thankfully, this was exactly the case tested by the first attempt to write a test case - there are only so many names in the world, after all.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-01-15T11:59:38.768-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/654> ) into the project repo at 4e1b8c9a64665c67232901d2e57531926ec7247f  and 2f38c09d733925441f0ff2e6636f8886da8af5ea\n"
    }
  ]
}
---
Performance work on invokers and listeners for <https://fluidproject.atlassian.net/browse/FLUID-5796#icft=FLUID-5796>, <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> have introduced a "scope chain object" into the instantiator's records for fast context lookup. This seems to be faulty in the case of an injected component reference:&#x20;

```java
fluid.defaults("gpii.deviceReporterLive", {
    components: {
        solutionsRegistryDataSource: "{flowManager}.solutionsRegistryDataSource"
    },
    invokers: {
        get: {
            funcName: "gpii.deviceReporter.live.get",
            args: ["{arguments}.0", "{deviceReporter}", "{solutionsRegistryDataSource}"]
        }
});
```

In the 3rd invoker argument, the context is returned as `undefined` even though the injected component is in place. It is resolvable via the reference "{that}.solutionsRegistryDataSource" which doesn't use the scope chain.

        