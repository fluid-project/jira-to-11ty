---json
{
  "title": "SJRK-199",
  "summary": "Files are not uploaded if UI language is changed",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Simon Bates",
  "date": "2019-01-23T17:47:35.431-0500",
  "updated": "2020-04-23T21:12:03.474-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-190/",
      "key": "SJRK-190",
      "summary": "Add the \"Important Notes\" section to the UI"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-346/",
      "key": "SJRK-346"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-199/20190123_storytelling_untranslated_urls.json",
      "filename": "20190123_storytelling_untranslated_urls.json"
    }
  ],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2019-01-23T17:50:34.311-0500",
      "body": "Is there a way that the publish request could be sent without the media files?\n"
    },
    {
      "author": "Simon Bates",
      "date": "2019-01-24T14:13:23.214-0500",
      "body": "This happened to me again. Some details:\n\n* I created a story with one block for each media type: text, image, audio, video\n* I put content for every field\n* I used the test media from sjrk-story-telling (as in the attached story also)\n* All media was displayed correctly at preview\n* The published story has non-translated URLs\n* The media files are not in the server `uploads` directory\n"
    },
    {
      "author": "Simon Bates",
      "date": "2019-01-24T14:50:53.420-0500",
      "body": "Ok, figured it out.\n\nTo reproduce:\n\n* Start a new story, with English UI\n* Add an image block\n* Upload an image\n* Switch language to Español\n* Click \"MAS\"\n* Click \"ENVIAR\"\n* Click \"COMPARTE MI HISTORIA\"\n* Story is published, but image is missing\n"
    },
    {
      "author": "Simon Bates",
      "date": "2019-01-24T15:02:13.177-0500",
      "body": "Potential short-term fix: remove/disable language switching.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-04-01T13:46:41.732-0400",
      "body": "This is a blocker when we turn the ability to switch languages back on, but for now we'll consider it \"critical\"\n"
    }
  ]
}
---
I was able to publish a story with media blocks without their URLs being translated. When the story was viewed, the media files were missing.

I've not been able to reproduce this issue.

At the time I was running:

* <https://github.com/fluid-project/sjrk-story-telling-server/tree/b22a0b39ae517abee8c184f73c7ad92218e60f48>
* with `package.json` modified to use <https://github.com/BlueSlug/sjrk-story-telling/tree/SJRK-190>

I captured the published story from CouchDB and have attached it.

        