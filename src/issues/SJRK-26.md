---json
{
  "title": "SJRK-26",
  "summary": "Address storage for low or no connectivity",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T16:24:19.798-0400",
  "updated": "2018-03-27T11:42:53.554-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-11-01T11:25:59.290-0400",
      "body": "Thanks for creating the JIRA. What would be an acceptable deliverable for this request? Is a comment describing possible solutions what we're after? A PoC?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2017-11-03T13:29:02.603-0400",
      "body": "I think a comment describing possible solutions would be sufficient for this JIRA. Once we have a list of options, we can determine which one to go with and then at that point a PoC would make more sense.\n\nFor a bit more context: one of the partners in the project works in an area where there is little to no communications infrastructure, and what exists is set up more as a WAN rather than connecting directly to the internet at large. We'd like the people living there to be able to contribute to the project, and then perhaps at some point the stories they've shared can be synced up with some larger implementation for wider distribution.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-11-09T16:18:05.481-0500",
      "body": "To consider from a usability perspective:\n\n* do we want to let the user know that their story is only being stored locally?\n* indicate to the user that it will be stored locally temporarily and then 'pushed' to the wider internet once connectivity has been established?\n* provide the ability to 'export' a story or stories into a bundle of sorts which can then be brought into a more connected instance of the storytelling tool?\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-12-14T08:41:46.073-0500",
      "body": "I think making it clearly visible whether the content has been uploaded or not is crucial. That would offer peace of mind to people with frequent but intermittent access to the Internet (e.g. people with spotty 2G/3G access) but it would also allow people with clearly defined period of time with Internet connectivity to decide to sync up (instead of wasting battery all the time). Think about a farmer who only has access when she visits the city. She may want to open the app/website and push a button to ensure the content is uploaded (instead of relying on a timer/trigger to figure out there's internet, something that can fail and then it's another trip to the city). Kind of like when you're travelling, find a WiFi connection that is working and then download all your email, check websites, etc.\n\nI have thought about this but there are so many options that I'm lost. If we use Git, then it's a connection to the Git repository to transfer some commits and that's it. Other more complex solutions include [streaming](https://cloud.google.com/solutions/architecture/real-time-stream-processing-iot) but it requires a service provider to work.\n\nHere's where I'm a bit out of depth because I'm still unclear on how PouchDB or any NoSQL database enters the picture. If that's to store content locally and then generate the raw HTML/JS/CSS data to be published, then are we saying we want to store the JSON (or whatever) data somewhere *in addition* to the generated content?\n\nIf that's so, we need to keep in mind that the situation described in <https://fluidproject.atlassian.net/browse/SJRK-25#icft=SJRK-25> gets more complex because now we need to host a NoSQL database (CouchDB) which has a runtime. Is the expectation that people would spin up that themselves or are we thinking about a centralized service that would offer these database (or an API to expose them)?\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-12-20T15:15:34.992-0500",
      "body": "Another area to look at for offline / unreliable connection support is Service Workers - I don't know a lot about the technology, but it seems to form a common part of the brower-based stack for addressing this class of issues:\n\n \n\n<https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers>\n\nGoogle is advocating a lot about progressive web apps to improve the experience of low bandwidth and other issues: <https://developers.google.com/web/progressive-web-apps/>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-01-09T11:22:01.687-0500",
      "body": "I feel like it's expected I should do something more from this JIRA but I'm not sure what.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-27T11:41:33.422-0400",
      "body": "Last time we chatted, it was decided I would be involved again we are closer to deploying something so I could focus on the infrastructure aspects of making that happen. I'm closing this JIRA then, please feel free to re-open if needed.\n"
    }
  ]
}
---
Explore storage possibilities for situations with little to no connectivity

* Local browser storage, possibly using PouchDB
* A version of storytelling tool using purely local storage with the option of syncing later
* Or perhaps if the storytelling tool server can't reach a CouchDB instance that it falls back to local storage
* <https://github.com/GPII/gpii-pouchdb>

        