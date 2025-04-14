---json
{
  "title": "FLUID-6226",
  "summary": "Nested usage of fluid.generate results in odd behavior...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-11-17T15:46:38.600-0500",
  "updated": "2024-07-22T09:00:48.102-0400",
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
      "author": "Antranig Basman",
      "date": "2017-11-17T17:40:10.121-0500",
      "body": "Hi - thanks for this report. This is really a documentation issue - we should make clear that fluid.generate will make no attempt to clone its arguments if they are complex structures. There is a function-call form of fluid.generate which is intended for use where there is any intended subtlety in the use of non-primitive values - since, for example, the unilateral choice of fluid.copy() may not be appropriate for all users.\n\nIn your first example, you have supplied distinct objects {} and {} as the successive members of the top-level array, so naturally these remain distinct.\n\nIn your second example, you have misobserved the result, since you have had the array indices the wrong way round in all your tests (including the first comment) - it is in fact grid\\[1]\\[0] which becomes polluted with the result {set: true}, not grid\\[0]\\[1]. So there is no inconsistency of operation, just a poor explanation of the semantic of the function, which we should fix in infusion-docs.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-11-20T03:26:31.477-0500",
      "body": "Thanks for spotting the error, there is indeed no difference between assigning a variable and passing the function call as the second argument to the top fluid.generate call.\n\nI agree that documenting the behaviour is fine for now.  If we come up with more use cases for this, we can talk about adding a \"copy\" flag that defaults to false.\n"
    }
  ]
}
---
While working on a problem that required an array of arrays, I discovered an unexpected behaviour when using fluid.generate in a nested fashion:

```java
var grid = fluid.generate(2, fluid.generate(2, {}));
grid[0][0]= { set: true}; // grid[0][0] AND grid[0][1] are now set!
```

It seems like each "row" is a copy.  If I pass the output the nested fluid.generate call would presumably generate, it works fine:

```java
var grid = fluid.generate(2, [{}, {}]);
grid[0][0]= { set: true};
// grid[0][0] = {set: true}
// grid[0][1] = {}
```

If I assign the output to a function, it also works:

```java
var nested = fluid.generate(2, {});
var grid = fluid.generate(2, nested);
grid[0][0]={set:true}
// grid[0][0] = {set: true}
// grid[0][1] = {}
```

        