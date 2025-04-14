---json
{
  "title": "FLUID-6501",
  "summary": "Docs search is broken on sub-pages",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Gregor Moss",
  "date": "2020-05-19T12:59:15.183-0400",
  "updated": "2022-03-14T13:53:58.764-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": "Windows 10 Pro v 1909\\\nChrome 81\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-03-14T13:53:58.736-0400",
      "body": "Migrated to Infusion-Docs [Issue #228](https://github.com/fluid-project/infusion-docs/issues/228)\n"
    }
  ]
}
---
When searching from the "Tutorials" or "Components" sub-pages of the Infusion Documentation site, the server returns a 404. It seems this might be a relative pathing issue, as these pages are hosted from subdirectories.

**To reproduce:**

1. Go to the Infusion Docs site: <https://docs.fluidproject.org/>
2. Click on "Tutorials" or "Components" on the top-right of the page
3. Click on one of the topics along the left-side menu (e.g. "Opening Remarks" in Tutorials or "Pager" in Components)
4. Enter a search term in the search bar and hit enter to run the search

**Expected:**

The search results page is displayed with the appropriate results

**Actual:**

The server responds with a 404 error

 

URL for a successful search:

<https://docs.fluidproject.org/infusion/development/search.html?qs=%22test%22>

URLs for unsuccessful searches:

<https://docs.fluidproject.org/infusion/development/tutorial-developerIntroduction/search.html?qs=%22test%22>

<https://docs.fluidproject.org/infusion/development/to-do/search.html?qs=%22test%22>

        