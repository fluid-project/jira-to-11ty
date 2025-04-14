---json
{
  "title": "FLUID-5940",
  "summary": "require(\"infusion\") fails in Node.js when Infusion is a dependency of a project in the filesystem root",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Simon Bates",
  "date": "2016-08-09T14:38:59.525-0400",
  "updated": "2016-08-30T15:34:41.600-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "npm module"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-08-17T12:32:22.787-0400",
      "body": "I could reproduce this by checking out a project (kettle) which has Infusion as a direct dependency in my filesystem root on Windows. Oddly I had to do this from a plain Windows command shell rather than a cygwin bash shell.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-08-17T12:58:58.367-0400",
      "body": "My experience is very similar to @@Simon Bates - for example, I get an \"upPath\" of \"E:\\\\\" and an upInfusionPath of \"E:\\kettle\\node\\_modules\\infusion\\src\\module\\fluid.js\". As far as I can see, this is a bug within require.resolve as well as a filesystem oddity, since there is no reason for the contents of E:\\kettle to be resolvable.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-08-17T13:34:34.085-0400",
      "body": "I've written up the upstream node-resolve issue at <https://github.com/substack/node-resolve/issues/106> - this is actually a pretty serious issue which means that any module present within a drive's CWD on Windows will be resolvable. The fact that the project is close to the drive root is merely a collateral factor that is just raising the probability of there being a coincidence between path names by making them all short. You will notice that if you don't run the node process from within the project's directory which has infusion as a dependency, that the problem does not occur.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-08-22T15:50:42.181-0400",
      "body": "After understanding <https://github.com/substack/node-resolve/issues/106> properly, I realise that we can only properly resolve this issue BOTH with the safety test in fluid.js as well as the fix to node-resolve. The problem is that the particular failure described in this headline JIRA (when checked out close to the root of the filesystem) is just one of the unbounded kinds of failures that we could observe through node-resolve #106 - depending on the shell's current cwd, in fact we could resolve to any infusion in the entire filesystem rather than just the particular one that we guard against (ourselves) in fluid.js . So I have reissued this pull as <https://github.com/fluid-project/infusion/pull/738>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-08-30T15:34:32.600-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/738> ) into the project repo at d82e14339fe975b9c2426f4138659fa45da16884\n"
    }
  ]
}
---
Doing a require("infusion") in Node.js results in an error when Infusion is a dependency of a Node.js project that is located in the root of a filesystem. This is most likely to occur when we run a project inside a Windows VM (due to the way that we mount the project from the host filesystem in VirtualBox).

To make this issue easier to see, I've created a sample project to reproduce it.

Steps to reproduce:

1. Clone <https://github.com/simonbates/fluid-module-root-issue.git>
2. vagrant up
3. vagrant reload
4. When the Windows VM comes back up, open a command prompt
5. cd to C:\vagrant
6. npm install
7. node run.js

Expected:

```java
hello
world
```

Actual:

```java
C:\vagrant>node run.js
\\vboxsrv\c:_vagrant\node_modules\infusion\src\module\fluid.js:41
    upInfusion.log("Resolved infusion from path " + __dirname + " to " + upInfusion.module.modules.infusion.baseDir);
                                                                                          ^

TypeError: Cannot read property 'modules' of undefined
    at Object.<anonymous> (\\vboxsrv\c:_vagrant\node_modules\infusion\src\module\fluid.js:41:91)
    at Module._compile (module.js:409:26)
    at Object.Module._extensions..js (module.js:416:10)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Module.require (module.js:353:17)
    at require (internal/module.js:12:17)
    at Object.<anonymous> (\\vboxsrv\c:_vagrant\run.js:1:75)
    at Module._compile (module.js:409:26)
    at Object.Module._extensions..js (module.js:416:10)
```

Tracing through <https://github.com/fluid-project/infusion/blob/master/src/module/fluid.js> in a debugger, I'm seeing:

* Line 37: var upPath = path.resolve(\_\_dirname, "../../../../..");
  * \_\_dirname = "\\\vboxsrv\c:\_vagrant\node\_modules\infusion\src\module"
  * upPath = "\\\vboxsrv\c:\_vagrant\\"
  * It looks like: (1) C:\vagrant is being seen as "\\\vboxsrv\c:\_vagrant\\" and (2) "\\\vboxsrv\c:\_vagrant\\" is the root of the filesystem
* Line 38: var upInfusionPath = resolveModuleSync("infusion", upPath);
  * upInfusionPath = "\\\vboxsrv\c:\_vagrant\node\_modules\infusion\src\module\fluid.js"
  * It looks like we are finding ourselves (in the case that we have gone high enough to not find any more infusions, we get 'null' here)
* The test on line 39 passes as we have a value for 'upInfusionPath'
* Line 40: upInfusion = require(upInfusionPath);
  * In this recursive case, we get an empty object: { }
* Line 41: upInfusion.log("Resolved infusion from path " + \_\_dirname + " to " + upInfusion.module.modules.infusion.baseDir);
  * this is where we fail as upInfusion.module is undefined

        