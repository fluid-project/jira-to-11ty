---json
{
  "title": "FLOE-575",
  "summary": "Using LocalStorage instead of Cookies for storing User preferences data",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Sachin Chopra",
  "date": "2020-02-25T16:54:49.655-0500",
  "updated": "2020-09-23T08:51:56.162-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "FLOE Website"
  ],
  "environment": "N.A.\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-575/Screenshot from 2020-02-26 03-23-09.png",
      "filename": "Screenshot from 2020-02-26 03-23-09.png"
    }
  ],
  "comments": [
    {
      "author": "Ned Zimmerman",
      "date": "2020-09-23T08:51:56.160-0400",
      "body": "Closing this in favour of <https://issues.fluidproject.org/browse/FLUID-6458>.\n"
    }
  ]
}
---
Cookies send server information back every time an HTTP request is made. `localStorage` is an implementation of the `Storage` Interface. Unlike with cookies, data does not have to be sent back and forth with every HTTP request. This reduces the overall traffic between the client and the server and the amount of wasted bandwidth. This is because data is stored on the user's local disk and is not destroyed or cleared by the loss of an internet connection. Also, LocalStorage can hold up to 5MB of information. This is a whole lot more than the 4KB that cookies hold.

Storing the values of preferences of a user (related to font size, colors, etc) in `localstorage` instead of Cookies. Also, with LocalStorage we can not only store strings but also Javascript primitives and objects.\
TL;DR - Cookies are smaller and send server information back with every HTTP request, while LocalStorage is larger and can hold information on the client-side.

 

Apart from `localstorage` , `sessionstorage` can be used. However, every time a person closes a tab, the session data is erased. So, people visiting the site, again and again, would feel a hurdle to change their preferences again and again.

        