---json
{
  "title": "FLUID-305",
  "summary": "Provide a shared means for configuring keyboard bindings for all Fluid components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Colin Clark",
  "date": "2008-03-04T01:14:38.000-0500",
  "updated": "2017-02-22T18:16:08.858-0500",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework",
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-6133/",
      "key": "FLUID-6133"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-07-31T16:58:58.000-0400",
      "body": "infusion-05-wishlist\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T09:38:08.453-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-20T16:38:06.430-0500",
      "body": "The keyboard accessibility plugin provides the ability to specify additional key bindings for activation of items, but even for components that use the plugin, access to this option is not surfaced up to the component's options.\n"
    }
  ]
}
---
At the moment, the only component that allows its keyboard bindings to be configured is the Reorderer. It would be great to have a standardized means for adjusting the key bindings for all components.

dev-iteation43

        