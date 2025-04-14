---json
{
  "title": "ENGAGE-219",
  "summary": "Asynchronous server side ajax calls throw an exception",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Svetoslav Nedkov",
  "date": "2009-12-18T09:11:22.000-0500",
  "updated": "2017-12-22T09:44:30.787-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [],
  "components": [],
  "environment": "Mandriva Linux 2009, jetty-6.1.18, env.js, FF 3.0.15\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-12-18T14:32:26.000-0500",
      "body": "This is concerning - but on the other hand, there should never be asynchronous ajax calls from the server side, which must represent a form of coding error - since we lack the threading primitives in Javascript to cause these to operate usefully, even if we had decided that their use was desirable.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:30.785-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
The first time when performing an asynchronous ajax call through jQuery from the server side of Engage an exception is thrown. Subsequent ajax calls don't cause an exception. The call itself is successfully executed and from what I have tried the response is received too, so I'm not much sure about what functional impact this exception has.

It was observed with a PUT operation, but with a GET operation the same exception is thrown.&#x20;

How to reproduce - make a simple ajax call on the server side with async set to true:

$.ajax({\
url: "[http://google.com](http://google.com/)",\
async: true\
});

The problem seems to stem from the browser environment env.js  and probably it needs to be modified in order to fix this issue. As an alternative as we already spoke we can try to switch to the newer versions of the browser environment, which is found here:

<http://www.envjs.com/>

Here is the stacktrace showing the exception:

Exception in thread "Thread-5" org.mozilla.javascript.EcmaError: TypeError: Cannot read property "readyState" from null (/home/sveto/workspace.mycollection/fluid-engage/src/main/webapp/../../../../fluid-infusion/src/webapp/lib/jquery/core/js/jquery.js#3555)\
at org.mozilla.javascript.ScriptRuntime.constructError(ScriptRuntime.java:3753)\
at org.mozilla.javascript.ScriptRuntime.constructError(ScriptRuntime.java:3731)\
at org.mozilla.javascript.ScriptRuntime.typeError(ScriptRuntime.java:3759)\
at org.mozilla.javascript.ScriptRuntime.typeError2(ScriptRuntime.java:3778)\
at org.mozilla.javascript.ScriptRuntime.undefReadError(ScriptRuntime.java:3791)\
at org.mozilla.javascript.ScriptRuntime.getObjectProp(ScriptRuntime.java:1487)\
at org.mozilla.javascript.gen.*home\_sveto\_workspace\_mycollection\_fluid\_engage\_src\_main\_webapp*\_\_\_\_\_\_\_\_\_\_\_\_fluid\_infusion\_src\_webapp\_lib\_jquery\_core\_js\_jquery\_js\_3.\_c\_anonymous\_286(/home/sveto/workspace.mycollection/fluid-engage/src/main/webapp/../../../../fluid-infusion/src/webapp/lib/jquery/core/js/jquery.js:3555)\
at org.mozilla.javascript.gen.*home\_sveto\_workspace\_mycollection\_fluid\_engage\_src\_main\_webapp*\_\_\_\_\_\_\_\_\_\_\_\_fluid\_infusion\_src\_webapp\_lib\_jquery\_core\_js\_jquery\_js\_3.call(/home/sveto/workspace.mycollection/fluid-engage/src/main/webapp/../../../../fluid-infusion/src/webapp/lib/jquery/core/js/jquery.js)\
at org.mozilla.javascript.optimizer.OptRuntime.callName0(OptRuntime.java:108)\
at org.mozilla.javascript.gen.\_home\_sveto\_workspace\_mycollection\_fluid\_engage\_src\_main\_webapp\_kettle\_js\_env\_js\_1.\_c\_anonymous\_12(/home/sveto/workspace.mycollection/fluid-engage/src/main/webapp/kettle/js/env.js:72)\
at org.mozilla.javascript.gen.\_home\_sveto\_workspace\_mycollection\_fluid\_engage\_src\_main\_webapp\_kettle\_js\_env\_js\_1.call(/home/sveto/workspace.mycollection/fluid-engage/src/main/webapp/kettle/js/env.js)\
at org.mozilla.javascript.ContextFactory.doTopCall(ContextFactory.java:426)\
at org.mozilla.javascript.ScriptRuntime.doTopCall(ScriptRuntime.java:3157)\
at org.mozilla.javascript.gen.\_home\_sveto\_workspace\_mycollection\_fluid\_engage\_src\_main\_webapp\_kettle\_js\_env\_js\_1.call(/home/sveto/workspace.mycollection/fluid-engage/src/main/webapp/kettle/js/env.js)\
at org.mozilla.javascript.Context$1.run(Context.java:511)\
at org.mozilla.javascript.Context.call(Context.java:522)\
at org.mozilla.javascript.Context.call(Context.java:509)\
at org.mozilla.javascript.JavaAdapter.callMethod(JavaAdapter.java:556)\
at adapter1.run(\<adapter>)\
at java.lang.Thread.run(Thread.java:619)

        