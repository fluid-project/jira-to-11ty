---json
{
  "title": "FLUID-5516",
  "summary": "Update design of Fluid nightly build site to match new design",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-09-24T15:13:31.447-0400",
  "updated": "2014-11-19T11:23:04.155-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5544/",
      "key": "FLUID-5544",
      "summary": "Add new \"all-tests\" files"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-10-30T14:08:58.038-0400",
      "body": "Justin and I discussed the issue of the page being too long (<http://lists.idrc.ocad.ca/pipermail/fluid-work/2014-October/009582.html>). The plan is:\n\n1\\) Remove links to “examples” and keep only “demos”\\\nThe “examples” are more instructional in purpose, and will hopefully eventually be moved into the documentation itself. Also, we’re not entirely sure if they’re currently using all of our recommended best practices, so we’re not sure if we want to point people to them. Our thoughts are\\\na) Review the examples to decide if we’re proud of them (if not, update them).\\\nb) Decide whether or not to\\\ni) move the examples to the documentation, or\\\nii) create a second page on the build site for the examples.\n\n2a) Limit automated test links to “all-tests” files.\\\n2b) Add to the Infusion repository “all-tests” files for\\\ni) Renderer tests\\\nii) Framework tests (all of them)\\\niii) Component tests (all of them)\\\nand add these links to the build site. (<https://fluidproject.atlassian.net/browse/FLUID-5544#icft=FLUID-5544>)\n\n3\\) Restructure the layout of the build site as follows: Left column for demos, right column for tests (automated at top, manual at bottom).\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-11-07T10:34:20.272-0500",
      "body": "Merged at 89a166b8e75afb2d84be021c1c9d125038a0b04a\n"
    }
  ]
}
---
The fluidproject build site design has changed. Currently it looks too much like a project / brochure site  <http://build.fluidproject.org/> with coloured project tiles at the top with links below. The updated design is more conventional as to not cause any confusion between the build site and the parent fluidproject.org site.

The work is to be done using plain old HTML + CSS (no need for docpad or anything else).

Relevant links:

* The new design can be found on page 6 of this PDF: \
  <http://wiki.fluidproject.org/download/attachments/327842/FluidProject-WebsiteMockup.pdf?version=1&modificationDate=1401984558871&api=v2>

- The build site can be found in this github repository:\
  <https://github.com/fluid-project/build.fluidproject.org>

* The live build site is\
  <http://build.fluidproject.org/>

        