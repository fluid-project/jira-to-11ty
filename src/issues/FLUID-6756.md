---json
{
  "title": "FLUID-6756",
  "summary": "regenerateCursor function defined in the global scope in both Fluid.js and FluidIoC.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2022-11-24T08:45:00.977-0500",
  "updated": "2024-07-22T10:35:00.826-0400",
  "versions": [
    "4.5"
  ],
  "fixVersions": [
    "4.6"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
`regenerateCursor` is defined in both Fluid.js and FluidIoC.js without a namespace and is being placed in the global namespace now that there are no closures containing the code in these files. \
 \
They also both appear to have the same implementation.\
 \
This was initially found while trying to add the Orator component in a Laravel instance via the Vite bundling system, see: <https://github.com/accessibility-exchange/platform/issues/497>. Where the following error is reported when trying to include the framework only build.\
 

```java
138: //# sourceMappingURL=infusion-framework.js.map
error during build:
SyntaxError: Identifier 'regenerateCursor' has already been declared (137:108816) in /Users/jo/Documents/git/accessibility-exchange/platform/node_modules/infusion/dist/infusion-framework.js
    at Parser.pp$4.raise (file:///Users/jo/Documents/git/accessibility-exchange/platform/node_modules/rollup/dist/es/shared/rollup.js:19420:13)
    at Parser.pp$3.declareName (file:///Users/jo/Documents/git/accessibility-exchange/platform/node_modules/rollup/dist/es/shared/rollup.js:19496:26)
    at Parser.pp$7.checkLValSimple (file:///Users/jo/Documents/git/accessibility-exchange/platform/node_modules/rollup/dist/es/shared/rollup.js:18096:48)
    at Parser.pp$8.parseFunction (file:///Users/jo/Documents/git/accessibility-exchange/platform/node_modules/rollup/dist/es/shared/rollup.js:17299:14)
    at Parser.pp$8.parseFunctionStatement (file:///Users/jo/Documents/git/accessibility-exchange/platform/node_modules/rollup/dist/es/shared/rollup.js:17012:15)
    at Parser.pp$8.parseStatement (file:///Users/jo/Documents/git/accessibility-exchange/platform/node_modules/rollup/dist/es/shared/rollup.js:16857:17)
    at Parser.pp$8.parseTopLevel (file:///Users/jo/Documents/git/accessibility-exchange/platform/node_modules/rollup/dist/es/shared/rollup.js:16771:21)
    at Parser.parse (file:///Users/jo/Documents/git/accessibility-exchange/platform/node_modules/rollup/dist/es/shared/rollup.js:16543:15)
    at Function.parse (file:///Users/jo/Documents/git/accessibility-exchange/platform/node_modules/rollup/dist/es/shared/rollup.js:16593:35)
```

        