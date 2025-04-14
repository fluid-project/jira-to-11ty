---json
{
  "title": "FLUID-3711",
  "summary": "When moving an element, the new location should be indicated",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2010-09-07T10:15:33.024-0400",
  "updated": "2010-12-15T19:15:37.562-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3730/",
      "key": "FLUID-3730",
      "summary": "Create a little component that will manage the items that should be announced audibly through a screen reader."
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3711/FLUID-3711.patch",
      "filename": "FLUID-3711.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3711/FLUID-3711-b.patch",
      "filename": "FLUID-3711-b.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-09-07T10:16:06.924-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-09-17T17:48:09.458-0400",
      "body": "This indication will be achieved by implementing <https://fluidproject.atlassian.net/browse/FLUID-3730#icft=FLUID-3730>, a component that can automatically associate reorderable elements with labels using aria-labelledby. However, the strategy will have be somewhat different--we'll have to, in the midst of a move operation do one of the following things:\n\n1\\. Dynamically update the about-to-be-moved element's aria-labelled by to point to a temporary, dynamic label describing the move location\\\n2\\. Presenting the move location in an associated aria live region\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:02:45.706-0400",
      "body": "Bug Parade 1.3 tag deleted by order of THER KINGG\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-10T15:44:34.438-0500",
      "body": "See comments on <https://fluidproject.atlassian.net/browse/FLUID-3708#icft=FLUID-3708> - the new location is indicated if the mouse is moved or perhaps if the screen buffer is refreshed, but unfortunately it was not possible with current strategies to cause a dynamic announcement at the point of performing the move. These two issues pushed out to 1.4\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-13T03:31:43.288-0500",
      "body": "This patch implements a solution combining the use of \"aria-label\" for static messages and an offscreen live region for dynamic messages that appears to work under NVDA. A caveat is that to use the reorderer successfully under NVDA, it needs to be put into \"FOCUS MODE\" using the \"NVDA + Space\" key, otherwise the use of arrow keys and tab will apparently send NVDA and the browser bananas as they attempt to fight over key bindings. The fix needs testing under JAWS.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-13T13:47:09.951-0500",
      "body": "Attached FLUID-3711-b which cleans up the patch slightly, accounting for recent changes in trunk and replacing implementation of aria-dragging states which had been suspected of breaking the implementation\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-13T15:50:24.979-0500",
      "body": "I committed Antranig's latest patch for this issue at r10401. Still needs code review, which I will do shortly.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-15T19:15:37.554-0500",
      "body": "I've reviewed Antranig's changes to Uploader to include location labeling upon moves, and they look good.  Some general, non-blocker review comments from our conversation about it in the channel:\n\ncolinclark: Minor, non-blocker code review comments...\\\n\\[6:59pm] colinclark: the labeller's listener for Reorderer's onRefresh event looks an awful lot like something which should actually be a public method\\\n\\[7:00pm] Bosmon: Yes\\\n\\[7:00pm] Bosmon: I haven't actually considered what to do about returnedOptions\\\n\\[7:00pm] Bosmon: I think it should go, yes\\\n\\[7:00pm] Bosmon: But I'm not entirely sure **how**\\\n\\[7:00pm] Bosmon: Which I guess is related to your comment just now \\\n\\[7:01pm] Bosmon: Where there are \"standard listeners\" for a component which actually embody crucial public functionality...\\\n\\[7:01pm] Bosmon: For a start I guess this listener should be namespaced\\\n\\[7:01pm] Bosmon: Haven't really thought carefully about how listeners should interact with IoC, over and above the options infrastructure we already have for them\\\n\\[7:01pm] colinclark: it seems to me that it's a core piece of the labeller's behaviour\\\n\\[7:01pm] Bosmon: \"event boiling\" was only a sketch so far\\\n\\[7:02pm] colinclark: regardless of whether it happens to be wired up as a listener for something else\\\n\\[7:02pm] colinclark: It seems to me that there is room for some awesomeness in regards to events and IoC\\\n\\[7:02pm] Bosmon: I guess we actually need to expose the \"listeners\" structure itself to various kinds of IoC-driven EL inspection\\\n\\[7:02pm] colinclark: That seems sensible to me\n"
    }
  ]
}
---
The new location for a moved item should be indicated, specifically in the case of complex layouts like the layout reorderer.

        