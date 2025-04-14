---json
{
  "title": "KETTLE-75",
  "summary": "Kettle's argument parsing is environmentally unsound",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-01-30T06:06:57.180-0500",
  "updated": "2019-02-04T18:45:04.610-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2019-01-30T10:54:30.904-0500",
      "body": "As a quick \"hot patch\" to allow people to use, e.g. --inspect-brk by hot-editing kettle from inside node\\_modules, this set of changes will simply disable Kettle's command-line parsing:\n\n```java\ndiff --git a/lib/KettleConfigLoader.js b/lib/KettleConfigLoader.js\r\nindex 6a36abb..6d203ba 100644\r\n--- a/lib/KettleConfigLoader.js\r\n+++ b/lib/KettleConfigLoader.js\r\n@@ -28,7 +28,8 @@ fluid.defaults(\"kettle.config\", {\r\n  * is suitable for appearing as the configName field in the options to <code>kettle.config.createDefaults</code> etc.\r\n  */\r\n kettle.config.getConfigName = function (outerDefault) {\r\n-    var nodeEnv = process.argv[3] || process.env.NODE_ENV || outerDefault;\r\n+    console.log(\"Process arguments are \" + process.argv);\r\n+    var nodeEnv = process.env.NODE_ENV || outerDefault;\r\n     if (nodeEnv) {\r\n         fluid.log(\"Loader running configuration name \" + nodeEnv);\r\n     } else {\r\n@@ -42,10 +43,7 @@ kettle.config.getConfigName = function (outerDefault) {\r\n  * is suitable for appearing as the configPath field in the options to <code>kettle.config.createDefaults</code> etc.\r\n  */\r\n kettle.config.getConfigPath = function (outerDefault) {\r\n-    var arg2 = process.argv[2];\r\n-    if (arg2 === \"-\") {\r\n-        arg2 = null;\r\n-    }\r\n+    var arg2 = null;\r\n     var configPath = arg2 || outerDefault;\r\n     if (!configPath) {\r\n         fluid.fail(\"Config path must be specified as 1st command line argument\");\n```\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2019-02-04T06:59:40.077-0500",
      "body": "Note that this is more specifically a problem with executing electron apps from the command line. There is a long-standing fault in electron argument parsing which fails to strip off the V8-specific arguments which precede the script filename which is intended to appear in process.argv\\[1]. <https://github.com/electron/electron/issues/4690> - this stackExchange answer explains the distinction between process.argv and process.execArgv which is observed in plain node but not with electron - <https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program#comment57056011_4351548>\n"
    }
  ]
}
---
Kettle strategy for grabbing command-line arguments willy-nilly makes it impossible to start up applications in some cases if additional arguments are being passed to node.exe or electron.exe.

For example, attempting to start up gpii-app via electron --inspect-brk main.js gives a failure on startup as the filename argument gets interpreted as the config directory via the following code in KettleConfigName:

```java
kettle.config.getConfigPath = function (outerDefault) {
    var arg2 = process.argv[2];
    if (arg2 === "-") {
        arg2 = null;
    }
    var configPath = arg2 || outerDefault;
```

It seems there was some ancient attempt here to allow the skipping of some arguments. We should replace this with a scheme which shows some better sense of the argument structure and can skip everything until it finds the filename, and/or only recognise named arguments, or perhaps even abolish this scheme altogether.

At the time of the call, the process arguments are \[V:\node\_modules\electron\dist\electron.exe, --inspect-brk, main.js]

The failure we get is:

```java
App threw an error during load
Error: Assertion failure - check console for more details: Could not find a config file at any of the paths V:\main.js\app.testing, V:\main.js\app.testing.json, V:\main.js\app.testing.json5
```

 

        