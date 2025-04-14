---json
{
  "title": "FLUID-3878",
  "summary": "Improve Uploader's error messages, such as when selected files exceed fileQueueLimit",
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
  "reporter": "Mike Lam",
  "date": "2010-12-06T15:21:28.287-0500",
  "updated": "2011-06-24T12:39:30.035-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1811/",
      "key": "FLUID-1811"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4279/",
      "key": "FLUID-4279"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3837/",
      "key": "FLUID-3837",
      "summary": "Clean up Uploader's markup"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3878/FLUID-3878-alpha-patch.txt",
      "filename": "FLUID-3878-alpha-patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3878/FLUID-3878-b-patch.txt",
      "filename": "FLUID-3878-b-patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3878/FLUID-3878-c.patch.txt",
      "filename": "FLUID-3878-c.patch.txt"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3878/grey-4d4d4d-x-button.png",
      "filename": "grey-4d4d4d-x-button.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3878/grey-999999-x-button.png",
      "filename": "grey-999999-x-button.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3878/Uploader error handling-01.png",
      "filename": "Uploader error handling-01.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3878/Uploader error handling-02.png",
      "filename": "Uploader error handling-02.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3878/Uploader error handling-03.png",
      "filename": "Uploader error handling-03.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3878/Uploader error handling-04.png",
      "filename": "Uploader error handling-04.png"
    }
  ],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2011-01-13T14:56:23.182-0500",
      "body": "Added wireframes for Uploader error handling, generally\n\nSee wiki for more details on the design of Uploader error handling: <http://wiki.fluidproject.org/display/fluid/Uploader+Wireframes+%28Error+Handling%29>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-01-14T16:08:33.197-0500",
      "body": "Things i have done:\\\nUploader.js\n\n* added a listener for error events\n* added functions to print out and set error variables\n* added strings and constants for the ERROR flags\n\nHTML5UploaderSupport.js\n\n* fire an error when queue size is over the QUEUE\\_LIMIT\n\nFileQueue.js\n\n* added an object called \"that.errorMsgs = {}\" to keep track of all errors\n\nTODO:\n\n* print out individual file names categorized by the ERROR\\_CODE, which is stored in \"that.errorMsgs\"\n* clear the errorMsgs object when \"Upload\" is pressed\n* create a better HTML markup underneath the current component\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-01-24T17:13:08.339-0500",
      "body": "This alpha patch includes client error handling for both \"Files too large\", and \"You have exceeded allowed file size\" error.  \\\nTODO:\n\n* clean up codes\n* clean up css\n* unit test\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-01-29T17:12:30.648-0500",
      "body": "TODO: Refractor test cases\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-02-01T11:47:13.301-0500",
      "body": "ErrorHandler component and its unit test for html5\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-02T14:39:15.989-0500",
      "body": "The most recent patch makes changes to Uploader.html and Uploader.css, both of which are changed quite a bit in the patch for the Uploader's markup clean up. I wonder if we should wait until 3837 is committed as the error styles might need tweaking after that anyways. Thoughts?\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-02-03T10:07:08.286-0500",
      "body": "I think #3837 has more changes relative to this patch and it makes more sense to tweak this after #3837 is committed.  If we commit this patch now, then it would probably cause a bigger conflict on #3837; whereas if we commit this after #3837, then the conflict should lie within this little component and is relatively easier to fix. &#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-14T15:17:05.553-0500",
      "body": "A few thoughts:\\\n-feel like 'add more' action should erase previous errors from 'browse files'\\\n-be nice to know the max # files allowed\\\n-would prefer 'x' to be top right. under warning icon it feels icon-y and not button-y. also right is where the 'x' is for file queue, used to it.\\\n-\"which ones?\": would prefer show/hide list\\\n-\"heads up!\": would prefer \"notices\", \"warnings\", or \"errors\"\n"
    },
    {
      "author": "James Yoon",
      "date": "2011-02-14T15:32:21.680-0500",
      "body": "Reply to Heidi's comments:\n\n* I agree, the \"Add more\" action should clear out all existing errors (additionally, the \"Add more\" action should be disabled when we reach the file queue limit)\n* New mockups show max # files allowed (a similar status should be considered for maximum file size)--this shouldn't be visible if the uploader allows unlimited files in the queue\n* New mockups show \"x\" for errors to the right of the error\n* New mockups show adjusted language (\"show/hide\" instead of \"which ones\", and \"warnings\" instead of \"heads up\")\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-02-15T16:45:34.598-0500",
      "body": "Applied Heidi's and James' suggestion to the uploader.  Changes including the following:\n\n* New mockups show \"x\" for errors to the right of the error\n* New mockups images for 'x'\n* New mockups show adjusted language (\"show/hide\" instead of \"which ones\", and \"warnings\" instead of \"heads up\")&#x20;\n* Click \"Add more\" will remove existing error. &#x20;\n* Error Title now includes the number of files that failed to upload.\n* \"Add more\" button is disabled when the queue is fulled, enabled when it's not fulled.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-22T16:59:57.645-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-24T12:39:11.180-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/80/> merged into the project repo at 25fdd0dd5d44c2971785e8b64bb06231ae8eaa89\n"
    }
  ]
}
---
Missing error messages for SWF and HTML5 uploaders when selected files exceed fileQueueLimit. &#x20;

Symptom:

In the SWF uploader, if the selected files exceed the file queue limit, no error message is given to the user.  Instead, nothing happens.  No file is added to the queue.  In the HTML5 uploader, files that don't exceed the file queue limit are added to the queue.  Any additional files are left out.  The SWF uploader never allows the fileQueueLimit to exceed fileUploadLimit, so a fileUploadLimit error should never happen. &#x20;

Suggestion:

Render a message indicating what the file queue limit is, as well as, the file upload limit.   We shouldn't be keeping these errors silent from the user.

        