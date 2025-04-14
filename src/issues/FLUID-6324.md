---json
{
  "title": "FLUID-6324",
  "summary": "docpad - Cannot load plugins",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Giovanni Tirloni",
  "date": "2018-08-18T15:37:49.913-0400",
  "updated": "2024-07-22T10:35:11.346-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": "Fedora Linux 28\\\nNode 10.9.0\\\nDocpad 6.80.7\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-211/",
      "key": "INFRA-211"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-09-17T14:39:30.813-0400",
      "body": "This problems appears to be because of incompatibility between a global install of the latest docpad and the site code (possibly because one or more of the plugins, as they are pinned at particular versions).\n\nUsing npm install -g docpad@6.79.4 (the last version between the 6.8.x line) resolved this problem for me.\n\nNeeds further investigation.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-04-17T08:09:34.324-0400",
      "body": "In my work on <https://fluidproject.atlassian.net/browse/FLUID-5722#icft=FLUID-5722> I confirmed that no version of docpad beyond 6.79.4 works with our plugin stack.  The README currently instructs people to run `npm install -g docpad`, which hasn't worked for more than a year.\n\nLong term we have discussed migrating away from docpad, but in the short term it should still be possible to contribute to this package without forcing your local install to use an outdated docpad.  As a short term solution, I plan to add docpad as a dependency pinned to the last working version and update the README to remove the suggestion to install docpad globally.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-04-17T08:12:36.297-0400",
      "body": "In my testing (with an incompatible docpad installed globally), simply adding the dependency works perfectly for things run using npm scripts, since npm adds node\\_modules/.bin at the start of the PATH.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2019-04-18T17:09:28.384-0400",
      "body": "@@Tony Atkins \\[RtF] - I think we've converged on a similar approach per this comment: <https://github.com/fluid-project/infusion-docs/pull/146#issuecomment-484688337>, but I think your suggestion would work better since it doesn't rely on an outdated global install of DocPad.\n\nIf you've got existing work do you want to open a PR? @@Simon Bates has been reviewing some of the work I've been doing to (first) try to upgrade the DocPad version and (second, when it turned out to be a yak-shaving exercise) in finding a way to keep using the older version.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-04-19T08:01:32.581-0400",
      "body": "@@Alan Harnum if you can wait a few days the work to pin the version is included in my early work on <https://fluidproject.atlassian.net/browse/FLUID-5722#icft=FLUID-5722>, which I hope to submit for review next week.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2019-04-23T11:23:36.523-0400",
      "body": "@@Tony Atkins \\[RtF] That sounds great, thanks.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-08-01T11:09:10.022-0400",
      "body": "Seems we should just pin our docpad usage to v6.79.4. Can see this PR for docs-inclusive-learning as an example <https://github.com/fluid-project/docs-inclusive-learning/pull/25>\n\nIt's also looking like we'll be migrating these sites to Hugo as we find the time.\n"
    }
  ]
}
---
**Update: 2020-02-24**\
This affects other docpad sites:

* ILDH
* Fluid Project
* Design Guide

**Original**\
\`docpad generate\` ends successfully but content is garbled.

```
$ git clone https://github.com/fluid-project/infusion-docs
Cloning into 'infusion-docs'...
remote: Counting objects: 6451, done.
remote: Total 6451 (delta 0), reused 0 (delta 0), pack-reused 6451
Receiving objects: 100% (6451/6451), 6.37 MiB | 270.00 KiB/s, done.
Resolving deltas: 100% (4050/4050), done.

$ npm install docpad
npm WARN deprecated coffee-script@1.12.7: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
npm WARN deprecated connect@2.30.2: connect 2.x series is deprecated
npm notice created a lockfile as package-lock.json. You should commit this file.
+ docpad@6.80.7
added 196 packages from 182 contributors and audited 612 packages in 8.049s
found 23 vulnerabilities (13 low, 2 moderate, 8 high)
  run `npm audit fix` to fix them, or `npm audit` for details

