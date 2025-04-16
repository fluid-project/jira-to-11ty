---json
{
  "title": "SJRK-318",
  "summary": "The toc header is showing \"[Object Object]\" when the initial language is set to Spanish",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2019-12-13T16:01:32.544-0500",
  "updated": "2019-12-16T17:48:48.473-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-318/1.png",
      "filename": "1.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-318/2.png",
      "filename": "2.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-318/3.png",
      "filename": "3.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-318/4.png",
      "filename": "4.png"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2019-12-16T08:23:36.090-0500",
      "body": "I had a go at reproducing this but ran into a prior problem with the fluid-couch-config module. The error performing the dbSetup was as follows:\n\n```java\ne:\\Source\\gits\\sjrk-story-telling>node src\\server\\db\\dbSetup.js\r\nInfusion at path e:\\Source\\gits\\sjrk-story-telling\\node_modules\\infusion is at top level\r\n13:15:20.890:  Registering module sjrk-story-telling from path e:\\Source\\gits\\sjrk-story-telling\\\r\n13:15:20.891:  Registering module infusion from path e:\\Source\\gits\\sjrk-story-telling\\node_modules\\infusion\\\r\n13:15:20.892:  Registering module infusion from path e:\\Source\\gits\\sjrk-story-telling\\node_modules\\infusion\r\nResolved infusion from path e:\\Source\\gits\\sjrk-story-telling\\node_modules\\kettle\\node_modules\\infusion\\src\\module to e:/Source/gits/sjrk-story-telling/node_mod\r\nules/infusion\r\n13:15:20.994:  Registering module kettle from path e:\\Source\\gits\\sjrk-story-telling\\node_modules\\kettle\r\n13:15:21.372:  Resolved infusion from path e:\\Source\\gits\\sjrk-story-telling\\node_modules\\fluid-couch-config\\node_modules\\infusion\\src\\module to e:/Source/gits/\r\nsjrk-story-telling/node_modules/infusion\r\n13:15:21.387:  Registering module fluid-couch-config from path e:\\Source\\gits\\sjrk-story-telling\\node_modules\\fluid-couch-config\r\n13:15:21.420:  Making sure DB _users exists in Couch instance at http://localhost:25984\r\n13:15:21.752:  Making sure DB _replicator exists in Couch instance at http://localhost:25984\r\n13:15:21.776:  Making sure DB _global_changes exists in Couch instance at http://localhost:25984\r\n13:15:21.801:  Making sure DB stories exists in Couch instance at http://localhost:25984\r\n13:15:21.861:  DB _users exists\r\n13:15:21.862:  No documents to update\r\n13:15:21.862:  No documents to update\r\n13:15:21.863:  SUCCESS\r\n13:15:21.865:  DB stories exists\r\n13:15:21.866:  Updating document at stories/_design/stories\r\n13:15:21.869:  DB _global_changes exists\r\n13:15:21.869:  No documents to update\r\n13:15:21.869:  No documents to update\r\n13:15:21.869:  SUCCESS\r\n13:15:21.870:  DB _replicator exists\r\n13:15:21.870:  No documents to update\r\n13:15:21.870:  No documents to update\r\n13:15:21.870:  SUCCESS\r\n13:15:21.877:  Existing document _design/stories found\r\n13:15:21.877:  Document _design/stories unchanged from existing in CouchDB, not updating\r\n13:15:21.878:  Updating document at stories/storyExample\r\n13:15:21.882:  Existing document storyExample found\r\n13:15:21.882:  Document storyExample has been changed, attempting to update\r\n13:15:21.883:  FATAL ERROR: Uncaught exception: Cannot add property _rev, object is not extensible\r\nTypeError: Cannot add property _rev, object is not extensible\r\n    at e:\\Source\\gits\\sjrk-story-telling\\node_modules\\fluid-couch-config\\src\\couchConfig.js:266:26\r\n    at Request._callback (e:\\Source\\gits\\sjrk-story-telling\\node_modules\\nano\\lib\\nano.js:217:16)\r\n    at Request.self.callback (e:\\Source\\gits\\sjrk-story-telling\\node_modules\\request\\request.js:185:22)\r\n    at Request.emit (events.js:182:13)\r\n    at Request.<anonymous> (e:\\Source\\gits\\sjrk-story-telling\\node_modules\\request\\request.js:1161:10)\r\n    at Request.emit (events.js:182:13)\r\n    at IncomingMessage.<anonymous> (e:\\Source\\gits\\sjrk-story-telling\\node_modules\\request\\request.js:1083:12)\r\n    at Object.onceWrapper (events.js:273:13)\r\n    at IncomingMessage.emit (events.js:187:15)\r\n    at endReadableNT (_stream_readable.js:1094:12)\r\n    at process._tickCallback (internal/process/next_tick.js:63:19)\n```\n\nIt looks like fluid-couch-config needs to be updated for the <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> immutable options scheme since it attempts to store mutable couch documents in its own options as so:\n\n```java\nfluid.defaults(\"fluid.couchConfig\", {\r\n    gradeNames: \"fluid.component\",\r\n    couchOptions: {\r\n        couchUrl: \"http://localhost:5984\",\r\n        dbName: null, // To be provided\r\n    },\r\n    dbDocuments: {\r\n        // An object whose keys are the IDs of documents to\r\n        // be created in the database, and the values are the documents\r\n        // themselves.\r\n    },\n```\n\nIt's unclear why these are stored in options at all since they don't seem to be read again by anything in couchConfig.js after they are updated in fluid.couchConfig.action.updateSingleDocument . A better model might be to resolve them from the returned promise value rather than mutating them in place in the argument list.\n\n \n"
    },
    {
      "author": "Antranig Basman",
      "date": "2019-12-16T17:48:48.473-0500",
      "body": "Framework bug filed as <https://issues.fluidproject.org/browse/FLUID-6442>\n"
    }
  ]
}
---
Steps to reproduce the problem:

