---json
{
  "title": "SJRK-419",
  "summary": "Make server log and error messages localized",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-11-09T14:01:49.702-0500",
  "updated": "2020-11-09T14:01:49.702-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The logging and error messages in the Storytelling Tool server code are currently hardcoded in the functions, which is brittle and difficult to manage. Make the messages configurable externally and localized, such that they are all stored in and managed from the same location.

 

E.g.

```javascript
sjrk.storyTelling.server.saveStoryToDatabase = function (dataSource, storyModel, successEvent, failureEvent) {
    var id = fluid.get(storyModel, "id") || uuidv4();

    dataSource.set({directStoryId: id}, storyModel).then(function (response) {
        successEvent.fire(JSON.stringify(response));
    }, function (error) {
        failureEvent.fire({
            isError: true,
            message: error.reason || "Unspecified server error saving story to database."
        });
    });
};
```

 

would become something like

```javascript
sjrk.storyTelling.server.saveStoryToDatabase = function (dataSource, storyModel, successEvent, failureEvent) {
    var id = fluid.get(storyModel, "id") || uuidv4();

    dataSource.set({directStoryId: id}, storyModel).then(function (response) {
        successEvent.fire(JSON.stringify(response));
    }, function (error) {
        failureEvent.fire({
            isError: true,
            message: error.reason || messages.unspecifiedStorySaveError;
        });
        // NOTE: this example doesn't describe how the message string
        // is accessible to the function
    });
};
```

        