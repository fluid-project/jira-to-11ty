---json
{
  "title": "FLUID-4975",
  "summary": "Remove browser-specific CSS, replace with css support checker (like modernizr)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "heidi valles",
  "date": "2013-04-11T14:49:14.908-0400",
  "updated": "2022-02-03T10:23:16.483-0500",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-08-12T12:02:26.961-0400",
      "body": "Need to review if modernizr is still the best approach.\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2021-03-24T09:00:55.829-0400",
      "body": "I think lots has changed since this JIRA was filed 🙂\n\nBut one good thing to explore would be the [supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) media query. Here's an example for CSS grid.\n\n```css\ndiv.columns > * {\r\n  background: red;\r\n  float: left;\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\ndiv.columns > * + * {\r\n  margin-left: 1em;\r\n}\r\n\r\n@supports(display: grid) {\r\n  div.columns {\r\n    display: grid;\r\n    grid-gap: 1em;\r\n    grid-template-columns: repeat(4, 100px);\r\n  }\r\n  \r\n  div.columns > * {\r\n    margin: 0;\r\n    width: 100%;\r\n  }\r\n  \r\n  div.columns > * + * {\r\n    margin-left: 0;\r\n  }\r\n}\n```\n\nThe CSS inside the supports query will only be run with browsers which support `display: grid`.\n\nFeature queries themselves are [supported in all modern browsers](https://caniuse.com/css-featurequeries) (not in IE).\n"
    }
  ]
}
---
Remove the css/ie8.css file from UI Options and replace with graceful degradation css, via a css support checker like modernizr.

Implemented here: <https://github.com/heidiv/infusion/tree/FLUID-4970-modernizr>

But issue with false-positive in IE8 for generatedcontent, seems to be because it's within an iframe that is initially hidden (has height of 0). Might be an issue with modernizr's check for this.

        