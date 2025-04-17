---json
{
  "title": "FLUID-6149",
  "summary": "fluid.require has problems when run in the root directory in a Windows VM...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-03-22T09:20:23.815-0400",
  "updated": "2024-07-22T10:35:16.133-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-03-22T19:44:08.914-0400",
      "body": "Thanks for the report, Tony Atkins \\[RtF] - I've updated my pull <https://github.com/fluid-project/infusion/pull/820> to include a fix for this issue, together with a bit of cleanup, and published the resulting Infusion build as 3.0.0-dev.20170322T234120Z.278de35 - let me know how you get on!\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-03-23T09:00:03.330-0400",
      "body": "Thanks Antranig Basman.  I updated both gpii-express and gpii-testem to use the dev release, after which \"fluid.require\" works as expected when run from the root of the v: drive.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2018-04-05T20:15:30.244-0400",
      "body": "Fixed in dev release of 20170322\n"
    }
  ]
}
---
I am attempting to run tests from v:/, which is a mount point for the host's shared directory within a Windows VM.  When I do so, I get errors like:

```java
05:50:28.375: FATAL ERROR: Uncaught exception: Assertion failure - check console for more details: Module gpii-testem has not been loaded and could not be loaded from caller's path V:\tests
Error: Assertion failure - check console for more details: Module gpii-testem has not been loaded and could not be loaded from caller's path V:\tests
at new Error (native)
at Error.fluid.FluidError (V:\node_modules\infusion\src\framework\core\js\Fluid.js:174:26)
at fluid.builtinFail (V:\node_modules\infusion\src\framework\core\js\Fluid.js:198:15)
at Object.fire (V:\node_modules\infusion\src\framework\core\js\Fluid.js:1533:40)
at Object.fluid.fail (V:\node_modules\infusion\src\framework\core\js\Fluid.js:213:32)
at Object.fluid.require (V:\node_modules\infusion\src\module\module.js:145:23)
at Object.<anonymous> (V:\tests\harness.js:6:7)
at Module._compile (module.js:570:32)
at Object.Module._extensions..js (module.js:579:10)
at Module.load (module.js:487:32)
```

The same tests pass from a nested directory or when run from c:/vagrant (the same directory accessed as a symlink).  If I change all fluid.require calls to use the equivalent node require, the tests also pass.

Steps to reproduce:

1. Check out this branch: <https://github.com/the-t-in-rtf/gpii-testem/tree/GPII-2296-without-require-workaround>
2. If you haven't already done so, [install Alfredo's Vagrant plugin](https://github.com/amatas/vagrant-gpii-ci).
3. Run "`vagrant up"`
4. Run "`vagrant ci test`"

You should see the error in the console.  Once you have a working VM (after step 3), you can also reproduce by:

1. Opening powershell or the node command shell.
2. Mounting the share using a command like: "`net use v: \\vboxsrv\vagrant"`
3. Changing to the mounted directory.
4. Running "`npm install`"
5. Running "`npm test`" or "`node node_modules/testem/testem.js ci --file tests/testem-fixtures/testem-complete-coverage.js --launch Chrome`"

The VM includes node-inspector to assist in debugging.

As I need its fix to run infusion tests, gpii-testem currently uses the commit hash prepared for FLUID-6140.

        