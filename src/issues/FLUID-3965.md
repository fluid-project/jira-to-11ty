---json
{
  "title": "FLUID-3965",
  "summary": "Table of Contents preference has no effect",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-20T12:31:14.888-0500",
  "updated": "2010-12-21T11:40:08.781-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF3.6 on Mac OS 10.6\\\nFF3.6 on Win 7\\\nFF4 on Mac OS 10.6\\\nFF4 on WIn 7\\\nChrome8 on Win XP\\\nFF3.6 on Win XP\\\nIE6 on Win XP\\\nIE7 on Win XP\\\nIE8 on Win XP\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3965/FLUID-3965.patch.txt",
      "filename": "FLUID-3965.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-20T13:37:52.758-0500",
      "body": "This might be related: While the \"Table of Contents\" option is set to \"Yes\", changes to the \"Links\" options have no visual effect on the Preview: choosing Larger or Underline does nothing. If you then turn the \"Table of Contents\" option back to \"Off,\" your Links preferences will be reflected in the Preview. If the ToC is on and you try the link settings and can't see them in the preview, then they  won't be saved.\n"
    },
    {
      "author": "Jen Chow",
      "date": "2010-12-20T15:31:39.781-0500",
      "body": "On the fluid project demo portal, clicking \"yes\" for table of contents option on IE6 and IE7 results in a bug prompt relating to fluid.fetchResources.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-12-20T15:34:26.864-0500",
      "body": "Table of contents not working in the standalone demos either\n\n(e.g., <http://build.fluidproject.org/infusion/standalone-demos/table-of-contents/html/TableOfContents.html>)\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-21T10:03:44.444-0500",
      "body": "These errors are all being caused because FluidRequests.js is not being linked in the headers of the HTML files. fluid.fetchResources() was moved into that file, and now these pages can't find that function. Adding the file to the UIOptions component html file, and to the standalone Table of Contents demo, is all that would be required to fix it.\n\nThe dependencies in the JSON files are fine: the framework dependencies do include the FluidRequests.js file, and UIOptions does work with a custom-build concatenated MyInfusion.js\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-21T10:27:57.986-0500",
      "body": "Michelle, I've attached a patch which addresses all of the issues described by this JIRA.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-21T10:49:37.316-0500",
      "body": "The patch looks good. One thing that I noticed is that there is a UIEnhancer used in the uportal integration example and that example does not include the FluidRequests javascript file. This is fine for the current example because the UIEnhancer is hooked up to the links to select particular themes and it does not use the TableOfContents. This could become a problem if we ever decide to include a TableOfContents in this integration example but given that it is scheduled for removal once we get better examples in place this is very unlikely.&#x20;\n\nThis can now be committed and we should run a very basic QA in several browsers.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-21T11:40:08.774-0500",
      "body": "This patch was committed at r10446. Looks good now.\n"
    }
  ]
}
---
The Table of Contents setting in UIOptions doesn't seem to be working. It has no effect on the preview, and if you save it "on", you don't actually get a table of contents.

To reproduce:\
1\) Visit the Sakai demo: <http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>\
2\) Open the UI Options dialog, choose "Easier to Find" and switch the Table of Contents radio button to "Yes"\
\---> You should see a Table of Contents in the Preview window, but you don't\
3\) Save these preferences\
\---> You should get a Table of Contents on your page, but you don't

        