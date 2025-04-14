---json
{
  "title": "FLUID-6423",
  "summary": "Update jqUnit docs links to QUnit functions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Gregor Moss",
  "date": "2019-11-01T14:54:17.155-0400",
  "updated": "2024-08-01T10:09:47.816-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-08-01T10:09:47.645-0400",
      "body": "Migrated to <https://github.com/fluid-project/infusion-docs/issues/305>&#x20;\n"
    }
  ]
}
---
The [current docs for jqUnit](https://docs.fluidproject.org/infusion/development/jqUnit.html) point out that the module is based on version 1.x of QUnit, and makes reference to certain functions that no longer exist in the new API.

For example, the [documentation for jqUnit.asyncTest](https://docs.fluidproject.org/infusion/development/jqUnit.html#jqunitasynctestname-testfunc) mentions that it is a "Direct passthrough for QUnit.asyncTest", with a link to the relevant QUnit function: <http://api.qunitjs.com/QUnit.asyncTest/>

The issue is that that URL then redirects to QUnit.test, as QUnit.asyncTest no longer exists in API 2.x: <https://api.qunitjs.com/QUnit/test>

Outside of updating the version of QUnit used by jqUnit (a whole other can of worms), I propose updating the text of the links with a mention that the old version of the API is no longer offered on QUnit's website, or perhaps linking to the Wayback Machine's archived version of that page: <https://web.archive.org/web/20160604092138/http://api.qunitjs.com:80/QUnit.asyncTest/>

        