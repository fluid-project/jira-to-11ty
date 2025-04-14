---json
{
  "title": "SJRK-182",
  "summary": "Cannot publish a story with an empty image",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Simon Bates",
  "date": "2019-01-17T10:46:48.229-0500",
  "updated": "2019-01-22T14:20:26.372-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-183/",
      "key": "SJRK-183"
    }
  ],
  "attachments": [],
  "comments": []
}
---
To reproduce:

* Begin a new story
* Add an image block
* Do not upload an image or add any text content
* Click "Continue"
* Click "Preview My Story"
* Click "Publish My Story"

Expect:

* Story to be published and to navigate to the story view page
* Or, for an error message to be displayed

Actual:

* Nothing happens: user stays on Preview page and no messaging is displayed
* Server returns a 500:

```java
{"isError":true,"message":"Cannot read property 'filename' of undefined","stack":"TypeError: Cannot read property 'filename' of undefined\n    at Arguments.<anonymous> (/usr/src/app/src/js/requestHandlers.js:142:44)\n    at transformInternal (/usr/src/app/node_modules/infusion/src/framework/core/js/Fluid.js:498:34)\n    at Object.fluid.transform (/usr/src/app/node_modules/infusion/src/framework/core/js/Fluid.js:523:17)\n    at sjrk.storyTelling.server.handleSaveStoryWithBinaries (/usr/src/app/src/js/requestHandlers.js:133:11)\n    at fluid.componentConstructor.invokeInvoker [as handleRequest] (/usr/src/app/node_modules/infusion/src/framework/core/js/FluidIoC.js:1749:29)\n    at kettle.request.handleRequest (/usr/src/app/node_modules/kettle/lib/KettleRequest.js:166:14)\n    at togo (/usr/src/app/node_modules/infusion/src/framework/core/js/FluidIoC.js:1813:33)\n    at Object.fire (/usr/src/app/node_modules/infusion/src/framework/core/js/Fluid.js:1596:40)\n    at kettle.request.handleRequestTask (/usr/src/app/node_modules/kettle/lib/KettleRequest.js:180:33)\n    at Object.invokeNext (/usr/src/app/node_modules/infusion/src/framework/core/js/FluidPromises.js:185:56)\n    at Function.fluid.promise.resumeSequence (/usr/src/app/node_modules/infusion/src/framework/core/js/FluidPromises.js:165:39)\n    at Function.fluid.promise.progressSequence (/usr/src/app/node_modules/infusion/src/framework/core/js/FluidPromises.js:149:23)\n    at Array.<anonymous> (/usr/src/app/node_modules/infusion/src/framework/core/js/FluidPromises.js:169:35)\n    at Object.that.complete (/usr/src/app/node_modules/infusion/src/framework/core/js/FluidPromises.js:70:25)\n    at Object.that.resolve (/usr/src/app/node_modules/infusion/src/framework/core/js/FluidPromises.js:52:22)\n    at /usr/src/app/node_modules/kettle/lib/KettleMiddleware.js:123:39\n    at Array.<anonymous> (/usr/src/app/node_modules/multer/lib/make-middleware.js:53:37)\n    at listener (/usr/src/app/node_modules/on-finished/index.js:169:15)\n    at onFinish (/usr/src/app/node_modules/on-finished/index.js:100:5)\n    at callback (/usr/src/app/node_modules/ee-first/index.js:55:10)\n    at IncomingMessage.onevent (/usr/src/app/node_modules/ee-first/index.js:93:5)\n    at IncomingMessage.emit (events.js:182:13)\n    at endReadableNT (_stream_readable.js:1086:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)"}
```

        