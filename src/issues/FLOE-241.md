---json
{
  "title": "FLOE-241",
  "summary": "Meta tags may be improperly sepcified in XML content and should not be rendered",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2014-09-08T11:12:49.025-0400",
  "updated": "2015-06-17T10:47:36.510-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "EPUB"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-10-01T13:33:51.854-0400",
      "body": "It seems that some other merge moved the content into the content attribute; none of the meta tags still exhibit this problem.\n"
    }
  ]
}
---
\<meta> tags currently in the html documents do not follow the recommendation by the IDPF for XHTML content:\
<http://www.idpf.org/accessibility/guidelines/content/meta/schema.org.php>

Also the contents of the meta tags are showing up rendered in the reader which may be related to improper encoding of metadata.

        