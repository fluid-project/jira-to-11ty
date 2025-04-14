---json
{
  "title": "FLUID-4341",
  "summary": "UI Options: sakai integration demo fails",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Cindy Li",
  "date": "2011-07-14T14:47:59.721-0400",
  "updated": "2013-04-11T17:06:51.938-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4344/",
      "key": "FLUID-4344"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-07-14T14:48:23.771-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-07-18T10:15:55.709-0400",
      "body": "This will be fixed under <https://fluidproject.atlassian.net/browse/FLUID-4344#icft=FLUID-4344>\n"
    }
  ]
}
---
To produce:

1\. go to <http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>\
2\. the page throws js error -\
"Error instantiating component with name "fluid.renderIframe: selector ".flc-uiOptions-fatPanel .flc-uiOptions-iframe" with name iframe returned no results in context \[object HTMLDocument]"

Seems this demo was overlooked from being updated with the latest iframe version of fat panel.

        