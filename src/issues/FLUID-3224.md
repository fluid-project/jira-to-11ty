---json
{
  "title": "FLUID-3224",
  "summary": "If <textarea> autobound to non-existant model field, Renderer renders unclosed element",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2009-10-02T17:00:56.000-0400",
  "updated": "2010-04-13T12:01:53.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-11-29T00:31:40.000-0500",
      "body": "This was a surprisingly subtle issue, and **only** bites when the \\<textarea> element in the template has no content. It is related to the failure of XHTML documents in general to be invalid in many browser contexts - the emitted markup in this case was correct as XHTML, containing the text \\<textarea/> - however, when passing through the innerHTML mechanism of the browser, this was immediately degraded to \\<textarea> causing corruption of the rest of the document.\\\nThe renderer now makes use of the \"closed tags list\" which is already present in the fastXmlPull library in order to determine what kind of markup to emit for tags with no content in fluidRenderer.dumpTemplateBody(). This is a slightly undesirable cross-reference but there is in all cases so far a dependence on this library anyway. The opportunity was taken to clean up fastXmlPull's use of global namespace which is reduced now to the two symbols \"XMLP\" and \"SAXStrings\". At some point we should review whether fastXmlPull should not be just brought formally under standard Fluid namespacing and version management.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-30T09:26:48.000-0500",
      "body": "Just wondering why there are a couple of lines commented out in the unit test.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-02-09T19:53:38.000-0500",
      "body": "I've added a comment in the test case explaining the reason for the alternative branch, during the work on <https://fluidproject.atlassian.net/browse/FLUID-3493#icft=FLUID-3493>. For these two tests which have the potential to generate invalid markup, it is safer to test the raw text of the renderer output rather than the version after transfer through the DOM. I have factored out a \"renderManually\" utility function to make these kinds of tests easier to write, although this should be easier to achieve than it is with the current API.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-10T09:28:14.000-0500",
      "body": "Unit test all seem to be passing... handing this issue off to anastasia to ensure that it works in the context she discovered the issue.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-04-13T12:01:53.000-0400",
      "body": "I can no longer reproduce this in the context in which I originally found it.\n"
    }
  ]
}
---
If a \<textarea> element in the template is autobound to a field that happens to be absent from the data model, the Renderer renders the textarea, but doesn't close it - any subsequent markup is displayed by the browser as though it is the **content** of the textarea.

I'm not sure what the Renderer **should** be doing in this case, but the observed behaviour is quite disruptive: the rest of the page disappears!

        