---json
{
  "title": "FLUID-6462",
  "summary": "API call to fonts.googleapi blocked due to http connection",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Sachin Chopra",
  "date": "2020-03-03T20:15:46.507-0500",
  "updated": "2020-03-10T09:21:21.643-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-03-05T07:32:30.056-0500",
      "body": "Also filed as <https://github.com/fluid-project/fluidproject.org/issues/36>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-03-10T09:21:21.641-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/fluidproject.org/pull/37> ) into the project repo at 5f0c69d28fe460f1361d2a52e9493d25dd72ac6d\n"
    }
  ]
}
---
## Describe the bug

The page at '<https://fluidproject.org/>' was loaded over HTTPS, but requested an insecure stylesheet '<http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700,100>'. This request was blocked since the content must be served over HTTPS.

### To reproduce

Steps to reproduce the behavior:

1. Go to '<https://fluidproject.org/>'
2. Right-click and Click on Inspect.
3. Go to Console
4. See error

Screenshot:

<!-- media: external https://user-images.githubusercontent.com/34926285/75834904-6adc4000-5de3-11ea-967e-638998f54b92.png -->

[!https://user-images.githubusercontent.com/34926285/75834904-6adc4000-5de3-11ea-967e-638998f54b92.png!](https://user-images.githubusercontent.com/34926285/75834904-6adc4000-5de3-11ea-967e-638998f54b92.png)

### Expected behavior

The API call should not be blocked

## Technical details

http is not secue and https calls must be based since the base host i.e. fluidproject.org is using https connection and api calls to http cannot be made.

### Desktop

* OS: Ubuntu 18.04
* Browser: Chrome
* Version : Latest

        