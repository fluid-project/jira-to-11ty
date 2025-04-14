---json
{
  "title": "FLUID-3576",
  "summary": "The Inline Edit demo is confusing and could use better instructions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Colin Clark",
  "date": "2010-03-30T19:48:29.000-0400",
  "updated": "2010-10-12T14:02:23.010-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:10:28.130-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-10-12T13:01:12.834-0400",
      "body": "Sufficiently addressed with the new demo.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-10-12T14:02:23.007-0400",
      "body": "Jonathan's new demo should address the issues this user reported with the older demo, so we're good to go. A separate ticket will be filed to do some user testing on our new demos.\n"
    }
  ]
}
---
Bruce Smith reported this issue to the infusion-users mailing list:

"There are no instructions visible for this demo:

<http://build.fluidproject.org/infusion/demos/inlineEdit/simple/demo.html>

See attached screenshot for what it looks like.

I'm using Firefox 3.6.2, Mac OS 10.5.8, and the NoScript plugin, but NoScript reports it is not disabling anything on this site (and I believe it, since the demo does work once I learn how to use it).

Maybe the lack of instructions is intentional, but I could not get it to work until I read some archived mailing list posts, which led me to try the tab key. Before reading that I was not able to edit anything (clicking on bold words and typing did nothing, and nothing else I thought of trying worked), and there were no error messages.&#x20;

After trying some more, I realized that for most bold words, hovering over them highlighted them, and clicking there made them editable – but not for the only ones I tried at first, namely the word "bold" itself in the lines that say "The words in bold are editable"! I guess I only tried those specific bold words, but that was enough to make me think it was "not working". (And indeed the claim that all the bold words are editable is wrong.) So this error is amusing in hindsight, but IMHO it needs fixing on the page, either by making those words not bold or (preferably) by making them editable. (And adding some instructions would be a good idea as well.)

* Bruce Smith"

We should definitely implement better instructions for how Inline Edit works, and perhaps consider improving the demo so that the various affordances provided by the component are clearer and in-context.

        