---json
{
  "title": "SJRK-230",
  "summary": "Netlify causing frontmatter to be removed from md files on SJRK site",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Pull Request",
  "reporter": "Dana",
  "date": "2019-02-20T12:31:30.190-0500",
  "updated": "2019-02-27T13:41:27.598-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "SoJustRepairIt.org"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Dana",
      "date": "2019-02-20T12:31:57.999-0500",
      "body": "FYI @@Jonathan Hung\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2019-02-26T15:49:43.467-0500",
      "body": "As mentioned earlier today during the planning meeting I found a [GitHub issue thread](https://github.com/netlify/netlify-cms/issues/1338) discussing this bug and an [open pull request](https://github.com/netlify/netlify-cms/pull/1820). It looks like they are going to add a [retain\\_unknown\\_fields](https://github.com/netlify/netlify-cms/pull/1820#issuecomment-460004634) config option in an upcoming release. I *think* an interim solution could be exposing all the frontmatter fields in the [cms config](https://github.com/fluid-project/sojustrepairit.org/blob/master/static/admin/config.yml#L19-L45)&#x20;\n\n \n\n \n\n \n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2019-02-27T13:41:27.598-0500",
      "body": "I've added the 'type' field in the config for the about and landing pages. Hopefully this will fix the issue but we should keep an eye out for it.\n"
    }
  ]
}
---
Editing and publishing changes to the Landing page and About page on SJRK site with Netlify caused the "type" line in the frontmatter to be removed from the md files (and therefore content removed from the site).  This did not happen when editing and publishing changes to the About page and the Partners page (index files).

<https://github.com/fluid-project/sojustrepairit.org/commit/fd7f70d337faae5f710d95dcb7834eb8048d0b63>

<https://github.com/fluid-project/sojustrepairit.org/commit/b444920e06999731f891d821a34c79cab2090b47>

 

        