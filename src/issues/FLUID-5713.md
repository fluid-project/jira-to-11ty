---json
{
  "title": "FLUID-5713",
  "summary": "Rich Text Inline Edit manual test links to tiny_mce_src.js and ckeditor.js are broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Simon Bates",
  "date": "2015-07-21T15:16:58.940-0400",
  "updated": "2016-11-16T09:56:27.550-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5719/",
      "key": "FLUID-5719"
    }
  ],
  "attachments": [],
  "comments": []
}
---
To reproduce:

* Open infusion/tests/manual-tests/components/inlineEdit/rich/

Expect:

* Inline edit to work

Actual:

* It does not

If you check the browser network logs, you can see 404s for:

* <http://tinymce-fluid.appspot.com/3.4.9/tiny_mce_src.js> and
* <http://ckeditor-fluid.appspot.com/ckeditor.js>

        