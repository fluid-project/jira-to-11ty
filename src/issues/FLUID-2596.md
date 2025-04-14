---json
{
  "title": "FLUID-2596",
  "summary": "Renderer does not support \"tag elision syntax\" ~ together with branch container",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Antranig Basman",
  "date": "2009-04-13T18:29:18.000-0400",
  "updated": "2011-02-28T16:45:18.506-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
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
      "date": "2009-04-13T21:36:04.000-0400",
      "body": "Fixed at revision 7115:\n\nNote that this commit also includes:\\\ni) API upgrade for iterateDOM\\\nii) Recursive upgrade for testUtils \"assertNodes\" - this can now make an assertion about any amount of nested markup\\\niii) \"template armouring\" upgrade for selfRender - note that whilst this in theory supports both CDATA and comment armouring, CDATA nodes seem not to be supportable in IE (their nodeValue arrives corrupt) and so comment armouring is the only form we can support.\\\niv) General delinting\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-04-13T21:47:55.000-0400",
      "body": "Comment on CDATA support in browsers.&#x20;\n\n<http://www.sitepoint.com/forums/showthread.php?t=574817>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:18.504-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
The rendered markup when the tag elision character \~ is applied to a branch container is not correct - \
for example \
\<div rsf:id="\~row:">\
\<tr> \<td blah blah> \</tr>\
\</div>

does not correctly elide the branch container. Reported by Jen Bourey when trying an advanced use of the Pager.

        