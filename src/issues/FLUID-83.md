---json
{
  "title": "FLUID-83",
  "summary": "The ARIA roles and states in the Lightbox aren't read by JAWS or Windows-Eyes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Colin Clark",
  "date": "2007-11-01T11:31:59.000-0400",
  "updated": "2008-08-09T14:30:07.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "FireFox 2.0, JAWS 8.0 and Window-Eyes 6.0 on Windows XP\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-88/",
      "key": "FLUID-88"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-151/",
      "key": "FLUID-151"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2007-11-12T04:17:57.000-0500",
      "body": "Jaws currently only has partial support for ARIA. It's possible that it wouldn't be expected to handle the markup we're using. We should try to get more specifics from Freedom Scientific about exactly what is and isn't currently supported. Window-Eyes supposedly has better support, but we may want to double-check the level.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-11-12T08:02:56.000-0500",
      "body": "Good point. I checked with David and Simon; the grids, at very least, should be read by both screenreaders.\n\nWe also need to be testing the output of FireFox with a tool like MSAA Inspect to ensure it correctly reflects the roles and states as defined in the markup.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-11-12T15:15:50.000-0500",
      "body": "I've done some further research with Inspect32 and discovered the following:\n\nIn the Lightbox, when we catch Tab and Arrow Key events, we throw focus onto an \\<a> element within the thumbnail, rather than the thumbnail \\<div> itself. The reason we throw focus onto the link instead of the parent div is to get Enter key handling for free. So when the user hits the Enter key on a thumbnail, the browser will automatically trigger the link if it is focussed.\n\nUnfortunately, it's the thumbnail div that contains the ARIA role and state attributes.  So it needs to have focus in order for the ARIA semantics to be visible to MSAA and the assistive technologies.\n\nWe'll have to refactor our focus handling to make this work. We should throw focus to the thumbnail div and then add a bit of JavaScript logic to catch the Enter key and activate the link. Architecturally, these are Lightbox concerns that are independent of the Reorderer.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-01-07T16:32:26.000-0500",
      "body": "Anastasia and I have since discovered that FireFox doesn't yet expose the drag & drop states to MSAA, so the screenreaders don't inform the user of an item's drag-ability. We should provide some other indicator to non-sighted users that the items are indeed draggable, and how to do it.\n"
    }
  ]
}
---
The ARIA roles and states included in the Lightbox markup, such as the grid, gridcells, and drag-and-drop semantics, aren't being picked up by JAWS or Window-Eyes at the moment. They both simply read the link text for each thumbnail.

        