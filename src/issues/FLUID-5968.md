---json
{
  "title": "FLUID-5968",
  "summary": "Improve fluid.promise.map to accept functions which return promises",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-09-22T11:35:40.980-0400",
  "updated": "2016-11-22T09:38:12.379-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6084/",
      "key": "FLUID-6084",
      "summary": "Update infusion docs to reflect the change on fluid.promise.map() via FLUID-5968"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6084/",
      "key": "FLUID-6084"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-11-21T15:41:50.383-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/788> has been merged into the master branch at f3e5031adc95f9242d59efd8b8a7a89ecc5cf6bb\n"
    }
  ]
}
---
The core utility <http://docs.fluidproject.org/infusion/development/PromisesAPI.html#fluid-promise-map-source-func-> could be improved a little to also accept functions which return promises rather than plain values. This is getting us dangerously close to providing a full "promises calculus" but it seems like a harmless and cheap enough extension. The use case occurred during <https://github.com/GPII/universal/pull/464/files> with the following implementation:

```java
var authorizedServicesPromise = fluid.promise();
   promisesSequence.then(function (responses) {
        gpii.oauth2.authServer.resolveAuthorizedServices(authorizedServicesPromise, responses, user);
    });

    return authorizedServicesPromise;
```

        