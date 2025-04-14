---json
{
  "title": "FLUID-57",
  "summary": "Image \"shadow\" should display where image was picked up until it is dropped.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Daphne Ogle",
  "date": "2007-10-10T19:21:23.000-0400",
  "updated": "2007-11-13T11:34:28.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-10-22T15:35:44.000-0400",
      "body": "I need a little more clarification for the behaviour that we want.\n\nWith drag and drop, we recently moved to using jQuery UI's drag and drop. Using this toolkit, the default drag and drop behaviour closes up the space and opens a new space where a drop is possible. Does this behaviour meet our needs?\n\nI recall that with the keyboard we wanted movement to happen on each arrow keystroke assuming the ctrl key pressed. Given this, is there any reason to keep a shadow that moves along with the element on each keystroke?\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2007-10-22T15:51:19.000-0400",
      "body": "Check out igoogle's behavior when the portlets are rearranged.  The empty rectangle is left there until the actual portlet is dropped.  This is parallel to what I'm referring to.  When the whole closes up before the image is dropped there is just more for the user to keep track of thier head.  Also, if the images change locations as soon as the users \"picks up\" an image it is a little jarring and confusing.  For instance, I've selected the image I want to move.  I've clicked on it and at the same time am looking forward at where I want to move it to.  As soon as I pick it up, that spot I was looking at is now in a new location since everything moved to close the hole where the image was.  A third reason is that the original location may be of interest as they decide where to drop it.\n\nI'm not completely sure I understand the last comment.  Do we want to display a shadow of the image as it moves along like we do with drag and drop?  It makes sense but I'm not sure how much value it adds given the move happens so quickly (the drag and drop happen incrementally an image jump at a time).  If this is extra work to make happen my vote is to hold off until we get user testing data so we can better evaluate the value of the shadow. &#x20;\n"
    },
    {
      "author": "Shaw-Han Liem",
      "date": "2007-10-25T16:49:34.000-0400",
      "body": "Just wanted to clarify this in light of our recent conversations.\n\nJQuery's default behaviour is to create \"clone\" of the dragged image (to use as an avatar) and set the visibility of the original element as \"hidden\".&#x20;\n\nThe desired behavior is for the original element to remain visible (and stationary) as the drag action is occurring.&#x20;\n\nDo we want the original element to \"fade\" or stay the same in visibility intensity?\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2007-10-25T19:35:38.000-0400",
      "body": "Sorry I didn't use clear language.  I don't think we want the image itself to continue to appear but something like the dotted rectangle that you were using to show where the image could be dropped in the recent mock-ups.  Perhaps a light shade of grey for the outline.  We just want to lighten the memory load on users so they don't have to remember where they picked it up from (and where it  will go back to if they don't drop it).\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-29T14:11:39.000-0400",
      "body": "One of the 'options' that can be passed to Sortable is \"hoverClass\" which is described as \"Class that gets applied to the otherwise white space.\"  This sounds like it will allow us to hook an appearance style to the empty slot pretty easily.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2007-11-13T11:34:28.000-0500",
      "body": "Looks great!\n"
    }
  ]
}
---
I'm not sure where this behavior got lost or if it was ever included.  Looking at the wireframes, the space just looks blank where the image was picked up from.  We want to give the user an indication of where the image was picked up from until they actually drop it in a new location.  This is true for both keyboard and mouse dragging and dropping.  See igoogle.com and drag the portlets for an idea of the behavior I'm describing.

        