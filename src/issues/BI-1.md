---json
{
  "title": "BI-1",
  "summary": "Unsecured contact forms are susceptible to spam",
  "tags": "BI",
  "project": {
    "key": "BI",
    "title": "BIG IDeA"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "To Do",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2019-04-05T06:48:31.424-0400",
  "updated": "2019-04-05T07:09:37.704-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2019-04-05T07:01:08.886-0400",
      "body": "Adding Recaptcha to vulnerable forms should reduce the amount of unsolicited emails on these forms. In adding Recaptcha to these forms, a number of issues came up:\n\n1. **Privacy** - Contact Form 7 5.1 and later uses Recaptcha V3 exclusively which monitors user activity across *all* served pages on the site, not just the contact forms, and send data back to Google. This will invalidate any statements of privacy on the BIG IDeA website.\n2. **Recaptcha V2 Plugin** - In order to use the older Recaptcha V2 (the traditional \"I'm not a Robot\" and select the matching images), a separate [3rd party plugin](https://wordpress.org/plugins/wpcf7-recaptcha/) needed to be downloaded and activated on the site to add this functionality.\n3. **Formatting issues caused by Easy Lazy Loader plugin** - A plugin called \"Easy Lazy Loader\" was causing the form submit button to render outside of its Form element after a Recaptcha is added to the form. This also caused an invisible Recaptcha text field to be rendered visibly causing confusin. To avoid this issue, the Easy Lazy Loader plugin was disabled.\n\nSo far only this form is secured: <https://bigidea.one/submit-a-design-challenge/>\n\nOther forms should be secured with Recaptcha. @@Alan Harnum is there any reason we wouldn't want to add Recaptcha to all open, public forms?\n"
    }
  ]
}
---
Unsecured contact forms on the website are allowing spam bots and other agents to abuse the forms and send unsolicited emails.

In particular [this page](https://bigidea.one/submit-a-design-challenge/) seems to be susceptible.

        