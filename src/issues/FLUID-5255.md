---json
{
  "title": "FLUID-5255",
  "summary": "ToC template path is not configurable by UIO integrators",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Anastasia Cheetham",
  "date": "2014-01-21T14:38:38.056-0500",
  "updated": "2014-06-16T09:52:59.968-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-06-11T10:18:57.868-0400",
      "body": "A new grade \"fluid.uiOptions.distributeTocTemplate\" is added into uiOptions component. It's responsible for passing down the \"tocTemplate\" option to the right spot on the tree.\n\nThe new API to specify the path to the toc template as an option:\n\nfluid.uiOptions.prefsEditor(\".flc-prefsEditor-separatedPanel\", {\\\ngradeNames: \"fluid.uiOptions.distributeTocTemplate\",\\\ntocTemplate: customizedTocTemplate\\\n});\n\nA pull request is issued: <https://github.com/fluid-project/infusion/pull/528>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-16T09:46:54.699-0400",
      "body": "merged pull request ( <https://github.com/fluid-project/infusion/pull/528> ) into the project repo at b54f331ccd569525a9d057b21fce7a7a69e66b0b\n"
    }
  ]
}
---
The new "out-of-the-box" UIO component does not allow an integrator to specify the path to the tocTemplate file. If the file does not happen to coincidentally be at the correct relative path, then trying to turn on the table of contents causes an error – though it does successfully set the setting to true, which is worse: Subsequent loads of the page actually fail to load UIO itself.

Currently, the tocTemplate path is specified as part of the starter schema, and the out-of-the-box component is "pre-built" from the schema, so there's no way to specify the working relative path as an option to the pre-built component. The only thing an integrator could to is manually copy the ToC template file and place it at the correct relative path, which would require building the appropriate folder hierarchy to match the path, which is "../../../components/tableOfContents/html/TableOfContents.html".  It is completely unreasonable to expect an integrator to do this.

The ideal solution would be to have a top-level option for the path and have the prefs framework ferry the information to whoever needs it. The integration instantiation code would then look like this:

```java
fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
    templatePrefix: "../files/infusion-1.5/framework/preferences/html/",
    messagePrefix: "../files/infusion-1.5/framework/preferences/messages/",
    tocTemplate: "../files/infusion-1.5/components/tableOfContents/html/TableOfContents.html"
});
```

        