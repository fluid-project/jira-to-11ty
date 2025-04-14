---json
{
  "title": "FLUID-4077",
  "summary": "RendererUtilities Test failed on IE7 - messagekey with no value",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Harris Wong",
  "date": "2011-02-17T16:08:56.764-0500",
  "updated": "2011-02-23T10:06:49.987-0500",
  "versions": [],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Renderer"
  ],
  "environment": "IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-02-18T01:33:33.827-0500",
      "body": "I could verify this on IE6 as well.\\\nThe issue here is that the test markup is somewhat \"corrupt\" - it includes a bare \\<li> tag without enclosing \\<ul> or \\<ol>. On all modern browsers (including IE8) this is fine, but on earlier IEs (6 and 7) the template will be corrupted during extraction via innerHTML. This causes the final rendered tree to be similarly corrupt, containing duplicated tags for the original li and contained message, leading to the test case failure.\n"
    }
  ]
}
---
Go to <http://build.fluidproject.org/infusion/tests/framework-tests/renderer/html/RendererUtilities-test.html> with IE7.\
You will see #4 fails as follow:

Renderer component tests: FLUID-3819 test: messagekey with no value (1, 2, 3)

Nonexisting string relative should be notified \
Expected:  "\[No messagecodes provided]" \
Result:  "\[No messagecodes provided]\[No messagecodes provided]" \
Diff:   "\[No  messagecodes provided]\[No messagecodes  provided]" &#x20;

        