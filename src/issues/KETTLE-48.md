---json
{
  "title": "KETTLE-48",
  "summary": "Running \"npm install\" on kettle with npm 3 throws an error at building \"leveldown\" package",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2016-10-20T11:09:12.540-0400",
  "updated": "2017-08-28T10:22:33.820-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "System: Mac OS 10.11.6\\\nnpm version: 3.10.3\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/KETTLE/KETTLE-48/kettle_npm3_install.log",
      "filename": "kettle_npm3_install.log"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-10-30T11:07:01.633-0400",
      "body": "I was able to install Kettle fine using npm3 on my system. I don't think the cycle you mention is relevant, rather the problem with building leveldown which looks like a problem with the configuration of the native build chain (e.g. node-gyp, etc.) on your system.\n\nHowever, I am unable to run the unit tests, with the following failure:\n\n```java\n14:56:24.780:  Registering module kettle from path E:\\source\\gits\\kettle\r\n14:56:24.785:  Registering module infusion from path E:\\source\\gits\\kettle\\node_modules\\infusion\r\n14:56:24.788:  Registering module infusion from path E:\\source\\gits\\kettle\\node_modules\\infusion\r\n14:56:24.801:  Registering module kettle from path E:\\source\\gits\\kettle\r\n14:56:25.161:  Successfully queued test JSON line number diagnostic test\r\n14:56:25.219:  Resolved infusion from path E:\\source\\gits\\kettle\\node_modules\\gpii-pouchdb\\node_modules\\infusion\\src\\module to E:/source/gits/kettle/node_module\r\ns/infusion\r\n14:56:25.225:  Registering module gpii-pouchdb from path E:\\source\\gits\\kettle\\node_modules\\gpii-pouchdb\r\n14:56:25.653:  Resolved infusion from path E:\\source\\gits\\kettle\\node_modules\\gpii-express\\node_modules\\infusion\\src\\module to E:/source/gits/kettle/node_module\r\ns/infusion\r\n14:56:25.670:  Registering module gpii-express from path E:\\source\\gits\\kettle\\node_modules\\gpii-express\r\n14:56:25.835:  Express at path E:\\source\\gits\\kettle\\node_modules\\gpii-express is at top level\r\n14:56:25.839:  Resolved gpii-express from path E:\\source\\gits\\kettle\\node_modules\\gpii-pouchdb\\node_modules\\gpii-express to E:\\source\\gits\\kettle\\node_modules\\g\r\npii-express\r\n14:56:25.851:  FATAL ERROR: Uncaught exception: Cannot find module 'kettle'\r\nError: Cannot find module 'kettle'\r\n    at Function.Module._resolveFilename (module.js:455:15)\r\n    at Function.Module._load (module.js:403:25)\r\n    at Module.require (module.js:483:17)\r\n    at require (internal/module.js:20:19)\r\n    at Object.<anonymous> (E:\\source\\gits\\kettle\\node_modules\\gpii-express\\tests\\js\\lib\\request.js:4:14)\r\n    at Module._compile (module.js:556:32)\r\n    at Object.Module._extensions..js (module.js:565:10)\r\n    at Module.load (module.js:473:32)\r\n    at tryModuleLoad (module.js:432:12)\r\n    at Function.Module._load (module.js:424:3)\r\n    at Module.require (module.js:483:17)\r\n    at require (internal/module.js:20:19)\r\n    at Object.<anonymous> (E:\\source\\gits\\kettle\\node_modules\\gpii-express\\tests\\js\\lib\\index.js:3:1)\r\n    at Module._compile (module.js:556:32)\r\n    at Object.Module._extensions..js (module.js:565:10)\r\n    at Module.load (module.js:473:32)\r\n    at tryModuleLoad (module.js:432:12)\r\n    at Function.Module._load (module.js:424:3)\r\n    at Module.require (module.js:483:17)\r\n    at require (internal/module.js:20:19)\r\n    at Object.<anonymous> (E:\\source\\gits\\kettle\\node_modules\\gpii-express\\testIncludes.js:2:1)\r\n    at Module._compile (module.js:556:32)\r\n    at Object.Module._extensions..js (module.js:565:10)\r\n    at Module.load (module.js:473:32)\r\n    at tryModuleLoad (module.js:432:12)\r\n    at Function.Module._load (module.js:424:3)\r\n    at Module.require (module.js:483:17)\r\n    at require (internal/module.js:20:19)\r\n    at Function.gpii.express.loadTestingSupport (E:\\source\\gits\\kettle\\node_modules\\gpii-express\\index.js:53:9)\r\n    at Function.gpii.pouch.loadTestingSupport (E:\\source\\gits\\kettle\\node_modules\\gpii-pouchdb\\index.js:13:18)\r\n    at Object.<anonymous> (E:\\source\\gits\\kettle\\tests\\DataSourcePouchDBTests.js:22:12)\r\n    at Module._compile (module.js:556:32)\r\n    at Object.Module._extensions..js (module.js:565:10)\r\n    at Module.load (module.js:473:32)\r\n    at tryModuleLoad (module.js:432:12)\r\n    at Function.Module._load (module.js:424:3)\r\n    at Module.require (module.js:483:17)\r\n    at require (internal/module.js:20:19)\r\n    at E:\\source\\gits\\kettle\\tests\\all-tests.js:44:5\r\n    at Object.fluid.each (E:\\source\\gits\\kettle\\node_modules\\infusion\\src\\framework\\core\\js\\Fluid.js:502:17)\r\n    at Object.<anonymous> (E:\\source\\gits\\kettle\\tests\\all-tests.js:43:7)\r\n    at Module._compile (module.js:556:32)\r\n    at Object.Module._extensions..js (module.js:565:10)\r\n    at Module.load (module.js:473:32)\r\n    at tryModuleLoad (module.js:432:12)\r\n    at Function.Module._load (module.js:424:3)\r\n    at Module.runMain (module.js:590:10)\r\n    at run (bootstrap_node.js:394:7)\r\n    at startup (bootstrap_node.js:149:9)\r\n    at bootstrap_node.js:509:3\n```\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-10-30T11:07:25.192-0400",
      "body": "This needs to be fixed up in gpii-express and has been reported as <https://issues.gpii.net/browse/GPII-2108>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-08-28T10:22:33.813-0400",
      "body": "This was fixed in Kettle 1.1.1 released 1 Nov 2016\n"
    }
  ]
}
---
To reproduce:\
1\. Checkout the kettle master branch from <https://github.com/fluid-project/kettle>\
2\. Go to the kettle root directory, run:

