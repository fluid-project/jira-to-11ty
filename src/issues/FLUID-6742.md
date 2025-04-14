---json
{
  "title": "FLUID-6742",
  "summary": "Race condition in IoC Testing Framework tests exposed by upgrade to Chrome 103",
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
  "date": "2022-07-01T18:57:20.687-0400",
  "updated": "2024-07-22T10:35:18.135-0400",
  "versions": [
    "4.1"
  ],
  "fixVersions": [
    "4.2"
  ],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2022-07-01T18:58:30.223-0400",
      "body": "The sketch of this had \n\n```java\nmodel: {\r\n        QUnitReady: \"{that}.resources.QUnitReady.parsed\"\r\n    },\r\n    resources: {\r\n        QUnitReady: {\r\n            promiseFunc: \"fluid.identity\",\r\n            promiseArgs: \"{that}.QUnitReady\"\r\n        }\r\n    },\r\n    members: {\r\n        QUnitReady: \"@expand:fluid.promise()\",\r\n    }\n```\n\nbut we would then have to run \"runTests\" in some workflow function that say, operated immediately after concludeComponentObservation. Could be done now, but messy.\n"
    }
  ]
}
---
Recent pull requests have been stalling in GitHub's CI, such as <https://github.com/fluid-project/infusion/pull/1083> for FLUID-6741, which investigation shows have been stalling in particular on "FLUID-5633 strikes back sequence", a particularly ambitious test fixture which races an onCreate component construction against an IoCSS listener registration.

Given that our old version of QUnit includes an inbuild 13ms delay before the test sequence starts, there is no reason to expect the registration should complete before the construction starts.

Whilst we can revert this to the traditional pattern of firing construction as the first sequence element, we can note that now we have FLUID-6148, issues like FLUID-6541 could now be remedied. We could delay onCreate of the environment based on QUnit's readiness via a modellised resource or so. What we would hope to achieve here is that the first sequence element, if it were passive, could ensure that any binding were in place to be able to observe onCreate. However, if it were active, it would be delayed until strictly after onCreate. This would be a nice "nice to have" but destabilising the existing, and diminishing pool of IoC testing framework users seems unattractive.

        