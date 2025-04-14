---json
{
  "title": "FLUID-5946",
  "summary": "PrefsEditor.css has extra \";\" after background-image styles",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-08-22T09:18:13.696-0400",
  "updated": "2016-08-22T12:06:45.032-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Safari 9.1.2 ( Mac OS 10.11 )\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-08-22T12:06:39.962-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/737> has been merged into the infusion master branch at 286e6952c4f2b55c72b5ff2513264aeb93aa8c37\n"
    }
  ]
}
---
The compiled PrefsEditor.css generated from PrefsEditor.styl stylus file outputs with extra ";" after the background-image styles. This causes warnings in Safari "Invalid CSS property declaration at: ;"

Example output:

```java
.fl-prefsEditor .fl-slider a {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 1.5em;
    width: 1.5em;
    margin-top: -.4em;
    margin-left: -.4em;
    background-color: #fff;
    border: 1px solid #b3b3b3;
    border-radius: 2em;
    box-shadow: 4px 2px 3px rgba(0, 0, 0, 0.3);
    background-image: -webkit-linear-gradient(right top, #fff 46%, #e9eaea 73%);
    ;
    background-image: -moz-linear-gradient(right top, #fff 46%, #e9eaea 73%);
    ;
    background-image: -o-linear-gradient(right top, #fff 46%, #e9eaea 73%);
    ;
    background-image: -ms-linear-gradient(right top, #fff 46%, #e9eaea 73%);
    ;
    background-image: linear-gradient(right top, #fff 46%, #e9eaea 73%);
    ;
}
```

        