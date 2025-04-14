---json
{
  "title": "FLUID-4299",
  "summary": "The cookieStore should set the default domain, to work in an iframe",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-06-23T12:42:57.996-0400",
  "updated": "2011-06-24T17:54:08.342-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-06-23T12:43:17.311-0400",
      "body": "Bug Parade Infusion&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-23T13:18:45.593-0400",
      "body": "Sent a pull-request <https://github.com/fluid-project/infusion/pull/83>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-24T17:54:02.430-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/83> merged into project repo at 322771708509517d3607f8c7036eb4edd1855df1\n"
    }
  ]
}
---
It appears that since there was no default path/domain set in the cookie, it would not work properly when set in an iframe. Additionally, an integrator should have the ability to set the expiry of the cookie.

        