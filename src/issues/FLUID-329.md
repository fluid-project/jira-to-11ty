---json
{
  "title": "FLUID-329",
  "summary": "Update lightbox instructions that describe keyboard interaction for be more clear",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Daphne Ogle",
  "date": "2008-03-13T12:44:26.000-0400",
  "updated": "2008-07-14T18:02:34.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-10T14:27:44.000-0400",
      "body": "Daphne, here is the suggested improvement:\n\nTo use the keyboard:\\\nSelect an image using i, k, m or j, or the arrow keys.\\\nView an image by pressing Enter.\\\nMove an image using CTRL + a direction key.\n\n(Note that the Lightbox now includes, by default, two different key sets (and can therefore be used with a screen reader)).\n\nIf this seems good to you, I'll make the change - let me know.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-04-14T19:20:58.000-0400",
      "body": "This sounds good to me.  Thanks Anastasia!\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-15T09:58:14.000-0400",
      "body": "The instructions have been updated. Daphne, I've updated the demo on the build site:\n\n<http://build.fluidproject.org/sakai-imagegallery-tool/fluid-components/html/Lightbox.html>\n\nIf it looks fine to you, you can close this one.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-04-15T12:40:20.000-0400",
      "body": "One question, are there other directional keys besides the arrow keys?   I ask because we use both terms in the instructions.  If they mean the same thing, we should probably use one term or the other.  I'm guessing there may be other directional keys on special keyboards but just wanted to check.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-15T12:59:13.000-0400",
      "body": "Yes, there are other directional keys besides the arrow keys. As the instructions say, you can use the i, k, m and j keys instead of the arrow keys. Either should work, both should work. I just tried the demo file, and it all works as expected.\n\nYou also mentioned that once a user 'opens' an image, the only way to get back is via the browser's back button - yes, this is the way the Lightbox works.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-04-15T14:19:11.000-0400",
      "body": "Ah ha, I figured out my confusion.  I was reading the I as a L.  I'm not sure how to alleviate that potential confusion since using capitals might give users the expectation they have to use caps.  What do you think?  I'll close this for now and assume it will be caught in the user testing Mike is doing if it proves to be problem outside of my aging eyes. &#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-05-15T10:59:12.000-0400",
      "body": "Current instructions state:\n\n\"To use the keyboard:\\\nSelect an image using i, k, m or j, or the arrow keys.\\\nView an image by pressing Enter.\\\nMove an image using CTRL + a direction key.\"\n\nBut it isn't clear what is referred to by \"a direction key\". Is this an arrow key? i-k-m-j? Both?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-27T16:52:24.000-0400",
      "body": "We are going to leave it the way it is and find out if we need to refine based on user testing.&#x20;\n"
    }
  ]
}
---
We should update the instructions to do 2 things:

* Make keyboard interactions clear for how to select and see a full view of the  image along with how "drag and drop" work.  It currently says, "View an image by pressing Enter. Move an image using CTRL+Arrow Key."  We want to keep it brief but it seems to need a little something more for clarity.
* Either include mouse instructions too or be clear that instructions only refer to keyboard interactions – something like "To use the keyboard to reorder thumbnails...."

        