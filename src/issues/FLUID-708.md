---json
{
  "title": "FLUID-708",
  "summary": "Determine left sidebar navigation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-06-04T10:54:09.000-0400",
  "updated": "2011-03-17T15:06:05.654-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-06-06T12:33:11.000-0400",
      "body": "Update June 11: This proposed navigation structure has been replaced.\n\nProposed new navigation scheme for left sidebar:\n\n1\\) Project\n\n* project description\n* aims and goals\n  *\n    * initiatives (OSDPL, VULab, UX Toolkit, etc)\n* disciplines involved (UCD etc)\n* Questions / Help&#x20;\n  *\n    * technical\n    * design\n* Contact us\n\n2\\) Community\n\n* Current work (Who's doing what)\n* How to Contribute\n  *\n    * list of tasks\n* Discussions\n  *\n    * meetings\n    * mailing lists\n    * IRC\n    * IM\n* Directory (Who's who - Who can I ask questions of...) (TASK)\n\n3\\) Knowledge Base\n\n* FAQ (<https://fluidproject.atlassian.net/browse/FLUID-709#icft=FLUID-709>)\n* design\n* implementation / development\n* UX\n* security\n* project coordination\n  *\n    * Road maps etc.\n\n4\\) Fluid Components\n\n* download\n* source code\n* designs\n* documentation\n  *\n    * user manual\n    * release notes\n* online demos (demos, daily builds) (<https://fluidproject.atlassian.net/browse/FLUID-710#icft=FLUID-710>)\n* current components\n* future components\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-06-11T12:12:30.000-0400",
      "body": "Through a series of emails, the following 3 Primary audiences are going to be targeted (listed in priority):\n\n1\\. lurker (someone new who wishes to learn more about the project)\\\n2\\. contributor (someone who wants to help with the project)\\\n3\\. implementor (someone who wants to use Fluid in their own software)\n\nThe navigation will be restructured to meet the needs of the above 3 parties. The following is the proposal:\n\nFluid Components\n\n* downloads and demos\n* release notes (release pages for various releases, should also\\\n  contain link to manual)\n* source code (links to SVN, and different bundles)\n* designs (design patterns, designs for current and upcoming components)\n* user manual (how to install, run, test, integrate Fluid components)\n\nKnowledge Base (this category seems a bit ambiguous now – see question above)\n\n* user experience (other wiki pages related to design and UX)\n* development (other wiki pages related to development)\n\nCommunity\n\n* meetings\n* current work (will include link to planned future work)\n* how to contribute\n* disciplines (may be moved into Knowledge Base - UX/Design section)\n* discussions (points to Mailing lists, Breeze, IRC, IM, also Meetings)\n* Contributor directory (hopefully some content to be automatically\\\n  pulled from Wiki profile pages)\n\nAbout Fluid\n\n* aims and goals\n* contact us\n"
    }
  ]
}
---
Review the left sidebar navigation and rearchitect to be more relevant.

* improve categorization
* reorganize navigation to be more relevant
* What should be prominent? What shouldn't?

        