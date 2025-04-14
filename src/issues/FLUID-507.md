---json
{
  "title": "FLUID-507",
  "summary": "OSDPL: Finalize Design Pattern submission form & node display",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-04-15T14:28:34.000-0400",
  "updated": "2008-08-21T12:08:54.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-411/",
      "key": "FLUID-411"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1093/",
      "key": "FLUID-1093",
      "summary": "OSDPL Governance: Create initial iteration of \"How to Create a Good Design Pattern\" [Shared JH]"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-507/node-uidp.tpl.php",
      "filename": "node-uidp.tpl.php"
    }
  ],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2008-04-29T16:53:17.000-0400",
      "body": "futuretask\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-08-21T12:08:54.000-0400",
      "body": "Covered by other issues.\n"
    }
  ]
}
---
Finalize the contents of the Design Pattern submission form & display of nodes. This includes determining data elements to include, setting up the form to allow them to be entered, entering any necessary help text and creating a node-uidp.tpl.php file (example attached) to style the display of the entered nodes. We will also want to ensure that any fields that are empty are not displayed on pattern pages (e.g. synonyms and examples and any other field should not appear when there is no content in it: <http://osdpl.fluidproject.org/content/sortable-table>), which I believe can be done with Contemplate or in the node-uidp.tpl.php file. For some reason the Examples group and the Example Image Description(s) and Synonyms fields seem to show up even when empty. This is very perplexing since Example Image Descriptions(s) is exactly the same as Example Image Sources(s), which does not show up.

See also: <http://wiki.fluidproject.org/download/attachments/1706231/PatternLibraryDataElementInventory_ver02.xls> for a list of data elements used in other pattern libraries.&#x20;

        