---json
{
  "title": "FLUID-5587",
  "summary": "Framework should support namespaced options distributions rather than an array",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-01-14T16:21:37.807-0500",
  "updated": "2024-07-08T06:40:54.596-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5621/",
      "key": "FLUID-5621"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5824/",
      "key": "FLUID-5824"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-01-14T16:26:40.615-0500",
      "body": "This issue was \"re-realised\" whilst trying to repair Kettle's model for contributing error handlers to dataSources nested within a server. The \"ancient\" system simply coupled every dataSource handler to a request's onError method, via an entire component named \"errback\". This at least was targetable as a whole via IoCSS. However, moving to a more correct design supplied the linkage in a distributeOptions block held in the server. However, it became realised that **THIS** distribution itself couldn't be targetted for removal - the semantics for multiple sources of advice fighting over the same target are unclear, and in any case, accumulative - one could only reliably arrange to add further grades to the target. We need a reliable way for a derived server to entirely eliminate or completely replace the distribution which arrives from the base server grade.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T15:26:06.311-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
Part of our faulty thinking resulting in the "demands block model" resulted in us creating a system which was not "algebraically closed", in that some authors could perform actions which others could not undo. That is, since demands blocks did not have their own names, they could not be identified and targetted for overriding or removal. Whilst we have now substantially improved on this situation with the new "distributeOptions" system, we have committed a further instance of the same mistake - since the elements in the distributeOptions block are held in an array, the only possible accumulation model is for subgrades to append their elements onto supergrades' distributions. The only possible way to eliminate the effect of an options distribution is to somehow avoid including the grade in which it appears.\
We need to support (and eventually ONLY support), named elements for distributeOptions elements just as we do for events, namespaced listeners, etc. such that higher-order authors can easily target and replace distributions in subgrades. This also even opens up the use-case of distributions targetting other distributions - finally delivering on an absolutely algebraically closed "advice" system.

We will support arrays alongside hashes in the meantime as we migrate existing code over to the named system.

        