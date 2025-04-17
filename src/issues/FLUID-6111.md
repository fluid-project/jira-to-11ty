---json
{
  "title": "FLUID-6111",
  "summary": "\"length\" cannot be added as a model property in Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Dinuka Desilva",
  "date": "2017-01-11T17:35:45.326-0500",
  "updated": "2024-07-22T09:18:33.947-0400",
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
      "author": "Justin Obara",
      "date": "2017-01-13T07:40:14.645-0500",
      "body": "Antranig Basman is length a reserved word? Also is there a list of reserved words for infusion?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-13T07:41:02.668-0500",
      "body": "Dinuka Desilva which version of Infusion did you find this issue with? Was it with 2.0, master, dev version, etc.?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-01-13T09:26:18.495-0500",
      "body": "Thanks, Dinuka Desilva - this is a very interesting bug. My suspicion is that the following code very old-fashioned code in fluid.makeArray is somehow responsible - <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/Fluid.js#L439> - although I can't imagine an obvious route for this at present. This makes a rather over-generous test for an object qualifying as an array. This is a tough issue in JavaScript since there are numerous sources of \"pseudoArrays\" - for example, jQuery objects, or function arguments. However, we should be able to fix this up, subject to understanding how the bug works. A more sensible test would exclude anything which passed the fluid.isPlainObject() test from qualifying as a pseudoarray.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-01-13T09:27:39.213-0500",
      "body": "Well, now I look at the bug in more detail, I see that the bug is most likely nothing to do with \"length\" - isn't it the case that the entirety of the default values have been ignored?\n"
    },
    {
      "author": "Dinuka Desilva",
      "date": "2017-01-13T09:47:58.400-0500",
      "body": "Exactly @Basman ....... after adding length as a property all the other properties are also gone...... i tested this with the most latest and an old version too (before 2.0)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-01-16T13:57:55.916-0500",
      "body": "Thanks for this interesting report, Dinuka Desilva - a pull request fix is here: <https://github.com/fluid-project/infusion/pull/798>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-02-09T08:59:34.558-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/798> has been merged into the project repo master branch at b9e1012ad2ec255f7d18f02f2cc3d422f6960191\n"
    }
  ]
}
---
For an example, if I consider the following component

```javascript
fluid.defaults("fluid.courselist", {
        gradeNames: ["fluid.viewComponent"],
        model: {
            name: "ABCD",
            length: 14
        }
    });
```

When I create an instance and print the model, it has ignored the default model values.

```javascript
JSON.stringify(fluid.courselist(".description", {model: {duration: 34}}).model, null, 2)
```

```javascript
{
  "duration": 34
}
```

        