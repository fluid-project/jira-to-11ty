---json
{
  "title": "FLUID-5797",
  "summary": "Remove the -dev suffix from Infusion's version number",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2015-10-23T23:16:40.351-0400",
  "updated": "2017-02-27T15:49:19.163-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5789/",
      "key": "FLUID-5789",
      "summary": "Provide a script for publishing dev version to NPM"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-10-26T10:19:05.557-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/646> ) into the project repo at 8dbcd6f75f1e69ee956c9a2c50774d53602627a3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-10-26T10:46:29.405-0400",
      "body": "We should also change the namespace from fluid\\_2\\_0\\_0\\_beta\\_1 to fluid\\_2\\_0\\_0\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-10-27T10:08:52.197-0400",
      "body": "The pull request to change namespace (<https://github.com/fluid-project/infusion/pull/647>) has been merged into the master @ c9d974c3b2a667f963afd0ba90d55fc4e187bc08\n"
    }
  ]
}
---
With the new fluid-publish scripts implemented as part of <https://fluidproject.atlassian.net/browse/FLUID-5789#icft=FLUID-5789>, we now no longer need to specify the "-dev" suffix to our development version number. This will be added automatically by our publish scripts.

Currently, the publish script will add a second "-dev" to the version string.

More discussion is on this pull request:

<https://github.com/fluid-project/fluid-publish/pull/1#discussion_r42398535>

And this mailing list thread:

<http://lists.idrc.ocad.ca/pipermail/fluid-work/2015-October/009802.html>

        