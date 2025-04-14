---json
{
  "title": "FLUID-3684",
  "summary": "Template parser uses Ye Olde Time Lineare Time cutpoint matching algorithm, leading to very poor performance with long cutpoints lists",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2010-08-10T02:44:09.957-0400",
  "updated": "2014-03-03T13:42:36.429-0500",
  "versions": [
    "1.2",
    "1.3.1"
  ],
  "fixVersions": [
    "1.3"
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
      "date": "2010-08-10T03:12:06.259-0400",
      "body": "Fixed at revision 9987 - Accelerated cutpoint matching for cutpoints that consist of a single class. With this implementation, parsing of test template derived from CollectionSpace \"object.html\" with 175 class-based cutpoints is nearly 10 times faster - parse time reduced from around 500ms to around 70ms. Should people be found using many id-based selectors these could be accelerated too.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-03T16:49:20.064-0500",
      "body": "Changed the \"Affect Version\" to 1.3.1.\n"
    }
  ]
}
---
The "cutpoint system" for the renderer was never really designed to be used, and as a result was implemented with a cutpoint matching algorithm with very poor time complexity. Now that in CollectionSpace we have acquired a template with 175 cutpoints, this is degrading performance significantly. See <http://issues.collectionspace.org/browse/CSPACE-2569> and <http://wiki.collectionspace.org/display/collectionspace/Performance+analysis+from+the+Client-side>

        