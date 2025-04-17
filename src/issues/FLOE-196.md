---json
{
  "title": "FLOE-196",
  "summary": "Implement the request button",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Justin Obara",
  "reporter": "Cindy Li",
  "date": "2014-06-26T14:09:04.240-0400",
  "updated": "2020-11-04T18:20:17.198-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Feedback Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-28T13:56:50.598-0400",
      "body": "Once <https://fluidproject.atlassian.net/browse/FLOE-206#icft=FLOE-206> is in, we'll need to create a view. It should look something like.\n\nmap = function (doc) {\n\n// Only look at votes and requests set to true\\\nfluid.remove\\_if(doc.votes, invert);\\\nfluid.remove\\_if(doc.requests, invert);\n\n// Merge the objects. It's okay to override duplicates as all the values should be true.\\\n$.extend(doc.votes, doc.requests);\n\n// Emit each item. The value is set to 1 to allow for easy counting.\\\nfluid.each(fluid.keys(doc.votes), function (key) {\\\nemit(key, 1);\\\n});\\\n};\n\nreduce = \"\\_count\";\n\nand queried with&#x20;\n\nds.get({id: viewName, query: {reduce: true, group: true}}, callback);\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-09-16T13:53:17.130-0400",
      "body": "The implementation is basically finished and ready for review in my <https://fluidproject.atlassian.net/browse/FLOE-196#icft=FLOE-196> branch ( <https://github.com/jobara/metadata/tree/FLOE-196> ), except there are issues with some of the unit tests used for integration testing with the feedback tool. These are currently being worked through with Antranig Basman <http://fluid.2324889.n4.nabble.com/Unit-test-issues-with-the-feedback-tool-td9179.html>.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-09-18T12:17:44.825-0400",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/metadata/pull/42> ) although the unit test issue is still present. The pull request has been issued to keep track of the current changes.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-01-22T10:59:02.917-0500",
      "body": "\\[15:19] \\<Bosmon> The one at <https://github.com/jobara/metadata/tree/FLOE-196-with-FLUID-5506>\\\n\\[15:19] \\<Bosmon> I have found the following things:\\\n\\[15:20] \\<Bosmon> i) the failure to respond to the events on Firefox was caused by the somewhat wacky template loading strategy here: <https://github.com/jobara/metadata/blob/FLOE-196-with-FLUID-5506/tests/components/feedback/js/feedbackTests.js#L29>\\\n\\[15:20] \\<Bosmon> As it turns out, without a default content type, jQuery AJAX on Firefox will attempt to parse the templates as XML.... for some reason\\\n\\[15:21] \\<Bosmon> So adding datatype: \"text\" to the AJAX block at this line prevents this error\\\n\\[15:21] \\<Bosmon> ii) Once we have merged up with the current trunk's version of IoCTestUtils.js, the fix for <http://issues.fluidproject.org/browse/FLUID-5575> seems to suppress the \"all the tests run at the same time behaviour\" that you reported - at least as far as I can see\\\n\\[15:22] \\<Bosmon> iii) all the remaining problems seem to be caused by the \"two listeners in a row\" issue when you uncomment the lines here: <https://github.com/jobara/metadata/blob/FLOE-196-with-FLUID-5506/tests/components/feedback/js/feedbackTests.js#L459>\\\n\\[15:23] \\<Bosmon> We have that one JIRAed at <http://issues.fluidproject.org/browse/FLUID-5502> and will get to it in time - but in the meantime you should work around it by combining all your assertions into a single listener fixture at this point\n"
    }
  ]
}
---
The functionalities include: the badge with number of requests; list requests; add request

Find the wireframe @ <http://wiki.fluidproject.org/display/fluid/%28Floe%29+Metadata+Author>, "Metadata Feedback Wireframes"

        