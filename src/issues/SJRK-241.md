---json
{
  "title": "SJRK-241",
  "summary": "Improve tests for authoringEnabled flag",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-03-29T14:45:37.350-0400",
  "updated": "2020-10-26T14:18:55.024-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
For expedience, several items were deferred to this Jira from the reivew of the [pull request for SJRK-239](https://github.com/fluid-project/sjrk-story-telling/pull/19). Cindy Li provided review. This may be helpful to break into smaller Jiras when the work is being done.

1. The Node tests for authoringEnabled on the server side should test both "true" and "false" values, not just whichever is currently set.
2. Similarly, the browser tests for the UI-side flag should also check both values.
3. Clarify the comment in storyTelling.css regarding the "sections" being shown or hidden (currently line 54).
4. Review and discuss whether the intro/edit page should be reachable after navigating away from it once editing is disabled.

Review comments as they were provided:

***

The server test for the "authoringEnabled" flag can be refactored better.

1. Right now, the "authoringEnabled" value is dependent on what's set in the actual server source code "serverSetup.js", in which "authoringEnabled" only has one value (true or false) at any moment. This means, running this test file only tests one flag value at any time rather than testing both cases. To fix it:

1) No need to share the same set of test definition for 2 scenarios with a number of empty assertions. The current test definition is good for testing "true" scenario. Create a separate test definition for "false" scenario. In the new test, only responses from post story requests are checked to ensure an error is returned. The following checks for the saved story and the uploaded image are unnecessary.

An example of passing "authoringEnabled" flag to the server component in test definitions:

```javascript
sjrk.storyTelling.server.testServerWithStorageDefsWithAuthoringEnabled = [{
    name: "Test server with storage - authoringEnabledis turned on",
    expect: 16,
    distributeOptions: {
        record: true,
        target: "{that server}.options.globalConfig.authoringEnabled"
    }
...
}];
```

Please use a common variable to hold parts that can be shared by both definitions.

***

Could you clarify this comment, regarding which themes are sharing this css flle and which theme will override these rules etc. Does "These sections" mean starting from here till the end of the file?

```java
/* These sections are shown or hidden based on the theme's styling rules */
.sjrk-st-page-header-container
```

Is this rule to hide these containers created because these containers are not expected to show in Karisma theme? Can you add a comment to explain? Thanks.

***

I noticed when the saving/editing is disabled, once users leave the home page "storyEdit.html", they can never go back to it because the "build your story" button is now invisible.

When the editing is disabled, this "story edit" page now serves as a home page rather than story editing. It's weird to not be able to access it once leaving for other pages.

One possibility is to allow clicks on SJRK logo at the header to lead back to the home page.

This needs to be discussed with designers. I don't expect it to be solved in this pull request. Thanks.

        