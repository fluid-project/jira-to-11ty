---json
{
  "title": "FLUID-6042",
  "summary": "Fruit rankings visually start with one star rating, but actually nothing is checked by default",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Justin Obara",
  "date": "2016-11-07T16:32:25.366-0500",
  "updated": "2018-02-07T17:24:32.491-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6048/",
      "key": "FLUID-6048"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6042/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-07T16:34:38.576-0500",
      "body": "screenshot.png shows a single star visually set, but all of the \"aria-checked\" attributes are set to false.\n"
    },
    {
      "author": "Khushil Mistry",
      "date": "2017-01-23T09:10:26.818-0500",
      "body": "<https://github.com/fluid-project/infusion/pull/804> This is the pull request i have created.\\\nNow area-checked is set true for first start it it needed. Just made a call demo.fiveStar.updateARIA(stars,1) in the function demo.fiveStar.setARIA . Please Review it. Thanks.\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the Keyboard Accessibility demo\
2\. Using the browsers developer tools inspect the star rating of a fruit

Notice that visually the fruit appears to default to one star rating, however on inspection you should see that all of the stars have the aria-checked set to false.&#x20;

        