1\. Check out Gregor Moss's SJRK-255 branch - <https://github.com/BlueSlug/sjrk-story-telling/tree/SJRK-255>\
2\. In SJRK root directory, copy the file sjrk.storyTelling.server.config.json5.example to sjrk.storyTelling.server.config.json5\
3\. Modify sjrk.storyTelling.server.config.json5 to set the value of "theme" to an empty string;\
4\. Open a powershell window, run these commands to start SJRK site:

```java
docker run -d --name sjrk-couchdb couchdb:latest
docker run -p 5984:5984 -d couchdb
node src/server/db/dbSetup.js
node index.js
```

5\. Access <http://localhost:8081/> in a browser to open SJRK website\
6\. Open UIO to turn on the table of content. TOC shows up and the header "table of content" is showing correctly\
7\. Click the link "Español" at the top right corner to switch to Spanish. The TOC header switches to correct language in Spanish\
8\. Refresh page. The TOC header now shows the wrong "\[Object Object]". See attached 1.png\
9\. Click "English" link to switch the language. The TOC header continues showing as "\[Object Object]"

My debugging so far shows:\
1\. TOC will be recreated every time at a locale change - <https://github.com/fluid-project/sjrk-story-telling/pull/35/files#diff-8d2014003434d9502a4871590ada6c4eR35-R43>\
2\. At TOC recreation, it fetches the header from "{messageLoader}.resources.tocMessage.parsed.tocHeader" - <https://github.com/amb26/infusion/blob/FLUID-6145/src/framework/preferences/js/Enactors.js#L467>\
3\. When the initial language is "en", "{messageLoader}.resources.tocMessage" is populated correctly, see attached 2.png\
4\. However, when the initial language is "es", "{messageLoader}.resources.tocMessage" seems in an earlier form that the needed messages are still in "{messageLoader}.resources.tocMessage.resourceSpec" instead of one level up. 3.png shows the structure in "tocMessage" and 4.png shows with the expanded "tocMessage.resourceSpec"

        