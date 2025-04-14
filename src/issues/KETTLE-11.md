---json
{
  "title": "KETTLE-11",
  "summary": "Port Kettle from Rhino, Env.js and the JVM to Node.js",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2010-08-19T18:36:11.568-0400",
  "updated": "2014-03-03T13:42:30.479-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-08-13T13:56:14.154-0400",
      "body": "Two versions of this port were attempted - firstly the \"new Kettle\" of around 2011 vintage, which tried to port as much of Rhino-kettle literally and execute a full jQuery stack on the server. This proved prohibitively unstable given the internal plumbing of jQuery changed so frequently, and the stack based on jsdom grew so huge. We abandoned this and instead implemented \"new new Kettle\" for GPII, starting in late 2012 - this uses a very cut-down profile of jQuery, \"jQuery-standalone.js\" which is a simple cut and paste of the bare minimum jQuery functionality needed to boot up Infusion (basically just $.extend a few utilities). This \"new new Kettle\" also uses the standard npm package \"express\" to provide the basic HTTP server transports which cuts down our requirements a lot. \"new new Kettle\" is now the standard project we plan to adopt in fluid-project/kettle on github and for our partners on the GPII as well as other projects. Some work remains to remove \"express-isms\" from visibility from our users.\n"
    }
  ]
}
---
Kettle currently depends on the follow core stack of third-party technologies:

1\. Java and the JVM\
2\. Mozilla's Rhino JavaScript engine\
3\. A fork of John Resig's Env.js browser compatibility environment

While these technologies served as an excellent platform for getting a proof-of-concept working, the server-side JavaScript world has matured substantially since we started. Node.js is a well-supported and fast environment for server-side JS based on Google's V8 engine, and provides sufficient libraries to replace both Rhino and Env.js.

We should port Kettle to Node.js, rewriting and Java-specific dependencies against Node's own JavaScript libraries.

        