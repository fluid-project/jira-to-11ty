---json
{
  "title": "KETTLE-29",
  "summary": "HTTP request fixtures for use in Kettle tests can't accept dynamic configuration",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-12-18T11:25:06.390-0500",
  "updated": "2014-12-18T11:25:06.390-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Other than a single variable parameter, "model" provided as the single argument to the "send" method, the Kettle HTTP request fixtures do not accept any dynamic configuration. This makes it impossible to write fixtures where the details of one request depend on values returned from another. For example, when testing the OAuth integration for the GPII cloud-based flow manager, we would like to write a fixture like:

authorizeRequest2: {\
type: "kettle.test.request.httpCookie",\
options: {\
requestOptions: {\
path: "{loginRequest}.nativeResponse.headers.location"\
}\
}

this precise form is not possible since the loginRequest has not resolved by the time this configuration has evaluated - therefore we would need to supply it as part of the arguments to "send". Also the nesting of "requestOptions" within "options" is constantly annoying for authors of fixtures.

        