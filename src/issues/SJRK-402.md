---json
{
  "title": "SJRK-402",
  "summary": "Implement UI for sign-up",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-10-21T13:38:55.561-0400",
  "updated": "2021-02-26T10:57:18.048-0500",
  "versions": [],
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-402/2020-10-22 Sign Up design 1.PNG",
      "filename": "2020-10-22 Sign Up design 1.PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-402/2020-10-22 Sign Up design 2.PNG",
      "filename": "2020-10-22 Sign Up design 2.PNG"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-12-01T17:02:13.356-0500",
      "body": "Some concerns to keep in mind (courtesy of Dana):\n\n* how will we validate email address? i.e. what format should the email address have?\n* if we do client-side validation and opt for built-in HTML functionality and CSS to show errors, do we debounce user input to avoid marking a partially-entered value as invalid?\n* if we debounce, how long? attention should be paid to accessibility concerns around screen reader experience, i.e. how we announce an invalid entry\n"
    },
    {
      "author": "Dana",
      "date": "2020-12-01T17:22:34.264-0500",
      "body": "* When to show the errors? When user begins to type in the field (how would these notifications be handled by a screenreader)? or wait until the Sign up button is selected?\n* Do we show in-line error messages or provide a notification dialog? Looking at WebAIM I think inline messages are the best for clarity (directly associating the error with corresponding form field) <https://webaim.org/techniques/formvalidation/#form>\n* Having all/any error messages appear inline only when user selects the Sign up button seems best for accessibility, simplicity and consistency.\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-12-02T07:48:09.500-0500",
      "body": "Dana, I believe Lisa Liskovoi has some examples and best practices for this, so it's probably best to check with her. However, below are some of my current thoughts.\n\nI don't think you'd want to validate the input until after they've finished entering into the field(s). If you did it as input was being entered, even with some delay, it may affect those that have difficulty entering text. See ([WCAG Guideline 2.2 Enough Time](https://www.w3.org/TR/WCAG21/#enough-time) and [Understanding Guideline 2.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html)).\n\nI'd probably suggest validating on submit; that way the user can understand why the form doesn't submit and we can mark the fields as necessary. If we did the validation after leaving the field, there would be some asymmetry with the e-mail field and the password/confirm comparison. That is we couldn't validate the the password and password confirmation fields are the same until they are both filled. Also this [article](https://medium.com/@lsnrae/accessible-form-validation-9fa637ddb0fc) provides some examples and reasons for why it's more accessible to validate on submission including having an always enabled submit button.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2021-02-26T10:57:18.044-0500",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/111) that implements this feature has been merged into the main branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/e8fb396d078ee557b6ee58b7d58805ddc9d47fe1).\n"
    }
  ]
}
---
Implement the UI for the account sign-up page in the Storytelling Tool. This work will include form validation and basic error reporting/handling.

The sign-up page should call a server endpoint to test functionality, if this work is tackled before the implementation of log-in and log-out UIs.

        