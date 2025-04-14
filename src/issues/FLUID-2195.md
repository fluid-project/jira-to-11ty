---json
{
  "title": "FLUID-2195",
  "summary": "Typo in renderer resolveMessageSource() function",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2009-02-04T10:37:49.000-0500",
  "updated": "2009-06-03T13:46:28.000-0400",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-04T12:04:45.000-0500",
      "body": "The renderer unit tests do have tests for UIMessage rendering. Tests should be added that catch this bug as part of the process of fixing it.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-04T12:38:13.000-0500",
      "body": "Fixed at revision 6419 - In fact we do not support any other kinds of MessageSource than \"data\" right now, so it could be argued that the current implementation is just being \"generous\" 😛\\\nTo be honest, I don't directly recall what other kinds of MessageSource were planned right now, but hopefully this will become obvious again once/if we start working more heavily with I18Ned templates. It will become possible to write a test for this issue once we do support a second type of MessageSource 😛\n"
    }
  ]
}
---
The first line of resolveMessageSource() in fluidRenderer.js reads:

if (messageSource.type = "data") {

I suspect that "=" should be "===" instead.

        