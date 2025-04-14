---json
{
  "title": "SJRK-25",
  "summary": "Evaluate hosting solutions for use by third parties",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T16:20:17.729-0400",
  "updated": "2018-03-27T11:42:53.315-0400",
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
      "author": "Giovanni Tirloni",
      "date": "2017-11-01T11:26:28.668-0400",
      "body": "Thanks for creating the JIRA. What would be an acceptable deliverable for this request? Is a comment describing possible solutions what we're after? A PoC?\n\nHow many solutions of each category would be acceptable? Should I produce a HOWTO document for each provider?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2017-11-03T14:17:48.645-0400",
      "body": "At this stage, a comment describing possible solutions would be an acceptable deliverable. I've also started a Google doc to compare options, so feel free to use that as a starting point as well, or modify it to your heart's content:\n\n<https://docs.google.com/spreadsheets/d/136-GdO2BdZD7BqojErmm1oWJRwSXCMxZL-YW5icA4kU/edit?usp=sharing>\n\nI think we're just looking to explore the options at this point, so I'm not sure if setting an acceptable minimum for each category would make sense. A HOWTO document could be produced once we've got a smaller number of candidates (this smaller number could be 1 🙂). If you happen to find something that lines up well with the requirements outlined in <https://fluidproject.atlassian.net/browse/SJRK-26#icft=SJRK-26>, that would be amazing!\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-12-14T08:29:49.304-0500",
      "body": "I'm assuming we are discussing static websites for now. These are the options I see available:\n\n* Traditional web hosting is usually easy to deploy (and support is delegated to hosting company). Countless options everywhere (including countries where support in the local language would be a plus).\n\n- A cheap virtual machine running a web server is also easy to deploy but requires ongoing maintenance (less so because it's a static website but still can't be left unattended for too long). Deployment can be made easier for popular providers (Google, Amazon, Azure, DigitalOcean, etc) or even cheap VPS providers. Here too support in the local language should be easily available without much trouble.\n\n* Using an object storage service (AWS S3 or Azure Blobs) requires some technical knowledge but not too much. It probably can be automated to make it easier for non-technical people. However, setting up billing and interacting with the AWS/Azure console (or command line tools) can be scary. S3 has [limits](http://docs.aws.amazon.com/AmazonS3/latest/dev/request-rate-perf-considerations.html) but it's possible to host a [S3 bucket behind CloudFlare](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/MigrateS3ToCloudFront.html).\n\n- Another alternative is all-in-one static hosting service like [Netlify](https://netlify.com). If our users can use a Git repository to publish their stories, Netlify can take care of running the static generator and publishing it for them automatically. [This page](https://web.archive.org/web/20171214132007/https://designrope.com/toolbox/static-web-hosting/) has a good overview of available services for publishing static websites.\n\nIf a deployment becomes too popular, the cheap hosting might not withstand the load. At this point it might be necessary to consider putting it behind a service like CloudFlare which will take care of caching, avoiding DoS attacks, etc. What other options in this area? AWS CloudFront and Azure CDN (complex to setup), all other CDNs only seem to offer free trials (MaxCDN, SkyCDN, etc).\n\nMaintaining the infrastructure to scale a deployment is very complex and requires dedicated tech staff. Kubernetes requires >1 FTE supporting it. Hosted solutions like Azure Container Services or Google container Engine still require technical knowledge and can't just be 'left to be' by themselves, even if they're hosted. Still, there would be a need to setup CD/CI pipelines. Depending on who is our target audience this is out of reach.\n\nHaving raw content hosted on a Git repository (GitHub, BitBucket or GitLab) seems to offer the most flexibility in deployment. Then we can select between one of the free automated services (e.g. Netlify) or trying to offer a similar experience (e.g. a Docker image with all tools or instructions on how to install our static generator of choice and other tools). If not hosting with Netlify, the content can then be pushed to a S3 bucket, a VPS/VM provider or something else.\n\nAnother option is to re-create the Netlify experience (users goes to single page to edit content and make it live) but I'm not sure how hard that would be. Netlify only has to worry about pushing the changes to their own servers, as far as I know, and we would have to worry if users have decided to use a web hosting company (FTP/SFTP/WebDav), or a VM (SSH/SFTP) or S3 buckets, etc.\n\nThis assumes hosting raw content is a solved problem, probably addressed in <https://fluidproject.atlassian.net/browse/SJRK-26#icft=SJRK-26>, right?\n\nI think the spreadsheet contains good data. Please let me know if you would like me to compile a list of relevant web hosting and IaaS providers. The pricing won't change much and at this point in the process is might be too early to focus on that but I'd be happy to do it anyway.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-01-09T11:21:54.287-0500",
      "body": "I feel like it's expected I should do something more from this JIRA but I'm not sure what.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-27T11:41:41.935-0400",
      "body": "Last time we chatted, it was decided I would be involved again we are closer to deploying something so I could focus on the infrastructure aspects of making that happen. I'm closing this JIRA then, please feel free to re-open if needed.\n"
    }
  ]
}
---
Evaluate and compare available low-cost or free web-hosting options for possible partners to use when "deploying" their own implementations of the storytelling tool.

Possible use case:

* someone would like to host their own copy of the storytelling tool
* we provide them with the source code, instructions and scripts that automate the process
* perhaps also a list of cheap or free hosting options
* instructions on how to sign up for one of said options

        