---json
{
  "title": "FLUID-5210",
  "summary": "selectorsToIgnore in a composite panel are replaced by the auxBuilder",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-11-13T10:06:50.167-0500",
  "updated": "2013-11-13T10:46:42.721-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-11-13T10:07:42.552-0500",
      "body": "A new merge policy should be used to merge the arrays for selectorsToIgnore.\n\nfluid.prefs.compositePanel.arrayMergePolicy = function (target, source) {\\\ntarget = fluid.makeArray(target);\\\nsource = fluid.makeArray(source);\\\nfluid.each(source, function (selector) {\\\nif ($.inArray(selector, target) < 0) {\\\ntarget.push(selector);\\\n}\\\n});\\\nreturn target;\\\n};\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-11-13T10:46:42.717-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/434> ) into the project repo at f2b1a416d81c2be1afde8b348cb60bac5257314f\n"
    }
  ]
}
---
If an instance of a composite panel defines it's own selectorsToIgnore, they are overwritten by the auxBuilder when it generates the selectorsToIgnore for the containers of the sub panels. The reason this happens is because selectorsToIgnore is an array and arrays by default replace instead of merge.&#x20;

        