---json
{
  "title": "ENGAGE-436",
  "summary": "\"Abuse reported\" text is an actionable (possibly a link?) that does nothing; should be text that does nothing",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "James Yoon",
  "date": "2010-02-22T17:11:20.000-0500",
  "updated": "2017-12-22T09:44:28.456-0500",
  "versions": [
    "0.3b",
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Comments"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-436/IMG_0013.PNG",
      "filename": "IMG_0013.PNG"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-02-22T20:00:33.000-0500",
      "body": "This is actually an \"a\" tag which had been styled to appear like normal text (underline, cursor) removed - is there any visual or functional behaviour that the link has on the mobile platform?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-22T20:03:23.000-0500",
      "body": "James, here's what I think you're saying. Am I correct?\n\nThe \"Abuse reported\" text is a link, but should be \"dead,\" in that it shouldn't be tappable, nor should it provide any highlight or affordance of tappability.\n\nIf so, the reason is probably because of this class, set in engage-mobile.css:\n\n.fl-theme-iphone .fl-engage-tappable {\\\n-webkit-tap-highlight-color: rgba(0,0,255,0.5);\\\n}\n\nAntranig, you probably just need to override your link to set a completely transparent (0,0,0,0) tap highlight or similar hack.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-23T14:14:30.000-0500",
      "body": "Yep, exactly that--it should be dead. To the user, it should appear as regular text--not tappable, nor provide feedback on tapping.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-01T15:53:24.000-0500",
      "body": "IMG\\_0013.PNG Shows the text being highlighted.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:28.455-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Users can tap on the "Abuse reported. Pending moderator review." text and receive visual feedback. i.e., it acts like a link that goes nowhere. Intended behavior: it should act like regular text.

        