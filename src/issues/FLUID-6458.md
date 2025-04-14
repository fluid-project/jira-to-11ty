---json
{
  "title": "FLUID-6458",
  "summary": "Addition of a new store type to save data in LocalStorage",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Sachin Chopra",
  "reporter": "Sachin Chopra",
  "date": "2020-02-26T10:59:03.115-0500",
  "updated": "2020-02-26T14:05:14.976-0500",
  "versions": [
    "1.5.1"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Presently, only cookies are being used for storing data. Cookies send server information back every time an HTTP request is made. `localStorage` is an implementation of the `Storage` Interface. Unlike with cookies, data does not have to be sent back and forth with every HTTP request. This reduces the overall traffic between the client and the server and the amount of wasted bandwidth. This is because data is stored on the user's local disk and is not destroyed or cleared by the loss of an internet connection. Also, LocalStorage can hold up to 5MB of information. This is a whole lot more than the 4KB that cookies hold.

        