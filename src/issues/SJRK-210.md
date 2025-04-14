---json
{
  "title": "SJRK-210",
  "summary": "Add search to resources page",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Avtar Gill",
  "date": "2019-01-29T18:20:09.032-0500",
  "updated": "2019-02-25T16:44:03.847-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "SoJustRepairIt.org"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Algolia provides [free search infrastructure](https://www.algolia.com/for-open-source) to non-profits and open source organizations. We would need to make a request using the linked page before proceeding.

Resource names, URLs, descriptions, and possibly categories would need to be [collected from the repository](https://github.com/fluid-project/sojustrepairit.org/blob/master/content/resources/resource-activism.md) and [converted to a JSON format](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/) that will be usable by Algolia. This could either be done using:

* A script and then uploading it using their dashboard
* Or with a custom service that will listen for GitHub webhook events, recognize when changes have been made to resources, recreate Algolia records, and then push changes using their API

The first method will take less time to implement but will require more manual work over time.

They provide [libraries](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/) that can be used to create search user interfaces. This will most likely require design changes to accommodate a form, search results, etc. Some [widgets](https://www.algolia.com/doc/guides/building-search-ui/widgets/showcase/js/) are provided as potential starting points.

        