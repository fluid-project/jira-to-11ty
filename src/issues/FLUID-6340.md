---json
{
  "title": "FLUID-6340",
  "summary": "Allow NPM to handle OTP failures when using fluid-publish",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2018-09-12T10:07:13.078-0400",
  "updated": "2024-07-22T10:35:11.021-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "fluid-publish"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-09-12T11:25:03.607-0400",
      "body": "We are not able to conditionally catch errors, but we can share the stdio between the child and parent processes so that users are able to be prompted for the OTP when needed. \n"
    }
  ]
}
---
The current 2FA support for NPM requires a one-time password (OTP). We've handled this by allowing the users to pass in an --otp=123456 (where the number is replaced by the specific otp). This works but not when there is a long prepublish step. In those cases it will always time out. NPM is able to handle this by prompting the user to re-enter the otp directly. However, fluid-publish catches the error beforehand so the user is not presented the option to re-enter. 

 

We should not catch the 401 errors and let NPM handle it so that a user can just be prompted. We should still keep the otp flag, which is similar to how NPM works.

        