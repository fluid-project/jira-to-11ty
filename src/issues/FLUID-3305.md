---json
{
  "title": "FLUID-3305",
  "summary": "Create a component that create the bug-parade mail content during bug parade period.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "joan garcia",
  "date": "2009-10-19T11:14:38.000-0400",
  "updated": "2014-06-25T16:28:26.558-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3305/bugParadeComponent.patch",
      "filename": "bugParadeComponent.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3305/bugParadeComponent100105.patch",
      "filename": "bugParadeComponent100105.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3305/bugParadeComponent100113.patch",
      "filename": "bugParadeComponent100113.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3305/fluid-engage-kettle-parade-patch.diff",
      "filename": "fluid-engage-kettle-parade-patch.diff"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3305/kettleParadeComponent.js",
      "filename": "kettleParadeComponent.js"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3305/patch-engageConfig.json.txt",
      "filename": "patch-engageConfig.json.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3305/patch-kettleincludes.json.txt",
      "filename": "patch-kettleincludes.json.txt"
    }
  ],
  "comments": [
    {
      "author": "joan garcia",
      "date": "2009-10-20T09:23:51.000-0400",
      "body": "Basic functionality already posted.\n\nNext steps:\\\n1.- Extract component and create the parametrization and the public methods and events.\\\n2.- Component testing.\\\n3.- Component documentation (wiki page?).\\\n4.- kettle integration to get data from real server :question:.\\\n5.- Wiki page integration.\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-10-20T10:00:54.000-0400",
      "body": "basic functionality code posted here: <https://source.fluidproject.org/svn/scratchpad/bug-parade>\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-10-20T13:56:19.000-0400",
      "body": "First component alpha commited to scratchpad.\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-11-04T11:28:16.000-0500",
      "body": "(Inside Aptana in debug) When I ajax call from the parade component to kettle i get:\n\n\\[Exception... \"Access to restricted URI denied\"  code: \"1012\" nsresult: \"0x805303f4 (NS\\_ERROR\\_DOM\\_BAD\\_URI)\"  location: \"http\\://127.0.0.1:8000/infusion/src/webapp/lib/jquery/core/js/jquery.js Line: 3517\"]\n\nBut from the browser it works fine.\\\n<http://localhost:8080/kettleParade/index.html>\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-11-05T06:20:35.000-0500",
      "body": "Right now the component extracts data from jira server.\n\nI need (to get it working):\n\n1.- Apache2 (as reverse proxy):\n\nProxyPass /kettleParade \"<http://w.x.y.z:8080/kettleParade>\"\\\nProxyPassReverse /kettleParade \"<http://w.x.y.z:8080/kettleParade>\"\n\n2.- Apache2 (as a server for the component itself):\n\nAlias /bug-parade/ \"/local\\_path\\_to\\_aptana\\_workspace/bug-parade/\"\\\n\\<Directory \"/local\\_path\\_to\\_aptana\\_workspace/bug-parade/\">\\\nOptions Indexes FollowSymLinks\\\nAllowOverride None\\\nOrder allow,deny\\\nAllow from all\\\n\\</Directory>\n\n3.- Jetty running kettle (with the kettleParadeComponent.js deployed on it).\n\n/\\*\\\nCopyright 2009 University of Cambridge\\\nCopyright 2009 University of Toronto\n\nLicensed under the Educational Community License (ECL), Version 2.0 or the New\\\nBSD license. You may not use this file except in compliance with one these\\\nLicenses.\n\nYou may obtain a copy of the ECL 2.0 License and BSD License at\\\n<https://source.fluidproject.org/svn/LICENSE.txt>\\\n\\*/\n\n// Declare dependencies.\\\n/**global jQuery, fluid**/\n\nfluid = fluid || {};\n\n(function($, fluid) {\\\nfluid.kettleDemo = fluid.kettleDemo || {};\n\nfluid.kettleDemo.initParadeComponent = function(config, app) {\n\nvar getData = function(theUrl) {\\\nvar model = {};\n\nvar successCallback = function(data, status) {\\\nmodel.data = data;\\\n}\n\n$.ajax( {\\\nurl : theUrl,\\\nsuccess : successCallback,\\\ndataType : \"text\",\\\nasync : false\\\n})\n\nreturn model;\\\n}\n\nvar handler = function(context, env) {\\\nvar url = decodeURIComponent(env.QUERY\\_STRING.substring(3))\\\nvar aux = getData(url);\\\nfluid.setLogging(true);\\\nfluid.log(\"Retrieved \\[\" + url + \"]=>\\n\" + aux.data.substring(0,512) + \"...\");\\\nreturn \\[ 200, {\\\n\"Content-Type\" : \"text/xml\"\\\n}, aux.data ];\\\n};\n\nfluid.engage.mountHandler(app, \"kettleParade/\", handler);\\\n};\\\n})(jQuery, fluid);\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-11-10T13:41:00.000-0500",
      "body": "files needed to patch kettle. To add the parade server side component functionality.\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-11-10T13:43:42.000-0500",
      "body": "I can't create a patch for the new js file, aptana refuses to create the patch. \\\nHere I place the path to help the merging task (to be done).\n\nfluid-engage-kettle/src/main/webapp/services/kettleDemo/js/kettleParadeComponent.js\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-11-17T06:17:20.000-0500",
      "body": "This a review patch of kettle parade server component (having build with the latest directory alias refactor done in kettle \\[adding \"fuild-\" before project directory ]&#x20;\n"
    },
    {
      "author": "Andrea Leutgoeb",
      "date": "2009-12-18T08:12:20.000-0500",
      "body": "Patch to be reviewed pls.\n\n**Changes**\n\n* Jslinted parade.html & parade.js\n* New jslinted standalone version parade-standalone.html\n"
    },
    {
      "author": "Andrea Leutgoeb",
      "date": "2010-01-05T05:26:28.000-0500",
      "body": "Code changes to be reviewed:\n\n1\\. Load local demo data by setting connectivity mode to standalone:\\\nhttp\\://\\[...]/parade.html?mode=standalone\\\n2\\. Structural issues addressed & jslinted\n"
    },
    {
      "author": "Andrea Leutgoeb",
      "date": "2010-01-13T09:53:46.000-0500",
      "body": "Patch to be reviewed pls:\n\n1\\. Changed parade.js in order to work straight off the file system.\\\n2\\. Refactored ajax calls to server.\n"
    }
  ]
}
---
Create a component that query jira during bug parade time.

As params: gets the tags (Bug Parade ...) to filter.

As a result: The mail content to be summit (after validation) to the mailing list.

        