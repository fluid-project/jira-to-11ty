---json
{
  "title": "SJRK-452",
  "summary": "Adding a file to a media block before setting other fields results in error",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2021-02-23T14:45:15.997-0500",
  "updated": "2021-03-15T12:18:51.871-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-452/2021-02-23 image upload error.PNG",
      "filename": "2021-02-23 image upload error.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-02-24T11:21:51.722-0500",
      "body": "This is being worked on in the branch for <https://fluidproject.atlassian.net/browse/SJRK-404#icft=SJRK-404>. The solution is to create the initial story on block creation or story model change (to account for metadata additions). In addition the storyId was moved into the model for the editor block and uploader component. This is because we need to have dynamic access to the storyId which may be set after the block itself has been created. However, there is still the potential case where the story hasn't finished creation on the server before the user attempts to upload an image. In that case they may still see the error initially, but should be able to re-upload the image after the story has been created. \n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-03-15T12:18:51.870-0400",
      "body": "Addressed alongside <https://fluidproject.atlassian.net/browse/SJRK-404#icft=SJRK-404>.\n\n[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/111) that implements this feature has been merged into the main branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/e8fb396d078ee557b6ee58b7d58805ddc9d47fe1).\n"
    }
  ]
}
---
Adding a file to a media block before setting other fields results in an error being thrown. This is likely because simply adding a block to the story won't result in the story being saved to the server, indeed not until one of the text fields is updated, therefore there isn't a story ID to associate the file with while saving it to the server. Without fixing this bug, the only way around it is to clear the browser's local storage, which an author may not know to do nor know how to do.

A solution would be to have the story save to server when the first block is added, or on the first metadata change. This may require adjusting the configuration of the model listener that's currently (at time of filing) set up for creating stories on the first model change.

**To reproduce:**\
1\. Go to the Story Edit page\
2\. Add an image block\
3\. Click "Upload Image"\
4\. Pick a file to upload

**Expected**\
The image uploads successfully and the preview is shown in the block editor

**Actual**\
The uploader returns an error: Uploading failed: Error retrieving story with ID null

        