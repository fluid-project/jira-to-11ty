---json
{
  "title": "ENGAGE-307",
  "summary": "Implement the \"Save and send my collection to me button\" in My Collection",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Michelle D'Souza",
  "date": "2010-02-01T12:03:37.000-0500",
  "updated": "2010-02-19T00:20:33.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-307/ENGAGE-307core.patch",
      "filename": "ENGAGE-307core.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-307/ENGAGE-307-core.patch.txt",
      "filename": "ENGAGE-307-core.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-307/ENGAGE-307kettle.patch",
      "filename": "ENGAGE-307kettle.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-307/ENGAGE-307-kettle.patch.txt",
      "filename": "ENGAGE-307-kettle.patch.txt"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-307/fe_mobile_icon_send.png",
      "filename": "fe_mobile_icon_send.png"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-02T10:18:27.000-0500",
      "body": "mccord-pilot\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-08T16:09:25.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-08T17:11:44.000-0500",
      "body": "Sveto, since I'm still in the midst of getting My Collection working before merging it into trunk, you may want to submit these fixes as patches to make it easier to apply them.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-18T21:10:22.000-0500",
      "body": "Attaching two new patches after my code review of the yura/sveto patch\n\nThe unit tests are still broken though.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-19T00:20:04.000-0500",
      "body": "I have committed a modified version of the patch that Yura and Justin submitted on this ticket. A couple of things to note in the future, Yura/Justin/Sveto:\n\n1\\. Don't forget the Same Origin Policy: you can't POST via AJAX in the browser to a different server\\\n2\\. Writing a service that will blindly POST to any URL specified in the query parameters is a security flaw\\\n3\\. HTTP semantics matter. Don't GET when you should be POSTing\n\nI modified the server-side code to read the sendMyCollectionURL out of Engage's config file, rather than accepting it as a request parameter. I have not yet changed the client-side code to do a POST instead of a GET. That'll have to happen for 0.3 final.\n\nI'm also not fully convinced that a jQuery UI Dialog is the most optimal solution here. It works, but it's going to be slow on a mobile phone. Given Safari's lack of support for most ARIA roles, it may also not be the most accessible option.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-19T00:20:33.000-0500",
      "body": "I've reviewed and committed this code. Issues found during the review will be filed as separate, non-blocker bugs.\n"
    }
  ]
}
---
For Engage 0.3 beta, we will implement this "send my collection" action as a simple POST request to an external script. Hugues is implementing a script that will accept the user's email address, language selection, and their personal collection as parameters. He will then merge the collection with the user information in his CMS and send an email to the user.

Here's an email thread on fluid-work about how to implement it:

<http://old.nabble.com/My-Collection%3A-what-should-happen-after-the-user-gives-their-email--address-td27468683.html>

        