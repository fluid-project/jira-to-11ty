---json
{
  "title": "FLUID-5507",
  "summary": "Example for Fluid renderer decorator uses the jQuery renderer decorator",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-09-08T07:55:16.677-0400",
  "updated": "2015-06-17T10:28:10.707-0400",
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
      "date": "2014-09-08T08:08:25.348-0400",
      "body": "Issued a pull request <https://github.com/fluid-project/infusion-docs/pull/30>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-09-17T14:38:31.645-0400",
      "body": "docs changes merged\n"
    }
  ]
}
---
The example of the for the fluid renderer decorator actually uses the configuration of the jQuery renderer decorator.

<https://github.com/fluid-project/infusion-docs/blob/master/RendererDecorators.md#supported-decorators>

The correct example should be:

decorators: \[{\
type: "fluid",\
func: "fluid.componentName",\
container: container,\
options: options\
}]

        