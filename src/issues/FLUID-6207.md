---json
{
  "title": "FLUID-6207",
  "summary": "A single header id in the docs does not match what GitHub generates...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-10-04T08:40:37.153-0400",
  "updated": "2022-03-14T13:39:55.508-0400",
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
      "date": "2022-03-14T13:39:55.484-0400",
      "body": "Migrated to Infusion-Docs [Issue #225](https://github.com/fluid-project/infusion-docs/issues/225)\n"
    }
  ]
}
---
We currently have over a hundred links in the documentation where the heading IDs do not match between GitHub and docpad.  This means that the links are clickable on our site, but not when viewing the raw markdown on GitHub.

Assuming the pull associated with <https://fluidproject.atlassian.net/browse/FLUID-6205#icft=FLUID-6205> is merged, nearly all of these will be addressed.  The one holdout is the heading for `fluid.log` in `CoreAPI.html`.

The text of the heading is:

```java
fluid.log([logLevel, arg1, ... argn])
```

GitHub generates the header ID as "fluidlogloglevel-arg1--argn".

The new combination of markdown-it and [markdownit-anchor](https://www.npmjs.com/package/markdown-it-anchor) generates the ID as "fluidlogloglevel-arg1-argn" (note the single dash between "arg1" and "argn").

Our current combination use of docpad-plugin-marked generates the ID as "fluid-log-loglevel-arg1-argn-", so the brokenness of the link on GitHub is not new behaviour, even if the details are a little different.

I am filing this ticket in case the problem occurs more often, in which case I would suggest preparing a ticket and/or pull against markdownit-anchor.

        