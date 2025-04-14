---json
{
  "title": "FLUID-3742",
  "summary": "Fix table of contents so that we don't need to override the default URL",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "heidi valles",
  "date": "2010-09-16T11:29:00.594-0400",
  "updated": "2011-08-09T15:40:35.225-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4295/",
      "key": "FLUID-4295",
      "summary": "UI Options error when unchecking \"Show table of contents\" after \"save and apply\""
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4209/",
      "key": "FLUID-4209",
      "summary": "Replace rsf:ids in template of the table of contents component with flc classes"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T12:42:21.120-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-23T14:32:38.945-0400",
      "body": "This issue is solved by extending fluid.uiOptionsTemplateLoader to include the definition of tableOfContents URL @ <https://github.com/cindyli/infusion/tree/FLUID-3742>\n\nAs the modification needs to work with the new tableOfContents component, holding on the pull request till it's tested with the final toc component.\n\nThis issue is dependent on <https://fluidproject.atlassian.net/browse/FLUID-4209#icft=FLUID-4209> & <https://fluidproject.atlassian.net/browse/FLUID-4295#icft=FLUID-4295>, so the merge sequence should be:\n\n<https://fluidproject.atlassian.net/browse/FLUID-4209#icft=FLUID-4209> -> <https://fluidproject.atlassian.net/browse/FLUID-4295#icft=FLUID-4295> -> <https://fluidproject.atlassian.net/browse/FLUID-3742#icft=FLUID-3742>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-07-25T16:25:56.358-0400",
      "body": "With the re-factored UI Options template loader, the code change for this issue @ <https://github.com/cindyli/infusion/tree/FLUID-3742>  is no longer useful. Need a re-work.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-08-09T15:40:23.292-0400",
      "body": "Resolved with <https://fluidproject.atlassian.net/browse/FLUID-4353#icft=FLUID-4353> @ commit# d06946a552c869ef6078d7c28af4fbc0c734871e&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-08-09T15:40:35.223-0400",
      "body": "Issue closed.\n"
    }
  ]
}
---
right now myinit needs:

//initialize the UI Enhancer\
var initUIEnhancer = function () {

var enhancerOpts = {\
tableOfContents: {\
options: {\
templateUrl: "path to infusion/infusion-1.2/components/tableOfContents/html/TableOfContents.html"\
}

}\
};

        