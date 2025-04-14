---json
{
  "title": "FLUID-4118",
  "summary": "Some TinyMCE functions not working in Rich Text Demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Harris Wong",
  "date": "2011-02-24T16:40:37.948-0500",
  "updated": "2011-03-01T11:29:57.614-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "WinXP Firefox, Chrome, IE8\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3295/",
      "key": "FLUID-3295",
      "summary": "Rich text editor features in demo which launch popup window do not seem to work"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-02-24T17:18:54.804-0500",
      "body": "have the following error on IE8:\\\n\\---------------------------------------------------\r\\\nLine: 5\\\nCharacter: 97\\\nCode: 0\\\nError Message: Permission denied\\\nURL: <http://tinymce-fluid.appspot.com/tiny_mce_popup.js>\\\n\\---------------------------------------------------\r\\\nLine: 10\\\nCharacter: 1\\\nCode: 0\\\nError Message: 'tinyMCEPopup.editor.baseURI' is null or not an object\\\nURL: <http://tinymce-fluid.appspot.com/utils/form_utils.js>\\\n\\---------------------------------------------------\r\\\nLine: 5\\\nCharacter: 760\\\nCode: 0\\\nError Message: 'this.params' is null or not an object\\\nURL: <http://tinymce-fluid.appspot.com/tiny_mce_popup.js>\n"
    }
  ]
}
---
1\. Open <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>, or infusion-1.3.1-src.zip from <http://wiki.fluidproject.org/display/fluid/Release+Package+QA+Test+Plan>\
2\. Click on "Edit" under the "Rich Text Inline Edit with Tiny MCE"\
3\. Highlight anything, click "Insert/Edit link"\
4\. A popup appears but nothing is loaded.

This occurs in WinXP Chrome, FF3.6, IE8

Futhermore, in Chrome, the following fails as well\
5\. Highlight any text, click "Strikethrough"\
6\. Save.\
Nothing is saved.

        