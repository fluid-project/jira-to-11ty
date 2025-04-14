---json
{
  "title": "SJRK-418",
  "summary": "Media blocks break on text field changes",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-11-04T15:01:43.052-0500",
  "updated": "2020-11-12T15:16:07.669-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-418/2020-11-04 media block broken field.PNG",
      "filename": "2020-11-04 media block broken field.PNG"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-11-04T18:27:37.908-0500",
      "body": "The solution to the bug was in the definition of the uploadState model relay, as mentioned in the description. Two changes are necessary to get it to work as intended:\n\n1. The input for the relay transform should have used \"defaultInput\" instead of \"defaultInputPath\", as the \"\\*Path\" options of transforms are not meant to be used in model relays. This is outlined in this note in the Model Relay docs: <https://docs.fluidproject.org/infusion/development/modelrelay#general-notes-on-model-relay-rules>\n2. The input value must be \"{that}.model.uploadState\" rather than the EL Path, as that key expects a value and not a path, as detailed in the docs for the valueMapper transform: <https://docs.fluidproject.org/infusion/development/modeltransformationapi#mapping-based-on-input-value-fluidtransformsvaluemapper>\n\nCredit to @@Justin Obara for finding this solution, and thanks to @@Antranig Basman for clarifying the circumstances around the first part.\n"
    }
  ]
}
---
In the <https://fluidproject.atlassian.net/browse/SJRK-289#icft=SJRK-289> development branch, a bug has been introduced that causes media blocks (i.e. all but text blocks) to break when a text value is altered (e.g. heading, alt text, description). This seems to go away when the [uploadState-to-visibility model relay](https://github.com/BlueSlug/sjrk-story-telling/blob/dc3674af113dffeb2df5c4001e58bb4027cf97f4/src/ui/blockUi-editor.js#L208-L242) is commented out, but that relay is needed to hide and show elements related to file uploading.

**To reproduce**

1. Check out the <https://fluidproject.atlassian.net/browse/SJRK-289#icft=SJRK-289> branch at commit [dc3674af113dffeb2df5c4001e58bb4027cf97f4](https://github.com/BlueSlug/sjrk-story-telling/tree/dc3674af113dffeb2df5c4001e58bb4027cf97f4)
2. Start the server via docker-compose or run the Node server directly in your environment, making sure the database server is running
3. Go to <http://localhost:8081/storyEdit.html>
4. Click "Add an image block"
5. Click on the "Block heading" input field of the new image block
6. Type in any value
7. Click away or defocus from the input field

**Expected**

The value remains in the field and nothing untoward happens, especially nothing to do with the file upload

**Actual**

The block's file upload progress indicator and error message text (without an accompanying error message) are shown, and the image placeholder is hidden. Please see the attached screenshot for an example of the result. This also breaks the blockUi by setting its storyId field to "null" (its initial state) and sets the uploadState to a value other than "ready", which prevents navigating to the story preview.

        