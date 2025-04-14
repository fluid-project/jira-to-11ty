---json
{
  "title": "FLUID-6512",
  "summary": "Orator play button may accidentally submit form",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-06-02T18:50:59.653-0400",
  "updated": "2020-06-03T10:42:15.160-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": "Windows 10 Pro v1909\\\nChrome 83\\\nStorytelling Tool\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6512/2020-06-02 orator bug fix.png",
      "filename": "2020-06-02 orator bug fix.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6512/2020-06-02 orator bug repro 001.png",
      "filename": "2020-06-02 orator bug repro 001.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6512/2020-06-02 orator bug repro 002.png",
      "filename": "2020-06-02 orator bug repro 002.png"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-06-03T10:42:15.156-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/993) for fixing this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/c8497372264388c627a25dcde43c9c8f45bb0652).\n"
    }
  ]
}
---
When in the Story Edit page on the Storytelling Tool staging site, if I select a piece of text, the Orator will appear and offer to play it using the selectionReader. If that piece of text happens to be within the \<form> element of the editor (i.e. the block editing or metadata areas), then clicking "Play" submits the form and reloads the page.

**To reproduce:**

1. Go to the Storytelling Tool staging site's Edit page: <https://staging-stories.floeproject.org/storyEdit.html>
2. Select a piece of text within the "Story Builder" area in the middle of the page (see screenshots for examples)
3. Click "Play" on the selectionReader

**Expected:**

The text is voiced by the Orator

**Actual:**

The form is submitted

**Proposed fix:**

The Play button should be updated to make it a "button" type button. I.e. on [this line of the component configuration](https://github.com/fluid-project/infusion/blob/2b0e1a69bb74340da50ee3183bbf1f4ac8b5e20e/src/components/orator/js/Orator.js#L840) that defines the markup for the selectionReader, the ["type" attribute](https://www.w3schools.com/tags/att_button_type.asp) should be specified (see "2020-06-02 orator bug fix.png" for an example). This is because if the "type" attribute is missing, the default behaviour is to submit the form.

        