---json
{
  "title": "FLUID-773",
  "summary": "Evaluate OSDPL user roles, and add new roles as necessary",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-06-12T15:53:56.000-0400",
  "updated": "2008-08-19T15:17:43.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-07-16T21:02:28.000-0400",
      "body": "futuretask\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-08-19T15:17:43.000-0400",
      "body": "Won't fix. Governance is likely to change user roles and access significantly. New tasks will be filed for that.\n"
    }
  ]
}
---
Currently there are 4 levels of users:

* Unregistered - can only view content
* Authenticated - can create design patterns.
* Pattern Editor - can edit design patterns.
* Administrator

Missing from this list of users are:

* forum and comment moderator (should this be the job of a Pattern Editor too?)
* content author and editors (i.e. Page and Story authors) - is this something even worth considering since Admins are the only ones who need create this kind of content?

        