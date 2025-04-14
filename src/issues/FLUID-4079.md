---json
{
  "title": "FLUID-4079",
  "summary": "RendererUtilities Test failed on IE9 - Protocomponent Expander Tests: FLUID-3658 test",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Harris Wong",
  "date": "2011-02-18T10:19:08.970-0500",
  "updated": "2011-02-23T10:13:21.497-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": "IE 9 beta 9.0.7930.16406\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3956/",
      "key": "FLUID-3956",
      "summary": "The unit tests related to FLUID-3658 are failing: IE9"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Run the RendererUtilities unit test here: <http://build.fluidproject.org/infusion/tests/framework-tests/renderer/html/RendererUtilities-test.html> with IE 9.

There will be one error:\
Selective Explosion: primitive mismatch at path children.0.children.4optionlist.value.o: write to read

        