---json
{
  "title": "FLUID-6504",
  "summary": "Creating a WebSocket Bind Model to a non-existent component crashes the Nexus",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Philip Tchernavskij",
  "reporter": "Philip Tchernavskij",
  "date": "2020-05-22T13:55:15.580-0400",
  "updated": "2024-07-22T10:35:15.623-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Nexus"
  ],
  "environment": "OS: MacOS Mojave 10.14.5\\\nNode.js Version 12.14\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6504/NexusBugStacktrace.txt",
      "filename": "NexusBugStacktrace.txt"
    }
  ],
  "comments": [
    {
      "author": "Philip Tchernavskij",
      "date": "2020-07-15T16:10:13.499-0400",
      "body": "In resolving this bug, we should also deal with the related bug that malformed messages sent over an established model binding WebSocket connection can result in fatal errors. In particular, I have more than once accidentally sent a model value directly, rather than wrapping it in a JSON record with \\`path\\` and \\`value\\` entries. This is probably as simple as wrapping the message-receiving function in a try-catch block, since we can't do meaningful error reporting to the client over the connection.\n"
    },
    {
      "author": "Philip Tchernavskij",
      "date": "2020-07-29T22:36:27.448-0400",
      "body": "I've resolved the motivating bugs for this issue, but in the meantime have ventured into a breaking API change that requires some thought. The model binding API has so far been based on asymmetric messaging, where the client sends the equivalent of relative ChangeApplier arguments packaged as objects containing \"value\" and \"path\" members, and the server sends the updated value relative to the path the model was bound at, upon establishing the model binding and after each successful model update is processed.\n\nIf we want to deal coherently with malformed requests, we have to choose between a) quietly consuming the malformed message without making any changes, b) responding as before, with the (unchanged) model value, c) trying to respond with some sort of error feedback. c feels nicer, and Kettle already has a scheme for sending \"typed\" messages. It should not complicate client implementations significantly, and would produce better feedback in interactive clients / client development.\n\nThe question then becomes what are straightforward choices for message type names? So far, I have used \"initial\", \"changed\", and \"error\" as the possible types used by the server. I would be most comfortable with stealing some well-used type names from elsewhere.\n"
    }
  ]
}
---
### Describe the bug

Opening a WebSocket connection to the \`bindModel\` endpoint with a path without a component at it causes a fatal error.

### To reproduce

Steps to reproduce the behavior:

1. Start a nexus instance.
2. In the terminal, execute \`wscat -c ws\://localhost:9081/bindModel/example1/a\`.
3. See error

### Expected behavior

The nexus server should respond with an error and then close the WebSocket connection.

### Technical details

Complete server logs with stack trace are in&#x20;

<!-- media: file 99af71a0-8f98-4924-a2f5-8aaf79b950ea -->

.

        