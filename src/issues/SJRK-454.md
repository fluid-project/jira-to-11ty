---json
{
  "title": "SJRK-454",
  "summary": "Server error on Edit page load after logging in",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2021-02-25T15:05:43.701-0500",
  "updated": "2022-07-29T00:09:24.648-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When accessing the Edit page after logging in, an error on the server seems to end the author's session prematurely, resulting in the author being logged out and redirected to the Login page once again. This seems to occur if accessing the Edit page from a different page after logging in, as well.

**To reproduce:**\
1\. Check out the affected code from Gregor's SJRK-404 branch: <https://github.com/BlueSlug/sjrk-story-telling/tree/17ea3f34b6443a30d81c97c011aa160f39d01bec>\
2\. Run the database container: `docker run -p 5984:5984 -d apache/couchdb:2.3.1`\
3\. Set up the database: `node .\src\server\db\dbSetup.js`\
4\. Run the server: `npm start`\
5\. Go to the Edit page: <http://localhost:8081/storyEdit.html>\
6\. Click the "Log In" link at the top right of the page, you will be redirected to the Login page\
7\. Log in using some valid credentials. You may first need to create an account on the Signup page (<http://localhost:8081/signup.html>), which will log you in automatically on successful registration

**Expected**\
The Edit page is loaded and you may commence authoring a story

**Actual**\
The Edit page loads partially, then you are logged out and redirected to the Login page

**Server error detail:**

```java
14:50:41.059:  Kettle server allocated request object with type sjrk.storyTelling.server.themeHandler
14:50:41.062:  Invoking handler sjrk.storyTelling.server.sessionHandler for route /session with expectedGrade kettle.request.http
14:50:41.068:  Kettle server allocated request object with type sjrk.storyTelling.server.sessionHandler
14:50:41.071:  Invoking handler sjrk.storyTelling.server.themeHandler for route /* with expectedGrade kettle.request.http
14:50:41.076:  ASSERTION FAILED: Error marking thread to request 4qtlz9qr-259219 - this thread is already marked to request 4qtlz9qr-259197 . Make sure to invoke this request asynchronously.
14:50:41.080:  Unhandled promise rejection: {
    "isError": true,
    "message": "Error marking thread to request 4qtlz9qr-259219 - this thread is already marked to request 4qtlz9qr-259197 . Make sure to invoke this request asynchronously."
}
14:50:41.081:  Error in forwarding result undefined to promise resolve: promise has already received reject
14:50:41.086:  Invoking handler sjrk.storyTelling.server.themeHandler for route /* with expectedGrade kettle.request.http
14:50:41.092:  Kettle server allocated request object with type sjrk.storyTelling.server.themeHandler
14:50:41.096:  Invoking handler sjrk.storyTelling.server.themeHandler for route /* with expectedGrade kettle.request.http
14:50:41.102:  Kettle server allocated request object with type sjrk.storyTelling.server.themeHandler
Error: Assertion failure - check console for more details: Error marking thread to request 4qtlz9qr-259219 - this thread is already marked to request 4qtlz9qr-259197 . Make sure to invoke this request asynchronously.
    at new fluid.FluidError (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\Fluid.js:184:26)
    at Object.fluid.builtinFail (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\Fluid.js:208:15)
    at kettle.failureHandler (X:\Documents\GitHub\sjrk-story-telling\node_modules\kettle\lib\KettleUtils.js:60:11)
    at fluid.event.firer.fire (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\Fluid.js:1769:40)
    at Object.fluid.fail (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\Fluid.js:224:32)
    at Object.kettle.markActiveRequest (X:\Documents\GitHub\sjrk-story-telling\node_modules\kettle\lib\KettleRequest.js:75:15)
    at kettle.request.activate (X:\Documents\GitHub\sjrk-story-telling\node_modules\kettle\lib\KettleRequest.js:239:12)
    at fluid.event.firer.fire (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\Fluid.js:1769:40)
    at fluid.concludeComponentInit (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidIoC.js:1527:30)
    at X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidIoC.js:2198:29
    at Array.forEach (<anonymous>)
    at localWorkflowTask (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidIoC.js:2197:41)
    at Object.invokeNext (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidPromises.js:258:56)
    at Function.fluid.promise.resumeSequence (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidPromises.js:238:39)
    at Function.fluid.promise.progressSequence (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidPromises.js:219:23)
    at Function.fluid.promise.resumeSequence (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidPromises.js:247:31)
    at Function.fluid.promise.progressSequence (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidPromises.js:219:23)
    at Function.fluid.promise.resumeSequence (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidPromises.js:247:31)
    at Function.fluid.promise.progressSequence (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidPromises.js:219:23)
    at Function.fluid.promise.resumeSequence (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidPromises.js:247:31)
    at commitPotentiae (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidIoC.js:2319:31)
    at Object.fluid.tryCatch (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\Fluid.js:243:24)
    at Object.fluid.commitPotentiae (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidIoC.js:2304:15)
    at fluid.concludeAnyTreeTransaction (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\FluidIoC.js:1420:19)
    at fluid.event.firer.fire (X:\Documents\GitHub\sjrk-story-telling\node_modules\infusion\src\framework\core\js\Fluid.js:1769:40)
    at Function.kettle.server.checkCreateRequest (X:\Documents\GitHub\sjrk-story-telling\node_modules\kettle\lib\KettleServer.js:211:51)
    at Proxy.<anonymous> (X:\Documents\GitHub\sjrk-story-telling\node_modules\kettle\lib\KettleServer.js:232:35)
    at X:\Documents\GitHub\sjrk-story-telling\node_modules\kettle\lib\KettleServer.js:280:14
    at Layer.handle [as handle_request] (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\layer.js:95:5)
    at trim_prefix (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:317:13)
    at X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:284:7
    at Function.process_params (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:335:12)
    at next (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:275:10)
    at expressInit (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\middleware\init.js:40:5)
    at Layer.handle [as handle_request] (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\layer.js:95:5)
    at trim_prefix (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:317:13)
    at X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:284:7
    at Function.process_params (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:335:12)
    at next (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:275:10)
    at query (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\middleware\query.js:45:5)
    at Layer.handle [as handle_request] (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\layer.js:95:5)
    at trim_prefix (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:317:13)
    at X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:284:7
    at Function.process_params (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:335:12)
    at next (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:275:10)
    at Function.handle (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\router\index.js:174:3)
    at Function.handle (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\application.js:174:10)
    at Server.app (X:\Documents\GitHub\sjrk-story-telling\node_modules\express\lib\express.js:39:9)
    at Server.emit (events.js:314:20)
    at parserOnIncoming (_http_server.js:863:12)
    at HTTPParser.parserOnHeadersComplete (_http_common.js:126:17)
```

**Browser error detail:**

```java
GET http://localhost:8081/session 500 (Internal Server Error)
fluid.dataSource.URL.handleHttp	@	infusion-all.js:24824
invokeInvoker	@	infusion-all.js:17522
fluid.dataSource.URL.handle	@	infusion-all.js:14137
togo	@	infusion-all.js:17592
invokeNext	@	infusion-all.js:13735
fluid.promise.resumeSequence	@	infusion-all.js:13696
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.fireTransformEvent	@	infusion-all.js:13792
fluid.dataSource.get	@	infusion-all.js:13964
invokeInvoker	@	infusion-all.js:17522
sjrk.storyTelling.ui.authorControls.checkSession	@	ui-authorControls.js:88
invokeInvoker	@	infusion-all.js:17522
fluid.event.invokeListener	@	infusion-all.js:19742
togo	@	infusion-all.js:19764
fluid.model.notifyExternal	@	infusion-all.js:19499
fluid.concludeModelTransaction	@	infusion-all.js:19537
fire	@	infusion-all.js:12120
commit	@	infusion-all.js:20417
that.fireChangeRequest	@	infusion-all.js:20363
that.change	@	infusion-all.js:20216
(anonymous)	@	base-page.js:271
fluid.promise.pushHandler	@	infusion-all.js:13559
that.then	@	infusion-all.js:13509
sjrk.storyTelling.base.page.getStoredPreferences	@	base-page.js:269
togo	@	infusion-all.js:17592
fire	@	infusion-all.js:12120
fluid.concludeComponentInit	@	infusion-all.js:16361
(anonymous)	@	infusion-all.js:16982
localWorkflowTask	@	infusion-all.js:16981
invokeNext	@	infusion-all.js:13714
fluid.promise.resumeSequence	@	infusion-all.js:13696
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
commitPotentiae	@	infusion-all.js:17097
fluid.tryCatch	@	infusion-all.js:10798
fluid.commitPotentiae	@	infusion-all.js:17081
fluid.initFreeComponent	@	infusion-all.js:13315
creator	@	infusion-all.js:12626
sjrk.storyTelling.loadStoryEditWithParameter	@	storyTellingServerUI.js:125
that.complete	@	infusion-all.js:13547
that.resolve	@	infusion-all.js:13520
that.complete	@	infusion-all.js:13547
that.resolve	@	infusion-all.js:13520
(anonymous)	@	storyTellingServerUI.js:217
fire	@	infusion-all.js:2510
fireWith	@	infusion-all.js:2618
done	@	infusion-all.js:7130
(anonymous)	@	infusion-all.js:7324
load (async)		
send	@	infusion-all.js:7338
ajax	@	infusion-all.js:7048
jQuery.each.jQuery.<computed>	@	infusion-all.js:7168
getScript	@	infusion-all.js:7156
sjrk.storyTelling.loadCustomThemeFiles	@	storyTellingServerUI.js:216
(anonymous)	@	storyTellingServerUI.js:181
mightThrow	@	infusion-all.js:2716
process	@	infusion-all.js:2758
setTimeout (async)		
(anonymous)	@	infusion-all.js:2789
fire	@	infusion-all.js:2510
fireWith	@	infusion-all.js:2618
fire	@	infusion-all.js:2625
fire	@	infusion-all.js:2510
fireWith	@	infusion-all.js:2618
done	@	infusion-all.js:7130
(anonymous)	@	infusion-all.js:7324
load (async)		
send	@	infusion-all.js:7338
ajax	@	infusion-all.js:7048
jQuery.each.jQuery.<computed>	@	infusion-all.js:7168
sjrk.storyTelling.loadTheme	@	storyTellingServerUI.js:180
(anonymous)	@	storyEdit.html:152
mightThrow	@	infusion-all.js:2716
process	@	infusion-all.js:2758
setTimeout (async)		
(anonymous)	@	infusion-all.js:2789
fire	@	infusion-all.js:2510
fireWith	@	infusion-all.js:2618
fire	@	infusion-all.js:2625
fire	@	infusion-all.js:2510
fireWith	@	infusion-all.js:2618
ready	@	infusion-all.js:2936
completed	@	infusion-all.js:2944
```

```java
POST http://localhost:8081/logout 500 (Internal Server Error)
send	@	infusion-all.js:7365
ajax	@	infusion-all.js:7048
sjrk.storyTelling.base.page.logOut	@	base-page.js:335
sjrk.storyTelling.base.page.initiateLogout	@	base-page.js:317
invokeInvoker	@	infusion-all.js:17522
togo	@	infusion-all.js:17592
togo	@	infusion-all.js:17592
fire	@	infusion-all.js:12120
that.complete	@	infusion-all.js:13547
that.reject	@	infusion-all.js:13533
fluid.promise.processSequenceReject	@	infusion-all.js:13687
(anonymous)	@	infusion-all.js:13702
that.complete	@	infusion-all.js:13547
that.reject	@	infusion-all.js:13533
sendError	@	infusion-all.js:24808
(anonymous)	@	infusion-all.js:24813
load (async)		
fluid.dataSource.URL.handleHttp	@	infusion-all.js:24811
invokeInvoker	@	infusion-all.js:17522
fluid.dataSource.URL.handle	@	infusion-all.js:14137
togo	@	infusion-all.js:17592
invokeNext	@	infusion-all.js:13735
fluid.promise.resumeSequence	@	infusion-all.js:13696
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.fireTransformEvent	@	infusion-all.js:13792
fluid.dataSource.get	@	infusion-all.js:13964
invokeInvoker	@	infusion-all.js:17522
sjrk.storyTelling.ui.authorControls.checkSession	@	ui-authorControls.js:88
invokeInvoker	@	infusion-all.js:17522
fluid.event.invokeListener	@	infusion-all.js:19742
togo	@	infusion-all.js:19764
fluid.model.notifyExternal	@	infusion-all.js:19499
fluid.concludeModelTransaction	@	infusion-all.js:19537
fire	@	infusion-all.js:12120
commit	@	infusion-all.js:20417
that.fireChangeRequest	@	infusion-all.js:20363
that.change	@	infusion-all.js:20216
(anonymous)	@	base-page.js:271
fluid.promise.pushHandler	@	infusion-all.js:13559
that.then	@	infusion-all.js:13509
sjrk.storyTelling.base.page.getStoredPreferences	@	base-page.js:269
togo	@	infusion-all.js:17592
fire	@	infusion-all.js:12120
fluid.concludeComponentInit	@	infusion-all.js:16361
(anonymous)	@	infusion-all.js:16982
localWorkflowTask	@	infusion-all.js:16981
invokeNext	@	infusion-all.js:13714
fluid.promise.resumeSequence	@	infusion-all.js:13696
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
fluid.promise.progressSequence	@	infusion-all.js:13678
fluid.promise.resumeSequence	@	infusion-all.js:13705
commitPotentiae	@	infusion-all.js:17097
fluid.tryCatch	@	infusion-all.js:10798
fluid.commitPotentiae	@	infusion-all.js:17081
fluid.initFreeComponent	@	infusion-all.js:13315
creator	@	infusion-all.js:12626
sjrk.storyTelling.loadStoryEditWithParameter	@	storyTellingServerUI.js:125
that.complete	@	infusion-all.js:13547
that.resolve	@	infusion-all.js:13520
that.complete	@	infusion-all.js:13547
that.resolve	@	infusion-all.js:13520
(anonymous)	@	storyTellingServerUI.js:217
fire	@	infusion-all.js:2510
fireWith	@	infusion-all.js:2618
done	@	infusion-all.js:7130
(anonymous)	@	infusion-all.js:7324
load (async)		
send	@	infusion-all.js:7338
ajax	@	infusion-all.js:7048
jQuery.each.jQuery.<computed>	@	infusion-all.js:7168
getScript	@	infusion-all.js:7156
sjrk.storyTelling.loadCustomThemeFiles	@	storyTellingServerUI.js:216
(anonymous)	@	storyTellingServerUI.js:181
mightThrow	@	infusion-all.js:2716
process	@	infusion-all.js:2758
setTimeout (async)		
(anonymous)	@	infusion-all.js:2789
fire	@	infusion-all.js:2510
fireWith	@	infusion-all.js:2618
fire	@	infusion-all.js:2625
fire	@	infusion-all.js:2510
fireWith	@	infusion-all.js:2618
done	@	infusion-all.js:7130
(anonymous)	@	infusion-all.js:7324
load (async)		
send	@	infusion-all.js:7338
ajax	@	infusion-all.js:7048
jQuery.each.jQuery.<computed>	@	infusion-all.js:7168
sjrk.storyTelling.loadTheme	@	storyTellingServerUI.js:180
(anonymous)	@	storyEdit.html:152
mightThrow	@	infusion-all.js:2716
process	@	infusion-all.js:2758
setTimeout (async)		
(anonymous)	@	infusion-all.js:2789
fire	@	infusion-all.js:2510
fireWith	@	infusion-all.js:2618
fire	@	infusion-all.js:2625
fire	@	infusion-all.js:2510
fireWith	@	infusion-all.js:2618
ready	@	infusion-all.js:2936
completed	@	infusion-all.js:2944
```

        