---json
{
  "title": "FLUID-4323",
  "summary": "Content Simplification Demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2011-07-06T10:27:14.321-0400",
  "updated": "2013-04-29T09:07:10.899-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4946/",
      "key": "FLUID-4946"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4381/",
      "key": "FLUID-4381"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-14T23:08:39.159-0400",
      "body": "This is being built in a branch in my github repo: <https://github.com/michelled/infusion/commits/FLUID-4323>\n\nAs of commit 92ea998cef449a47ea3dab5fb06bf48290f589d8 the following styling tasks are left:\\\n1\\. highlight the browse all tab\\\n2\\. move the search box and search buttons to the right\\\n3\\. add space on the right of the bread crumbs\\\n4\\. move the heading to the line below the bread crumbs\\\n5\\. centre the number of search results\\\n6\\. style the text in the 'refine your search' section\\\n7\\. move the pager bar to the right of the column\\\n8\\. add more options to the 'refine your search' section\\\n9\\. fix the nested columns in the centre column\\\n10\\. add more search results to the centre column\\\n11\\. style the titles in the right column\\\n12.centre the footer text\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-15T00:34:40.565-0400",
      "body": "As of commit 9ecdfd21d76b1473d6d040016c312e458fb47504 the following styling and markup tasks are remaining: \\\n1\\. fix the nested columns in the centre column \\\n2\\. highlight the browse all tab \\\n3\\. move the pager bar to the right of the column \\\n4\\. line up the toggle icon with the first item in each group in the left column\n"
    }
  ]
}
---
Create a new UI Options demo to show off content simplification.&#x20;

Our inspiration for content simplification can be found at:\
<http://wiki.fluidproject.org/display/fluid/Content+simplification+conceptualization>

For the first pass, the preference will be a simple on/off control. When on, the simplification will remove unnecessary HTML5 elements such as headers, footers and asides.

The content source will obviously need to be marked up using these elements.

        