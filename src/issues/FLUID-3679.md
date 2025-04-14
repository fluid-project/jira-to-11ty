---json
{
  "title": "FLUID-3679",
  "summary": "JavaScript error \"'script.parentNode' is null or not an object\" on IE when running multiple instances of fluid (swfobject.js)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Andrew Wills",
  "date": "2010-07-30T17:55:53.326-0400",
  "updated": "2010-09-08T13:42:56.310-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2beta1",
    "1.2"
  ],
  "fixVersions": [
    "1.1.3",
    "1.2.1",
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": "IE browser, all versions (afaik)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3679/FLUID-3679-trunk.patch.txt",
      "filename": "FLUID-3679-trunk.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2010-08-24T14:25:46.433-0400",
      "body": "Replaced SWFObject v2.1 to SWFObject v2.2.  Changed the version number on the readme file and the swfobject-LICENSE file.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-09-08T13:42:56.266-0400",
      "body": "Committed and available to trunk, 1.1.3, 1.2.1, and 1.3. &#x20;\n"
    }
  ]
}
---
The swfobject.js dependency, included with Fluid Infusion, causes A JavaScript error on IE browsers when you run more than 1 copy of fluid on a page.  (Note:  this is something we do commonly in uPortal – each portlet loads & uses its own copy.)

The error is caused when JS attempts to call 'script.parentNode.removeChild(script)' on the same element more than once.

Eyeballing the code, it looks as though this issue is fixed in swfobject 2.2:  <http://code.google.com/p/swfobject/downloads/detail?name=swfobject_2_2.zip>

Would it be possible to bump the embedded version of swfobject to 2.2?

*
  *
    *
      *
        * OFFENDING CODE \*\*\*\*\*\
          /\* Cross-browser onDomLoad
* Based on Dean Edwards' solution: <http://dean.edwards.name/weblog/2006/06/again/>
* Will fire an event as soon as the DOM of a page is loaded (supported by Gecko based browsers - like Firefox -, IE, Opera9+, Safari)\
  \*/\
  var onDomLoad = function() {\
  if (!ua.w3cdom) {\
  return;\
  }\
  addDomLoadEvent(main);\
  if (ua.ie && ua.win) {\
  try { // Avoid a possible Operation Aborted error\
  doc.write("\<scr" + "ipt id=\_\_ie\_ondomload defer=true src=//:>\</scr" + "ipt>"); // String is split into pieces to avoid Norton AV to add code that can cause errors\
  script = getElementById("\_\_ie\_ondomload");\
  if (script) {\
  addListener(script, "onreadystatechange", checkReadyState);\
  }\
  }\
  catch(e) {}\
  }\
  if (ua.webkit && typeof doc.readyState != UNDEF) {\
  timer = setInterval(function() { if (/loaded|complete/.test(doc.readyState)) { callDomLoadFunctions(); }}, 10);\
  }\
  if (typeof doc.addEventListener != UNDEF) {\
  doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, null);\
  }\
  addLoadEvent(callDomLoadFunctions);\
  }();

function checkReadyState() {

if (script.readyState == "complete") {\
script.parentNode.removeChild(script);\
callDomLoadFunctions();\
}\
} \
\*\*\*\*\*

        