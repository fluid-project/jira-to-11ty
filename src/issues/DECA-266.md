---json
{
  "title": "DECA-266",
  "summary": "Clean up old repos in the googlecode space",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-05-25T08:47:15.104-0400",
  "updated": "2012-05-25T14:25:54.121-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-25T14:25:54.120-0400",
      "body": "Deleted the decapod-server and decapod-genpdf repos. Replaced the contents of the decapod-infusion and stitching repos with README files explaining the end-of-life of those repos.\n"
    }
  ]
}
---
There are some old repos in the googlecode space that are no longer needed.

decapod-server and decapod-genpdf have been disabled for a long time. They were intended to be deleted before, but googlecode didn't have a mechanism for doing that at the time. Since we are able to now, we should just go ahead and remove them.&#x20;

decapod-infusion and stitching will no longer be in use after Decapod 0.4. They should have their contents deleted, but remain versioned, and replaced with a README that explains why.

See: <http://groups.google.com/group/decapod/browse_thread/thread/80c5aa8b49b2781f>

        