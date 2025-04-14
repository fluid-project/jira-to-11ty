---json
{
  "title": "FLUID-4108",
  "summary": "ProgressiveEnhancement.js causes errors in IE7 when included in any page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2011-02-23T14:36:13.938-0500",
  "updated": "2011-02-24T17:05:12.471-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": "Internet Explorer 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-02-23T16:07:07.136-0500",
      "body": "I've tested the fix Colin pushed to his git repository, and it seems to work fine: The error is no longer thrown and the uploader works.\n"
    }
  ]
}
---
ProgressiveEnhancement.js fails in IE7 due to the fact that it accesses window.XMLHttpRequest.prototype, which is not present in IE7 (surprise surprise).

Here's the bug report from the channel logs:

golam: Justin\_o: All framework unit tests showing error when page loads on IE7\
\[12:47pm] Justin\_o: harriswong: if everything works after that, could you please file a jira against the url rewriting in the build process\
\[12:48pm] Justin\_o: golam: intersting... is it the same error as the inline edit ones?\
\[12:50pm] golam: Justin\_o: line: 20617 char:9 Error: 'window.XMLHttpRequest.prototype.sendAsBinary' is null or not an object

Here's the offending code:

var canSendBinary = window.FormData || (window.XMLHttpRequest && window.XMLHttpRequest.prototype.sendAsBinary);

It should be straight forward to make a fix: check window.XMLHttpRequest.prototype before accessing properties on it.

        