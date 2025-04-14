---json
{
  "title": "FLUID-5026",
  "summary": "Model transformation system implicitly outputs unwanted data to the output object",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2013-05-29T04:05:15.552-0400",
  "updated": "2013-09-14T18:04:31.332-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5024/",
      "key": "FLUID-5024"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Kasper Galschiot Markus",
      "date": "2013-05-29T04:08:27.990-0400",
      "body": "\\[5/24/13 10:54:23 AM] Kasper Galschiot Markus: I found some weirdness in the transformation framework\\\n\\[5/24/13 10:54:40 AM] Antranig Basman: No doubt you had just put it there yourself earlier : P\\\n\\[5/24/13 10:55:01 AM] Kasper Galschiot Markus: haha - well, I cant really argue with that\\\n\\[5/24/13 10:57:43 AM] Kasper Galschiot Markus: it has to do with what changes get queued\\\n\\[5/24/13 10:57:45 AM] Kasper Galschiot Markus: <http://piratepad.net/GnymkjM79U>\\\n\\[5/24/13 10:58:04 AM] Antranig Basman: Oh dear..... that\\\n\\[5/24/13 10:58:08 AM] Kasper Galschiot Markus: yeah\\\n\\[5/24/13 10:58:20 AM] Kasper Galschiot Markus: I mean, I think we talked about this in SD\\\n\\[5/24/13 10:58:23 AM] Antranig Basman: Yes, we did\\\n\\[5/24/13 10:58:37 AM] Antranig Basman: It is quite faulty\\\n\\[5/24/13 10:58:39 AM] Kasper Galschiot Markus: that we want to change it to only throw stuff on queue when explicitly requested\\\n\\[5/24/13 10:59:01 AM] Antranig Basman: But what's specifically the problem here?\\\n\\[5/24/13 10:59:11 AM] Antranig Basman: Other than the fact that \"Magnfication\" seems to be a primitive\\\n\\[5/24/13 10:59:26 AM] Kasper Galschiot Markus: that's the exact problem\\\n\\[5/24/13 10:59:50 AM] Kasper Galschiot Markus: Magnification gets set, I believe... but that means Magnification.value and Mangification.dataType dont\\\n\\[5/24/13 10:59:50 AM] Antranig Basman: ah I see\\\n\\[5/24/13 11:00:06 AM] Antranig Basman: This funny figure is the unrounded input figure before it goes in\\\n\\[5/24/13 11:00:15 AM] Antranig Basman: It's so long ago I'm starting to forget what we decided\\\n\\[5/24/13 11:00:19 AM] Antranig Basman: And you, damn you, never wrote it up\\\n\\[5/24/13 11:00:41 AM] Antranig Basman: But I remember we came to a quite clear conclusion as we walked along the bay\\\n\\[5/24/13 11:00:41 AM] Kasper Galschiot Markus: I remember that we explicitly decided that YOU should write it up\\\n\\[5/24/13 11:00:42 AM] Kasper Galschiot Markus: 🙂\\\n\\[5/24/13 11:00:46 AM] Antranig Basman: And you were tasked with implementing it\\\n\\[5/24/13 11:01:01 AM] Kasper Galschiot Markus: yes, I agree\\\n\\[5/24/13 11:01:06 AM] Antranig Basman: So\\\n\\[5/24/13 11:01:11 AM] Antranig Basman: Do you at least remember what the conclusion was!\\\n\\[5/24/13 11:01:33 AM] Antranig Basman: It was something about the capacity of an expander to output along two routes\\\n\\[5/24/13 11:01:46 AM] Antranig Basman: One to its parent, and secondly to its current nested path position\\\n\\[5/24/13 11:01:57 AM] Antranig Basman: Either we decided this should never happen, or we decided that it should always happen 🙂\\\n\\[5/24/13 11:02:28 AM] Kasper Galschiot Markus: yes - I think we disagreed quite a bit on what was the best option (though I forget which one was my standpoint)\\\n\\[5/24/13 11:02:53 AM] Kasper Galschiot Markus: but I believe the conclusion was that it should never happen\\\n\\[5/24/13 11:03:26 AM] Kasper Galschiot Markus: but not entirely sure\\\n\\[5/24/13 11:03:42 AM] Antranig Basman: If that was the conclusion, it must have been that we thought that the effect of having that could easily be had by some other means if someone wanted it\\\n\\[5/24/13 11:04:11 AM] Kasper Galschiot Markus: yeah - eg. our shadow vars for example should be able to achieve that\\\n\\[5/24/13 11:04:18 AM] Antranig Basman: shadow vars!\\\n\\[5/24/13 11:04:22 AM] Kasper Galschiot Markus: haha\\\n\\[5/24/13 11:04:25 AM] Antranig Basman: Did we decide we wanted those?\\\n\\[5/24/13 11:04:29 AM] Kasper Galschiot Markus: I forget the damn name of them\\\n\\[5/24/13 11:04:34 AM] Kasper Galschiot Markus: yeah, I think so\\\n\\[5/24/13 11:04:39 AM] Kasper Galschiot Markus: pocket variables\\\n\\[5/24/13 11:04:49 AM] Kasper Galschiot Markus: or whatever the hell we referred to them as\\\n\\[5/24/13 11:05:00 AM] Kasper Galschiot Markus: temporary variable to store results\\\n\\[5/24/13 11:05:17 AM] Kasper Galschiot Markus: ... actually I might totally be mixing two concepts up as well\\\n\\[5/24/13 11:05:38 AM] Antranig Basman: Well, there must also have been some reasoning about why the behaviour of what is really a compact expander, \"Magnification\", should differ from that of the others\\\n\\[5/24/13 11:06:04 AM] Antranig Basman: We spent a long time working this out\\\n\\[5/24/13 11:06:17 AM] Kasper Galschiot Markus: I know - this is horrible\\\n\\[5/24/13 11:07:42 AM] Antranig Basman: Oh and btw, yesterday Colin and I decided to name \"expander\" to \"transform\"\\\n\\[5/24/13 11:08:26 AM] Antranig Basman: I guess the only sensible option is that double output never occurs\\\n\\[5/24/13 11:08:38 AM] Antranig Basman: But there will be plenty of reasoning needed to back this up\\\n\\[5/24/13 11:08:45 AM] Kasper Galschiot Markus: yes, I think that was our conclusion as well\\\n\\[5/24/13 11:09:01 AM] Kasper Galschiot Markus: got dragged into a meeting now\\\n\\[5/24/13 11:14:22 AM] Antranig Basman: Well, you will just have to fix it : P\\\n\\[5/24/13 11:14:32 AM] Antranig Basman: But not before you have got your existing transformations pull in : P\\\n\\[5/24/13 11:30:50 AM] Antranig Basman: I had a vague memory that we might have decided to make an explicit \"output doubling expander\" for those cases where we wanted it to happen.....\\\n\\[5/24/13 11:33:25 AM] Kasper Galschiot Markus: wouldn't it be simpler to use 'local variables'\\\n\\[5/24/13 11:33:43 AM] Kasper Galschiot Markus: to avoid introducing too many concepts to the user/developer\\\n\\[5/24/13 11:35:12 AM] Antranig Basman: How do you plan to get reversibility working in the presence of \"local variables\"?\\\n\\[5/24/13 11:36:39 AM] Antranig Basman: The whole purpose of our system is that it is meant primarily to WORK : P\\\n\\[5/24/13 11:38:14 AM] Antranig Basman: Whether the user was familiar with the concepts involved in 2013 isn't going to be relevant if by 2033 we have been presiding over 20 years of having a working system : P\\\n\\[5/24/13 11:38:40 AM] Kasper Galschiot Markus: at some point, I'm gonna sit down and think really hard and have a really clever comeback\\\n\\[5/24/13 11:38:50 AM] Kasper Galschiot Markus: ... for now, I got NOTHING\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2013-08-15T08:18:28.827-0400",
      "body": "Our initial plan: <http://piratepad.net/ep/pad/view/ro.HtpFYvcjsvP/latest>\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2013-08-16T07:22:45.863-0400",
      "body": "Our new plan is the following: <http://piratepad.net/ep/pad/view/ro.dC6Waa3dNDe/latest>\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2013-08-19T06:14:59.128-0400",
      "body": "Some things were still unclear/broke according to the above plans, namely arrays of expanders and their expected behavior. We discussed and resolved this on an email thread: <http://lists.gpii.net/pipermail/architecture/2013-August/001247.html>\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2013-09-14T18:04:22.654-0400",
      "body": "Fixed with <https://github.com/fluid-project/infusion/pull/394>\n"
    }
  ]
}
---
Currently the transformation system allows you to output two places at once (non-explicity), once by the virtue of return value and once via the outputPath. This causes some confusion and buggy behavior. For example:

"Magnification": {\
"expander": {\
"type": "fluid.model.transform.round",\
"input": {\
"expander": {\
"type": "fluid.model.transform.scaleValue",\
"valuePath": "display.screenEnhancement.magnification",\
"factor": 100\
}\
},\
"outputPath": "value"\
},\
"dataType": {\
"expander": {\
"type": "fluid.model.transform.literalValue",\
"value": "REG\_DWORD"\
}\
}\
}

will result in the following queuedChanges:

\[\
{\
"path": "Magnification",\
"value": 229.99999999999997,\
"sequence": 0\
},\
{\
"path": "Magnification.value",\
"value": 230,\
"sequence": 1\
},\
{\
"path": "Magnification.dataType",\
"value": "REG\_DWORD",\
"sequence": 2\
}\
]

Which in turn means that the end result will be:

Magnification: 229.9999999999997

Which is clearly not what is wanted.

(see also <http://issues.gpii.net/browse/SP-45>)

        