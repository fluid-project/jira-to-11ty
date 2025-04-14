---json
{
  "title": "FLUID-4392",
  "summary": "Possibility for additivity in demands blocks is required so that they can be expressed in a modular way",
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
  "reporter": "Antranig Basman",
  "date": "2011-08-08T16:23:23.518-0400",
  "updated": "2014-03-03T13:04:43.408-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4733/",
      "key": "FLUID-4733"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4130/",
      "key": "FLUID-4130",
      "summary": "Should be possible to incorporate additional material to be merged into component options from demands blocks and elsewhere"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:54:55.521-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-02-21T02:02:42.868-0500",
      "body": "I can't believe this is finally implemented....\n"
    }
  ]
}
---
lahabana describes the following situation:

```java
fluid.demands("fluid.videoPlayer.eventBinder", 
        ["fluid.videoPlayer.controllers",
            "fluid.videoPlayer.captionner",
            "fluid.videoPlayer.captionLoader",
            "fluid.videoPlayer",
            "fluid.videoPlayer.media"],
        {
            options: {
                listeners: {
                    "{controllers}.events.afterTimeChange": "{captionner}.resyncCaptions",
                    "{captionLoader}.events.onCaptionsLoaded": "{captionner}.resyncCaptions",
                    "{controllers}.events.onTimeChange": "{media}.setTime",
                    "{videoPlayer}.events.onTimeChange": "{media}.setTime",
                    "{controllers}.events.onVolumeChange": "{media}.setVolume",
                    "{videoPlayer}.events.onVolumeChange": "{media}.setVolume"
                }
            }
             
        });
```

where the component "controllers" is actually constructed by a renderer decorator as follows:

```java
tree.controllers = {
                decorators: [
                    {
                        type: "fluid",
                        func: "fluid.videoPlayer.controllers"
                    },
```

The demands block although mismatching is allowed to match as a result of the successfully matched contexts (a further framework bug) but the reference to {controllers} is not resolvable. It should be possible for this demands block to be written in two parts, one of which mismatches completely in the case controllers is not rendered and so contributes no binding information, but both of which match and are merged together in the case controllers is present.

        