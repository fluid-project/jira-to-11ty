---json
{
  "title": "FLUID-728",
  "summary": "Forum posts do not appear on the OSDPL site",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Allison Bloodworth",
  "reporter": "Jonathan Hung",
  "date": "2008-06-09T15:19:33.000-0400",
  "updated": "2008-06-10T12:06:29.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-09T17:56:56.000-0400",
      "body": "I figured out what the problem was with this. It seems like a Drupal bug. When a forum is created, a Drupal Category is automatically created for it. If you go to Administer -> Categories when you are having this problem you will see that \"Forums\" does not have anything in the \"Type\" field. Despite what  it says when you \"Edit vocabulary\" for the Forum about the Type -> Forum topic being \"affixed to the forum vocabulary,\" it appears it isn't at first. I fixed this by adding another content type (e.g. Story) and saving. This added the \"forum topic\" content type (along with the \"Story\" content type) to the \"Forums\" vocabulary, and I could see that it had been added on the Administer -> Categories page. Then I just deleted the \"Story\" content type and \"Forum topic\" remained attached to the \"Forums\" vocabulary. I tested posts to both forums and they work fine now.&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-06-10T11:05:27.000-0400",
      "body": "Confirmed fixed.\n"
    }
  ]
}
---
ITERATION11

After writing a new forum post on the OSPL, it does not appear in any of the sub-forums.

Examine the README.TXT and diagnose what is happening.\
Evaluate whether or not the Forum is worth using for the OSDPL when launched or if we should be using a 3rd party solution.

        