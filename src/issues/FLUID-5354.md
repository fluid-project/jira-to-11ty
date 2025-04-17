---json
{
  "title": "FLUID-5354",
  "summary": "SWFUpload, used by the Uploader, is vulnerable to cross-site scripting (XSS) attacks",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2014-05-01T09:39:33.059-0400",
  "updated": "2014-05-22T14:20:34.779-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3",
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5353/",
      "key": "FLUID-5353",
      "summary": "Uploader not responsive in IE8 (Flash 12)"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-05-01T09:42:04.455-0400",
      "body": "This makes sense. I think we should include a note in the README or release notes about this.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-13T12:48:20.822-0400",
      "body": "Submitted a pull request to remove flash support \\\n<https://github.com/fluid-project/infusion/pull/518>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-05-22T13:49:25.827-0400",
      "body": "Merged at 7ad02491a7faa7f9f2125ed2fb1efbee07b93faa\n"
    }
  ]
}
---
Justin Obara and I were discussing <https://fluidproject.atlassian.net/browse/FLUID-5353#icft=FLUID-5353> in the channel, and I made the mistake of going looking for new updates to SWFUpload. What I found was that SWFUpload suffers from a cross-site scripting vulnerability. The maintainer has not bothered to fix it.

<https://nealpoole.com/blog/2012/05/xss-and-csrf-via-swf-applets-swfupload-plupload/>

Years ago, I investigated alternatives to SWFUpload but determined that it was a substantial amount of work to replace it. We need to take this issue seriously. Post-1.5, the plan was to remove support for "legacy" browsers (those that aren't the latest versions of IE, Chrome, Firefox, and Safari). This would include removing the Flash back-end for the Uploader.

Given the nature of this issue, I think we should remove SWFUpload and the Flash strategy for the Uploader immediately.

        