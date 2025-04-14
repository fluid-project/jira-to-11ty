---json
{
  "title": "KETTLE-27",
  "summary": "Expose further lifecycle points from Kettle server to allow cooperation with external express apps",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-12-17T11:28:08.230-0500",
  "updated": "2015-07-02T18:08:58.716-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-07-02T18:08:58.684-0400",
      "body": "Merged into trunk at revision e79bb81196df68c97eaa9f96c485a4321b69af75\n"
    }
  ]
}
---
We are working on the OAuth2 integration for the cloud-based flow manager in GPII. This involves co-locating a traditionally-written express application (AuthServer.js) within the same express app as the surrounding Kettle app for the GPII. We ran into an obscure-seeming issue where, whenever any kind of routed handler (e.g. one registered with app.get or app.post etc.) was registered before the bodyParser middleware, ALL such handlers ended up notified before the body parsing process was complete. Here are some traces:

A correct trace leading to matchPost with a valid request body:

at gpii.flatMatchMaker.matchPost (E:\source\gits\gpii\node\_modules\universal\gpii\node\_modules\flatMatchMaker\src\FlatMatchMaker.js:70:21)\
at invokeInvoker (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1649:29)\
at E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1865:20\
at Object.fluid.tryCatch (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:219:24)\
at fluid.withEnvironment (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1860:22)\
at Object.fluid.event.invokeListener (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1052:25)\
at togo (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1707:36)\
at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
at that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)\
at Object.fluid.fireEvent (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1210:24)\
at Object.fluid.initDependent (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1301:15)\
at E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1322:23\
at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
at Object.that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)\
at kettle.requests.handleRequest (E:\source\gits\gpii\node\_modules\universal\node\_modules\kettle\lib\request.js:76:31)\
at Object.invoke (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1608:25)\
at invokeInvoker (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1635:32)\
at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
at Object.that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)

*
  * &#x20;  at E:\source\gits\gpii\node\_modules\universal\node\_modules\kettle\lib\server.js:140:46\
    &#x20;   at callbacks (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:164:37)\
    &#x20;   at param (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:138:11)\
    &#x20;   at pass (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:145:5)\
    &#x20;   at Router.\_dispatch (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:173:5)\
    &#x20;   at Object.router (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:33:10)\
    &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)
  * &#x20; at urlencoded (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\middleware\urlencoded.js:38:27)\
    &#x20;   at E:\source\gits\gpii\node\_modules\universal\node\_modules\kettle\lib\middleware.js:136:17\
    &#x20;   at E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\middleware\json.js:81:7\
    &#x20;   at IncomingMessage.onEnd (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\node\_modules\raw-body\index.js:109:7)\
    &#x20;   at IncomingMessage.g (events.js:180:16)\
    &#x20;   at IncomingMessage.emit (events.js:92:17)\
    &#x20;   at \_stream\_readable.js:938:16\
    &#x20;   at process.\_tickCallback (node.js:419:13)

An erroneous trace, resulting in an empty body:

at gpii.flatMatchMaker.matchPost (E:\source\gits\gpii\node\_modules\universal\gpii\node\_modules\flatMatchMaker\src\FlatMatchMaker.js:70:21)\
at invokeInvoker (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1649:29)\
at E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1865:20\
at Object.fluid.tryCatch (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:219:24)\
at fluid.withEnvironment (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1860:22)\
at Object.fluid.event.invokeListener (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1052:25)\
at togo (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1707:36)\
at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
at that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)\
at Object.fluid.fireEvent (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1210:24)\
at Object.fluid.initDependent (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1301:15)\
at E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1322:23\
at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
at Object.that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)\
at kettle.requests.handleRequest (E:\source\gits\gpii\node\_modules\universal\node\_modules\kettle\lib\request.js:76:31)\
at Object.invoke (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1608:25)\
at invokeInvoker (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1635:32)\
at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
at Object.that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)

