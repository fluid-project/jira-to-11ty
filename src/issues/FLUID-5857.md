---json
{
  "title": "FLUID-5857",
  "summary": "Progress Example submit button stuck in disabled state on Firefox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Simon Bates",
  "date": "2016-02-10T15:54:13.510-0500",
  "updated": "2024-07-23T11:02:27.186-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Progress"
  ],
  "environment": "Firefox 43.0.4\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Neel Dalsania",
      "date": "2016-03-02T09:53:35.779-0500",
      "body": "I am interested to work on it\n"
    },
    {
      "author": "Neel Dalsania",
      "date": "2016-03-02T10:12:04.484-0500",
      "body": "I just added autocomplete attribute to the submit, since Firefox persists the dynamic disable state of a \\<button> across page loads and it works perfectly\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-02T10:23:06.152-0500",
      "body": "@@Neel Dalsania thanks for looking into this. Would you like to submit a pull request with your fix? You can have a look at our coding and commit standards ( <https://wiki.fluidproject.org/display/fluid/Coding+and+Commit+Standards> ).\n"
    },
    {
      "author": "Neel Dalsania",
      "date": "2016-03-02T11:19:04.612-0500",
      "body": "Created the pull request <https://github.com/fluid-project/infusion/pull/673>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T11:02:27.186-0400",
      "body": "Could not reproduce with FF 128 on macOS 14.5\n"
    }
  ]
}
---
It is possible to get the submit button on the Progress Example page stuck in a disabled state on the Firefox browser.

To reproduce:

1. Go to <http://build.fluidproject.org/infusion/demos/progress/> in Firefox
2. Click the Submit button
3. Reload the page using the browser's reload button

Expect:

* The Submit button is enabled

Actual:

* The Submit button is disabled

        