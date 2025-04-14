---json
{
  "title": "FLUID-3844",
  "summary": "RendererUtilities.js: Renderer does not expand UIMessage properly.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "y z",
  "date": "2010-11-17T16:40:52.355-0500",
  "updated": "2010-12-13T14:53:50.328-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3844/FLUID-3844.patch.txt",
      "filename": "FLUID-3844.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-11-17T16:50:49.364-0500",
      "body": "A patch with a test case\n"
    },
    {
      "author": "y z",
      "date": "2010-11-17T16:51:42.558-0500",
      "body": "Hi Antranig, could you please review the patch. Thanks.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-17T17:07:38.871-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-11-17T17:35:43.258-0500",
      "body": "Patch committed at revision 10265 with a few minor tweaks to naming in test case\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-13T14:53:50.321-0500",
      "body": "Antranig reviewed and committed Yura's patch\n"
    }
  ]
}
---
The renderer has historically supported the construction where the fields for a UIMessage may themselves be a UIBound - for example in the form\
{messagekey: {\
valuebinding: "reference.to.key.in.model"\
}}\
which allows the resolution of an I18N message to be geared through a model. However, there is a "fault" in the implementation of the protocomponent expander, that it is not possible to take advantage of this facility by means of writing a UIMessage protocomponent with EL reference that expands to this form - for example the following construction\
{messagekey: "${reference.to.key.in.model}"} \
fails to expand properly (although "args") are expanded. This patch corrects the protocomponent expander so that the messagekey member of UIMessage is expanded as if it were a UIBound.

        