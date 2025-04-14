---json
{
  "title": "SJRK-99",
  "summary": "Storytelling tool unable to save in certain circumstances",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Reopened",
  "reporter": "Gregor Moss",
  "date": "2018-05-28T17:55:18.431-0400",
  "updated": "2022-07-29T00:09:39.327-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-05-29T12:57:54.469-0400",
      "body": "I tested adding stories from my phone (Google Pixel XL, Android 8.1.0):\n\n* one with emoji in a text block (in the 'text' field)\n* one with emoji in the title as well as a text block (again in the 'text' field)\n* one with emoji in the keywords as well as title and text block\n\nAll seemed to save without issue while connected to the OCADU wireless network. Is it possible that certain emoji are causing it to trip up?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-05-30T16:57:18.121-0400",
      "body": "In testing on a Nexus 7 (2012) running Android 5.1.1 and Chrome 53 (mentioned in my tests for <https://fluidproject.atlassian.net/browse/SJRK-98#icft=SJRK-98>), I noticed I was unable to save when an image block was added to the story. I connected the device to my machine and did remote debugging in order to inspect the browser console, and this error appeared when an image block was added:\n\nFluid.js:203 Uncaught Error: Assertion failure - check console for more details: Failed to resolve reference {editable}.updateImagePreview - could not match context with name editable from component { typeName: \"sjrk.storyTelling.block.singleFileUploader\" gradeNames: \\[\"sjrk.storyTelling.block.singleFileUploader\"] id: a8x2muug-4040} at path storyEdit-a8x2muug-83,storyEditor,blockManager,managedViewComponents,cameraCaptureUploader component: \\[object Object]\n\n \n\nAnd when trying to save, this is the response from the server:\n\n{\"isError\":true,\"message\":\"Unexpected field\",\"code\":\"LIMIT\\_UNEXPECTED\\_FILE\",\"field\":\"uploadedFile\",\"storageErrors\":\\[]}\n\nAnd after switching the language to Spanish, the response becomes\n\n{\"isError\":true,\"message\":\"Cannot read property 'filename' of undefined\",\"stack\":\"TypeError: Cannot read property 'filename' of undefined\\n at Arguments.\\<anonymous> (/usr/src/app/src/js/requestHandlers.js:147:40)\\n at ...}\n\n \n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-05-30T17:42:42.448-0400",
      "body": "The issue seems to have been a leftover IoC reference from a time before the current factoring. it refers to {editable}, which no longer exists. I've updated it to {imageBlockEditor} as it should be, and the client-side error stopped happening.\n\nI have pushed this fix to <https://fluidproject.atlassian.net/browse/SJRK-91#icft=SJRK-91> branch. Once the server build has been updated, we can retry.\n\ncc @@Alan Harnum @@Michelle D'Souza @@Dana\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-06-05T16:33:44.905-0400",
      "body": "The LIMIT\\_UNEXPECTED\\_FILE error mentioned above was due to the fact that the upload element names used in the withCamera imageBlockEditor template (storyBlockImage-withCameraCapture.handlebars) were not handled by the Multer middleware.\n\nThe solution to this is to change the \"name\" fields for both upload elements in the template to \"file\".\n\nEdit: solution implemented, seems to work when tested locally\n"
    }
  ]
}
---
As reported by @@Michelle D'Souza: "Another issue that we hit - and I saw it on my phone too, was an inability to save. I was able to save a simple story, but when I tried to enter one that a student had sent us, it failed. One thing she did was put some emojis in the text as well as the title and the keywords. Dana can WhatsApp you the story."

The emoji are likely a factor, worth exploring

        