---json
{
  "title": "FLUID-4050",
  "summary": "Renderer does not escape UIBound values correctly (esp character \" - double quote)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Antranig Basman",
  "date": "2011-02-02T18:44:37.051-0500",
  "updated": "2011-02-04T12:27:31.479-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-02-04T04:07:39.567-0500",
      "body": "Fixed at git revision 97baeb6 - fix handles cases of input type = text, radio, free attribute decorator and link targets - this **should** be exhaustive but it is possible that a case has been missed.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-04T12:27:31.468-0500",
      "body": "Tested in collectionspace - double quotes are now encoded correctly.&#x20;\n"
    }
  ]
}
---
UIBound values output by the renderer are not XMLEncoded properly. In most cases the browser can "auto-repair" the attribute value but for the case of double quote " it can only assume that the attribute value has terminated. This is a serious data integrity risk.

        