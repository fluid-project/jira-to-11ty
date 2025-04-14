---json
{
  "title": "FLUID-5817",
  "summary": "Refactor fluid.prefs.create so that it takes the form of a grade",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2015-11-12T12:45:10.429-0500",
  "updated": "2024-07-23T10:44:05.734-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5841/",
      "key": "FLUID-5841"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T10:44:05.552-0400",
      "body": "`fluid.prefs.create` has been replaced with `fluid.uiOptions`\n"
    }
  ]
}
---
The body of fluid.prefs.create, our convenience "one stop shop" for building and instantiating a prefs editor, takes the form of some literal code:

```java
fluid.prefs.create = function (container, options) {
        options = options || {};
        var builder = fluid.prefs.builder(options.build);
        return fluid.invokeGlobalFunction(builder.options.assembledPrefsEditorGrade, [container, options.prefsEditor]);
    };
```

This makes it hard for people to build on the work of others in producing preferences editors. Our best practice is to package all artefacts as grades so that they can be freely extended and reused by others. This code dates from a time when the framework was less capable than it is today with respect to dynamic grades. As soon as we "break the chain" of using grades and fall back to plain functions, everyone who follows has to fall into the same trap - see issue at <https://github.com/fluid-project/infusion/pull/629/files#r44682586> and discussion in IRC \
at <https://botbot.me/freenode/fluid-work/2015-11-12/?msg=53997194&page=2>

        