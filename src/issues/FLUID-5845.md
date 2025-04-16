---json
{
  "title": "FLUID-5845",
  "summary": "Binary operation with || should always return either boolean true or false",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2016-01-22T05:41:00.381-0500",
  "updated": "2016-07-08T09:06:22.589-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-01-22T06:16:55.078-0500",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/663>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-01-24T10:35:26.739-0500",
      "body": "Can you explain why this should be the behaviour of the operator, when this doesn't agree with its behaviour in JavaScript?\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-01-25T06:54:12.098-0500",
      "body": "<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators>\n\nWell - my original reason for changing it was that with a logical operator like that, one would expect the output to be boolean. I've looked into it a bit more, and it seems there is some amount of sense (or at least system) in what javascript returns (especially for the || operator). But I still dont find it particularly logic, especially in the case of \"&&\", which \"Returns expr1 if it can be converted to true; otherwise, returns expr2\", where \"it\" refers to the entire logical and structure, as far as I can tell.\n\nI looked at a (very) few other programming languages, and it seems clojure more or less agrees with javascript, whereas PHP and python dont.&#x20;\n\nSo I guess, in some ways it's a question of whether we want our operators (and generally functions) to mimic those of javascript (in which case I'd argue <https://fluidproject.atlassian.net/browse/FLUID-5669#icft=FLUID-5669> perhaps shouldn't be 'fixed' but instead replaced with a different \"similar\" function to be used), or whether we want to implement them in the way that seems most useful and logical (in which case, we might very well scrap my <https://fluidproject.atlassian.net/browse/FLUID-5845#icft=FLUID-5845> and keep <https://fluidproject.atlassian.net/browse/FLUID-5669#icft=FLUID-5669> - depending on which extend we deem the behavior of ||/&& logical and useful).&#x20;\n\nNot sure if I got a good answer, as if we want non-programmers to be able to use model transformations with graphical tools, the most logical and simple interpretation of an operator (and function) seems preferable. But on the other hand, that might confuse/annoy real programmers and make the model transformation documents more verbose.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-01-25T16:39:22.864-0500",
      "body": "Well, my question was mainly motivated at trying to find out what the use case was. The theoretical reasoning in your reply is good, but in practice, our theory is motivated by practice : P That is, what is the \"user story\" behind wanting one behaviour rather than another?\n\nIn terms of dealing with non-programmers, I'm not sure there's much to choose between JS-like and C-like behaviour for the logical operators. The JavaScript behaviour **might** be more useful in cases where you are actually interested in the return value - for example in JavaScript we can use constructions like fluid = fluid || require(\"infusion\") as a result of this behaviour but it's not clear whether this might be relevant in an MT document. So mainly I was interested in what prompted you to file the JIRA in the first place - did you just think it seemed desirable, or did you run into a particular MT document you were working with that might have been simplified with different behaviour?\n\nAs for <https://fluidproject.atlassian.net/browse/FLUID-5669#icft=FLUID-5669>, we do need to fix this because the equality semantics for MT documents need to be consistent with the ones used in model relay. A model relay document will continue to relay changes until the change passes the isSameValue test. We filed <https://fluidproject.atlassian.net/browse/FLUID-5669#icft=FLUID-5669> because Cindy Li specifically ran into a situation where she had to write a workaround because we don't have this behaviour.\n"
    }
  ]
}
---
There currently is an issue with the binaryOps transformation with "||" as operator, which causes it to not always return either logical true or false, but instead the first (left) parameter value, in case the full binary operation evaluates to true.

This is illustrated by the below:

Given the transform definition:

```java
"transform": {
            "type": "fluid.transforms.binaryOp",
            "operator": "||",
            "leftPath": "leftInput",
            "rightpath": "rightInput"
        }
```

We get the following result when inputting a model with the following leftInput/rightInput pairs:

(true, false) -> true (correct)\
(false, true) -> true (correct)\
("false", true) -> "false" (wrong, should be true)\
("mystring", false) -> "mystring" (wrong, should be true)

        