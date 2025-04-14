---json
{
  "title": "FLUID-6539",
  "summary": "Investigate implementing switch components using a button element",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Ned Zimmerman",
  "reporter": "Justin Obara",
  "date": "2020-08-04T10:39:34.755-0400",
  "updated": "2020-10-27T16:46:21.393-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6563/",
      "key": "FLUID-6563"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6565/",
      "key": "FLUID-6565"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-08-04T11:05:19.737-0400",
      "body": "Toggle button implementation from Pinecone: <https://pinecone.netlify.app/components/detail/button--toggle-button.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-10-27T09:12:58.345-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1016> ) into the project repo at daeff32bd67a593b4f5819b314752d970c1e6cc0\n"
    }
  ]
}
---
Currently the switch component markup has been implemented using a combination of \<div> and \<span> elements. It would be more semantic to use a \<button> element instead. This would provide native support for things like disabling, and input handling. 

See: <https://www.smashingmagazine.com/2017/09/building-inclusive-toggle-buttons/>

Switches are used for boolean adjusters in the prefs framework adjusters. (e.g. table of contents).

        