*
  * &#x20;  at E:\source\gits\gpii\node\_modules\universal\node\_modules\kettle\lib\server.js:140:46\
    &#x20;   at callbacks (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:164:37)\
    &#x20;   at param (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:138:11)\
    &#x20;   at pass (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:145:5)\
    &#x20;   at Router.\_dispatch (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:173:5)\
    &#x20;   at Object.router (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:33:10)\
    &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)
  * &#x20;  at SessionStrategy.strategy.pass (E:\source\gits\gpii\node\_modules\universal\node\_modules\passport\lib\middleware\authenticate.js:318:9)\
    &#x20;   at SessionStrategy.authenticate (E:\source\gits\gpii\node\_modules\universal\node\_modules\passport\lib\strategies\session.js:67:10)\
    &#x20;   at attempt (E:\source\gits\gpii\node\_modules\universal\node\_modules\passport\lib\middleware\authenticate.js:341:16)\
    &#x20;   at Object.authenticate \[as handle] (E:\source\gits\gpii\node\_modules\universal\node\_modules\passport\lib\middleware\authenticate.js:342:7)\
    &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)\
    &#x20;   at Object.initialize \[as handle] (E:\source\gits\gpii\node\_modules\universal\node\_modules\passport\lib\middleware\initialize.js:62:5)\
    &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)\
    &#x20;   at Object.session \[as handle] (E:\source\gits\gpii\node\_modules\universal\node\_modules\express-session\index.js:361:7)\
    &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)\
    &#x20;   at Object.urlencodedParser \[as handle] (E:\source\gits\gpii\node\_modules\universal\node\_modules\body-parser\lib\types\urlencoded.js:72:36)\
    &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)\
    &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:168:78)
  * &#x20;  at kettle.requests.request.http.proceed (E:\source\gits\gpii\node\_modules\universal\node\_modules\kettle\lib\request.js:184:9)\
    &#x20;   at invokeInvoker (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1649:29)\
    &#x20;   at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
    &#x20;   at that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)\
    &#x20;   at Object.fluid.fireEvent (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1210:24)\
    &#x20;   at Object.fluid.initDependent (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1301:15)\
    &#x20;   at listener (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:589:27)\
    &#x20;   at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
    &#x20;   at Object.that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)\
    &#x20;   at Object.handle (E:\source\gits\gpii\node\_modules\universal\node\_modules\kettle\lib\server.js:260:38)\
    &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)\
    &#x20;   at Object.expressInit \[as handle] (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\middleware.js:30:5)\
    &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)\
    &#x20;   at Object.query \[as handle] (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\middleware\query.js:45:5)\
    &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)\
    &#x20;   at Function.app.handle (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:201:3)\
    &#x20;   at Server.app (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\connect.js:65:37)\
    &#x20;   at Server.emit (events.js:98:17)\
    &#x20;   at HTTPParser.parser.onIncoming (http.js:2108:12)\
    &#x20;   at HTTPParser.parserOnHeadersComplete \[as onHeadersComplete] (http.js:121:23)\
    &#x20;   at Socket.socket.ondata (http.js:1966:22)\
    &#x20;   at TCP.onread (net.js:527:27)

Points labelled "\*\*" correspond to dispatches into Kettle code, and points labelled "--" represent points of divergence between the traces. Removing the "require" statement for the standalone bodyParser used by the auth server resulted in this 3rd variant trace:

Error\
at gpii.flatMatchMaker.matchPost (E:\source\gits\gpii\node\_modules\universal\gpii\node\_modules\flatMatchMaker\src\FlatMatchMaker.js:70:21)\
at invokeInvoker (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1649:29)\
at E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1865:20\
at Object.fluid.tryCatch (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:219:24)\
at fluid.withEnvironment (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1860:22)\
at Object.fluid.event.invokeListener (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1052:25)\
at togo (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1707:36)\
at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
at that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)\
at Object.fluid.fireEvent (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1210:24)\
at Object.fluid.initDependent (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1301:15)\
at E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1322:23\
at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
at Object.that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)\
at kettle.requests.handleRequest (E:\source\gits\gpii\node\_modules\universal\node\_modules\kettle\lib\request.js:76:31)\
at Object.invoke (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1608:25)\
at invokeInvoker (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1635:32)\
at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
at Object.that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)

*
  * &#x20;  at E:\source\gits\gpii\node\_modules\universal\node\_modules\kettle\lib\server.js:141:46\
    &#x20;   at callbacks (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:164:37)\
    &#x20;   at param (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:138:11)\
    &#x20;   at pass (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:145:5)\
    &#x20;   at Router.\_dispatch (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:173:5)\
    &#x20;   at Object.router (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\router\index.js:33:10)\
    &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)
    *
      * &#x20;  at kettle.requests.request.http.proceed (E:\source\gits\gpii\node\_modules\universal\node\_modules\kettle\lib\request.js:184:9)\
        &#x20;   at invokeInvoker (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1649:29)\
        &#x20;   at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
        &#x20;   at that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)\
        &#x20;   at Object.fluid.fireEvent (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1210:24)\
        &#x20;   at Object.fluid.initDependent (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:1301:15)\
        &#x20;   at listener (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\FluidIoC.js:589:27)\
        &#x20;   at fireToListeners (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1103:68)\
        &#x20;   at Object.that.fire (E:\source\gits\gpii\node\_modules\universal\node\_modules\infusion\src\framework\core\js\Fluid.js:1196:24)\
        &#x20;   at Object.handle (E:\source\gits\gpii\node\_modules\universal\node\_modules\kettle\lib\server.js:262:38)\
        &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)\
        &#x20;   at Object.expressInit \[as handle] (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\lib\middleware.js:30:5)\
        &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)\
        &#x20;   at Object.query \[as handle] (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\middleware\query.js:45:5)\
        &#x20;   at next (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:193:15)\
        &#x20;   at Function.app.handle (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\proto.js:201:3)\
        &#x20;   at Server.app (E:\source\gits\gpii\node\_modules\universal\node\_modules\express\node\_modules\connect\lib\connect.js:65:37)\
        &#x20;   at Server.emit (events.js:98:17)\
        &#x20;   at HTTPParser.parser.onIncoming (http.js:2108:12)\
        &#x20;   at HTTPParser.parserOnHeadersComplete \[as onHeadersComplete] (http.js:121:23)\
        &#x20;   at Socket.socket.ondata (http.js:1966:22)\
        &#x20;   at TCP.onread (net.js:527:27)

We need to support (at least) 2 lifecycle points for a Kettle server, one where middleware may be contributed and one where routed handlers may be contributed. It appears this situation differs in Express 4.x where the router is no longer a piece of middleware in itself.

        