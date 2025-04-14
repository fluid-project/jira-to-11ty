---json
{
  "title": "FLUID-5896",
  "summary": "Cannot deploy infusion-docs to the live site",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2016-05-02T14:50:03.745-0400",
  "updated": "2016-07-08T09:09:05.447-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5899/",
      "key": "FLUID-5899"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-05-02T16:31:48.818-0400",
      "body": "A helpful article on how to manual push a sub-directory to gh-pages branch: <https://gist.github.com/cobyism/4730490>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-05-03T09:32:16.046-0400",
      "body": "Issued a pull request to rename the docpad-config.js to docpad.js: <https://github.com/fluid-project/infusion-docs/pull/87>\n"
    }
  ]
}
---
Run command "npm run deploy" fails at deploying infusion-docs to the live site, which is resulted from the renaming of docpad.js to docpad-config.js. Renaming docpad-config.js to docpad.js then running "docpad deploy-ghpages --env static" solves the issue.

The renaming from docpad.js to docpad-config.js was to work around an issue at Windows platform - <https://github.com/docpad/docpad/issues/561>

Needs to find a solution to work around both issues.

PS: The error thrown at running "npm run deploy":

$ docpad deploy-ghpages -c docpad-config.js --env static\
info: Welcome to DocPad v6.78.4 (local installation: /Users/cindyli/Development/infusion-docs-production/node\_modules/docpad)\
notice: Please donate to DocPad or have your company sponsor it: <http://docpad.org/donate>\
info: Contribute: <http://docpad.org/docs/contribute>\
info: Plugins: ghpages, handlebars, highlightjs, marked\
info: Environment: static\
info: Deployment to GitHub Pages starting...\
info: Generating...\
error: The action completed successfully\
error: Something went wrong while rendering: /Users/cindyli/Development/infusion-docs-production/src/documents/APIChangesFrom1\_4To1\_5.md\
The error follows:

Error\
at Object.\<anonymous> (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad-plugin-handlebars/node\_modules/handlebars/dist/cjs/handlebars/exception.js:26:23)\
at Module.\_compile (module.js:435:26)\
at Object.Module.\_extensions..js (module.js:442:10)\
at Module.load (module.js:356:32)\
at Function.Module.\_load (module.js:311:12)\
at Module.require (module.js:366:17)\
at require (module.js:385:17)\
at Object.\<anonymous> (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad-plugin-handlebars/node\_modules/handlebars/dist/cjs/handlebars/base.js:3:17)\
at Module.\_compile (module.js:435:26)\
at Object.Module.\_extensions..js (module.js:442:10)\
at Module.load (module.js:356:32)\
at Function.Module.\_load (module.js:311:12)\
at Module.require (module.js:366:17)\
at require (module.js:385:17)\
at Object.\<anonymous> (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad-plugin-handlebars/node\_modules/handlebars/dist/cjs/handlebars.runtime.js:3:12)\
at Module.\_compile (module.js:435:26)\
at Object.Module.\_extensions..js (module.js:442:10)\
at Module.load (module.js:356:32)\
at Function.Module.\_load (module.js:311:12)\
at Module.require (module.js:366:17)\
at require (module.js:385:17)\
at Object.\<anonymous> (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad-plugin-handlebars/node\_modules/handlebars/dist/cjs/handlebars.js:3:18)\
at Module.\_compile (module.js:435:26)\
at Object.Module.\_extensions..js (module.js:442:10)\
at Module.load (module.js:356:32)\
at Function.Module.\_load (module.js:311:12)\
at Module.require (module.js:366:17)\
at require (module.js:385:17)\
at Object.\<anonymous> (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad-plugin-handlebars/node\_modules/handlebars/lib/index.js:6:18)\
at Module.\_compile (module.js:435:26)\
at Object.Module.\_extensions..js (module.js:442:10)\
at Module.load (module.js:356:32)\
at Function.Module.\_load (module.js:311:12)\
at Module.require (module.js:366:17)\
at require (module.js:385:17)\
at new HandlebarsPlugin (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad-plugin-handlebars/out/handlebars.plugin.js:20:40)\
at PluginLoader.create (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/plugin-loader.js:306:26)\
at /Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/docpad.js:4129:29\
at PluginLoader.load (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/plugin-loader.js:286:7)\
at /Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/docpad.js:4125:27\
at PluginLoader.unsupported (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/plugin-loader.js:208:7)\
at /Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/docpad.js:4109:25\
at success (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/plugin-loader.js:149:16)\
at /Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/plugin-loader.js:182:20\
at /Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/node\_modules/safefs/node\_modules/graceful-fs/graceful-fs.js:78:16\
at FSReqWrap.readFileAfterClose \[as oncomplete] (fs.js:380:3)

