---json
{
  "title": "FLUID-2320",
  "summary": "Content does not properly render: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-03-09T09:15:45.000-0400",
  "updated": "2009-03-17T09:14:07.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Pager"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-17T09:14:07.000-0400",
      "body": "Appears to have been fixed\n\nTested using:\n\nOpera 9.6 (Mac OS 10.5, Win XP)&#x20;\n"
    }
  ]
}
---
Content does not properly render: using Opera

<http://build.fluidproject.org/fluid/sample-code/pager/sakai-site-setting/site_setting_members.html>

Notice that there are only 3 page links and one item in the content area

This is the error log from Opera 9.6 on the mac

JavaScript\
Timeout thread: delay 13 ms\
09:14:43 GMT-0400:  Error finding root template for fluid.pager.renderedPageList: selector ".ss-members .pager-top .pager-links" with name root returned no results in context \[document: location http\://build.fluidproject.org/fluid/sample-code/pager/sakai-site-setting/site\_setting\_members.html#]\
JavaScript - <http://build.fluidproject.org/fluid/sample-code/pager/sakai-site-setting/site_setting_members.html>\
Timeout thread: delay 13 ms\
Error:\
name: TypeError\
message: Statement on line 32: Type mismatch (usually non-object value supplied where object required)\
Backtrace:\
Line 32 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
message.fail(); // Intentionally cause a browser error by invoking a nonexistent function.\
Line 295 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
fluid.fail(message + ": selector \\"" + result.selector + "\\" with name " + result.selectorName\
Line 162 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Pager.js>\
fluid.expectFilledSelector(root, "Error finding root template for fluid.pager.renderedPageList");\
...  Line 518 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
else return func.apply(null, args);\
Line 403 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
togo\[i] = entry.apply(null, args);\
Line 352 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
return fluid.initSubcomponents(that, className, args)\[0];\
Line 218 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Pager.js>\
that.pageList = fluid.initSubcomponent(that, "pageList", \
...  Line 518 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
else return func.apply(null, args);\
Line 403 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
togo\[i] = entry.apply(null, args);\
Line 352 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
return fluid.initSubcomponents(that, className, args)\[0];\
Line 669 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Pager.js>\
that.pagerBar = fluid.initSubcomponent(that, "pagerBar", \
...  Line 54 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Pager.js>\
return fluid.pagerImpl.apply(null, arguments);\
Line 82 of linked script <http://build.fluidproject.org/fluid/sample-code/pager/sakai-site-setting/js/site_setting_members.js:> In function initPager\
var pager = fluid.pager(".ss-members", {\
Line 394 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/renderer/fluidParser.js>\
callback(resourceSpecs);\
Line 361 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/renderer/fluidParser.js>\
fluid.fetchResources(resourceSpecs, callback);\
Line 3523 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js:> In function success\
s.success( data, status );\
Line 3480 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js>\
success();\
...\
stacktrace: n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'\
JavaScript - <http://build.fluidproject.org/fluid/sample-code/pager/sakai-site-setting/site_setting_members.html>\
Timeout thread: delay 13 ms\
Error:\
name: TypeError\
message: Statement on line 32: Type mismatch (usually non-object value supplied where object required)\
Backtrace:\
Line 32 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
message.fail(); // Intentionally cause a browser error by invoking a nonexistent function.\
Line 295 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
fluid.fail(message + ": selector \\"" + result.selector + "\\" with name " + result.selectorName\
Line 162 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Pager.js>\
fluid.expectFilledSelector(root, "Error finding root template for fluid.pager.renderedPageList");\
...  Line 518 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
else return func.apply(null, args);\
Line 403 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
togo\[i] = entry.apply(null, args);\
Line 352 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
return fluid.initSubcomponents(that, className, args)\[0];\
Line 218 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Pager.js>\
that.pageList = fluid.initSubcomponent(that, "pageList", \
...  Line 518 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
else return func.apply(null, args);\
Line 403 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
togo\[i] = entry.apply(null, args);\
Line 352 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Fluid.js>\
return fluid.initSubcomponents(that, className, args)\[0];\
Line 669 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Pager.js>\
that.pagerBar = fluid.initSubcomponent(that, "pagerBar", \
...  Line 54 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/Pager.js>\
return fluid.pagerImpl.apply(null, arguments);\
Line 82 of linked script <http://build.fluidproject.org/fluid/sample-code/pager/sakai-site-setting/js/site_setting_members.js:> In function initPager\
var pager = fluid.pager(".ss-members", {\
Line 394 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/renderer/fluidParser.js>\
callback(resourceSpecs);\
Line 361 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/renderer/fluidParser.js>\
fluid.fetchResources(resourceSpecs, callback);\
Line 3523 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js:> In function success\
s.success( data, status );\
Line 3480 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js>\
success();\
...\
stacktrace: n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

        