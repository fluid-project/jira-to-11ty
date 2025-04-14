---json
{
  "title": "FLUID-3862",
  "summary": "List reorderer cannot drag and drop the left panel to right",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2010-11-22T13:02:10.439-0500",
  "updated": "2010-12-13T14:56:49.901-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE8, FF @ WinXP\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3862/FLUID-3862-patch.txt",
      "filename": "FLUID-3862-patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3862/FLUID-3862-tests.patch.txt",
      "filename": "FLUID-3862-tests.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-22T13:54:24.162-0500",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-25T13:10:17.114-0500",
      "body": "In Fluid.js, when mergeImpl is called by fluid.merge() line: 580, the \"thisPolicy\" parameter in mergeImpl() line 519 will be set to undefined.  Then, when source\\['orientation'] get called in line 528, it will jump into the last condition at line 548 and passes.  Namely, !fluid.mergePolicyIs(thisPolicy, \"reverse\") will pass because thisPolicy was set to \"undefined\".  This causes the conditional statement to return true, and overwrite the orientation to 1 (which means vertical).  &#x20;\n\nI suspect the condition at line 548 should use \"newPolicy\" instead of \"thisPolicy\", since the variable \"newPolicy\" morphs itself depending on the \"thisPolicy\" type.  I have created a patch to address this, please review. &#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-25T16:34:21.138-0500",
      "body": "Test case \"reverse merge: object with multiple keys\" added for FluidJSTests.js.  This test case covers multiple keys within the target and source parameters for fluid.merge().  This testcase also test against the changes from the previous patch, <https://fluidproject.atlassian.net/browse/FLUID-3862#icft=FLUID-3862>.patch.txt.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-10T15:58:23.615-0500",
      "body": "Thanks for this patch, Mike - reviewed and committed at revision 10385. Note that we will be deprecating the \"reverse\" merge policy in this release in favour of (yet to be implemented) facilities in the IoC system that will be provided in 1.4\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-13T14:56:49.892-0500",
      "body": "I've verified that this fix is committed to the codebase, despite the fact that JIRA seems to have missed the commit.\n"
    }
  ]
}
---
With orientation set to fluid.orientation.HORIZONTAL, using list reorderer, the left panel cannot be dragg-and-dropped to right. The drag-and-drop from the right to left works well though.

A demo site to re-produce the issue:

1\. go to <http://www.atutor.ca/atutor/test/docs/login.php>\
2\. login as demo / demo\
3\. select a course\
4\. The main panel has 2 parts: side menu at left, course home at right. Both panels have light blue bars at the top as grab handles\
5\. drag the left panel and drop to right\
6\. Nothing happens

        