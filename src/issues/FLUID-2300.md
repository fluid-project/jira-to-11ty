---json
{
  "title": "FLUID-2300",
  "summary": "Use of \":\" in ids need to be escaped for use with jQuery",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-03-02T10:25:40.000-0500",
  "updated": "2009-03-03T10:34:24.000-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-02T10:27:19.000-0500",
      "body": "I was able to create a work around by having a function rename the ids. jQuery allows the use of \":\" inside of an attribute filter such as \\[attribute$=value].\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-03-02T13:44:06.000-0500",
      "body": "This is not really a bug, but just an area for caution. This RSF forum thread discussed this issue at an early time: <http://ponder.org.uk/rsf/posts/list/250.page>\n\nAlthough the use of colon characters within ids as separators is not ideal, it is hard to think of another sensible choice that lies within the XML spec. Your choices are i) to pass the id values to a regular expression to escape them before compounding them with \"#\", or ii) to make use of the framework facilities fluid.byId and fluid.jById which were designed to handle this use case.\n\nI do not recommend the attribute filter scheme, since it does not connect to an optimised implementation - please see my blog post at&#x20;\n\n<http://fluidproject.org/blog/2008/08/14/finding-things-quickly/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-03T10:34:24.000-0500",
      "body": "passing a  fluid.jById with to the progress component successfully handled the problem.&#x20;\n"
    }
  ]
}
---
Use of ":" in ids need to be escaped for use with jQuery

Using the identify decorator in the renderer will place ids on renderered element.&#x20;

Using the following component tree produced these ids ("progress-bars::", "progress-bars:1:", "progress-bars:2:").

var progressComponentTree = {\
children: \[\
{\
ID: "progress-bars:",\
decorators: {identify: "in-design-bar"},\
children: \[\
{\
ID: "fl-progress"\
},\
{\
ID: "fl-progress-bar"\
},\
{\
ID: "fl-progress-indicator",\
decorators: {addClass: "in-design"}\
}\
]\
},\
{\
ID: "progress-bars:",\
decorators: {identify: "in-dev-bar"},\
children: \[\
{\
ID: "fl-progress"\
},\
{\
ID: "fl-progress-bar"\
},\
{\
ID: "fl-progress-indicator",\
decorators: {addClass: "in-development"}\
}\
]\
},\
{\
ID: "progress-bars:",\
decorators: {identify: "stable-bar"},\
children: \[\
{\
ID: "fl-progress"\
},\
{\
ID: "fl-progress-bar"\
},\
{\
ID: "fl-progress-indicator",\
decorators: {addClass: "stable"}\
}\
]\
}\
]\
};

When these ids are passed to jQuery using the idMap ($("#" + idMap\["stable-bar"]) or hard coded ($("#progress-bars:2:")) they are unable to find any objects.&#x20;

A note at the bottom of the jQuery selectors documentation page ( <http://docs.jquery.com/Selectors> ), says that ":" has to be escaped used "\
".&#x20;

        