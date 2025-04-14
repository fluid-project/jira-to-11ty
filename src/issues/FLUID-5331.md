---json
{
  "title": "FLUID-5331",
  "summary": "Grunt task to concatenate individual Markdown files into a single file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Simon Bates",
  "date": "2014-04-25T15:16:55.898-0400",
  "updated": "2015-06-15T14:37:56.057-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T14:37:56.055-0400",
      "body": "I don't believe we want a single page generated from all the markdown files. We do want to implement a search feature on the site though.\n"
    }
  ]
}
---
For the 1.5 documentation, we would like to have 2 views of our documentation:

* individual pages
* all-in-one (for easy searching for example)

See the Node.js docs for an example of this structure <http://nodejs.org/api/>.

This ticket is to create a Grunt task that concatenates individual Markdown pages into a single page to enable the generation of the all-in-one page.

        