---json
{
  "title": "ENGAGE-179",
  "summary": "Duplicate attributes error when trying to use the browse component with image reorderer",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Svetoslav Nedkov",
  "date": "2009-11-02T10:38:16.000-0500",
  "updated": "2009-11-03T10:49:12.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Browse"
  ],
  "environment": "Mandriva Linux 2009, Apache Tomcat 6.0.18, Firefox 3.0.14, Firebug 1.4.3\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-179/fluid-engage-mycollection-tryout.zip",
      "filename": "fluid-engage-mycollection-tryout.zip"
    }
  ],
  "comments": [
    {
      "author": "Svetoslav Nedkov",
      "date": "2009-11-03T08:38:07.000-0500",
      "body": "My collection tryout failing with duplicate attributes\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2009-11-03T08:39:16.000-0500",
      "body": "It seems I have accidently found a solution for this problem although I'm not sure why it works now. The solution was to move the image reorderer related code after the rendering code (this was the original order but the call to the rendering code seems to be asynchronous).\n\nAnyway for completeness I'm attaching my part of the application before the changes that fix that problem.\n\nThe structure of my code is:\n\n/project root\\\nmyCollection.json                 - JSON file\\\n/services\\\n/myCollection\\\n/js\\\nmyCollection.js               - server side javascript\\\n/engage-core\\\n/components\\\n/myCollection\\\n/html\\\nmyCollection.html        - HTML file\\\n/js\\\nmyCollection.js             - javascript\n\nTo run this it needs to be placed in the fluid-engage directory structure.\n\nI guess that in order to reproduce the error you need to simply access:\n\nhttp://host:port/fluid-engage-mycollection-tryout/artifacts/myCollection.html\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2009-11-03T10:49:12.000-0500",
      "body": "The problem was worked around.\n"
    }
  ]
}
---
This problems occurs when first reorderImages is invoked on an element class and then renderSelf is invoked on a containing element having the flc-browse-contents class.

The call to renderSelf inserts aria attributes among others that start with "aria-". Those attributes, even if they differ are treated as the same by the parser.

The error message follows:

17:34:05 GMT+0200 (EET): Error parsing template: Attribute: duplicate attributes not allowed at line 5Fluid.js (line 710)\
17:34:05 GMT+0200 (EET): Just read: aria-labelledby="fluid-id-2" Fluid.js (line 710)\
17:34:05 GMT+0200 (EET): Still to read: aria-dropeffect="none" aria-grFluid.js (line 710)\
17:34:05 GMT+0200 (EET): Error parsing template: Attribute: duplicate attributes not allowed at line 5Fluid.js (line 710)

        