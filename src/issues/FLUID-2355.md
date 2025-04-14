---json
{
  "title": "FLUID-2355",
  "summary": "[Uploader] implement Upload with Error storycard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-03-17T02:39:30.000-0400",
  "updated": "2009-04-01T20:30:18.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-647/",
      "key": "FLUID-647",
      "summary": "File Uploader: No error feedback for users"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-670/",
      "key": "FLUID-670",
      "summary": "File Uploader: Wire up all errors to user feedback error system"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2355/FLUID-2355.a.patch",
      "filename": "FLUID-2355.a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2355/FLUID-2355.b.patch",
      "filename": "FLUID-2355.b.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-03-18T18:14:37.000-0400",
      "body": "I've attached a patch that provides some refactoring for the error handling code. All changes are in the FileQueueView portion of Uploader.js, along with some changes to the HTML template. Here's a summary of what's in this patch:\n\n1\\. We broke out a separate errorRowForFile() method so the means of databinding is more clear. This is also symmetrical with other similar methods in the code.\n\n2\\. The error row rendering code in showErrorForFile() was split out into a separate method, renderErrorInfoRowFromTemplate().\n\n3\\. The error row template was moved from the bottom of the file directly into the file queue to simplify the DOM structure.\n\n4\\. Our templating strategy in the FileQueueView was changed so that we grab all necessary templates out of the DOM immediately upon instantiation, and then remove them from the DOM so they don't get in the way.\n\n5\\. Error messages strings were moved into the options.strings bundle.\n\n6\\. Various small refactoring, renaming, and linting.\n\nI've introduced one bug that needs to be fixed before this code is acceptable. Now, when you add a single file to the queue, there's a row-sized gap above the file row in the queue. Add two or more files, and it doesn't appear. Probably a minor styling issue, but awkward nonetheless.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-19T01:18:40.000-0400",
      "body": "The patch looks great, works great!&#x20;\n\nI'm still wrapping my head around the formatting bug... something seriously screwed up here. The obvious problem is that the row is getting set with a style of display:block. Definitely wrong but something else is going on too.&#x20;\n\nNeed to update AddImages.html in Image Gallery to match the new names in Progressive Enhancement. Because it's broken now. I have that fix to check in when this patch lands.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-03-19T15:54:33.000-0400",
      "body": "Here's a patch that fixes the gap issue in the queue.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-19T17:18:45.000-0400",
      "body": "Reviewed Colin's B patch. Looks great to me.&#x20;\n\nDefinitely fixes the display problem.&#x20;\n\nI will commit!\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T09:01:30.000-0400",
      "body": "This commit seems to have broken a bunch of unit tests in FileQueueView-test.html\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-20T20:22:15.000-0400",
      "body": "The patch for <https://fluidproject.atlassian.net/browse/FLUID-2351#icft=FLUID-2351> adds some additional styling for this StoryCard, specifically the styling the footer of the Uploader to indicate whether there were errors or everything was OK.&#x20;\n\nThe tests are still broken!\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-24T18:45:29.000-0400",
      "body": "I have bad news about the Uploader Storyboard - Upload with Error. &#x20;\n\nMy attempts to get the Uploader to retry errored files has failed.&#x20;\n\nAfter trying a number of things and reviewing both the docs and the forums, it seems that the SWFUpload component that we're using, simply doesn't support this feature as we expected it to work.&#x20;\n\nSo, we did manage to get improved error messages in, but no Retry in any manner.\n"
    }
  ]
}
---
Implement the designs as described in the Upload with Error storyboard&#x20;

<http://wiki.fluidproject.org/display/fluid/Uploader+Storyboard+-+Upload+with+Error>

        