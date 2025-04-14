---json
{
  "title": "FLUID-897",
  "summary": "Provide a context to the uploader demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Erin Yu",
  "date": "2008-07-14T20:08:59.000-0400",
  "updated": "2011-02-22T16:27:45.901-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-897/Demo.png",
      "filename": "Demo.png"
    }
  ],
  "comments": [
    {
      "author": "Erin Yu",
      "date": "2008-07-14T20:19:03.000-0400",
      "body": "dev-iteration38\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-07-15T20:02:28.000-0400",
      "body": "We will likely use ATutor since they are in the midst of integrating the Uploader into their application.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-16T15:58:26.000-0400",
      "body": "We will be using ATutor as our user test bed for Uploader. Now that we're on the verge of fixing <https://fluidproject.atlassian.net/browse/FLUID-904#icft=FLUID-904>, this Uploader should be ready for testing in ATutor.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:45.899-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
In order to gather more accurate results from the user testing, the Uploader demo requires a concrete context. I suggest we add a mock Sakai Resources screen as a background (as we did with Inline Edit demo), and place the Add Files button somewhere on the screen. Ideally, I'd like the user to be able to see a list of files and see a highlighted group of files added to the list after the upload.&#x20;

        