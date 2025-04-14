---json
{
  "title": "ILDH-37",
  "summary": "Update the Table of Contents to include Inclusive EPUB 3 guide",
  "tags": "ILDH",
  "project": {
    "key": "ILDH",
    "title": "Inclusive Learning Design Handbook"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-07-14T13:24:46.989-0400",
  "updated": "2019-08-19T14:32:53.807-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5477/",
      "key": "FLUID-5477",
      "summary": "Update Handbook MediaWiki instance to 1.19.17 and add Confirm Account plugin"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-17T14:40:42.625-0400",
      "body": "Merged at 892d08b74c7f6dc9228ebfdb1b89e0eb7104d7ed\\\nTomorrow we should check the live site, and once we verify that the live site is good, we can close this.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-17T15:12:54.094-0400",
      "body": "Jon, I caught a mistake I missed before:\\\nthe ToC is missing the \"Handling scripting\" section\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-17T16:29:57.096-0400",
      "body": "Also, the ToC is not actually the same as the ToC on the wiki. Several of the first few sections have been incorporated into the into. Was that deliberate?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2014-07-22T09:18:43.878-0400",
      "body": "1\\. Added the missing 'Handling scripting' section to ToC - new pull request <https://github.com/fluid-project/handbook.floeproject.org/pull/14>\n\n2\\. There was a misunderstanding and the changes were never deployed. After talking to Avtar, the changes will be deployed after <https://fluidproject.atlassian.net/browse/FLUID-5477#icft=FLUID-5477> is done.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-08-12T09:05:55.608-0400",
      "body": "This is in now.\n"
    }
  ]
}
---
Update the table of contents for the ILDH to include the Inclusive EPUB 3 content. The structure should follow the wiki page <http://wiki.fluidproject.org/display/fluid/Inclusive+EPUB+3+Guide+for+ILDH>

Inclusive EPUB 3 (clickable link to the introduction, What is EPUB, Why Choose EPUB 3, Building Inclusive EPUB 3)

* Semantic Markup
* WAI-ARIA
* Visual Styling
* Handling Graphics, Video, and Audio media
* Handling Scripting
* Media Overlays and Text-to-speech
* Accessibility Metadata
* Resource

        