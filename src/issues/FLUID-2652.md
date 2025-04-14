---json
{
  "title": "FLUID-2652",
  "summary": "JAWS announces that an inline edit area is a button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alison Benjamin",
  "reporter": "Alison Benjamin",
  "date": "2009-05-07T10:17:47.000-0400",
  "updated": "2010-12-01T17:01:47.746-0500",
  "versions": [
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "MacBook running JAWS 10 on XP with VMWare \\\nWindows XP / JAWS 10\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3176/",
      "key": "FLUID-3176",
      "summary": "Off screen class would be useful for some a11y fixes"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2651/",
      "key": "FLUID-2651"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2656/",
      "key": "FLUID-2656"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2652/FLUID-2652.txt",
      "filename": "FLUID-2652.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2652/FLUID-2652-InlineEditAreaButton.txt",
      "filename": "FLUID-2652-InlineEditAreaButton.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2652/FLUID-2652IoCImplementation.txt",
      "filename": "FLUID-2652IoCImplementation.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2652/FLUID-2652IoCImplementationPart2.txt",
      "filename": "FLUID-2652IoCImplementationPart2.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2652/FLUID-2652IoCWithComments.txt",
      "filename": "FLUID-2652IoCWithComments.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2652/textEditButtonFocus.txt",
      "filename": "textEditButtonFocus.txt"
    }
  ],
  "comments": [
    {
      "author": "Alison Benjamin",
      "date": "2009-05-11T13:56:35.000-0400",
      "body": "Here are instructions on how to replicate this bug with JAWS 10 & IE 7.&#x20;\n\n1\\. Tab into the \"Section Info\" frame\n\n2\\. Tab to first Inline Edit area. JAWS reads: \"Astronomy 7 A P 001 LEC Button\"\n\n3\\. Press ENTER to enter Inline Edit field.  Note: this is an unintuitive action for a JAWS user: they assume the \"button\" is not editable. JAWS reads: \"Enter sections edit Astronomy 7 A P 001 LEC type in text\"\n\n4\\. Type in \"Hello\". Press ENTER to save. JAWS reads \"ENTER Astronomy 7 A P 001 LEC Button\". Note that the change made in Step 3 (\"Hello\") is not read, and that JAWS does not announce that a save has been made.&#x20;\n\n5\\. Refresh the JAWS virtual buffer (press INSERT-ESC). JAWS reads: \"Screen updated,\" but the change made in Step 3 is not read. Press TAB and the SHIFT-TAB to refocus onto the Inline Edit to get JAWS to read the changes made. JAWS reads: \"Shift tab hello button\".&#x20;\n\nIssues: \\\nInstructions needed:\\\n-how to enter the inline edit field\\\n-how to save an edit\n\nNotifications needed: \\\n-user should be notified of change is saved\\\n-user may need to know Virtual Buffer needs to be refreshed to see changes.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T14:05:38.000-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-09-15T12:36:24.000-0400",
      "body": "I've committed the patch so that user tests can be run with this fix. I think the 'hiddenForScreenReaderUsers' CSS class should be made part of FSS.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-06T16:22:24.000-0500",
      "body": "using FF 3.5\n\nIn JAWS it will sometimes read the editable text followed by \"button, use space bar to activate\". At other times it will just read the text followed by \"button\".&#x20;\n\nIn NVDA it will read the text and announce that it is a button and is clickable. It also reads the undo and redo buttons as \"u\" and \"r\" respectively.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-24T14:06:04.000-0500",
      "body": "Code Review Comments: FLUID-2652b.text\\\n\\==================================\n\nSo in this incarnation, the view and edit mode are read the same way. This may be confusing and may not suggest to the user how to switch modes. You have probably put more thought into this than I have though, so it would be interesting to know what some pros and cons are with this implementation versus others.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T19:26:35.000-0400",
      "body": "Justin and Alison, can you comment on where we're at with this issue?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-09-03T12:33:09.233-0400",
      "body": "At the dev meeting on Sept 1, 2010 we talked about a couple of accessibility issues. At that time it was decided to do the following for this issue.&#x20;\n\n1\\. Pick a meaningful role and use aria-describedby to further explain the interaction\n\n2\\. Embed a toggle button after the editable text--text no longer gets focused, but the toggle button does instead. Text is still given \"focused\" style. The toggle button element will need enough of a label to make sense to the user\n\nThe toggle button can be invisible. It will be actionable by the keyboard, and will place focus styling on the text when tabbed to. The text itself will be actionable by the mouse, but not the keyboard.&#x20;\n\n<http://old.nabble.com/accessibility-issues-to-think-about-to29522497.html>\n\nI believe we will try to code up both options and test with a user.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-09-09T13:51:44.314-0400",
      "body": "For Infusion 1.3 we will start by doing option 2 from previous comment.&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-09-22T12:28:55.267-0400",
      "body": "Adds a toggle button to the end of the container in order to comply with the screen reader.  We spoke with Antranig regarding the use of IoC to handle our accessibility options.   IoC is not included in this patch, however, this may be a good point to make a decision on its usage. &#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-09-24T15:57:20.910-0400",
      "body": "Patch FLUID-2652IoCImplementationPart2.txt was added for better naming conventions of the new functions and variables.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-09-24T16:59:25.066-0400",
      "body": "Hi - this patch looks pretty good. However, the configuration of the \"blurHandlerBinder\" needs to be broken out so that the various integrations (for example, selection dropdown or rich text) can make use of the core implementation by just contributing additional \"dead man's blur\" elements.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:38:04.963-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-07T10:48:52.855-0400",
      "body": "Appended an image button to the end of the inline edit container.   The inline edit is now more screen reader friendly as the button is given an ARIA role of button and the inline edit container is given an ARIA tooltip.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-10T12:03:48.070-0500",
      "body": "Moved the textEditButtonFocus.txt patch from <https://fluidproject.atlassian.net/browse/FLUID-3821#icft=FLUID-3821>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-10T12:14:53.862-0500",
      "body": "Committed Mike's patch ( textEditButtonFocus.txt ) which fixes the focus issue when leaving edit mode.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-01T17:01:47.738-0500",
      "body": "I code reviewed this with a whole group of Inline Edit JIRA issues for 1.3 and it is fine.&#x20;\n"
    }
  ]
}
---
A protocol for accessing and using the inline edit area must be made available to a JAWS user:&#x20;

* JAWS announces that an inline edit area is a button.&#x20;
* no indication about how to make or save an edit
* no indication that an edit is successful&#x20;
* the JAWS virtual buffer needs to be refreshed or the user will not be able to see the changes made.&#x20;

"Redo" "Undo" buttons also need to be accessible to a screen reader.&#x20;

        