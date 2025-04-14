---json
{
  "title": "FLUID-3821",
  "summary": "Refactor inline edit code to give users more control over display and edit mode rendering",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Justin Obara",
  "date": "2010-11-01T13:52:43.901-0400",
  "updated": "2010-11-30T15:34:36.047-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3821/comments.txt",
      "filename": "comments.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3821/comments2.txt",
      "filename": "comments2.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3821/commentsMoreDetailed.txt",
      "filename": "commentsMoreDetailed.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3821/cssBackgroundImage.txt",
      "filename": "cssBackgroundImage.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3821/cssStyleCleanup.txt",
      "filename": "cssStyleCleanup.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3821/cssStyleCleanup-2.patch.txt",
      "filename": "cssStyleCleanup-2.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3821/FLUID-3821-codeRefactoring.patch",
      "filename": "FLUID-3821-codeRefactoring.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3821/patch.txt",
      "filename": "patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3821/patchRefactored.txt",
      "filename": "patchRefactored.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-01T13:55:42.829-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-01T16:58:52.124-0400",
      "body": "Refactored majority of code base into smaller, more dedicated functions.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-02T12:37:50.094-0400",
      "body": "Refactored code to pass unit tests in IE8.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-02T14:27:20.624-0400",
      "body": "Committed Mike's patch ( patchRefactored.txt ), which refactors the inline edit code, fixes the icons used, and updates the default style used for Simple text inlineEdit. Made small change to update the copyright info on a couple of the js files.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-04T15:15:11.290-0400",
      "body": "Add comments to public functions.  Rename instructionText variables.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-04T16:49:40.373-0400",
      "body": "Made more commenting changes after some review.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-08T11:17:27.161-0500",
      "body": "Incorporate a background image in the css for the textEditButton.   This eliminates an API change and doesn't require an integrator to provide an image option each time the component is instantiated. &#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-09T10:11:43.697-0500",
      "body": "CSS styles clean up.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-09T14:22:42.383-0500",
      "body": "Attached patch cssStyleCleanup-2.patch.txt which contains modified styles that I worked with James on to prevent the display from jumping when switching between modes. Also worked with Mike to make some slight modifications to the default style options for the component.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-09T14:48:48.166-0500",
      "body": "Committed cssStyleCleanup-2.patch.txt with a minor css change to remove a couple of unneeded properties and added a copyright to the integrations file\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-09T15:32:07.828-0500",
      "body": "Control textEditButton focus\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-10T12:04:56.089-0500",
      "body": "Moved the textEditButtonFocus.txt patch to the <https://fluidproject.atlassian.net/browse/FLUID-2652#icft=FLUID-2652>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-23T15:57:46.127-0500",
      "body": "There are several small cleanup things that should be done before we close this issue.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-23T15:58:49.398-0500",
      "body": "I've complete a code review on this refactoring. There are several small things that should be done to clean up the code base.\n\n1\\)  The tests have a lot of repeated setup code. Perhaps we should create a setup function for these tests to remove the repetition. \\\n2\\)  showDefaultViewText contains a line that does nothing and should be removed (line 199) \\\n3\\)  setupTooltipTitle is a single line function and the implementation can be simplified. There is no need to wrap the element since the function is always passed a jquery object. Perhaps we should remove the function and set the title inline instead. (line 271)\\\n4\\) setupDisplayView is a confusing name since we also have a 'displayView' subcomponent that refers to something else. This is in the public API so we do need to be careful with what we name it. (line 337)\\\n5\\) It seems that the richTextViewAccessor should be moved into the integrations file. (line 766)\\\n6\\) renderKeyboardTooltip was renamed to be editModeInstruction but a couple references are still in the Integrations file (line 242)        &#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-23T16:09:40.678-0500",
      "body": "Making this issue a blocker since it didn't pass code review and the code is already in trunk.&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-30T12:44:52.608-0500",
      "body": "Code refactoring: &#x20;\n\n* moved richTextViewAccessor from the simple inline edit into the integrations. &#x20;\n* removed setupTooltipTitle function and all calls to it\n* renamed setupDisplayView function to setupDisplayText\n* removed all references to keyboard tooltip option that no longer exists in the integrations&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-30T15:28:34.288-0500",
      "body": "Mike and I talked about the refactoring notes I had put on this issue - here are our notes:&#x20;\n\nAfter looking into the tests, he found that the setup, although it looks quite similar between several tests, is actually different in subtle ways. We felt that the tests would be more readable and maintainable in their current state. \\\nThe issue on line 199 exposed a regression where empty display text was not being styled correctly. This has been fixed under a different JIRA.\\\nThe remaining issues are addressed in Mike's latest patch.&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-30T15:34:36.043-0500",
      "body": "Refactoring changes reviewed and committed.\n"
    }
  ]
}
---
A new display mode renderer function should be added. It and the current edit mode renderer should be factored as template functions that call other public functions to set up the display and edit modes. These other functions should also be public.

        