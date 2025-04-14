---json
{
  "title": "FLUID-2849",
  "summary": "Progressive Enhancement: After single-file upload, Uploader reverts to multi-file version",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2009-05-29T15:02:47.000-0400",
  "updated": "2011-01-20T15:21:16.002-0500",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3596/",
      "key": "FLUID-3596"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:33:59.565-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-09-09T10:33:08.387-0400",
      "body": "This issue stretched the boundary of the Uploader with its parent application, but is something we should find a way to fix. Obvious solutions involve storing a state cookie that remembers the user's setting, or perhaps recommending that application developers persist this choice themselves in some way such as a query parameter.&#x20;\n\nThis issue also relates indirectly to the issue of allowing users to globally control avoidance of Flash (or complex UIs) via UI Options.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:37:43.375-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-15T13:40:43.622-0500",
      "body": "Testing the new HTML5 version, this bug is still present.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-23T15:46:38.576-0500",
      "body": "Please check if this is done and either close it or put it into another release.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-04T09:41:27.525-0500",
      "body": "This issue is moot now, with the new Progressive Enhancement work.\n"
    }
  ]
}
---
When the Uploader is used in single-file mode: After a "save" the view switches automatically back to the multi-file version.

To reproduce:\
1\) <http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>\
or\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>\
2\) Switch to "standard single-file Uploader"\
3\) Browse and select a single file\
4\) Click the "Save" button

The view automatically reverts to the multi-file interface.

        