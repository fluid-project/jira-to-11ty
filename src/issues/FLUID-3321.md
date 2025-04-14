---json
{
  "title": "FLUID-3321",
  "summary": "All demos that use arrow key navigation should include the application role to enable screen readers to swtich cursor modes automatically",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "James Yoon",
  "reporter": "Colin Clark",
  "date": "2009-10-21T18:14:18.000-0400",
  "updated": "2014-07-30T15:50:10.258-0400",
  "versions": [
    "1.3",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3707/",
      "key": "FLUID-3707"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3727/",
      "key": "FLUID-3727"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3728/",
      "key": "FLUID-3728"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:57:23.736-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-09-09T13:47:24.462-0400",
      "body": "The only demo that would likely specifically need the role of application would be the UI Options demo, but should inspect the code to confirm this.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:24:59.659-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-30T15:50:10.258-0400",
      "body": "The keyboard-a11y demo sets the role to application, but nothing else does.\n"
    }
  ]
}
---
The ARIA application role provides assistive technologies with a cue that the content is application-based. As a result, many screen readers are able to automatically switch off the virtual cursor when they encounter this role.

We should add application roles to each of the component demos in the demo portal that use arrow key-style navigation.

        