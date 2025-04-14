---json
{
  "title": "FLUID-3215",
  "summary": "The Infusion Builder should provide a clearer indication when a user has successfully submitted a build request and the Builder is busy building it",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Colin Clark",
  "date": "2009-09-30T13:45:54.000-0400",
  "updated": "2009-10-05T18:39:43.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3215/FLUID-3215_build_properties.txt",
      "filename": "FLUID-3215_build_properties.txt"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3215/postBuild.png",
      "filename": "postBuild.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3215/preBuild.png",
      "filename": "preBuild.png"
    }
  ],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-09-30T14:53:53.000-0400",
      "body": "PRE build interface concept\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-09-30T14:54:20.000-0400",
      "body": "POST build interface concept\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-01T15:07:53.000-0400",
      "body": "This file contains the text changes for the builder headings.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-05T18:39:37.000-0400",
      "body": "I've reviewed these changes. While I think there's room for improvement in a few places, they're not directly related to this issue and minor enough not to cause us to block the release.\n"
    }
  ]
}
---
colinclark: So at the moment, the experience of our Builder is a bit raw in one area.\
\[1:09pm] colinclark: When you click the download button, you get what appears to be a new page, with a very subtle message saying something to the effect of "Your download will start soon..."\
\[1:09pm] colinclark: But it's hard to notice, and will confuse the user in its current form.\
\[1:09pm] colinclark: fj4000 has agreed to do a minor design tweak to that experience to make it awesomer.\
\[1:09pm] colinclark: I don't have a JIRA ticket for it yet, but it strikes me as a last bit of polish we want to include in the Builder.

Jacob has agreed to sketch out a design for Laurel to implement. This should be a simple bit of polish, not a large redesign.

        