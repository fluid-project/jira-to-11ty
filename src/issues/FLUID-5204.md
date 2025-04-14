---json
{
  "title": "FLUID-5204",
  "summary": "A number of Infusion's unit tests fail on IE 10.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2013-10-31T15:50:16.533-0400",
  "updated": "2014-03-03T11:26:35.391-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Renderer",
    "Reorderer",
    "Uploader"
  ],
  "environment": "Internet Explorer 10 on Windows 7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5173/",
      "key": "FLUID-5173"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2013-10-31T15:53:13.017-0400",
      "body": "Here's an example of some the error messages I receive in IE10 for the Renderer test:\n\nHTML1524: Invalid DOCTYPE. The shortest valid doctype is \"\\<!DOCTYPE html>\". \\\nRenderer-test.html, line 1 character 1\\\nHTML1512: Unmatched end tag. \\\nRenderer-test.html, line 85 character 45\\\nHTML1500: Tag cannot be self-closing. Use an explicit closing tag. \\\nRenderer-test.html, line 320 character 11\\\nHTML1500: Tag cannot be self-closing. Use an explicit closing tag. \\\nRenderer-test.html, line 324 character 11\\\nHTML1521: Unexpected \"\\</body>\" or end of file. All open elements should be closed before the end of the document. \\\nRenderer-test.html, line 334 character 1\\\n15:51:58.887:  Error parsing template: Attribute: duplicate attributes not allowed at line 5 \\\n15:51:58.888:  Just read: bel> \\\n\\<span id=\"target\"  \\\n15:51:58.889:  Still to read: id=\"target\" rsf:id=\"target\">La \\\n15:51:58.891:  ASSERTION FAILED: Error parsing template: Attribute: duplicate attributes not allowed at line 5 \\\n15:51:58.891:  Current activity:  \\\n15:51:58.901:  Error parsing template: Attribute: duplicate attributes not allowed at line 3 \\\n15:51:58.902:  Just read: /label>\\\n\\<span id=\"branch\"  \\\n15:51:58.903:  Still to read: id=\"branch\" rsf:id=\"target:\">M \\\n15:51:58.904:  ASSERTION FAILED: Error parsing template: Attribute: duplicate attributes not allowed at line 3&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-11-20T23:37:34.828-0500",
      "body": "I've issued a pull request covering the focus issues as well as the failure of ModelTransformations tests under IE8. The doctype/rsf:id issues remain to be investigated.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-12-17T03:09:01.368-0500",
      "body": "Looking into the duplicate id issue, it appears to be a simple bug in IE10 and above. After roundtripping, the markup is corrupted so that it reads\n\n\\<span id=\"target\" id=\"target\" rsf:id=\"target\"> - that is, the attribute is genuinely duplicated.\n\nThe message about the invalid DOCTYPE is unrelated, and choosing any other doctype has no effect on the issue. I also tried the \"emulate IE9\" http-equiv mentioned in this answer <http://msdn.microsoft.com/en-us/library/ie/hh801216(v=vs.85).aspx> (for reference, since in general Microsoft don't care about stable URLs, the tag is \\<meta http-equiv=\"X-UA-Compatible\" content=\"IE=EmulateIE9\"> ) but with no effect. Also I could find no reports of such an issue - the simplest thing seems to be to hack the \"XML Pull Parser\" yet further to take account of this bug (it already has quite enough hacks to deal with roundtrip corruption caused by previous broken versions of IE - it's good to know that Microsoft means to continue this tradition until the bitter end). The most economical hack appears to be to only signal the \"duplicate attribute\" error in the case the markup tries to set a different value for the attribute on the second occasion.\n\nIn general we discourage users from sourcing markup templates from the live document for just this kind of reason (I recall we succeeded in banishing \"selfRendering\" entirely from CSpace, for example), but in some situations it appears unavoidable and would be a nice facility to retain on a \"best efforts\" basis.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-02-11T02:38:26.929-0500",
      "body": "Merged into trunk at revision c0e08caca6330298b55c78fe896b6a444e05f55a\n"
    }
  ]
}
---
The following tests are failing on IE10 on the build server:

Renderer-test.html\
RendererUtilities-test.html

The Renderer-related tests seem to failing due to IE recognizing "id" and "rsf:id" as the same attribute. I get messages about the DOCTYPE being invalid as well, perhaps these are related?

ImageReorderer-test.html\
LayoutReorderer-test.html\
FileQueueView-test.html

These seem to be legitimate test failures, and I think are similar to failures on IE8 as well. It looks to me like these failures relate to focus management, but I'm not certain.

        