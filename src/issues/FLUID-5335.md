---json
{
  "title": "FLUID-5335",
  "summary": "Update our demo doctype to HTML and remove XML-isms",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2014-04-28T11:07:08.754-0400",
  "updated": "2014-05-20T09:37:40.040-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2014-04-28T11:08:32.191-0400",
      "body": "Here's an example of a document that exhibits both of these issues:\n\n<https://github.com/fluid-project/infusion/blob/master/src/demos/uiOptions/index.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-01T14:15:00.809-0400",
      "body": "I started looking into this today and ran into an issue with table summary. The table summary is an obsolete attribute in HTML5. \\\n<http://www.w3.org/TR/html-markup/table.html#table-constraints>\n\n<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table>\n\nRecommendations for alternatives seem to suggest using the caption or figure elements, or making it so that the summary isn't needed. Uploader, for example uses the summary to provided non-visual users with added information about the contents and state of the file queue.&#x20;\n\nIn terms of uploader I think we have three options.\n\n1\\) remove the summary information completely\\\n2\\) redesign and add in a captions element that is visible to everyone\\\n3\\) use aria (e.g aria-describedby, aria-label) This may require some css to hide it from the UI but allow it to be accessible to AT users.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-01T15:08:20.062-0400",
      "body": "Another issue is that we'll need to remove all the rsf:id's from the demos and etc. \\\nsee: <https://fluidproject.atlassian.net/browse/FLUID-4036#icft=FLUID-4036>\n"
    },
    {
      "author": "joanna vass",
      "date": "2014-05-05T12:56:05.160-0400",
      "body": "From our discussion at the floe planning meeting today we decided that:\n\nStatus format changed from \"To upload: 3 files (328.2 KB)\" to \"0 out of 3 files uploaded (328.2 KB)\". When there are no files, status will say \"0 files\".\n\nText will be read by screen reader when there is a change in the status or when user navigates to the table.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-07T14:33:34.901-0400",
      "body": "Spoke with @@joanna vass  and @@Dana today about the status format.\n\n* 0 files -> \"0 files\"\n* any state when there are files in the queue whether, uploading, uploaded or to be uploaded -> \"X out of Y files uploaded (uploadedSize of totalSize)\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-09T12:19:47.033-0400",
      "body": "Submitted a pull request for the uploader related changes:\\\n<https://github.com/fluid-project/infusion/pull/515>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-12T15:28:16.337-0400",
      "body": "Submitted a second pull request that contains the balance of the changes.\\\n<https://github.com/fluid-project/infusion/pull/517>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-05-15T16:52:10.520-0400",
      "body": "Merged into project repo at 1c81a9fd41df3f0fe2250cbe66c0bc479c8f4b3b\n"
    }
  ]
}
---
At the moment, our demos still use an XHTML doctype. Our demos are intended to show best practices to our users, so we should update them to a modern HTML doctype.

While we're at it, we can remove other XML-isms such as stray references to the RSF XML namespace, etc.

        