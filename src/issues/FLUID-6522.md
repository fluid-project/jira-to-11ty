---json
{
  "title": "FLUID-6522",
  "summary": "Newer portions of jQuery UI plugin are not bundled correctly.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Divyanshu Mahajan",
  "reporter": "Tony Atkins [RtF]",
  "date": "2020-06-22T08:29:32.546-0400",
  "updated": "2024-07-18T07:41:07.609-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Divyanshu Mahajan",
      "date": "2020-06-24T10:20:59.690-0400",
      "body": "The problem that I noticed with both these selectors is that they didn't return the complete list of elements that are focusable/tabbable. For example, the `*summary*` tag and the `*details*` tag are not present in the array returned by them, even if it's on the webpage. It would create accessibility issues and is counterproductive to what we actually want.\n\nThe available alternative is [ally.js](https://allyjs.io/) which can be used separately. It is more accurate and flexible.\n"
    }
  ]
}
---
In looking into the requirements of our upcoming gamepad navigator, @@Divyanshu Mahajan and I discovered that the bundling of jQuery UI source omits a few later features that are already included in the version that we use, namely the new "tabbable" and "focusable" pseudo-selectors.

 

This ticket covers updating the [bundling of that plugin](https://github.com/fluid-project/infusion/blob/master/Gruntfile.js#L317) in `Gruntfile.js`.

        