---json
{
  "title": "FLUID-5132",
  "summary": "IoC testing framework does not accept IoC configuration for test fixtures",
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
  "date": "2013-09-12T04:16:02.580-0400",
  "updated": "2013-10-23T15:45:44.185-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System",
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-09-20T08:38:21.282-0400",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/403> ) merged into the project repo at  2eb984ef7a7973fb8b74c62674d9026145c5fbc5\n"
    }
  ]
}
---
The IoC testing framework's main driver, the function fluid.test.runTests, only accepts a list of bare gradeNames as its specification of the test environments to be run. For example, this driver runs three test environments -&#x20;

fluid.test.runTests(\[\
"fluid.tests.myTestTree",\
"fluid.tests.asyncTestTree",\
"fluid.tests.initTree"\
]);

This inhibits reuse of testing environments, where these only differ in the content of configuration - KASPAR's current integration testing for GPII is required to illegally fabricate fresh grades in a loop in order to issue different integration testing configurations. We should support a syntax that essentially takes the form of free subcomponents - for example,

fluid.test.runTests(\[ {\
type: "fluid.myTestTree",\
options: {\
myValue: 3\
}\
});

        