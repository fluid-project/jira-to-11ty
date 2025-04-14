---json
{
  "title": "FLUID-4239",
  "summary": "UI Options integration demo fails due to an error with fluid.uiOptions.controls",
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
  "reporter": "Justin Obara",
  "date": "2011-05-16T12:02:31.563-0400",
  "updated": "2011-06-20T15:30:36.115-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "IE 8 (Win 7)\\\nIE 7 (Win XP)\\\nFF 4 (Mac OS 10.6, Win 7)\\\nSafari 5 (Mac OS 10.6)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:39:53.743-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-30T16:54:53.706-0400",
      "body": "As well as:\\\nGET <http://localhost/fluid/infusion/src/webapp/integration-demos/sakai/js/sakai.js> 404 (Not Found)\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-31T14:45:11.606-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-4239#icft=FLUID-4239>: Added missing RendererUtilities.js.  Took out jquery.ui.position.js and jquery.ui.draggable.js since they are not needed in this demo.  Also took out sakai.js since the file does not exist.\n\nPull request: <https://github.com/fluid-project/infusion/pull/60>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-31T14:45:45.687-0400",
      "body": "Needs commit\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the UI Options integration demo\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

Note that the component doesn't fully initialize because of the errors.\
I'm not sure if this is a dependency issue or something, because the demo still works.

Here is the Console Log:

Mon May 16 2011 11:55:20 GMT-0400 (EDT): ASSERTION FAILED: Cannot autoInit component fluid.uiOptions.controls which does not have an initFunction and gradeName defined\
Fluid.js (line 135)\
message.fail is not a function\
\[Break On This Error] message.fail(); // Intenti...r by invoking a nonexistent function.\
Fluid.js (line 62)\
Mon May 16 2011 11:55:20 GMT-0400 (EDT): Resolving demands for function names \["fluid.transformOptions"] in context of component fluid.uiEnhancer\
Fluid.js (line 135)\
Mon May 16 2011 11:55:20 GMT-0400 (EDT): Components in scope for resolution: { typeName: "fluid.uiEnhancer" id: 5} { typeName: "fluid.dynamicEnvironment" id: 4} { typeName: "fluid.instantiator" id: 7} { typeName: "fluid.staticEnvironment" id: 2} { typeName: "fluid.browser" id: 3}\
Fluid.js (line 135)\
Mon May 16 2011 11:55:20 GMT-0400 (EDT): Beginning instantiation of component with name "settingsStore" as child of { typeName: "fluid.uiEnhancer" id: 5}\
Fluid.js (line 135)\
Mon May 16 2011 11:55:20 GMT-0400 (EDT): Resolving demands for function names \["fluid.uiEnhancer.cookieStore", "settingsStore"] in context of component fluid.uiEnhancer\
Fluid.js (line 135)\
Mon May 16 2011 11:55:20 GMT-0400 (EDT): Components in scope for resolution: { typeName: "fluid.uiEnhancer" id: 5} { typeName: "fluid.dynamicEnvironment" id: 4} { typeName: "fluid.instantiator" id: 12} { typeName: "fluid.staticEnvironment" id: 2} { typeName: "fluid.browser" id: 3}\
Fluid.js (line 135)\
Mon May 16 2011 11:55:20 GMT-0400 (EDT): No matches found for demands, using direct implementation\
Fluid.js (line 135)\
Mon May 16 2011 11:55:20 GMT-0400 (EDT): Resolving demands for function names \["fluid.transformOptions"] in context of component fluid.uiEnhancer.cookieStore\
Fluid.js (line 135)\
Mon May 16 2011 11:55:20 GMT-0400 (EDT): Components in scope for resolution: { typeName: "fluid.uiEnhancer.cookieStore" id: 15} - path: settingsStore { typeName: "fluid.uiEnhancer" id: 5} { typeName: "fluid.dynamicEnvironment" id: 4} { typeName: "fluid.instantiator" id: 12} { typeName: "fluid.staticEnvironment" id: 2} { typeName: "fluid.browser" id: 3}\
Fluid.js (line 135)\
Mon May 16 2011 11:55:20 GMT-0400 (EDT): Finished instantiation of component with name "settingsStore" as child of { typeName: "fluid.uiEnhancer" id: 5}\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): Resolving demands for function names \["fluid.transformOptions"] in context of component fluid.uiOptions\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): Components in scope for resolution: { typeName: "fluid.uiOptions" id: 17} { typeName: "fluid.dynamicEnvironment" id: 4} { typeName: "fluid.instantiator" id: 19} { typeName: "fluid.staticEnvironment" id: 2} { typeName: "fluid.browser" id: 3}\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): Resolving demands for function names \["fluid.transformOptions"] in context of component fluid.fetchResources\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): Components in scope for resolution: { typeName: "fluid.fetchResources" id: 25} { typeName: "fluid.dynamicEnvironment" id: 4} { typeName: "fluid.instantiator" id: 27} { typeName: "fluid.staticEnvironment" id: 2} { typeName: "fluid.browser" id: 3}\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): Request with key template queued for ../../../components/uiOptions/html/UIOptions.html\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): First request for cached resource with url ../../../components/uiOptions/html/UIOptions.html\
Fluid.js (line 135)\
GET <http://build.fluidproject.org/infusion/components/uiOptions/html/UIOptions.html?_=1305561321027>

200 OK\
108ms	\
jquery.js (line 7829)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): Handling request for ../../../components/uiOptions/html/UIOptions.html from cache\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): Request to URL ../../../components/uiOptions/html/UIOptions.html completed - total elapsed time: 211ms\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): Beginning instantiation of component with name "controls" as child of { typeName: "fluid.uiOptions" id: 17}\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): Resolving demands for function names \["fluid.uiOptions.controls", "controls"] in context of component fluid.uiOptions\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): Components in scope for resolution: { typeName: "fluid.uiOptions" id: 17} { typeName: "fluid.uiEnhancer" id: 5} { typeName: "fluid.dynamicEnvironment" id: 4} { typeName: "fluid.instantiator" id: 20} { typeName: "fluid.staticEnvironment" id: 2} { typeName: "fluid.browser" id: 3}\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): No matches found for demands, using direct implementation\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): ASSERTION FAILED: Error invoking global function: fluid.uiOptions.controls could not be located while instantiating dependent component with name "controls" with record Object { type="fluid.uiOptions.controls", priority="first", more...} as child of Object { typeName="fluid.uiOptions", id=17, more...}\
Fluid.js (line 135)\
Mon May 16 2011 11:55:21 GMT-0400 (EDT): FireEvent received exception message.fail is not a function e TypeError: message.fail is not a function firing to listener 0\
Fluid.js (line 135)\
message.fail is not a function\
\[Break On This Error] message.fail(); // Intenti...r by invoking a nonexistent function.\
Fluid.js (line 62)

        