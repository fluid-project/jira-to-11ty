---json
{
  "title": "FLUID-6190",
  "summary": "Fluid demos are using hardcoded HTTP URL",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Giovanni Tirloni",
  "date": "2017-09-03T10:02:23.470-0400",
  "updated": "2024-07-22T09:24:27.828-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-09-05T12:12:51.404-0400",
      "body": "@@Giovanni Tirloni the recommendation from his post ( <https://jeremywagner.me/blog/stop-using-the-protocol-relative-url> ) is to just go ahead and use [https://](https://./) There are some reasons listed including performance and security. Because we have to change the URLs anyways, we may just want to update them to https. Let me know what you think.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-05T12:44:57.818-0400",
      "body": "Since we have to modify the config file before deploying, it seems okay to hardcode https:// in the URL.\n\nI don't think the points made in the article are particularly strong (HTTP/2 performance improvements are debatable and if the website is available on HTTP then all security guarantees are gone anyway). I do agree the Internet has changed and https:// should be the default. Enforcing that in the code might be the easiest way to ensure we don't downgrade security in the future (say, Gio makes a mistake and deploys it in a non-HTTPS way... things will be broken immediately which is good).\n\nIf we hit practical issues while developing/testing or running CI in the future (I foresee some complications with self-signed certificates and slower pipelines but nothing super disruptive), we can re-evaluate.\n"
    }
  ]
}
---
While enabling HTTPS for build.fluidproject.org, warnings about mixed-content are showing which prevent the page being marked secure.

Ideally we should start using schemaless URL (//build.fluidproject.org instead of [http://build.fluidproject.org](http://build.fluidproject.org/)).

Steps to reproduce:\
1\. Go to [https://build.fluidproject.org](https://build.fluidproject.org/)\
2\. Access any of the demos\
3\. Confirm URL is https:// but page is not marked as secure\
4\. In the F12 > Security tab, a warning about mixed content is displayed

        