---json
{
  "title": "FLUID-486",
  "summary": "Styling of portlet does not change to show it is moveable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Herb Wideman",
  "date": "2008-04-10T14:53:51.000-0400",
  "updated": "2008-09-04T10:22:46.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE7, FF2\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1058/",
      "key": "FLUID-1058"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T13:53:03.000-0400",
      "body": "The wording of the test protocol should be changed, since in this example, we don't actually expect the element styling to change. The instructions should say something like \"is there a visual indication that the element is movable?\"\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-28T16:19:50.000-0400",
      "body": "The test protocol has been updated.\n"
    }
  ]
}
---
The testing specification includes the item "On Mouse over, does the styling of the element change to show that the element is movable". This does not happen on mouseover with the portlets on the portlets movement test page (the cursor does change when you move it over the portlet heading though so this may not be worth changing) - \
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/uportal3-newskin/new_theme_sample_html.htm>

        