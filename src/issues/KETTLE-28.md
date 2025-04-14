---json
{
  "title": "KETTLE-28",
  "summary": "HTTP request fixtures for use in Kettle tests do not encode URI components properly",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-12-18T06:51:11.850-0500",
  "updated": "2015-08-26T20:45:49.891-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-26T20:45:49.889-0400",
      "body": "Merged into trunk at revision e79bb81196df68c97eaa9f96c485a4321b69af75 (Dec 21 2014)\n"
    }
  ]
}
---
The Kettle testing framework includes components such as kettle.test.request.http for forming test fixtures against Kettle servers. These accept a "path" and "termMap" configuration which is used to build the URL to generate the HTTP request. Incorrectly, no URLencoding is applied to material which is interpolated into these URLs. Configuration for such a component looks as follows:

type: "kettle.test.request.http",\
options: {\
requestOptions: {\
port: "{configuration}.options.port",\
path: "/user/%userToken/login"\
},\
termMap: {\
userToken: gpii.tests.flowManager.getUserToken.userToken\
}\
}

We have a utility kettle.dataSource.urlResolver.resolve which is suitable - typically this is bound as an invoker of the urlResolver component. We should also take the opportunity to fix this implementation so that this encoding is applied by default (rather than via the strange "encodeURIComponent:" prefix) - there is no valid reason it should be omitted since these are URLs drawing their material from standard model material.

        