---json
{
  "title": "SJRK-240",
  "summary": "Browser tests not being served on staging site",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-03-21T19:13:52.852-0400",
  "updated": "2019-03-25T11:40:19.771-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2019-03-25T11:40:19.767-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/20) has been merged into the project repo at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/466d400c4a5356223f0e5aecf8ca2dad02e777a3).\n"
    }
  ]
}
---
The browser tests are not accessible on the staging site after merging the pull request for SJRK-224: <https://github.com/inclusive-design/ci-service/pull/34>

If tested locally, they are accessible at <http://localhost:8081/tests/>

Expected:\
The same tests should be accessible at <http://staging-stories.floeproject.org/tests/>

Actual:\
The server response is

```java
{"isError":true,"message":"Cannot GET /tests/"}
```

The same issue exists for the "binaries" folder (located at \tests\binaries\ in the source)

        