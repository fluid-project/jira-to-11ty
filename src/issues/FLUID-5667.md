---json
{
  "title": "FLUID-5667",
  "summary": "Circularity in material sent for options expansion is not detected",
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
  "date": "2015-05-19T12:18:41.664-0400",
  "updated": "2017-02-27T15:49:14.756-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T15:08:49.254-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e (sub-pull <https://github.com/fluid-project/infusion/pull/604> )\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-5088#icft=FLUID-5088> and <https://fluidproject.atlassian.net/browse/FLUID-4978#icft=FLUID-4978> provide some measure of resistance to circularity during options expansion. However, there's an important case we haven't tackled - if the material to be expanded is ALREADY circular by the time it is referenced from the options material. This arose in the context of the gpii-express project where the following definition of a dynamic subcomponent:

timeoutResponse: {\
createOnEvent: "onNewTimeoutRequest",\
type:          "gpii.express.tests.requestAware.request",\
options: {\
request:  "{arguments}.0",\
response: "{arguments}.1"\
}\
}

referred via "arguments" to the native express request and response objects. This caused a failure through memory exhaustion. In the browser, we get a "call stack exceeded" messages. This should be detected by a dedicated framework pathway which provides a readable diagnostic.

        