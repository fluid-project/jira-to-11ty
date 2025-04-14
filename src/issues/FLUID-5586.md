---json
{
  "title": "FLUID-5586",
  "summary": "Implementation of \"changePath\" records is incomplete",
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
  "date": "2015-01-13T16:12:21.603-0500",
  "updated": "2017-02-27T15:49:13.131-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:21:40.166-0400",
      "body": "Astonishingly this is still unresolved in Infusion 2.0.0-beta.1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2015-09-29T19:21:54.272-0400",
      "body": "In case others are confused, here is an example of a change path record that will fail due to the fact that we are doing a falsey check on the changePath attribute [deep within the guts of the IoC system](https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/FluidIoC.js#L1495).\n\n```java\nfluid.defaults(\"cat.hugo\", {\r\n                gradeNames: \"fluid.modelComponent\",\r\n\r\n                model: {},\r\n\r\n                listeners: {\r\n                    onCreate: [\r\n                        {\r\n                            changePath: \"\",\r\n                            value: {\r\n                                meow: \"raow!\"\r\n                            }\r\n                        }\r\n                    ]\r\n                }\r\n            });\n```\n\nIs the best workaround, currently, to use a listener specification like this instead?\n\n```java\n{\r\n        func: \"{that}.applier.change\"\r\n        args: [...]\r\n     }\n```\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-09-30T04:00:42.791-0400",
      "body": "Now I think of it, the best workaround is actually to use a changePath of \\[] - array paths are better on several considerations than strings, since future versions of the framework will be able to easily support IoC references in place of segments, and this also sidesteps annoyances such as escaping issues - as well as being just a tiny bit faster.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2015-09-30T10:54:02.523-0400",
      "body": "I'm probably just confused, but I modified my test like this:\n\n{\\\nchangePath: \\[],\\\nvalue: {\\\nmeow: \"raow!\"\\\n}\\\n}\n\nand I get an error inside fluid.parseValidModelReference() where it appears to assume that the changePath value will always be a string.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-03-01T13:59:01.381-0500",
      "body": "In the scheme implemented in pull request <https://github.com/fluid-project/infusion/pull/671> , this is now supported by means of expressions like:\n\n```java\nchangePath: {\r\n    segs: [],\r\n},\r\nvalue: { meow: \"raow!\" }\n```\n\n(every place a model path is accepted in the framework now also accepts a structure holding {segs: \\<array>, context: \\<optional component path>} )\n"
    }
  ]
}
---
Our records, acceptable currently as invokers and listener records, which hold the fields "changePath" and "value" to declaratively encode changes, are incompletely implemented.

i) They don't support the "type" field for changes which means that changes of type DELETE can't be encoded\
ii) They don't support a "changePath" of "" (or other falsy values such as 0) which implies that changes at model root can't be encoded

        