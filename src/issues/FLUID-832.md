---json
{
  "title": "FLUID-832",
  "summary": "Inline Edit tests fail on Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Michelle D'Souza",
  "date": "2008-06-26T18:47:05.000-0400",
  "updated": "2011-02-22T16:27:56.309-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 3.1.1\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1001/",
      "key": "FLUID-1001"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-832/FLUID-832.patch.txt",
      "filename": "FLUID-832.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-28T12:36:03.000-0400",
      "body": "Tests marked with asterisks fail in Safari:\n\n7\\. InlineEdit Tests module: Keyboard Navigation Edit (3, 8, 11)\\\n1\\. Display is tabbable\\\n2\\. Initially display field is not focussed\\\n3\\. After focus, display is focussed\n\n*\n  *\n    * 4\\. After enter pressed, display field is hidden \\*\\*\\*&#x20;\n    * 5\\. After enter pressed, edit field is visible \\*\\*\\*\n    * 6\\. After enter pressed, edit field contains same text as display field expected: Click me to edit... actual: this is the hidden text for the first editor \\*\\*\\*\\\n      &#x20;         7\\. After changing text and pressing enter, display field is visible\\\n      &#x20;         8\\. After changing text and pressing enter, display has focus style\\\n      &#x20;         9\\. After changing text and pressing enter, edit field is hidden\\\n      &#x20;       10\\. After changing text and pressing enter, display field contains new text: This is new text.\n\n10\\. InlineEdit Tests module: Arrow Keys while Editing (5, 0, 5)\n\n*\n  *\n    * 1\\. After enter pressed, display field is hidden \\*\\*\\*\n    * 2\\. After enter pressed, edit field is visible \\*\\*\\*\n    * 3\\. After enter pressed, edit field contains same text as display field expected: Click me to edit... actual: this is the hidden text for the first editor \\*\\*\\*\n    * 4\\. After left-arrow pressed, display field is still hidden \\*\\*\\*\n    * 5\\. After left-arrow pressed, edit field is still visible \\*\\*\\*\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-12T13:07:15.000-0400",
      "body": "The tests that fail are the ones that use jqUnit's jquery.simulate() function.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-12T15:15:47.000-0400",
      "body": "In Safari, simulate()'s call to document.createEvent(\"KeyEvents\") (jquery.simulate.js line 81) causes a \"NOT\\_SUPPORTED\\_ERR: DOM Exception 9\" exception. It falls through to the catch clause, which tries document.createEvent(\"Events\") (line 86).\n\nThe result of this is that the which field of the resulting event is not set in Safari.\n\nThe keyboard a11y plugin looks at the which field to decide whether or not to fire the activation handler (jquery.keyboard-a11y.js line 175), and since it's not set, it doesn't fire it. This is why the event simulation is not working properly.\n\nOne possible solution might be to modify the keyboard-a11y plugin to double-check the which field, and if it's not there, fall back to the keyCode or charCode.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-12T16:03:19.000-0400",
      "body": "I'm attaching a patch file (<https://fluidproject.atlassian.net/browse/FLUID-832#icft=FLUID-832>.patch.txt) that does the previously-described double-check of evt.which\n\nI'm not sure about the appropriateness of this approach, so I'm going to request a review before proceeding.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-18T11:38:53.000-0400",
      "body": "I've filed this issue with jQuery UI:  <http://ui.jquery.com/bugs/ticket/3229>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-18T11:44:52.000-0400",
      "body": "Fixed. The code has a reference to the jQuery ticket, so that when it is resolved, we can revert back.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:56.308-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---

        