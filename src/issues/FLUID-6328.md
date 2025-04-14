---json
{
  "title": "FLUID-6328",
  "summary": "Review and refine linting includes/excludes.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-08-22T06:25:11.994-0400",
  "updated": "2024-07-22T10:35:09.820-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-08-22T08:23:00.612-0400",
      "body": "<https://github.com/fluid-project/infusion/pull/928>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-08-22T13:32:34.976-0400",
      "body": "Here's an updated command that excludes nearly all of the content that shouldn't be linted.  Notably the fluid 1.5 js file is still included, but the totals are otherwise a good match for the linting output.\n\n```java\nfor i in md js json json5; do echo -n $i:; find . -type f -name \\*.$i ! -path ./node_modules/\\* ! -path ./dist/\\* ! -path ./reports/\\* ! -path ./instrumented/\\* ! -path ./coverage/\\* ! -path ./\\*/lib/\\* | wc -l; done\n```\n"
    }
  ]
}
---
In looking into FLUID-6327, I started to suspect that the includes used to determine which files were linted were not quite complete.  For example, there are a range of markdown files in the demos and examples directories that are not caught by the current linting pattern.

I reviewed in depth to get an idea of what needed to be done.   Here's the current  output of the linting tasks:

```java
Running "eslint:js" (eslint) task
>> 230 files lint free.

Running "eslint:md" (eslint) task
>> 4 files lint free.

Running "jsonlint:src" (jsonlint) task
>> 86 files lint free.

Running "json5lint:src" (json5lint) task

Running "markdownlint:src" (markdownlint) task
>> 4 files lint free.

Running "mdjsonlint:src" (mdjsonlint) task
>> 4 files lint free.

Running "json-eslint:src" (json-eslint) task
>> 86 files lint free.

Running "lintspaces:newlines" (lintspaces) task
>> 326 lint free.

Running "lintspaces:jsonindentation" (lintspaces) task
>> 86 lint free.
```

I compared that to a raw head count for all file types using the following command:

```java
for i in md js json json5; do echo -n $i:; find . -type f -name \*.$i ! -path ./node_modules/\* ! -path ./dist/\* ! -path ./reports/\* ! -path ./instrumented/\* ! -path ./coverage/\* | wc -l; done
```

The results are as follows:

| **File Type&#x20;** | **Files&#x20;** |
| ------------------- | --------------- |
| md                  | 13              |
| js                  | 247             |
| json                | 88              |
| json5               | 0               |

Looks like at 2 JSON files and 9 markdown files are not included in our linting.  The javascript discrepancy is probably down to the "lib" files, but I will review that as well.

        