To report the above, follow the guide at: <http://docpad.org/bug-report>\
Error\
at Object.\<anonymous> (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad-plugin-handlebars/node\_modules/handlebars/dist/cjs/handlebars/exception.js:26:23)\
at Module.\_compile (module.js:435:26)\
at Object.Module.\_extensions..js (module.js:442:10)\
at Module.load (module.js:356:32)\
at Function.Module.\_load (module.js:311:12)\
at Module.require (module.js:366:17)\
at require (module.js:385:17)\
at Object.\<anonymous> (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad-plugin-handlebars/node\_modules/handlebars/dist/cjs/handlebars/base.js:3:17)\
at Module.\_compile (module.js:435:26)\
at Object.Module.\_extensions..js (module.js:442:10)\
at Module.load (module.js:356:32)\
at Function.Module.\_load (module.js:311:12)\
at Module.require (module.js:366:17)\
at require (module.js:385:17)\
at Object.\<anonymous> (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad-plugin-handlebars/node\_modules/handlebars/dist/cjs/handlebars.runtime.js:3:12)\
at Module.\_compile (module.js:435:26)\
at Object.Module.\_extensions..js (module.js:442:10)\
at Module.load (module.js:356:32)\
at Function.Module.\_load (module.js:311:12)\
at Module.require (module.js:366:17)\
at require (module.js:385:17)\
at Object.\<anonymous> (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad-plugin-handlebars/node\_modules/handlebars/dist/cjs/handlebars.js:3:18)\
at Module.\_compile (module.js:435:26)\
at Object.Module.\_extensions..js (module.js:442:10)\
at Module.load (module.js:356:32)\
at Function.Module.\_load (module.js:311:12)\
at Module.require (module.js:366:17)\
at require (module.js:385:17)\
at Object.\<anonymous> (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad-plugin-handlebars/node\_modules/handlebars/lib/index.js:6:18)\
at Module.\_compile (module.js:435:26)\
at Object.Module.\_extensions..js (module.js:442:10)\
at Module.load (module.js:356:32)\
at Function.Module.\_load (module.js:311:12)\
at Module.require (module.js:366:17)\
at require (module.js:385:17)\
at new HandlebarsPlugin (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad-plugin-handlebars/out/handlebars.plugin.js:20:40)\
at PluginLoader.create (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/plugin-loader.js:306:26)\
at /Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/docpad.js:4129:29\
at PluginLoader.load (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/plugin-loader.js:286:7)\
at /Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/docpad.js:4125:27\
at PluginLoader.unsupported (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/plugin-loader.js:208:7)\
at /Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/docpad.js:4109:25\
at success (/Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/plugin-loader.js:149:16)\
at /Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/out/lib/plugin-loader.js:182:20\
at /Users/cindyli/Development/infusion-docs-production/node\_modules/docpad/node\_modules/safefs/node\_modules/graceful-fs/graceful-fs.js:78:16\
at FSReqWrap.readFileAfterClose \[as oncomplete] (fs.js:380:3)

        