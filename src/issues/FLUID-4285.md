---json
{
  "title": "FLUID-4285",
  "summary": "Provide diagnostics in common cases of error in defining component and subcomponent options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-06-07T17:49:22.763-0400",
  "updated": "2011-07-04T15:00:49.000-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-06-07T18:10:59.394-0400",
      "body": "This is caused by an extra layer of wrapping in the defaults structure  - the term \"options\" is unnecessary since ALL of the rh argument of fluid.defaults consists of options... this causes the value in question to appear at the path \"options.options.test\" rather than \"options.test\" as expected by the context expression (and, presumably, the component user)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-06-08T04:38:27.689-0400",
      "body": "A further mishap in the same vein was caused by the following:\n\n```java\nvar news = news || {};\r\n\t\t\tfluid.defaults(\"news.parent\", {\r\n\t\t\t\tgradeNames: [\"fluid.modelComponent\", \"autoInit\"],\r\n\t\t\t\tmodel: { test: \"test\" },\r\n\t\t\t\tcomponents: {\r\n\t\t\t\t\tchild: {\r\n\t\t\t\t\t\ttype: \"news.child\",\r\n\t\t\t\t\t\tmodel: \"{parent}.model\"\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\tfluid.defaults(\"news.child\", {\r\n\t\t\t\tgradeNames: [\"fluid.modelComponent\", \"autoInit\"],\r\n\t\t\t});\r\n\t\t\t\r\n\t\t\tvar parent = news.parent({});\r\n\t\t\tconsole.log(parent.child.model);\n```\n\nIn this case, the necessarily \"options\" wrapping for options was omitted from the subcomponent record. Both of these situations should be detected by diagnostics and prevented.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-06-08T05:16:02.860-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-20T16:15:48.224-0400",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/68>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-07-04T15:00:38.322-0400",
      "body": "I pushed Antranig's changes to improve diagnostics into the project repo at <https://github.com/fluid-project/infusion/commit/4df58836453b4a79a92237fc84e412ce5b260db5>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-07-04T15:00:48.998-0400",
      "body": "Reviewed and pushed.\n"
    }
  ]
}
---
Reported on IRC by athena7 - the following code snippet will fail

```java
var news = news || {};
			fluid.defaults("news.parent", {
				gradeNames: ["fluid.littleComponent", "autoInit"],
				options: {
					test: "test"
				},
				components: {
					child: {
						type: "news.child",
						options: {
							test: "{parent}.options.test"
						}
					}
				}
			});

			fluid.defaults("news.child", {
				gradeNames: ["fluid.littleComponent", "autoInit"],
			});
			
			var parent = news.parent({});
			console.log(parent.child.options.test);
```

        