```java
rm -rf node_modules/
npm install
```

3\. "npm install" fails at building the "leveldown" package with this error:

```java
LIBTOOL-STATIC Release/leveldb.a
libtool: unrecognized option `-static'
libtool: Try `libtool --help' for more information.
make: *** [Release/leveldb.a] Error 1
prebuild ERR! build error 
prebuild ERR! stack Error: `make` failed with exit code: 2
prebuild ERR! stack     at ChildProcess.onExit (/Users/cindyli/Development/kettle/node_modules/node-gyp/lib/build.js:276:23)
prebuild ERR! stack     at emitTwo (events.js:106:13)
prebuild ERR! stack     at ChildProcess.emit (events.js:191:7)
prebuild ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:215:12)
prebuild ERR! not ok 
prebuild ERR! build Error: `make` failed with exit code: 2
prebuild ERR! build     at ChildProcess.onExit (/Users/cindyli/Development/kettle/node_modules/node-gyp/lib/build.js:276:23)
prebuild ERR! build     at emitTwo (events.js:106:13)
prebuild ERR! build     at ChildProcess.emit (events.js:191:7)
prebuild ERR! build     at Process.ChildProcess._handle.onexit (internal/child_process.js:215:12)
npm WARN install:leveldown@1.4.5 leveldown@1.4.5 install: `prebuild --install`
npm WARN install:leveldown@1.4.5 Exit status 2
```

The detailed full output of "npm install" can be found in the attached log file.

The relationship between the "leveldown" package and kettle:\
1\. The "leveldown" package is a dependency of pouchdb: <https://github.com/pouchdb/pouchdb/blob/master/package.json#L55>\
2\. The "pouchdb" is a dependency of gpii-pouchdb: <https://github.com/the-t-in-rtf/gpii-pouchdb/blob/GPII-1897/package.json#L21>\
3\. The "gpii-pouchdb" is a dev dependency of kettle: <https://github.com/fluid-project/kettle/blob/master/package.json#L31>

Running "npm install" on gpii-pouchdb (<https://github.com/the-t-in-rtf/gpii-pouchdb/tree/GPII-1897>) builds fine.

One thing to note is the cross dependency between kettle and gpii-pouchdb:\
1\. As stated above, the "gpii-pouchdb" is a dev dependency of kettle: <https://github.com/fluid-project/kettle/blob/master/package.json#L31>\
2\. Meanwhile, the "kettle" is also a dev dependency of gpii-pouchdb: <https://github.com/the-t-in-rtf/gpii-pouchdb/blob/GPII-1897/package.json#L30>

However, due to the fact of kettle being a DEV dependency of gpii-pouchdb instead of a dependency, running "npm install" on kettle should not trigger gpii-pouchdb to fetch kettle.

        