---json
{
  "title": "ENGAGE-188",
  "summary": "Engage nightly build is not working",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-11-10T17:11:30.000-0500",
  "updated": "2009-11-12T08:43:54.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The build happens through an ant script that calls out to maven in order to build the war. When the war is being created on the server, maven seems to be trying to copy things into '/' which it can't do since it's not run as root and of course shouldn't do. It then tries to find files relative to root which causes a 'no such file or directory' error. You can see the full logs here: <http://titan.atrc.utoronto.ca:4040/continuum/servlet/continuum/target/ProjectBuild.vm?view=ProjectBuild&buildId=6564&id=56>

Interestingly, this hasn't been a problem before Saturday. The only thing we can think of that happened on Saturday was that the maven repository was removed and rebuilt.

        