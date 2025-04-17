---json
{
  "title": "ENGAGE-413",
  "summary": "In My Collection, grid icon appears as list icon, and vice versa",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jess Mitchell",
  "reporter": "James Yoon",
  "date": "2010-02-19T13:56:45.000-0500",
  "updated": "2010-02-19T18:36:50.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-413/ENGAGE-413-trunk.patch",
      "filename": "ENGAGE-413-trunk.patch"
    }
  ],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2010-02-19T14:57:19.000-0500",
      "body": "the image files are swapped.\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-19T18:05:18.000-0500",
      "body": "changed the default icon and alternative icon in mycollectionview\\.js for the navigationBar:\n\nnavigationBar : {\\\ntype : \"fluid.engage.navigationBar\",\\\noptions: {\\\nselectors: {\\\ntoggleDefaultIcon: \".flc-navigationBar-toggle-list\",\\\ntoggleAlternateIcon: \".flc-navigationBar-toggle-grid\"\\\n}\\\n}\\\n},\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-19T18:36:50.000-0500",
      "body": "I have reviewed and tested Jess' patch. It works great and is correct, so I committed it at r9457.\n"
    }
  ]
}
---

        