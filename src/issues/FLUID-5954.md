---json
{
  "title": "FLUID-5954",
  "summary": "Improve infusion module loading infrastructure to accommodate the use of browserify",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2016-09-12T20:30:33.230-0400",
  "updated": "2016-09-13T08:33:52.146-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the attempt of using browserify (<http://browserify.org/>) to bundle up dependencies for node.js require() statements in order to use kettle in browsers, two issues are encountered with the infusion module loading infrastructure:

Issue 1: The infusion path calculated in fluid.js returns an absolute path instead of a relative path. To reproduce this issue:\
1\. In a terminal, run

```java
npm install -g browserify
```

2\. Check out this GPII universal branch: <https://github.com/cindyli/universal/tree/GPII-1872-browserify>. Then run these commands in the "universal" directory:

```java
cd gpii/node_modules/gpii-oauth2/gpii-oauth2-datastore/src
browserify DbDataStore.js > DbDataStore_browserify.js
```

3\. In a browser, open this html file via a web server: gpii/node\_modules/gpii-oauth2/gpii-oauth2-datastore/test/html/DbDataStoreTests.html

4\. This error is thrown on the page: \
Error: Cannot find module '/node\_modules/infusion/src/module/includes.json'\
Note the absolute path reported in the error.&#x20;

To debug, \
1\. add a console.log debug line to output \_\_dirname in node\_modules/infusion/src/module/fluid.js before the line where includes.json is included: <https://github.com/fluid-project/infusion/blob/master/src/module/fluid.js#L103>;\
2\. Re-run browserify command to include the change into the browserified js;\
3\. Open a browser debugger and refresh the html page.\
4\. Note that \_\_dirname shows an absolute path of "/../../../../../node\_modules/infusion/src/module" instead of a relative path.

Issue 2: fluid.js has a function loadIncludes() to read a json file and dynamically require javascript files listed in there: <https://github.com/fluid-project/infusion/blob/master/src/module/fluid.js#L97> Browserify is not able to perform dynamic requires, at least with a command line: <https://github.com/substack/node-browserify/issues/664>.&#x20;

        