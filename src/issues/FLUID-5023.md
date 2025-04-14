---json
{
  "title": "FLUID-5023",
  "summary": "Adding grade through demands for multiple instances of component treats default model incorrectly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2013-05-22T11:08:11.876-0400",
  "updated": "2014-03-03T11:51:44.729-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-05-22T11:12:45.627-0400",
      "body": "This problem was discovered during the upgrade of the VideoPlayer to the latest Infusion: The Mammals test page instantiates three videoPlayers, and the problem occurred there.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-05-30T17:09:13.445-0400",
      "body": "Merged into project repo at adf8f15415227832386ed3d6d92c8c1678a558c3\n"
    }
  ]
}
---
When a grade is added to a model component using a demands block and more than one instance of that component are created, the instances end up using the actual default model: modifications of one of the components model, using its applier, will modify the other component's model and the defaults for  the component.

Test case:\
<https://github.com/acheetham/infusion/blob/FLUID-5023/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2438-L2476>

Notes on the test case:\
1\) If you comment out the gradeNames in the demands block, the tests pass.\
2\) If you add the grade through the defaults instead of the demands, the tests pass.

        