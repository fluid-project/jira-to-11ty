---json
{
  "title": "FLUID-6206",
  "summary": "Infusion docs header links do not work when viewed in GitHub... ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-10-02T08:34:50.351-0400",
  "updated": "2018-05-24T03:56:17.018-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-10-10T04:19:18.209-0400",
      "body": "The fixes for the vast majority of the header links is included in this pull:\n\n<https://github.com/fluid-project/infusion-docs/pull/129>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-05-24T03:56:11.773-0400",
      "body": "The linked pull (now merged) added link checking, including header links, and all links were verified working.\n"
    }
  ]
}
---
In working to migrate from "marked" to "markdown-it", I found a problem with our current links, at least on the [Model Transformation API page](https://docs.fluidproject.org/infusion/development/ModelTransformationAPI.html).  The handling of dots in grade names is not consistent with what GitHub does.

For example, the initial link in the "List of available transformations" points to:

```java
https://docs.fluidproject.org/infusion/development/ModelTransformationAPI.html#output-a-value-given-as-input-fluid-transforms-value-and-fluid-transforms-identity-
```

The generated placeholder anchor matches:

```java
<a class="infusion-docs-anchor" aria-hidden="true" href="#output-a-value-given-as-input-fluid-transforms-value-and-fluid-transforms-identity-">...</a>
```

However, looking at [the same page in our GitHub repo](https://github.com/fluid-project/infusion-docs/blob/master/src/documents/ModelTransformationAPI.md), the generated link is:

```java
<a href="#output-a-value-given-as-input-fluidtransformsvalue-and-fluidtransformsidentity" aria-hidden="true" class="anchor" id="user-content-output-a-value-given-as-input-fluidtransformsvalue-and-fluidtransformsidentity">...</a>
```

So, GitHub treats the dots as something to be stripped rather than as something to be replaced with a dash.  The new plugin I'm proposing using instead of docpad-marked-plugin has a plugin that generates exactly the same placeholders as GitHub, I'm proposing updating the existing links so that they work with both the new plugin and from within GitHub.

        