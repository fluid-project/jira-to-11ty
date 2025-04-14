---json
{
  "title": "FLUID-4337",
  "summary": "Error when resolving listener specified by global name to boiled event",
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
  "reporter": "Cindy Li",
  "date": "2011-07-12T17:09:56.528-0400",
  "updated": "2013-04-11T17:25:29.889-0400",
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
      "type": "Related to",
      "url": "/browse/FLUID-4398/",
      "key": "FLUID-4398"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-03-21T16:33:40.776-0400",
      "body": "This reached the core framework in the mega-merge of Jan 20 2012 \\\n<https://github.com/fluid-project/infusion/commit/1e7f0d8f071a69ef5d9cd75e18fc0fe3da170622>\n"
    }
  ]
}
---
options: {\
events: {\
onUIOptionsComponentReady: {\
event: "{uiOptionsLoader}.events.onUIOptionsComponentReady",\
args: \["{UIOptionsLoader}", "{eventBinder}"] \
}\
},\
listeners: {\
onUIOptionsComponentReady: "fluid.uiOptionsEventBinder.bindModelChanged"\
}\
}

Sequence is:\
1\) Framework discovers boiled event, calls out to "resolveEvent" - this creates a zero-arg event which is the ACTUAL listener function\
2\) When the event fires, the listener resolution code which is jammed into fireToListeners observes a harmless function handle and dispatches to it,\
3\) The inside of "dispatchEvent" does not contain the same listener resolution code as in fireToListeners, finds a string handle where it expects a function and then fails

This is a general consequence of the fact that we do not have "boiled listeners", only "boiled events"

        