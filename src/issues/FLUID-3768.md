---json
{
  "title": "FLUID-3768",
  "summary": "Merge policy of \"preserve\" will be inactivated on discovering a merge target value",
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
  "date": "2010-09-30T03:35:27.514-0400",
  "updated": "2022-07-07T07:23:39.193-0400",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-09-30T04:11:52.825-0400",
      "body": "Fixed at revision 10078\n"
    }
  ]
}
---
If on traversing any "target" object during a merge process any kind of existing value is discovered, a prescribed merge policy of "merge" targetted at that path will be inactivated, and the default merge process involving a recursive object copy will proceed. This is probably not what a user would want. This was exposed by examining the "Repeatable" component in CollectionSpace, which includes the following section in defaults:

```java
fluid.defaults("cspace.repeatable", {
    applier: null, 
    model: null,
```

Even supplying a mergePolicy of "preserve" did not cause these properties to survive, since the "null" value triggered the condition described above. I don't personally enjoy this style of placeholder values but don't see why it shouldn't be supported. Certainly, if the user specifies a "preserve" policy, they would be "surprised" to find it conditionally fail depending on the existing state of the target object. After this issue is resolved, "preserve" will operate a "last value wins" policy - the last value targetted at a path in a stack of merge operations will unconditionally obliterate any others, with no actual "merge" semantics operating over its subobjects possible. This is most likely what a reasonable user will intend.

        