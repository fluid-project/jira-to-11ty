---json
{
  "title": "FLUID-5778",
  "summary": "ToC placeholder not ready yet when docs page loads",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2015-09-29T15:24:57.745-0400",
  "updated": "2022-03-14T13:12:06.892-0400",
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
      "author": "Anastasia Cheetham",
      "date": "2015-09-29T15:26:25.067-0400",
      "body": "The new docs-core/docs-template based documentation system does NOT exhibit this problem, so depending on how soon we expect to convert the Infusion docs to the new system, we may simply fix this issue through that conversion.\n"
    }
  ]
}
---
If the table of contents is turned on (using UIO) in the Infusion Documentation website, then when the page is reloaded, the ToC component seems to try to instantiate before the HTML is ready; the error is "Instantiation of autoInit component with type fluid.tableOfContents.levels failed, since selector " body .flc-toc-tocContainer " did not match any markup in the document"

To reproduce:\
1\) Visit <http://docs.fluidproject.org/infusion/development/>\
2\) Use UIO to turn on the table of contents\
3\) Reload the page\
4\) Check the console. You'll see the error messages. You'll also note that the UIO sliding panel won't open.

        