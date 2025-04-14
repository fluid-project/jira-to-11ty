---json
{
  "title": "FLUID-5721",
  "summary": "The documentation platform needs a better way of generating navigation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Jonathan Hung",
  "date": "2015-07-28T14:19:19.963-0400",
  "updated": "2024-07-31T16:21:54.674-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-31T16:21:46.183-0400",
      "body": "Migrated to <https://github.com/fluid-project/infusion-docs/issues/288>&#x20;\n"
    }
  ]
}
---
Currently navigation in the documentation platform is a manual process. site-structure.json defines the structure with groupings, titles, and URLs. This structure is very fragile because:

1\. If the titles do not match the titles in the documents, an active indicator will not appear in the sidebar navigation.

2\. If the URL is incorrect in the site-structure.json file, you will no know there is a problem until manually encountered.

A more robust or automatic method of generating navigation should be used. Consider using docpad's Collections ability to define groups of documents.

        