---json
{
  "title": "FLOE-29",
  "summary": "Many heading levels on OER Commons site are used incorrectly i.e. an inappropriate heading level is used",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2012-06-06T11:19:09.775-0400",
  "updated": "2016-01-08T14:48:54.929-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-06-12T10:29:31.017-0400",
      "body": "I have a start on this in a branch:\\\n<https://github.com/acheetham/OER-Commons/tree/FLOE-29>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-08-03T18:10:36.663-0400",
      "body": "Let's keep HTML5 best practices in mind when we address this issue. Meaning, there can be many heading level 1s on the page as long as the containing markup makes sense.&#x20;\n"
    },
    {
      "author": "Alexey Novak",
      "date": "2012-10-18T16:00:02.429-0400",
      "body": "There is some work undergoing on the Front page for OER Commons with proper practices. I will keep this JIRA open until the work will be completed and pushed to the master. Until then we need to wait and to see if this JIRA will be closed or valid.\n"
    }
  ]
}
---
For example, on the front page, the "Recommended Resources," "Featured K-12 Resources," "Featured Higher Ed Resources" and "Tags" headings are level 4, appearing after the "Sponsorship" heading and hence seeming to be sub-topics of the Sponsorship section. Another example: On the "Browse: Material Type: Other" page <http://staging.oercommons.org/courses/material_types/other>, every single heading is level 1. It might be appropriate to have the "Browse:..." link be level 1, "You searched for" and "Refine your search" as level 2. The actual search results list could have a level 2 heading and each item could use level 3, etc.

        