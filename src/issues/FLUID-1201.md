---json
{
  "title": "FLUID-1201",
  "summary": "Reorderer avatar's style should be extracted through computed style",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Jacob Farber",
  "date": "2008-08-19T12:51:35.000-0400",
  "updated": "2017-01-16T09:40:50.857-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1972/",
      "key": "FLUID-1972"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-10T22:45:50.000-0400",
      "body": "(pasted from fluid-work email)\n\nAfter a bit of tinkering, I think I must unfortunately conclude that the\\\n\"avatar shrinkage\" issues cannot be a matter for the Reorderer but can\\\nonly be dealt with in user CSS. Basically the user has so much control\\\nover the avatar markup that really only they can know and apply a \\\ncorrect strategy for setting its size. I tried to forcibly stick CSS\\\nwidth properties onto the avatar as it is created, but really it doesn't\\\nlisten (in the portal sample) - the div and CSS structure of the portal\\\nelement is just too complex for the information to trickle down correctly.\n\nPerhaps Jacob can correct me on this, but right now my feeling is that \\\nwe will have to close <https://fluidproject.atlassian.net/browse/FLUID-1201#icft=FLUID-1201> as unworkable... we can certainly \\\nextract the relevant height and width of the \"old portlet\" but I can't\\\nsee at the moment how we could ensure the avatar will listen, or create\\\na strategy so it will.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-06-05T09:32:10.000-0400",
      "body": "I could be wrong, but if you assign the style attribute of the avatar container to be the width and height of the \"old portlet\" as mentioned, it should probably adhere to those dimensions regardless of what anyone else has in their CSS (at least, css specificity rules would suggest so)&#x20;\n"
    }
  ]
}
---
When using relative measurements in a reorderable situation (i.e. width : 50%), the avatar will likely look off due to those relative measurements being out of context flow. \
A possible solution to this would be to use a snapshot of the node's computed style.

        