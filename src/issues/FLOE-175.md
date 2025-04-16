---json
{
  "title": "FLOE-175",
  "summary": "Create a demo design that shows metadata editing working on multiple resources ",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-03-17T12:48:55.975-0400",
  "updated": "2014-04-07T11:23:10.381-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-177/",
      "key": "FLOE-177"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-03-17T12:53:52.156-0400",
      "body": "Attached early sketch of a possible demo for purposes of helping start a discussion on a possible design.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-17T12:58:06.357-0400",
      "body": "Jonathan Hung does restarting the demo populate the editable area with the OER resource and \"start from scratch\" removes all of the content?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2014-03-17T15:44:53.079-0400",
      "body": "Justin Obara - The images are intentionally sketchy to raise questions like this to help push the design thinking forward. 🙂 To respond to your questions:\n\n\"Restart Demo\" will reset the user's session. We will have to decide whether the start of the session is pre-populated with some OER content, or start as blank. If we start with a blank, we would then have to figure a way to populate the editor with OER content. For this reason I would think we would want to start with some OER content already in the simple editor.\n\n\"Start from Scratch\" I was thinking should remove the content in the editor. But I don't know how useful that is since it may be confusing.\n\n* why would someone use that option when they can select all and delete?\n* how is \"Start from Scratch\" (or whatever the option will be called) different from \"Restart Demo\"?\n* how do I revert back if I deleted the content?\n* would a label \"New\" or \"Start a New OER\" make it clearer? I'm not sure.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-18T08:31:08.517-0400",
      "body": "I guess the issue will be around adding the video. Currently we can't add more than 1, so restarting the demo clears out video model as well.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2014-04-07T11:22:46.494-0400",
      "body": "Designs are complete and can be found here:\\\n<http://wiki.fluidproject.org/display/fluid/FLOE+Metadata+Authoring+Design>\n"
    }
  ]
}
---
Create a demo design that shows metadata editing working on multiple resources that are in different states of "doneness".

For example, one resource may already exist and the author wants to edit and add some metadata. Another resource may not exist yet, so the author may want to create a new resource.

The demo may also want to convey a stronger linkage to a OER.

The new demo design can be found under "Iteration 2": <http://wiki.fluidproject.org/display/fluid/FLOE+Metadata+Authoring+Design>

        