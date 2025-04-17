---json
{
  "title": "FLUID-985",
  "summary": "Convey the deletable and completed states for file rows",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Eli Cochran",
  "reporter": "Colin Clark",
  "date": "2008-07-22T19:06:56.000-0400",
  "updated": "2016-11-02T12:20:17.309-0400",
  "versions": [
    "0.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6025/",
      "key": "FLUID-6025"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-07-23T19:42:45.000-0400",
      "body": "One way to make this functionality discoverable for AT users would be to have a descriptor attached to the delete-enabled container, most likely through the \"aria-describedby\" attr.\n\nThe example given is a close button for a fake popup window:\n\n\\<a role=\"button\" aria-describedby=\"windowCloseDescription\" href=\"#\" onclick=\"myfakewindow\\.close()\"> X \\</a>&#x20;\n\n.. then hidden anywhere else on the page is the descriptor, identified by the ID in aria-describedby\n\n\\<div id=\"windowCloseDescription\">Closing this window will discard any information entered and return you back to the main page\\</div>\\\n\\----------------\nSee:\\\n<http://www.w3.org/TR/wai-aria-practices/#relations_labeling> > see 4.1.2 Described By\\\n<http://www.w3.org/TR/2008/WD-wai-aria-20080204/#description>\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-28T12:09:37.000-0500",
      "body": "Just FYI. Right now the title for the row gets set to \"File Uploaded\" when the file is complete.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-28T13:59:49.000-0500",
      "body": "It's all yours, Eli.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T09:09:17.586-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-08-24T09:20:03.208-0400",
      "body": "Working in Firefox but not in IE 8 (win xp), where after a file has been uploaded it still says \"Remove File\" instead of \"File Uploaded\"\n"
    }
  ]
}
---
The file rows convey two pieces of information in a visual way. The fact that each row can be deleted. And when We should devise a strategy to allow this information to be exposed semantically (ARIA roles? title attributes?) and implement it in the Uploader.

        