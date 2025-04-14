---json
{
  "title": "FLUID-5879",
  "summary": "There should be a way to exclude elements from font changes, to assist with icon font usage",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eloisa Guerrero",
  "reporter": "Justin Obara",
  "date": "2016-03-21T10:09:45.480-0400",
  "updated": "2017-08-17T15:53:44.249-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-03-21T10:12:15.068-0400",
      "body": "A possible solution would be to make use of the [:not()](https://developer.mozilla.org/en/docs/Web/CSS/:not) pseudo class in our [styles](https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/css/stylus/Enactors.styl) and explicitly exclude some class. Maybe \"fl-icon\" or something.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-17T15:53:38.498-0400",
      "body": "Merge PR ( <https://github.com/fluid-project/infusion/pull/841> ) into the project repo at 2e5bd5bf9be43ecf0f5303cf3a206b866e35ba6f\n"
    }
  ]
}
---
Currently the prefs framework will change the font used for the entire page when the text style preference is set. However, this is problematic when icon fonts are used because those specific fonts should remain unchanged. We work around this in our components through specificity and setting them with !important. However, a more general approach could be to take an approach like FLUID-5697 did and have a means of explicitly excluding elements.

        