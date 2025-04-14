---json
{
  "title": "FLUID-1186",
  "summary": "Drop target does not apper below last item in a sortable list",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-08-18T11:01:08.000-0400",
  "updated": "2008-08-27T13:55:28.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 6 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1125/",
      "key": "FLUID-1125",
      "summary": "last drop target in a column does not  appear as soon as it should."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-18T11:03:19.000-0400",
      "body": "You can actually still perform the drag and drop operation if the last item is only one line, it is just harder.\n"
    },
    {
      "author": "Simon Simon",
      "date": "2008-08-22T18:29:29.000-0400",
      "body": "This should be a CSS styling issue. I changed .orderable-drop-marker's margin to 2px, and then the two associated issues disappear:\\\n1\\. the drop marker appears when drag and drop an item to the last position.\\\n2\\. when the last position is a one line component, the drop marker appears when drag and drop an item to the last position.\n\nI tested in both IE6, and Firefox 2. All work correctly.\n\nA few more style changes may make it look better:\\\n(1) change .orderable-avatar's width from 300px to auto. This can prevent the content wraps in the avatar.\\\n(2) add .orderable-avatar's list-style-type to none. This can prevent the avatar has a list sequence number assigned to it.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-08-25T18:59:17.000-0400",
      "body": "I believe that this is \"essentially\" a duplicate of <https://fluidproject.atlassian.net/browse/FLUID-1125#icft=FLUID-1125>. The fix here is good for this specific sample, but ideally I think that whilst we always want to allow room for users to improve and \"tweak\" component behavaiour with styling fixes, this component should work well under a broad variety of styling choices and not be dependent on individual ingenuity to get correct basic behaviour 😛 Hopefully this will be resolved more globally as part of the overall umbrella of  <https://fluidproject.atlassian.net/browse/FLUID-1148#icft=FLUID-1148>.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-08-27T12:39:29.000-0400",
      "body": "True, we expect components to work with a variety of styling however, the styling of this particular example was quite strange to begin with. It included a margin of \"-2px\".  It's possible that the negative margin was causing the weird behaviour.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-08-27T12:40:17.000-0400",
      "body": "This issue was fixed with a styling change for the 0.5 beta and is expected to go away once the overhaul of the reorderer is complete.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-27T13:55:28.000-0400",
      "body": "Verified fix using IE 6 (Win XP)\n"
    }
  ]
}
---
No drop target appears below the last item in a sortable list.

You can still drop an element below the list as long as the last list item takes up more than one line.

Steps to reproduce:

1\) Open the sortable vertical list example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/todo-list/sortable-styled-todo-list.html>

2\) Attempt to drag and drop an item to the last position. Notice that no drop target appears.&#x20;

dev-iteration41

        