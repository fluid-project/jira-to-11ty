---json
{
  "title": "FLUID-5960",
  "summary": "Publish Dev packages on merge",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-09-16T08:09:05.773-0400",
  "updated": "2016-09-16T13:21:04.407-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure",
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Avtar Gill",
      "date": "2016-09-16T11:07:59.147-0400",
      "body": "A few notes summarizing what Justin and I discussed offline:\n\n* An [account](https://www.npmjs.com/signup) will need to be created for the CI server\n* The CI server should be able to authenticate itself without having to reveal the credentials so being able to use environment variables or having the secrets live in a config file would be ideal\n* The account will need to be given required privileges in order to publish Infusion dev packages\n* If the CI server is compromised someone could use it to publish malicious payloads&#x20;\n* If the publishing process fails it should return non-zero exit codes\n"
    }
  ]
}
---
The CI server should publish a dev package to NPM on a merge that successfully builds and passes tests.

This will make use of the [fluid-publish](https://github.com/fluid-project/fluid-publish) module that we have been using to manually create dev packages.

        