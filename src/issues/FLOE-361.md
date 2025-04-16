---json
{
  "title": "FLOE-361",
  "summary": "FD tooltips can be read on both mouse in and mouse out of buttons",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Simon Bates",
  "date": "2015-05-28T13:05:20.451-0400",
  "updated": "2015-11-03T12:43:54.970-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5673/",
      "key": "FLUID-5673",
      "summary": "Tooltips are not closed by closeAll and accumulate endlessly if some descendents are not part of \"items\" option"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5672/",
      "key": "FLUID-5672"
    },
    {
      "type": "Related to",
      "url": "/browse/FLOE-327/",
      "key": "FLOE-327"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-05-29T07:48:56.834-0400",
      "body": "After speaking with Antranig Basman in the channel for the last two days ( <https://botbot.me/freenode/fluid-work/2015-05-28/?tz=America/Toronto> and <https://botbot.me/freenode/fluid-work/2015-05-29/?tz=America/Toronto> ), it was determined that we should attempt to solve this directly in the FD tool by supplying a class that is used across all elements that expect to have the Tooltip. This will be set as the items option for the tooltip component.\n\nFurther work to refine Infusion's Tooltip.js widget will be done in FLUID-5672 and will likely focus on using the idToConent to automatically generate the items option passed down to the jQuery UI tooltip.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-29T13:11:43.215-0400",
      "body": "This issue is a bit more complex that originally thought. Initially adding a new class and setting this as the items for the tooltip to open on seemed to work. However, the range panels (speech rate and text size) had an issue where the tooltip would remain and not close. Thereby collecting an ever increasing number of tooltips on the screen.&#x20;\n\nSee <https://botbot.me/freenode/fluid-work/2015-05-29/?tz=America/Toronto> for some logs and discussion with Antranig Basman.\n\nThis was somewhat puzzling as it didn't appear before the change to items, which had been tracking all elements. I did some more experimenting and found that the tooltip in fact does not seem to track descendants properly. The hover generally appears to work; however, if you move the mouse fast enough to a child element you can get to a state where the tooltip doesn't appear. I think this is actually similar to what's causing the problem with the tooltip sticking on the range panel.&#x20;\n\nWhen you are clicking the button, it's likely that you are clicking on the \\<span> inside the \\<button> (i.e. the + and - icons). Which is confusing because the tooltip did appear. However, if you look into the code for the range panel we were actually already requesting the tooltips to close before rendering ( <https://github.com/fluid-project/first-discovery/blob/master/src/js/panels.js#L130> ). Putting a break point here, you find that the close operation sometimes does nothing. To understand why that is, we have to look into the jQuery UI Tooltip widget code. The problem is that in the close method the tooltip element isn't being found <https://github.com/fluid-project/infusion/blob/master/src/lib/jquery/ui/js/jquery.ui.tooltip.js#L309> and <https://github.com/fluid-project/infusion/blob/master/src/lib/jquery/ui/js/jquery.ui.tooltip.js#L369-L372> because the current element doesn't have any tooltip bindings. The explains why it works when we set items to \"\\*\" because all of the elements have the tooltip binding.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-29T13:28:11.438-0400",
      "body": "I have a branch started which sets the items option and adds a class name to all the elements that should have the tooltip <https://github.com/jobara/first-discovery/tree/FLOE-361>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-01T15:32:02.521-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/76>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-03T16:13:19.728-0400",
      "body": "Merged @ 688fd2ccfccc69994306a9fd8d5cfdb17d8e9efb\n"
    }
  ]
}
---
If a tooltip is attached to an element which has child elements, the tooltip is read both on mouse in and mouse out of that element to which the tooltip is attached.

To reproduce:

* open the First Discovery tool
* mouse over the "turn voice OFF" button at the top of the tool
* "Select to turn voice off" is read
* mouse out of the button
* "Select to turn voice off" is read again

        