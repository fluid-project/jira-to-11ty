---json
{
  "title": "FLUID-3604",
  "summary": "Add support for the new CKEditor 3 to Rich Text Inline Edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-04-05T19:05:36.000-0400",
  "updated": "2010-04-06T10:14:36.000-0400",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3604/FLUID-2664-CKEditor-b.patch",
      "filename": "FLUID-2664-CKEditor-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3604/FLUID-2664-CKEditor-c.patch",
      "filename": "FLUID-2664-CKEditor-c.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-04-05T19:08:03.000-0400",
      "body": "Here is a patch that includes the following features:\n\n1\\. Added support for CKEditor 3.x (fluid.inlineEditor.CKEditor)\\\n2\\. Tidy up and refactoring of the InlineEditIntegrations.js file\\\n3\\. Linting and tabs to spaces (huge apologies for doing this in the same patch)\\\n4\\. Updated the Rich Text Inline Edit demo to use CKEditor instead of FCK\\\n5\\. Linked to CKEditor from a CDN so we can remove all of the old FCK\\\n6\\. Tidied up the Rich Text Inline Edit demo HTML and code\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-04-06T08:11:04.000-0400",
      "body": "This patch includes all the changes of the previous \"b\" patch, as well as\\\ni) removed duplicate definition of editModeRenderer\\\nii) Special \"hacked\" HTML comparator to deal with the oddity where CKEditor inserts whitespace after the initial opening tag. This can not be dealt with in a general way since it would ignore whitespace that might be significant elsewhere in the document.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-06T09:45:36.000-0400",
      "body": "I committed support for CKEditor 3 at r9802.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-04-06T10:14:36.000-0400",
      "body": "Did a quick test and it looks like it is working fine.\n"
    }
  ]
}
---
There is a new version of the rich text editor formerly known as FCKEditor. It's now called CKEditor, and has been upgraded to version 3. The API for this version is a fair bit better, and they've added significant accessibility support as well.

We should upgrade our Rich Text Inline Edit integrations to include CKEditor 3.

        