---json
{
  "title": "FLUID-4033",
  "summary": "A file upload limit of 1 prevents the uploader from uploading files.",
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
  "reporter": "Mike Lam",
  "date": "2011-01-17T13:52:19.939-0500",
  "updated": "2011-02-03T21:20:55.394-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "All operating systems and browsers\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4033/FLUID-4033.patch",
      "filename": "FLUID-4033.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4033/FLUID-4033-d.patch",
      "filename": "FLUID-4033-d.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4033/FLUID-4033-e.patch",
      "filename": "FLUID-4033-e.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4033/FLUID-4033-moreTests.patch",
      "filename": "FLUID-4033-moreTests.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4033/FLUID-4033-WithTests.patch",
      "filename": "FLUID-4033-WithTests.patch"
    }
  ],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-18T10:51:41.541-0500",
      "body": "Removed the reference to the file queue's current batch because it causes the uploader to fail if the fileUploadLimit is a value other than 0 (no limit).  Also removed support for the fileQueueLimit as this value is no longer needed with the presence of the fileUploadLimit. &#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-20T12:58:23.923-0500",
      "body": "Code review comments: the fix looks good. In order to commit it to trunk, I think we should have a good solid set of unit tests for addFiles(), including one that checks for various settings of the fileUploadLimit option.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-20T12:59:11.475-0500",
      "body": "I'm reopening this issue so we can write unit tests for the behaviour before committing it to trunk.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-20T22:17:53.594-0500",
      "body": "Same patch as <https://fluidproject.atlassian.net/browse/FLUID-4033#icft=FLUID-4033>.patch, but with tests included.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-21T17:58:08.276-0500",
      "body": "Mike, I really like these tests. I think we're missing a few more--we're only testing one fileUploadLimit setting. Can you whip up a few more tests using a variety of fileUploadLimits? Maybe, say, 0, 1,  3, null, and undefined?\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-24T10:32:31.550-0500",
      "body": "Added more tests with a variety of different file upload limits\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-25T12:49:22.651-0500",
      "body": "Need to tweaks the invocation tracker infrastructure in order to write the kind of tests we want. I'll do that, then bounce this one back to Mike to finish up and create a new patch.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-26T17:06:29.306-0500",
      "body": "Messy, in-progress patch to HTML5SupportTests.js, providing a template for how to test the core behaviour of addFiles(). Tests currently fail due to two errors in the implementation.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-28T15:19:18.153-0500",
      "body": "Finished off Colin's patch with a more test cases.  &#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-28T15:23:11.818-0500",
      "body": "Awaiting code review.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-02-03T21:20:38.460-0500",
      "body": "I committed a modified version of Mike's patch for this issue to the Project repository at revision 55f86bb406038a481ebc30eb57e803f5c5c87c34.\n"
    }
  ]
}
---
The queue's current batch has yet to be defined causing an error in the uploader.   A check is needed for the availability of the file queue's current batch. &#x20;

To replicate:\
1\. Set the file upload limit to another value other than 0.\
2\. Add files\
3\. Press upload. &#x20;

        