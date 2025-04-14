---json
{
  "title": "FLUID-5215",
  "summary": "Create instructional demos for Infusion framework functionality, rendering, prefs framework and components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Anastasia Cheetham",
  "date": "2013-11-20T10:46:50.279-0500",
  "updated": "2024-07-31T15:16:32.998-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Demos",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5217/",
      "key": "FLUID-5217"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-11-20T16:24:25.116-0500",
      "body": "We discussed this in the Community Meeting on Nov. 20 and came up with the following overall hierarchy:\n\nsrc\\\nframework\\\ncomponents\\\nlib\\\nmodule\\\ndemos\\\nshowcase\\\ninstructional\\\nintegration <- to be destroyed\\\nstandalone\\\ntests\n\nFor the demos/instructional folder, the hierarchy should mirror, as much as reasonable, the hierarchy of the source folder. In general:\n\ndemos/instructional\\\nframework\\\ncore\\\nprefs\\\nrenderer\\\ncomponents\\\ncomponentX\\\nshared\\\ncss\\\nshared.css\\\nhtml\\\nshared.html\\\njs\\\nshared.js\\\ndemoX\\\ncss\\\nfile.css\\\nhtml\\\nfile.html\\\njs\\\nfile.js\\\ndemoY\\\ncss\\\nfile.css\\\nhtml\\\nfile.html\\\njs\\\nfile.js\\\ncomponentY\\\netc\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-06-22T15:25:27.969-0400",
      "body": "Perhaps something like this could be facilitated through [codepen](https://codepen.io/) or similar system.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-31T15:16:23.827-0400",
      "body": "Migrated to <https://github.com/fluid-project/infusion-docs/issues/271>&#x20;\n"
    }
  ]
}
---
We would like to create instructional demos that would serve as working examples of how to accomplish various common tasks in Infusion. The intention would be for each individual instructional demo to teach a single thing, for example, how to customize one feature of a component. The goal would be for the code to be clear, simple, self-contained, well-commented and illustrative of best practices. These demos would be referenced by documentation and tutorials.

Having each demo illustrate a single thing would result in a lot of small demos, which might result in code duplication. We should consider the possibility that any refactoring to reduce this duplication would likely obfuscate the code a bit, going against the goals of clear, simple and self-contained. We should attempt to carry out any such refactoring to minimize complication and obfuscation.

        