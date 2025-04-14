---json
{
  "title": "FLUID-6109",
  "summary": "Infusion framework dist doesn't include contextawareness",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2017-01-11T13:53:06.628-0500",
  "updated": "2022-02-03T10:34:52.549-0500",
  "versions": [
    "2.0",
    "3.0",
    "4.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6102/",
      "key": "FLUID-6102",
      "summary": "The jquery.keyboard-a11y plugin should not be included in a framework build of Infusion"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-22T13:29:55.308-0400",
      "body": "Should evaluate if this is still necessary, and/or if a separate dist should be included that has both framework and enhancement.\n"
    }
  ]
}
---
The framework dist build use the "framework" build module. This only includes items that are part of the src/framework/core/. Contextawareness is in its own directory in src/framework and is part of the enhancement module.&#x20;

* <https://github.com/fluid-project/infusion/blob/master/Gruntfile.js#L268-L271>
* <https://github.com/fluid-project/infusion/blob/master/README.md#framework-modules>

Possible solutions:

* move contextawareness into the core directory and clean up the modules to reflect that change
* update the framework dist to use both the core and enhancement modules

        