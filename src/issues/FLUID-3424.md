---json
{
  "title": "FLUID-3424",
  "summary": "Builder html does not validate",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Alison Benjamin",
  "date": "2009-12-10T13:56:19.000-0500",
  "updated": "2010-01-05T09:56:12.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3424/FLUID-3424-1.patch.txt",
      "filename": "FLUID-3424-1.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Alison Benjamin",
      "date": "2009-12-10T14:26:41.000-0500",
      "body": "Created 3 new issues for Alison's accessibility observations\\\n<https://fluidproject.atlassian.net/browse/FLUID-3460#icft=FLUID-3460>\\\n<https://fluidproject.atlassian.net/browse/FLUID-3459#icft=FLUID-3459>\\\n<https://fluidproject.atlassian.net/browse/FLUID-3461#icft=FLUID-3461>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-12-18T16:02:21.000-0500",
      "body": "Bug Parade Builder 1.1.2\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-05T09:10:40.000-0500",
      "body": "This jira issue originally addressed several problems. I have split those off into other jira issues. All that remains is the validation issue.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-05T09:43:07.000-0500",
      "body": "Attaching FLUID-3424-1.patch.txt. Changed doctype to XHTML transitional and fixed a few unclosed end tags.&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-05T09:43:31.000-0500",
      "body": "The attached patch should resolve this problem.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-05T09:56:12.000-0500",
      "body": "I have reviewed and committed Laurel's fix for the validation errors. I looks like it is now properly validating.\n"
    }
  ]
}
---
Run the markup through a validator to fix a few errors

        