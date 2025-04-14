---json
{
  "title": "FLUID-1694",
  "summary": "Build a proof-of-concept version of InlineEdit that supports rich text editing, as a starting point for users who want to experiment with this functionality.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2008-10-20T12:52:30.000-0400",
  "updated": "2011-02-22T16:27:53.302-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1694/FLUID-1694.patch",
      "filename": "FLUID-1694.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1694/FLUID-1694-InlinEdit-js-Only.patch",
      "filename": "FLUID-1694-InlinEdit-js-Only.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-10-20T18:01:21.000-0400",
      "body": "Here is patch containing a proof-of-concept implementation of Inline Edit with TinyMCE. Apologies for the size of the patch and the absolute paths.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-10-20T18:01:56.000-0400",
      "body": "This patch contains only the changes to InlineEdit.js, which I am proposing to include in the Infusion 0.6 beta release if the community approves.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T21:50:23.000-0500",
      "body": "Work merged into trunk at revision 6031. We have two implementations of the \"plugin\" system developed for InlineEdit, using our \"IoC\" framework operated by initSubcomponents, for both the TinyMCE and FCKEditor rich text editors. A demonstration showing two TinyMCE and two FCKEditors InlineEdit controls coexisting on the same page, each with largely independent configuration, is checked into the manual-tests area at <https://source.fluidproject.org/svn/fluid/components/trunk/src/webapp/tests/fluid-tests/manual/rich-text>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:53.301-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
A number of users have been interested in trying out our InlineEdit component with a rich text editor such as TinyMCE or FCK. Let's sketch out some code and markup to show if this is feasible within our current architecture for InlineEdit.

        