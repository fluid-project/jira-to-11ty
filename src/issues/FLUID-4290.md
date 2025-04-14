---json
{
  "title": "FLUID-4290",
  "summary": "IoC system corrupts the instantiator stack in cases where createOnEvent is used from root component ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-06-15T12:52:42.084-0400",
  "updated": "2011-06-27T11:20:20.746-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-06-15T12:54:56.942-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-20T16:08:50.457-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/77>\n\nWe are waiting for tests before putting the pull request into the repo.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-27T11:20:20.740-0400",
      "body": "Merged into project repo at 417e46b79a0d7879e709d5c9fc725010dd186c67\n"
    }
  ]
}
---
The code at <https://github.com/jobara/infusion/blob/b3edd48025a7b02981cc97fbec1eda61ab15becb/src/webapp/components/uiOptions/js/FatPanelUIOptions.js>  will fail, with the following message:

ASSERTION FAILED: Error in initDependent: user instantiator supplied with id 11 which differs from that for currently active instantiation with id 13 while instantiating dependent component with name "markupRenderer" with record Object { type="fluid.renderIframe", container="{fatPanelUIOPtionsImp}.dom.iframe", options={...}} as child of Object { typeName="fluid.fatPanelUIOPtionsImp", id=6, more...}

This looks like it is caused by improper nesting of instantiator use within initDependents

        