---json
{
  "title": "FLUID-1904",
  "summary": "OSDPL: Add \"Skip to Main Content\" link",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2008-12-03T09:19:11.000-0500",
  "updated": "2014-04-02T16:35:54.581-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-12-03T09:21:57.000-0500",
      "body": "–\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-20T10:44:08.000-0500",
      "body": "Possible Solution:\n\nThis can easily be accomplished by adding the appropriate link into a block that appears in the Header region of the layout (See Admin: Blocks).  Then use modify custom.css to position that block at the top-left corner.\n\nShould ensure that the link appears as tab index 1.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-20T13:51:24.000-0500",
      "body": "Mike Elledge makes an interesting comment about links and accessibility:\n\n\"I think it could be disorienting since it is not conventional behavior. Also, we would be assuming that the person would be going to the main content on the page, and not something else, such as subnavigation, or related content, for example.\n\nThe one exception that comes to mind is if someone is clicking on a link to continue reading an article (\"Rest of article about Fluid project\", which unfortunately is usually titled \"More\"), in which case it should take them to the article itself, preferably at the point where the article continues from the previous page. That's also why ending content with a partial sentence (\"Fluid has been in operation for...\") has never made sense to me.\"\n"
    }
  ]
}
---
In migrating to the Fluid-Clean theme, we lost the "Skip to Main Content" link in the header. This should be added back in.

Also see:\
<http://issues.fluidproject.org/browse/FLUID-1290>

        