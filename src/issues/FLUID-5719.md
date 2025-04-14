---json
{
  "title": "FLUID-5719",
  "summary": "rich text editor CDN entries appear to be gone",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2015-07-27T20:40:10.124-0400",
  "updated": "2016-11-16T09:56:23.373-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5713/",
      "key": "FLUID-5713",
      "summary": "Rich Text Inline Edit manual test links to tiny_mce_src.js and ckeditor.js are broken"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-02-10T15:41:07.040-0500",
      "body": "Updating this one to critical. Not sure about the history of <http://ckeditor-fluid.appspot.com/> and <http://tinymce-fluid.appspot.com/> but we should either move the needed files to our own Cachefly CND or get them from a public CDN like <https://cdnjs.com/>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-09-14T16:52:40.602-0400",
      "body": "Noting that this issue is still present (ran into it when manually testing in Edge). I made a quick branch to test what happens when sourcing the RTE source code from cdnjs: <https://github.com/waharnum/infusion/tree/FLUID-5719>\n\nThe latest CKEditor seems to work, but the latest TinyMCE has a number of issues with the integration (latest TinyMCE is 4.4.3, the version used last time this demo was updated was 3.49).\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-09-15T15:17:02.306-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/751> has been merged into the project master branch @ 68adc5f70fd520acb33e0d847fb6e567c86485fa\n"
    }
  ]
}
---
It looks like our rich text editor links are failing. Testing tests/manual-tests/components/inlineEdit/rich/, I got the following errors:

"NetworkError: 404 Not Found - <http://tinymce-fluid.appspot.com/3.4.9/tiny_mce_src.js>"\
"NetworkError: 404 Not Found - <http://ckeditor-fluid.appspot.com/ckeditor.js>"

and

Tue Jul 21 2015 14:50:06 GMT-0400 (EDT):

ASSERTION FAILED: Could not resolve reference tinyMCE to a value\
while\
firing to listener to event named onCreate of component Object { typeName="fluid.inlineEdit.tinyMCE", id="86iwnoui-11", lifecycleStatus="constructed", more...}\
while\
constructing component of type fluid.inlineEdit.tinyMCE with arguments \["#demo-richInlineEdit-container-tinyMCE", Object { tinyMCE={...}, componentDecorators={...}, strings={...}, more...}]

        