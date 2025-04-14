---json
{
  "title": "FLUID-6435",
  "summary": "TextNodeParser fails to iterate over node array in IE11",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2019-11-25T18:14:39.658-0500",
  "updated": "2019-11-26T08:57:38.011-0500",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Text To Speech"
  ],
  "environment": "Internet Explorer 11\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-11-26T08:57:31.075-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/971> ) into the project repo at 4a68b010061c04b3ecc53fc701b2e0f80a18ef5c\n"
    }
  ]
}
---
The new TextNodeParser implementation has a faulty iteration over markup on IE11 which causes the following failure:

```java
Source:  TypeError: Object doesn't support property or method 'forEach'
   at fluid.textNodeParser.parse (http://localhost/source/gits/infusion-master/src/framework/core/js/TextNodeParser.js:126:13)
   at invokeInvoker (http://localhost/source/gits/infusion-master/src/framework/core/js/FluidIoC.js:1781:17)
   at Anonymous function (http://localhost/source/gits/infusion-master/tests/framework-tests/core/js/TextNodeParserTests.js:200:13)
```

It looks like the DOM's "NodeList" type on IE11 is not actually an Array and so this method from Array.prototype is missing.

As well as a failure in TextNodeParser's own tests, this causes widespread failures in other components which consume it, e.g. Orator, SyllabificationEnactor, etc.

        