---json
{
  "title": "SJRK-453",
  "summary": "Convert sjrk.storyTelling.block.singleFileUploader.uploadFileToServer into a DataSource",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-02-24T11:26:39.634-0500",
  "updated": "2021-02-24T11:42:28.227-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-02-24T11:42:28.227-0500",
      "body": "Note that whilst our XHR.send architecture isn't the most brilliantly factored thing in the world, it **should** be possible to exploit the new \"transforming promise chain\" DataSource architecture to implement this simply as a further listener slotted into the pipeline.\n\n<https://github.com/fluid-project/infusion/pull/1038/files#diff-2de84a8f3987d9964f56c0294a1633b0825bf2d4bc0b49b27721c760b7d5cdb5R127>\n\nNote that whilst the \\`data\\` argument to this function is documented as a String, there's no reason it couldn't be a FormData instead. Side benefit of a fluidly typed language : P\n"
    }
  ]
}
---
As part of the work on SJRK-452 the storyId was moved into the model to provide access to the storyId at upload time instead of block creation time. However, this points to a bit of an issue with the ability to direct the path to where the data/files should be sent. It is worth exploring converting the sjrk.storyTelling.block.singleFileUploader.uploadFileToServer into a DataSource and use the idioms provided for supplying a directModel to indicate the exact path for the upload. 

It is also worth noting that past discussions have suggested using the infusion uploader instead. If that's the case, the suggestion of converting to a DataSource, as mentioned here, may not be necessary.

        