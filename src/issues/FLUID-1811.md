---json
{
  "title": "FLUID-1811",
  "summary": "When a user tries to add an invalid file (e.g. too large) to the Uploader, it is silently rejected",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Harris Wong",
  "reporter": "Eli Cochran",
  "date": "2008-11-17T12:46:22.000-0500",
  "updated": "2014-04-02T15:06:56.956-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "All A-Grade browsers\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3878/",
      "key": "FLUID-3878",
      "summary": "Improve Uploader's error messages, such as when selected files exceed fileQueueLimit"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-607/",
      "key": "FLUID-607",
      "summary": "Uploading a large file fails, no feedback given."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1812/",
      "key": "FLUID-1812",
      "summary": "[Uploader 2] When adding a file fails, the file total area updates even though nothing is added"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-05-19T03:21:08.000-0400",
      "body": "Added error messages for when a file queue fails.&#x20;\n\nPlease note that there is some strange behavior in SWFUpload:\\\nif the limit on the number of files that can be uploaded is 3 and the user attempts to select 4 files, instead of queing the first 3 files and then throwing an error, SWFUpload just throws an error and no files are queued. Fun!&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-19T09:44:46.000-0400",
      "body": "Forgot a few things in my check in:\n\n* linting\n* check in tests\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-21T10:00:52.000-0400",
      "body": "In case this isn't part of the \"check in tests\" from the comment above, the Uploader unit tests are currently broken.\\\n<http://build.fluidproject.org/infusion/tests/component-tests/uploader/html/Uploader-test.html>\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-21T17:52:32.000-0400",
      "body": "I broke the tests when I failed to copy the HTML to the tests. Wondering if the tests should use AJAX to pull in the HTML the way that the Image Gallery does... wondering if that would even work.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-22T09:11:50.000-0400",
      "body": "I can't comment on whether or not this is the correct approach. I believe that the UI Options test may do this though ( <http://build.fluidproject.org/infusion/tests/component-tests/uiOptions/html/UIOptions-test.html> ). The side effect is that the stats for \"x tests of y failed\" and the time to complete, don't work.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-22T13:36:57.000-0400",
      "body": "Added basic unit tests and fixed some minor esthetic issues with IE\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-05-25T15:28:10.000-0400",
      "body": "Eli missed a stray line of code here that causes a global variable to be defined with SWFObject. Easy fix.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-05-25T18:04:31.000-0400",
      "body": "Bigger issues than I thought. On looking at this feature more closely, two show stoppers emerged:\n\n1\\. The queue error dialog isn't implemented using jQuery UI's Dialog widget, so it lack a number of the keyboard accessibility fixes we added. As a result, focus is not captured within the dialog, and in fact moves directly behind the dialog.\n\n2\\. There are no ARIA roles or states that would inform an AT user that this is an actual dialog.\n\nWe're not going to have a chance to implement fixes to these accessibility blockers before code freeze, so I've moved the code into a branch and removed the feature from trunk in preparation for the 1.1 release.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-29T15:22:52.000-0400",
      "body": "In testing for the 1.1 release, I still see this issue - there is no indication that an error occurred, other than the fact that the file doesn't show up in the queue.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-22T11:00:34.665-0500",
      "body": "I'll confirm this is still an issue for 1.3, multiple browsers/platforms.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:06:56.946-0400",
      "body": "Tested before the 1.5 release: In an HTML5 browser, the user now gets a warning explaining why the file isn't added to the queue.\n"
    }
  ]
}
---
In Uploader, browse for a file that is larger than the 20MB limit, and click OK

Notice: that when the dialog dismisses that there is no message that the file was not added to your file queue.

Fix will need to account for both files that fail because of file size, type, or queue limit.

        