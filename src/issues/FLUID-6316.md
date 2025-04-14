---json
{
  "title": "FLUID-6316",
  "summary": "Update eslint-config-fluid to include fluid-grunt-eslint as a full dependency",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-08-09T10:06:21.488-0400",
  "updated": "2024-07-22T10:35:02.633-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
eslint-config-fluid makes use of fluid-grunt-eslint, but only lists it as a dev dependency.  Depending in their direct and inherited dependencies, packages that use eslint-config-fluid which do not themselves depend on fluid-eslint may see errors like:

```java
> grunt lint
Infusion at path /Users/duhrer/Source/rtf/gpii-testem/node_modules/infusion is at top level 
12:54:01.350:  Registering module gpii-testem from path /Users/duhrer/Source/rtf/gpii-testem/
12:54:01.351:  Registering module infusion from path /Users/duhrer/Source/rtf/gpii-testem/node_modules/infusion/
12:54:01.351:  Registering module infusion from path /Users/duhrer/Source/rtf/gpii-testem/node_modules/infusion
Loading "json-eslint.js" tasks...ERROR
>> Error: Cannot find module 'fluid-eslint'
12:54:01.355:  Registering module gpii-grunt-lint-all from path /Users/duhrer/Source/rtf/gpii-testem/node_modules/gpii-grunt-lint-all
Warning: Task "json-eslint" not found. Use --force to continue.
```

The missing dependency is listed as a full dependency in fluid-grunt-eslint. I am creating a pull to move fluid-grunt-eslint to the main dependencies.

        