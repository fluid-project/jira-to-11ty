---json
{
  "title": "FLUID-258",
  "summary": "Dissect Dojo examples to techniques to make widgets accessible in non-ARIA environments",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Anastasia Cheetham",
  "date": "2008-02-19T12:55:25.000-0500",
  "updated": "2008-06-05T11:31:30.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-13T15:21:49.000-0400",
      "body": "David, Joseph and I (Michelle) met to talk about options for non-ARIA support. We came up with a few techniques that we'd like to try. These include improvements to the ARIA.\n\n1\\) Add an aria-describedby and a labelledby to the Reorderer container that links it with the instructional message.&#x20;\n\n2\\) Add a title to each thumbnail div with the form \"thumnail of \\<name>\". This will need to be done in an internationalization friendly manner.\n\n3\\) Add a role to the instructional message of type \"description\"\n\n4\\) Add an aria-describedby and a labelledby to each thumbnail that links it with the image link inside the thumbnail.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-17T11:38:40.000-0400",
      "body": "A thought about point #2 in Michelle's comment:\n\nGiven that the title will contain the name of the image, then the title becomes part of the template that must be filled in by the application using the Lightbox. So for example, the Image Gallery Tool will have to be updated to fill in the name of the image.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-20T11:18:27.000-0400",
      "body": "Investigating \"describedby\" and \"labelledby.\"\n\nAccording to <http://developer.mozilla.org/en/docs/Accessible_DHTML>,\"describedby\" is not supported by JAWS in FF, though \"labelledby\" is supported by both JAWS and Window-Eyes in FF. So I have been focussing on \"labelledby.\"\n\nSo far, only FF3 will allow JAWS to read the \"labelledby\" label. FF2 does not, IE7 does not. I haven't yet tested Window-Eyes.\n"
    },
    {
      "author": "David Bolter",
      "date": "2008-03-20T11:33:25.000-0400",
      "body": "Anastasia, just a reminder that you might want to try aaa:labelledby in FF2 instead of aria-labelledby... if you haven't already. Also when using describedby=\"foo\" be sure to add the role \"description\" on the thingy with id \"foo\".\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-20T11:36:05.000-0400",
      "body": "David, thanks for the pointers. I did try both of those suggestions, to no effect.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-20T12:15:07.000-0400",
      "body": "Regarding getting a screen reader to read the instructions:\n\nLabelledby (and describedby, I might assume) work when an item gets focus. We put focus on the thumb, not on the lightbox itself, so even if this technique worked in all environments, it wouldn't work as a way to get the instructions read.\n\nPutting the instructions div into the taborder before the lightbox itself can be useful:\n\n* JAWS with IE7 will read the contents of the div.\n* If the title attribute of the div includes the same instruction text, JAWS with FF2 and FF3 will read that (they won't read the text within the div)\n\nRegarding describing the thumbnails:\n\nlabelledby and describedby don't seem to offer anything that the title attribute doesn't offer, and do require a separate div containing the relevant text, and so seem less attractive than the title option.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-20T13:04:25.000-0400",
      "body": "Regarding adding title attributes to thumbnails:\n\nAdding a title attribute does not seem to add anything that is not already available through the image alt text and the link text - it either replaces the image alt text or it supplements it. In the case of mouse-based actions, it seems to complicate the issue by sometimes causing uninformative text to be spoken.\n\nA better solution might be to modify the alt text to say \"Banada thumbnail\" (rather than just \"Banana\") to imply that it is an image, and to distinguish it from the link text.\n"
    }
  ]
}
---
We need to develop techniques for the Reorderer and Lightbox to function accessibly in non-ARIA environment.s

        