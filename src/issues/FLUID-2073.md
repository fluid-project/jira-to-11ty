---json
{
  "title": "FLUID-2073",
  "summary": "Ensure graceful degradation for \"unsupported\" browsers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2009-01-06T15:46:00.000-0500",
  "updated": "2009-01-09T12:48:57.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2073/FLUID-2073.a.patch",
      "filename": "FLUID-2073.a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2073/FLUID-2073.b.patch",
      "filename": "FLUID-2073.b.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-06T15:46:06.000-0500",
      "body": "Bug Parade 0.7 release&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-08T12:17:10.000-0500",
      "body": "Very simple test for IE and Flash 9 defaulting to standard http upload. Doesn't feel that we need anything more flexible or slick considering the temporary-ness of this fix.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-09T09:50:18.000-0500",
      "body": "Here's a trivial variant on Eli's <https://fluidproject.atlassian.net/browse/FLUID-2073#icft=FLUID-2073>.a.patch. This is entirely cosmetic; I have verified that both patches work as expected.\n\nThis patch removes the !<, which is the same as >. It removes on unneeded set of brackets. Two comments are added for clarity. The FlashMajorVersion variable was renamed flashVersion to use consistent casing and reflect the same variable name used in the SWFUploadSetupDecorator.\n\nIt's all stylistic, and super-trivial. Great patch from Eli.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-09T11:17:26.000-0500",
      "body": "Committed the <https://fluidproject.atlassian.net/browse/FLUID-2073#icft=FLUID-2073>.b.patch. Looks good. Thanks for the tweaks!\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-09T11:20:04.000-0500",
      "body": "Should have mentioned explicitly what this fix does.&#x20;\n\nIn all supported browsers except IE the Uploader will show up with either Flash 9 or with Flash 10. \\\nIn the IEs, Uploader will only show up with Flash 10.\n\nOtherwise in all cases, the user will be presented with a standard http file upload form element.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-09T12:48:57.000-0500",
      "body": "Verified using:\n\nIE 6, IE 7 (Win XP , Flash 10 and Flash 9)\\\nIE 7 (Win Vista, Flash  9)\n"
    }
  ]
}
---
Ensure graceful degradation for "unsupported" browsers

You can view the uploader compatibility chart on the wiki\
<http://wiki.fluidproject.org/display/fluid/Uploader+Compatibility+Chart>

        