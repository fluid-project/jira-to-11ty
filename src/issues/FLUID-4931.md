---json
{
  "title": "FLUID-4931",
  "summary": "Extend assertNode to handle hasClass, for testing if a class exists on an node",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2013-03-11T17:45:30.658-0400",
  "updated": "2021-07-29T01:41:25.697-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-03-12T04:31:21.567-0400",
      "body": "Implementation idea sketch - i) apply makeArray to user's value ii) convert to hash using fluid.arrayToHash, iii)  string.split(\" \") to convert class attribute to array as per <http://stackoverflow.com/questions/9279368/how-to-get-all-css-classes-of-an-element> iv) apply fluid.arrayToHash to that value also v) use jqUnit.assertLeftHand to insist that one hash is a subset of the other\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-03-12T10:24:59.576-0400",
      "body": "I have started working on this. I have a branch in my repo. Here is the link to a diff ( <https://github.com/jobara/infusion/compare/fluid-project:master...FLUID-4931> ). I used jqUnit.assertRightHand instead as I believe we actually want the expected to be a subset of the actual.&#x20;\n"
    }
  ]
}
---
assertNode can compare all classes on a node against an expected value, but doesn't provide a facility for just testing that a single specific class is present on a node. Something like what jQuery's hasClass method provides.

assertNode could be extended to have a hasClass key taking one or more classes to test against.

        