---json
{
  "title": "FLUID-6730",
  "summary": "Remove framework utilities which have been obsoleted by language improvements",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-05-06T10:49:55.496-0400",
  "updated": "2024-07-17T08:04:21.518-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [
    "4.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-05-09T07:47:26.093-0400",
      "body": "Not sure if these can help remove any framework utilities, but it might help simplify some implementations throughout. \n\n* [Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)\n* [Logical nullish assignment (??=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)\n* [Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) \n\n \n\nFor example when I don't have access to fluid.get I've started using the optional chaining. For example I could look for some nested value and provide a default if undefined or null: `let val = root?.seg1?.[variableName] ?? \"default`\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2022-05-09T08:01:29.035-0400",
      "body": "Thanks Justin Obara - these are worth knowing about and are now usable across our environments since node 12, in which they are not supported, had end of life a couple of weeks ago.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-05-11T16:32:45.956-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1074> ) into the project repo at cb81275477b52afc3e07105adf107086fdc7cc43\n"
    }
  ]
}
---
A number of our core framework utilities are now obsolete since their functions have been subsumed into JavaScript or other base libraries in the intervening years. Some of these are listed in the release notes for the 4.0.0 Infusion release notes at <https://github.com/fluid-project/infusion/blob/main/CHANGELOG.md#deprecated-1> e.g. fluid.contains, fluid.stableSort, fluid.add, fluid.accumulate.

        