---json
{
  "title": "ENGAGE-450",
  "summary": "Cabinet headers are announced as heading level 2. VO user wouldn't know that he/she can expand it.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "y z",
  "date": "2010-02-23T16:43:17.000-0500",
  "updated": "2014-03-03T13:46:26.593-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Cabinet"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-442/",
      "key": "ENGAGE-442",
      "summary": "The alt text for the media badge is not internationalizable"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-450/ENGAGE-450.patch.txt",
      "filename": "ENGAGE-450.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-17T11:15:43.000-0400",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-17T13:54:41.000-0400",
      "body": "<https://fluidproject.atlassian.net/browse/ENGAGE-450#icft=ENGAGE-450>.patch.txt contains a patch to wrap the header text in an anchor. This will at least let voiceover users know that the header is actionable. However, it is causing an error with the screen navigator by changing the # in the url. This will need to be addressed before this patch can be applied.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-22T15:33:42.000-0400",
      "body": "committed patch <https://fluidproject.atlassian.net/browse/ENGAGE-450#icft=ENGAGE-450>.patch.txt with some changes. Basically now preventing the default click action of the link in the header because this is what was breaking the screen navigator. Also added in functionality to inject the \\<a> if it isn't currently present. Unit tests have been provided.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-24T10:10:17.000-0400",
      "body": "Assigned to Antranig for review\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-25T09:46:20.000-0400",
      "body": "This fix is unstable since it makes the implicit assumption that the selector \"header\" consists just of a single classname. At the least, it should check whether this is at least slightly appropriate (initial character plus internal non-whitespace, non-symbol check with a regexp) perhaps. It should never just blindly remove the first character from a selector string. \\\nBut to be clearer, the entire strategy appears unstable - there should be a separate means of accounting for which elements should have click handlers bound rather than attempting to displace the \"header class\". It should be rewritten to revert to simply using the \"selectors.header\" property as a DOM binder argument as before.\n"
    }
  ]
}
---
Because cabinet headers are implemented as level 2 headings it is difficult to figure out that this heading can be actually tapped to expand and expose the contents of the cabinet drawer.

        