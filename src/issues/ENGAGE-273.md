---json
{
  "title": "ENGAGE-273",
  "summary": "update engage-core components to use the renderer utility functions",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2010-01-21T17:59:21.000-0500",
  "updated": "2017-12-22T09:44:30.704-0500",
  "versions": [
    "0.3b",
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2010-02-24T14:10:11.000-0500",
      "body": "The following engage-core components are not updated yet:\\\nfluid.engage.artifactCollectView (doesn't render anything rather uses jquery to manipulate DOM)\\\nfluid.engage.codeEntry (doesn't render anything rather uses jquery to manipulate DOM)\\\nfluid.engage.home ( only has this : \\\nmyCollectionLink.attr(\"href\", myCollectionURL + \"?user=\" + fluid.engage.user.currentUser().\\_id);\\\nnot sure renderer is needed there just for 1 url rewrite)\\\nfluid.engage.myCollection\\\nfluid.engage.navigationBar (in localizeButtons function)\\\nfluid.navigationList needs an update that would implement it with dehydrated tree.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:30.703-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
update engage-core components to use the renderer utility functions

This will help reduce the common code across components

        