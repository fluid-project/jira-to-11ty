---json
{
  "title": "FLUID-3728",
  "summary": "Improve accessibility of the demo portal infrastructure",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2010-09-09T13:48:33.837-0400",
  "updated": "2014-04-02T15:29:11.053-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3321/",
      "key": "FLUID-3321",
      "summary": "All demos that use arrow key navigation should include the application role to enable screen readers to swtich cursor modes automatically"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-09-09T13:49:00.603-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:43:09.401-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-10-13T12:33:35.546-0400",
      "body": "This task turns out to be more involved that simply adding an application role to the tabpanels. There are several deficiencies in the ARIA markup of the page, as well as other issues:\n\n* The \"Code View / Plain Text\" buttons have no ARIA markup. Semantically, they function as radio buttons and could be marked as such. They are not currently keyboard-accessible as a single set of radio buttons, though they are keyboard accessible as regular links.\n* The  \"Code View / Plain Text\" buttons are currently not actually inside the tab panels (despite the fact that they appear to be). There is a single set of buttons which must work with whichever tab currently happens to be active. This results in some messy code to figure out which tab is active. This could probably be simplified by actually having one set of radio buttons per tab panel, contained within the panel.\n* The container of the right side of the page should have a role of application\n* With the radio buttons inside the tab panel, the panel itself should have a role of application, and the containers of the actual text themselves should have a role of document\n* The various demo 'assets' (i.e. js, html, css files) are loaded separately and independently, requiring some messy code to determine when all of the files are finished loading so that setup can be completed. This would be vastly simplified with fluid.fetchResources() with a single callback.\n* There are many hard-coded selectors scattered throughout the code. A DOM binder would make the code easier to work with.\n* Event handling code is not well centralized, leading to duplication\n\nRecommended changes:\n\n* Load the assets using fluid.fetchResources() (I've implemented this in my local copy, works fine).\n* Restructure the mark-up so that the \"Code View / Plain Text\" buttons are contained within the tab panels\n* Refactor the code to take advantages of more framework features, centralize event handlers, etc.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-11-03T12:18:46.071-0400",
      "body": "Anastasia has created a branch for these changes in SVN, which is located at <http://source.fluidproject.org/svn/fluid/infusion/branches/FLUID-3728/>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-11-03T12:19:32.384-0400",
      "body": "Anastasia posted an update on her work to fluid-work. Here's a transcript:\n\n\"I'm not finished yet, but here are some highlights of what I've got implemented so far:\n\n1\\) The code is updated to make much more use of the framework, including IoC and the new renderer component initializer.\\\n2\\) The code now loads the HTML for the demo pages from a template, which reduces a **great** deal of duplication, as well as removing lots of hard-coded markup from the JS.\\\n3\\) The file-type tabs on the right side of each demo now have proper ARIA and are keyboard accessible (using our plugin).\n\n* there are tests for the ARIA\\\n  4\\) I fixed a CSS bug, so that now the line numbers are actually visible.\n\nNOTE: The code changes are currently only applied to the following demos:\n\n* keyboard accessibility plugin\n* grid reorderer\n* progress\n\nAlso NOTE: I haven't yet fixed up the Code View/Plain View issue that I raised in another email thread, so you'll see both views in the panel, and the links will do nothing.\n\nFinal NOTE: The actual keyboard accessibility plugin in this branch is completely broken, so don't expect much 🙂\"\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-03T12:43:39.584-0400",
      "body": "I've pretty much finished implementing the changes to the demo portal to add keyboard accessibility of right side of the demo pages, ARIA, etc. It's a complete rewrite of the JavaScript that creates the code tabs on the right side of the demo pages. I'd appreciate a code review before I merge this back into trunk.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-04T09:48:05.098-0500",
      "body": "This will be carried out as part of a larger portal redesign.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:29:05.239-0400",
      "body": "We will be removing the demo portal altogether.\n"
    }
  ]
}
---
The 'source' tabs in the demo portal should have the aria application role set.

The contents of the tabs should have the aria document role set.

        