$ npm install
npm WARN deprecated coffee-script@1.10.0: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
npm WARN deprecated markdown-to-ast@4.0.0: See https://github.com/textlint/textlint/issues/455
npm WARN deprecated nomnom@1.8.1: Package no longer supported. Contact support@npmjs.com for more info.

> typechecker@2.0.8 preinstall /home/gtirloni/tmp/infusion-docs/node_modules/docpad-plugin-highlightjs/node_modules/extract-opts/node_modules/typechecker
> node ./cyclic.js


> ambi@2.2.0 preinstall /home/gtirloni/tmp/infusion-docs/node_modules/docpad-plugin-highlightjs/node_modules/ambi
> node ./cyclic.js


> typechecker@2.0.8 preinstall /home/gtirloni/tmp/infusion-docs/node_modules/docpad-plugin-highlightjs/node_modules/extendr/node_modules/typechecker
> node ./cyclic.js


> typechecker@2.0.8 preinstall /home/gtirloni/tmp/infusion-docs/node_modules/docpad-plugin-highlightjs/node_modules/ambi/node_modules/typechecker
> node ./cyclic.js

npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.

added 510 packages from 667 contributors and audited 2301 packages in 13.98s
found 45 vulnerabilities (25 low, 5 moderate, 15 high)
  run `npm audit fix` to fix them, or `npm audit` for details

