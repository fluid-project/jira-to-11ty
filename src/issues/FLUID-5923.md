---json
{
  "title": "FLUID-5923",
  "summary": "The build site retains deleted files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Avtar Gill",
  "reporter": "Justin Obara",
  "date": "2016-07-05T11:04:32.376-0400",
  "updated": "2024-07-23T11:56:23.898-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Avtar Gill",
      "date": "2016-07-05T11:16:41.440-0400",
      "body": "I think the following commented out lines might be the cause:\\\n<https://github.com/fluid-project/ci-service/blob/master/jenkins_jobs/fluid-infusion.yml#L26-L28>\n\nI'll check with Giovanni Tirloni but we may either want to check if using `clean-remote` will still result in issues or uncomment [line #28](https://github.com/fluid-project/ci-service/blob/master/jenkins_jobs/fluid-infusion.yml#L28).\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-07-05T13:22:49.773-0400",
      "body": "SSH access is not allowed so that line, which requires a shell session, would not work. That's probably the reason why it's commented. Files are transferred through SFTP only for security reasons.\n\nThe Publish over SSH plugin does not seem to have a `clean-remote` option, despite what the JJB documentation says [here](http://docs.openstack.org/infra/jenkins-job-builder/publishers.html#publishers.ssh). That option is not available through the Web inteface and there is a bug opened for that [here](https://issues.jenkins-ci.org/browse/JENKINS-33056).\n\nIf this is not causing an issue for end users, I'd suggest waiting for `clean-remote` to be implemented by upstream (or work on it ourselves).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T11:56:23.898-0400",
      "body": "This has been addressed with recent infrastructure changes.\n"
    }
  ]
}
---
For FLUID-5892 the manual tests for the prefs editors were split into distinct pages for the native HTML and jQuery UI slider variants. However, the build site is still able to access the old index.html file.&#x20;

old:

* <http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/assortedContent/>

new:

* <http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/assortedContent/index-nativeHTML.html>
* <http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/assortedContent/index-jQueryUI.html>

Exploring the workspace on the Jenkins server shows that the correct files are in place in the directory, so it seems likely that it is an issue with the server that is deploying the build site artifacts.

        