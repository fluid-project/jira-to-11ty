---json
{
  "title": "FLUID-6369",
  "summary": "UIO getting started guide should include an explanation of the Prefs Framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Jonathan Hung",
  "date": "2019-03-07T11:20:19.422-0500",
  "updated": "2024-08-01T10:04:08.116-0400",
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
      "author": "Jonathan Hung",
      "date": "2019-03-07T11:52:27.026-0500",
      "body": "This is what @@Alan Harnum has written previously on the topic about UIO vs. Prefs Framework which might help with this task:\n\n \n\n\"Briefly, I want to highlight a distinction between two pieces of the Fluid Project’s Infusion JS framework:\n\n \n\n**User Interface Options** (UIO) is a “standard” component for providing a UI for end users to customize the appearance and behavior of websites. This is what’s described in the documentation at \\[<https://docs.fluidproject.org/infusion/development/tutorial-userInterfaceOptions/UserInterfaceOptions.html>] and \\[<https://docs.fluidproject.org/infusion/development/UserInterfaceOptionsAPI.html>], what we typically use on our own sites, and what we recommend for use by others if they don’t have specific needs. \n\nThe **Preferences Framework** is an underlying piece of the Infusion framework that UIO is built with – the framework is designed to support a wide variety of approaches to building preferences editors, of which UIO is one possible manifestation. It’s described in detail at \\[<https://docs.fluidproject.org/infusion/development/PreferencesFramework.html>] and corresponding sections. \n\nSo particularly when working with integration with other code (especially code also wanting to expose controls to the user to customize a website), there are options beyond “out of the box” use of UIO that can still draw on the Fluid’s Projects codebase. These have a higher complexity than UIO, but I wanted to make sure to highlight the distinction above.\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-08-01T10:03:51.991-0400",
      "body": "Migrated at <https://github.com/fluid-project/infusion-docs/issues/303>&#x20;\n"
    }
  ]
}
---
The Getting Started with UIO documentation should include some information describing the differences between UIO and the Prefs Framework. This information could be an aside or a separate document.

        