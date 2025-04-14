---json
{
  "title": "FLUID-2261",
  "summary": "UI Options example throws an error on load: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-02-18T11:46:39.000-0500",
  "updated": "2009-02-23T12:34:17.000-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2260/",
      "key": "FLUID-2260",
      "summary": "Activating the Reset or Cancel button will remove all elements of the UI Options dialog: using Opera"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-18T11:47:54.000-0500",
      "body": "may be related to <https://fluidproject.atlassian.net/browse/FLUID-2260#icft=FLUID-2260>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-23T12:34:17.000-0500",
      "body": "Appears to have been fixed\n\nTested using:\n\n9.5, 9.6 (Mac OS 10.5)\n"
    }
  ]
}
---
UI Options example throws an error on load

Steps to reproduce:

1\) Open the UI Options example\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

Notice that an error is thrown on load.

Error Log:

JavaScript - <http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>\
Event thread: DOMContentLoaded\
Error:\
name: TypeError\
message: Statement on line 1173: Cannot convert undefined or null to Object\
Backtrace:\
Line 1173 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js>\
function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}\
Line 1139 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js>\
var value = callback( elems\[ i ], i );\
Line 1176 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js>\
var ret = jQuery.map( this, fn );\
Line 152 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/UIOptions.js>\
var previewFrame = that.locate("previewFrame").contents();\
Line 162 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/UIOptions.js>\
updatePreview(that.model);\
Line 169 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/UIOptions.js>\
initPreview(that);    \
Line 213 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/UIOptions.js>\
template = setupUIOptions(that);\
Line 3 of inline#2 script in <http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>\
fluid.uiOptions(".uiOptions");\
...  Line 2912 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js>\
this.call( document, jQuery );\
...  Line 685 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js>\
for ( var value = object\[0];\
Line 2911 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js>\
jQuery.each( jQuery.readyList, function(){\
Line 2936 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js>\
jQuery.ready();\
...\
stacktrace: n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

        