---json
{
  "title": "FLUID-2273",
  "summary": "UI Options' Sakai demo can only be run from a server when using FF3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2009-02-19T17:46:10.000-0500",
  "updated": "2009-06-03T13:47:41.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-19T17:46:49.000-0500",
      "body": "This link explains the issue:\\\n<http://ejohn.org/blog/tightened-local-file-security/>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-19T18:00:34.000-0500",
      "body": "This issue also affects the TableOfContents-test file\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-05T13:38:15.000-0500",
      "body": "This can be worked around by using about:config in FireFox to set security.fileuri.strict\\_origin\\_policy to false.&#x20;\n"
    }
  ]
}
---

        