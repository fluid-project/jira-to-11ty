---json
{
  "title": "FLUID-4966",
  "summary": "In Webkit, the horizontal scroll bar is larger than necessary and scrolling left clips content",
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
  "date": "2013-04-01T14:29:18.798-0400",
  "updated": "2013-04-29T09:25:07.872-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "Safari, Chrome\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2013-04-01T15:40:06.550-0400",
      "body": "For the demo, this hack is fine.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-04-02T13:32:45.572-0400",
      "body": "Doing some more digging, it appears the fl-hidden-accessible class applied to the input element in UIOptionsTemplate-layout.html is causing this problem.\n\nIn fss-layout.css in the framework, deleting the property 'position:absolute' in .fl-hidden-accessible reveals it to be the culprit.\n\nWithout deleting position:absolute (which is needed for properly hiding elements) adding top: 0; and left: 0; properties appears to fix this problem.\n\nTo implement this fix:\n\n1\\. Remove the following script block from /uiOptions/html/FatPanelUIOptionsFrame.html (this was the Webkit specific hack to skirt around this issue):\n\n\\<script type=\"text/javascript\">\\\nvar ua = navigator.userAgent.toLowerCase();\\\nvar uaClass = \"webkit\";\\\nif (ua.indexOf(\"safari\") >= 0 || ua.indexOf(\"chrome\") >= 0) {\\\njQuery(\"document\").ready(function () {\\\njQuery(\"body\").addClass(uaClass);\\\n});\\\n}\\\n\\</script>\n\n\\<style type=\"text/css\">\\\n.webkit.fl-uiOptions-fatPanel {\\\nwidth: 225em;\\\n}\\\n\\</style>\n\n2\\. Load either the UIO demo, or the climate change demo.\\\n3\\. Scroll all the way to the right and then slowly scroll back left.\\\n4\\. Notice excess horizontal space and clipping.\\\n5\\. Edit /framework/fss/css/fss-layout.css and add: \"top:0; left:0;\" to .fl-hidden-accessible\\\n6\\. Refresh the demo.\\\n7\\. Repeat step 3:  Scroll all the way to the right and then slowly scroll back left.\\\n8\\. Notice that the excess space and horizontal clipping is now gone.\n"
    },
    {
      "author": "heidi valles",
      "date": "2013-04-11T13:05:07.090-0400",
      "body": "Check out line 170ish of FatPanelUIOptions.js - some hard-coded styles in there for iframe scrolling. Maybe related?\n\nstyle: \"overflow-x:hidden; overflow-y:auto;\",\n"
    }
  ]
}
---
In Webkit browsers, the horizontal scrollbar is wider than necessary, and scrolling from right to left causes the contents in the UIO panel to be clipped.

To reproduce:\
1\. Remove the following script blocks from components/uiOptions/html/FatPanelUIOptionsFrame.html\
\<script type="text/javascript">\
var ua = navigator.userAgent.toLowerCase();\
var uaClass = "webkit";\
if (ua.indexOf("safari") >= 0 || ua.indexOf("chrome") >= 0) {\
jQuery("document").ready(function () {\
jQuery("body").addClass(uaClass);\
});\
}\
\</script>

\<style type="text/css">\
.webkit.fl-uiOptions-fatPanel {\
width: 225em;\
}\
\</style>

2\. Load either Climate Change or stand-alone demo.\
3\. Open the UIO panel.\
4\. Scroll all the way to the right.\
5\. Notice that there is a lot of extra horizontal space to the right of the UIO panel.\
6\. Scroll back to the left.\
7\. Notice that the UIO panel begins to clip until reaching the left end of the horizontal scroll.

        