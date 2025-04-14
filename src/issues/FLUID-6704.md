---json
{
  "title": "FLUID-6704",
  "summary": "Priority of fetchTemplates function should place it after model resolution",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-12-15T11:26:18.412-0500",
  "updated": "2024-07-17T08:08:03.971-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [
    "5.0"
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
      "date": "2021-12-16T14:38:37.121-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1067> ) into the project repo at 0b24a595780b19f7367eb42e254964e77555e1a0\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2021-12-17T08:30:28.571-0500",
      "body": "Needless to say, we decided to resolve this in favour of allowing markup templates to be localised - this means that we have ditched for now the use case of \"markup-driven polymorphism\" described in the PPIG paper - except in the minority cases where the markup is already statically in the document. It's sad, but Infusion will not be up to this before the Infusion 6 rewrite where we can split apart the time-dependence of our current \"workflow stages\" and also allow components to undergo grade evolution arbitrarily late in their lives. That is - the grade resolution system will itself become \"modellised\" and the system will dynamically accommodate any kind of adaptation in live, including in \"grade contents\".\n\nWe put these in quotes because there will cease to be any distinction between \"model material\" and general \"options\" as well as ceasing to be a distinction between \"grade contents\" and \"instantiated components\".\n"
    }
  ]
}
---
Right now the workflow priority of fetchTemplates, written in NewViewSupport.js in fluid.templateResourceFetcher places it "first":&#x20;

```java
workflows: {
            global: {
                fetchTemplates: {
                    funcName: "fluid.renderer.fetchTemplates",
                    priority: "first"
                }
            }
        }
```

This is too early in the sequence and prevents the use of localised templates - since in the case of a model-derived locale this value will not be available until a later workflow stage. All the same, there is a risk of circularity - since in the case of markup-driven polymorphism, some values destined for the model may be sourced from the markup.

This circularity risk was written up in the 2021 PPIG paper at <https://www.ppig.org/files/2021-PPIG-32nd-basman.pdf> which cuts at the heart of the whole workflow system.

However, another risk is that, as with the preferences framework, we may wish to synthesize a template based on lookahead through the component tree. If the component tree is sourced from model-based information, the tree will not be available early enough.

We will have to decide which of these use cases takes precedence.

        