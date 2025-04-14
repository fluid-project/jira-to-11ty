---json
{
  "title": "FLUID-5432",
  "summary": "VoiceOver doesn't announce the remove buttons in Uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Justin Obara",
  "date": "2014-06-09T10:37:55.498-0400",
  "updated": "2014-06-17T11:58:28.990-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Safari 7 (Mac OS 10.9)(VoiceOver)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-12T14:14:07.277-0400",
      "body": "This appears to be because the information about the delete button is actually specified as a title to the table row, and the buttons themselves have no description.&#x20;\n\nThe buttons should have proper labelling, and the row description should be provided with an aria description or label.\n\n<http://blog.paciellogroup.com/2012/01/html5-accessibility-chops-title-attribute-use-and-abuse/>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-06-16T14:09:35.588-0400",
      "body": "A pull request is issued: <https://github.com/fluid-project/infusion/pull/533>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-17T11:58:22.425-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/533> ) into the project repo at 8b8405b6ad66f4ca7bb57a00e2b0d553f7750b83\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the Uploader demo\
<http://build.fluidproject.org/infusion/demos/uploader/>

2\) Add some files to the file queue

3\) Navigate to any of the items in the file queue\
Notice that there is no mention of the remove button; however, you are able to remove with the delete key.\
You can navigate down into the table row and navigate to the remove button, but it is just announced as "button". This can be triggered with the keyboard (ctrl-option-space) to remove. The trackpad interaction won't trigger the button.

        