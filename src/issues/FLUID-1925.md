---json
{
  "title": "FLUID-1925",
  "summary": "After the High Contrast skin has been applied, 'Mist' and 'Rust' do not preview correctly.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Michelle D'Souza",
  "date": "2008-12-05T12:09:24.000-0500",
  "updated": "2008-12-09T16:06:59.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "FSS",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-05T12:19:28.000-0500",
      "body": "Rust doesn't preview well in general regardless of whether or not High Contrast has been set.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-05T14:06:30.000-0500",
      "body": "Rust theme was missing, and some re-ordering of the css includes was required\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-05T15:32:00.000-0500",
      "body": "I still see the issue in revision 6164\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-06T22:24:53.000-0500",
      "body": "I see what you mean. There is a conflict between the theme for the UI Options and the theme applied in the preview. The two do not play well together. Until themes can safely nest inside each other, the only solution I can think of is to make the preview window an iframe, isolated from any pre-existing theme applications.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-08T09:32:03.000-0500",
      "body": "Bug Parade: 0.6 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-09T13:58:50.000-0500",
      "body": "Fix contains Splitting UI Options preview into an iframe, splitting UI Options appearance from preview window appearance, a minor change to UIOptions.js preview selectors\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-09T15:54:21.000-0500",
      "body": "I've reviewed this code, and made a slight change to a comment (in response to a discussion with Jacob). It looks good to go.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-09T16:06:59.000-0500",
      "body": "Verified fix using:\n\nFF3, FF2 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Steps to create:

1\. Select High Contrast color scheme in UI Options\
2\. Click 'Save and apply your preferences'\
3\. Select Mist color scheme\
4\. Note that the preview does not show the Mist color scheme

        