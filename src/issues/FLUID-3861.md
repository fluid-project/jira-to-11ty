---json
{
  "title": "FLUID-3861",
  "summary": "Focus style stays when element not in focus (FF, defaultViewText=\"\")",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2010-11-22T12:34:32.198-0500",
  "updated": "2010-12-03T12:14:40.206-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3867/",
      "key": "FLUID-3867",
      "summary": "Blue border around inline edit persists after going into edit mode. "
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3861/FLUID-3861.patch",
      "filename": "FLUID-3861.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3861/Picture 13.png",
      "filename": "Picture 13.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-22T14:04:21.953-0500",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-11-25T16:37:34.817-0500",
      "body": "Think we can simply delete line 184, that.editField.focus();  in the components InlineEdit.js\\\nDoesn't seem to change anything (other than fix this bug) by removing it. still testing...\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-11-26T10:49:21.684-0500",
      "body": "removes line 184, that.editField.focus();&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-02T17:07:01.593-0500",
      "body": "I have tested Heidi's patch and everything in both simple and rich text inline edit is working as expected.  &#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-03T12:14:40.170-0500",
      "body": "Code was reviewed and committed at revision 10331.\n"
    }
  ]
}
---
When defaultViewText="", and empty area clicked, the focus style stays even when clicking in other boxes. Firefox on mac & windows

        