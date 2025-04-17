---json
{
  "title": "ENGAGE-98",
  "summary": "Kettle can't parse an application configuration JSON file that has a line break after the opening parenthesis",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2009-09-26T22:18:58.000-0400",
  "updated": "2009-11-10T14:52:05.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-10T14:52:05.000-0500",
      "body": "This appears to have been fixed, the json file shipping with engage 0.1 looked like this.\n\n{\\\ninitFunction: \"fluid.engage.initEngageApp\",\\\nhandlerFunction: \"fluid.kettle.servlet.process\",\\\nincludes: \"kettle/KettleIncludes.json\",\\\nincludesPrefix: \"kettle/\",\\\nloaderFunction: \"fluid.engage.initEngageApp\",\\\nqueryURLTemplate: \"<http://titan.atrc.utoronto.ca:5984/%dbName/_fti/lucene/%view?include_docs=true&q=%query>\",\\\ninitServices: \\[\\\n\"fluid.artifactView\\.initMarkupFeed\", \\\n\"fluid.artifactView\\.initDataFeed\", \\\n\"fluid.browseDemo.initBrowseDemo\",\\\n\"fluid.browseDemo.initBrowseDataFeed\",\\\n\"fluid.engageDemo.initEngageDemo\",\\\n\"fluid.kettleDemo.initCherryDemo\",\\\n\"fluid.kettleDemo.initJSGIHandlerDemo\"\\\n],\\\nviews: {\\\nall: \"all\",\\\nbyCollectionCategory: \"by\\_collection\\_category\"\\\n},\\\nmount: {\\\ninfusion: {\\\ntarget: \"infusion/\",\\\nsource: \"../../../../fluid-infusion/src/webapp/\"\\\n},\\\nengage: {\\\ntarget: \"engage-core/\",\\\nsource: \"../../../../fluid-engage-core/\"\\\n},\\\nengageDemo: {\\\ntarget: \"engageDemo/\",\\\nsource: \"services/engageDemo/\",\\\nrewriteSource: \"../../engageDemo/\"\\\n},\\\nkettleDemo: {\\\ntarget: \"kettleDemo/\",\\\nsource: \"services/kettleDemo/\",\\\nrewriteSource: \"../../services/kettleDemo/\"\\\n}\\\n}\\\ndebugMode: true\\\n}\n"
    }
  ]
}
---
KettleServlet seems to have a bug in its JSON parsing code where a nicely formatted JSON object like this will fail to parse:

{\
"initFunction": "colin.marineWeather.init",\
"handlerFunction": "fluid.kettle.servlet.process",\
"includes": "kettle/KettleIncludes.json",\
"loaderFunction": "colin.marineWeather.init",\
"debugMode": true\
}

Whereas, if we trim the leading line break like this, everything works:

{"initFunction": "colin.marineWeather.init",\
"handlerFunction": "fluid.kettle.servlet.process",\
"includes": "kettle/KettleIncludes.json",\
"loaderFunction": "colin.marineWeather.init",\
"debugMode": true\
}

        