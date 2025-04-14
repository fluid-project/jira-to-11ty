---json
{
  "title": "FLUID-3131",
  "summary": "The default afterMove event listener code for the Image Reorderer doesn't get invoked, causing no results to be sent back to the server.",
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
  "reporter": "Colin Clark",
  "date": "2009-08-24T13:00:34.000-0400",
  "updated": "2009-10-05T16:49:34.000-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3122/",
      "key": "FLUID-3122"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-21T09:44:08.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-29T19:26:08.000-0400",
      "body": "This fix has been implemented and is ready for code review.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-10-04T13:17:32.000-0400",
      "body": "Hi - I have reviewed the changes occurring at rev. 7828 (btw, we seem to have lost commit linking on JIRA again) and they look good - I do want to query the expansion of fluid.initView that used to occur at line 117 into the 3 lines now at line 128:\\\nvar that = {};\\\nfluid.mergeComponentOptions(that, \"fluid.reorderImages\", options);\\\nthat.container = fluid.container(container);\\\nwhich appear less idiomatic - is there a step of the initView workflow that we want to bypass here?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-05T12:38:29.000-0400",
      "body": "It seems that the fix for this may have caused some of the image reorderer's unit tests to fail\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-05T16:30:44.000-0400",
      "body": "This one is ready for code review again.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-10-05T16:49:34.000-0400",
      "body": "I have verified this as fixed, and close this JIRA through delegation of Royalty.\n"
    }
  ]
}
---
Currently, the Image Reorderer has a default afterMove event listener that takes care of updating the image order correctly for a form-based style of communicating with the server. It is intended to automatically POST the order back to the server after each move.

However, there is a bug in the code that causes it to never be invoked. The code tries to assign the event listener to the options.afterMoveCallback member, which is no longer supported by the Reorderer (and hasn't been since about Infusion 0.6 or so).

The fix is simple and will be included in Infusion 1.2. In the meantime, there are straightforward workarounds. Try this:

var url; // Put the URL you want to POST the order back to here.

fluid.reorderer("#gallery", {\
listeners: {\
afterMove: function (imageMoved, position, allImages) {\
images.each(function (idx, image) {\
jQuery(image).children("input").val(idx);\
});

var imageOrder = jQuery("#reorder-form").serialize();\
jQuery.ajax({\
type: "POST",\
url: url,\
data: imageOrder,\
complete: function (data, ajaxStatus) {\
// Handle success or failure by being nice to the user.\
}\
});\
}\
}\
});

        