$(npm bin)/docpad generate --env static
ESC[33mwarning:ESC[39m Error: Failed to load the plugin: docpad-plugin-ghpages at /home/gtirloni/tmp/infusion-docs/node_modules/docpad-plugin-ghpages
    at Function.create (/home/gtirloni/tmp/infusion-docs/node_modules/errlop/source/index.js:107:10)
    at Function.ensure (/home/gtirloni/tmp/infusion-docs/node_modules/errlop/source/index.js:118:49)
    at DocPad.warn (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3071:20)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3814:24
    at next (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3697:16)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3760:26
    at PluginLoader.create (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:265:16)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3758:29
    at PluginLoader.load (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:242:7)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3753:27
    at PluginLoader.unsupported (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:148:7)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3731:25
    at success (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:73:16)
    at safefs.readFile (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:112:18)
    at /home/gtirloni/tmp/infusion-docs/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:53:3)

ESC[33mwarning:ESC[39m Error: Failed to load the plugin: docpad-plugin-handlebars at /home/gtirloni/tmp/infusion-docs/node_modules/docpad-plugin-handlebars
    at Function.create (/home/gtirloni/tmp/infusion-docs/node_modules/errlop/source/index.js:107:10)
    at Function.ensure (/home/gtirloni/tmp/infusion-docs/node_modules/errlop/source/index.js:118:49)
    at DocPad.warn (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3071:20)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3814:24
    at next (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3697:16)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3760:26
    at PluginLoader.create (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:265:16)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3758:29
    at PluginLoader.load (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:242:7)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3753:27
    at PluginLoader.unsupported (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:148:7)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3731:25
    at success (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:73:16)
    at safefs.readFile (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:112:18)
    at /home/gtirloni/tmp/infusion-docs/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:53:3)

ESC[33mwarning:ESC[39m Error: Failed to load the plugin: docpad-plugin-markit at /home/gtirloni/tmp/infusion-docs/node_modules/docpad-plugin-markit
    at Function.create (/home/gtirloni/tmp/infusion-docs/node_modules/errlop/source/index.js:107:10)
    at Function.ensure (/home/gtirloni/tmp/infusion-docs/node_modules/errlop/source/index.js:118:49)
    at DocPad.warn (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3071:20)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3814:24
    at next (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3697:16)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3760:26
    at PluginLoader.create (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:265:16)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3758:29
    at PluginLoader.load (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:242:7)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3753:27
    at PluginLoader.unsupported (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:148:7)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3731:25
    at success (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:73:16)
    at safefs.readFile (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/plugin-loader.js:112:18)
    at /home/gtirloni/tmp/infusion-docs/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:53:3)

...

warning: Error: Rendering the extension "handlebars" to "html" on "/home/gtirloni/tmp/infusion-docs/src/layouts/default.html.handlebars" didn't do anything.
Explanation here: https://docpad.org/extension-not-rendering
    at Function.create (/home/gtirloni/tmp/infusion-docs/node_modules/errlop/source/index.js:107:10)
    at Function.ensure (/home/gtirloni/tmp/infusion-docs/node_modules/errlop/source/index.js:118:49)
    at DocPad.warn (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3071:20)
    at DocumentModel.<anonymous> (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:3291:22)
    at triggerEvents (/home/gtirloni/tmp/infusion-docs/node_modules/backbone/backbone.js:370:57)
    at triggerApi (/home/gtirloni/tmp/infusion-docs/node_modules/backbone/backbone.js:356:19)
    at eventsApi (/home/gtirloni/tmp/infusion-docs/node_modules/backbone/backbone.js:155:16)
    at DocumentModel.Events.trigger (/home/gtirloni/tmp/infusion-docs/node_modules/backbone/backbone.js:346:5)
    at DocumentModel.emit (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/base.js:49:23)
    at DocumentModel.log (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/base.js:44:13)
    at /home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/models/document.js:525:20
    at TaskGroup.<anonymous> (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:1704:16)
    at Object.onceWrapper (events.js:273:13)
    at TaskGroup.emit (events.js:182:13)
    at TaskGroup.EventEmitter.emit (domain.js:460:23)
    at TaskGroup.listener (/home/gtirloni/tmp/infusion-docs/node_modules/taskgroup/source/lib/interface.js:61:10)
    at TaskGroup.emit (events.js:182:13)
    at TaskGroup.EventEmitter.emit (domain.js:460:23)
    at TaskGroup.finish (/home/gtirloni/tmp/infusion-docs/node_modules/taskgroup/source/lib/taskgroup.js:972:8)
    at TaskGroup.fire (/home/gtirloni/tmp/infusion-docs/node_modules/taskgroup/source/lib/taskgroup.js:1037:10)
    at TaskGroup.itemDoneCallbackNextState (/home/gtirloni/tmp/infusion-docs/node_modules/taskgroup/source/lib/taskgroup.js:949:8)
    at Object.onceWrapper (events.js:273:13)
    at Task.emit (events.js:187:15)
    at Task.EventEmitter.emit (domain.js:460:23)
    at Task.listener (/home/gtirloni/tmp/infusion-docs/node_modules/taskgroup/source/lib/interface.js:61:10)
    at Task.emit (events.js:182:13)
    at Task.EventEmitter.emit (domain.js:460:23)
    at Task.finish (/home/gtirloni/tmp/infusion-docs/node_modules/taskgroup/source/lib/task.js:418:9)
    at Task.itemCompletionCallback (/home/gtirloni/tmp/infusion-docs/node_modules/taskgroup/source/lib/task.js:375:8)
    at completeMethod (/home/gtirloni/tmp/infusion-docs/node_modules/taskgroup/source/lib/task.js:507:5)
    at DocPad.<anonymous> (/home/gtirloni/tmp/infusion-docs/node_modules/docpad/esnext/lib/docpad.js:1408:20)
    at ambi (/home/gtirloni/tmp/infusion-docs/node_modules/ambi/source/index.js:74:3)
    at Domain.fireMethod (/home/gtirloni/tmp/infusion-docs/node_modules/taskgroup/source/lib/task.js:522:5)
    at Domain.run (domain.js:343:14)
    at Task.fire (/home/gtirloni/tmp/infusion-docs/node_modules/taskgroup/source/lib/task.js:540:15)
    at Immediate.queue [as _onImmediate] (/home/gtirloni/tmp/infusion-docs/node_modules/taskgroup/source/lib/task.js:575:20)
    at runCallback (timers.js:693:18)
    at tryOnImmediate (timers.js:664:5)
    at processImmediate (timers.js:646:5)
    at process.topLevelDomainCallback (domain.js:121:23)

info: Generated 257/258 files in 7.405 seconds
info: The action completed successfully
info: DocPad is shutting down...
```

        