---json
{
  "title": "FLUID-5634",
  "summary": "\"*\" character has been erased in workflow publishing infusion docs site from markdown",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Antranig Basman",
  "date": "2015-04-19T12:58:59.062-0400",
  "updated": "2022-03-14T12:33:57.884-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-04-20T09:53:20.488-0400",
      "body": "I was able to find a form to render this which keeps both \"marked\" and github happy by using the entity reference \\&#42; to represent the \"\\*\" character. Note that the HTML5 entity \\&ast; is not supported - destroyed at least by github\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-03-14T12:33:57.784-0400",
      "body": "This appears to have been addressed by using the HTML entity for \\*\n"
    }
  ]
}
---
In the ChangeApplierAPI.md page, several of the code segments contain a "**" character - this is still visible in the github-rendered markdown at&#x20;****<https://github.com/fluid-project/infusion-docs/blob/master/src/documents/ChangeApplierAPI.md>****&#x20;- e.g. "{otherComponent}.model.**"

However, in the published site, these characters have been destroyed - <http://docs.fluidproject.org/infusion/development/ChangeApplierAPI.html>

Inspecting the DOM it appears that these have undergone some further round of interpretation which has mistakenly interpreted them as directives for emphasis \<em> (even though they do not pair up properly)

We need to check whatever markdown processor we are using in the publishing chain and ensure that it uses processing rules more similar to github's

        