---json
{
  "title": "INFRA-86",
  "summary": "Implement load balancer with HTTPS for all Fluid/IDI websites",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2016-08-09T12:57:30.112-0400",
  "updated": "2017-10-17T07:38:50.269-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/INFRA-40/",
      "key": "INFRA-40"
    },
    {
      "type": "Related to",
      "url": "/browse/INFRA-85/",
      "key": "INFRA-85",
      "summary": "Automate Let's Encrypt certificate renewal process"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-22T09:10:58.043-0400",
      "body": "Partially enabled for guide.inclusivedesign.ca and pkg.inclusivedesign.ca.\n\nThe Ansible roles touching nginx/letsencrypt need more work. One major issue is renewing certificates while they are still in use. Right now we're redirecting known requests from Let's Encrypt to a special directory where we ask the certbot tool to store the challenge files. It doesn't always work as expected and needs more testing.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-03T13:53:52.640-0400",
      "body": "Enabled HTTPS for the following websites:\n\nidrc.ocadu.ca\\\nlists.idrc.ocadu.ca\\\ntts.idrc.ocadu.ca\\\ninclusivedesign.ca\\\nguide.inclusivedesign.ca\\\nhackathon.inclusivedesign.ca\\\nfiles.inclusivedesign.ca\\\nci.inclusivedesign.ca\\\nlists.inclusivedesign.ca\\\npkg.inclusivedesign.ca\\\nairmedia.inclusivedesign.ca\\\nfluidproject.org\\\nbuild.fluidproject.org\\\ndocs.fluidproject.org\\\nforge.fluidproject.org\\\nrsf.fluidproject.org\\\nwiki.fluidproject.org\\\nissues.fluidproject.org\\\nfloeproject.org\\\ndemo.floeproject.org\\\nhandbook.floeproject.org\\\nachecker.ca\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-26T19:25:29.946-0400",
      "body": "Enabled docs.fluidproject.org today\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-30T19:17:31.981-0400",
      "body": "Enabled HTTPS for the following additional websites today:\n\nbigidea.one\\\ndev.bigidea.one\\\nsojustrepairit.org\\\ncanhack150.ca\\\ndocs.fluidproject.org\\\nmetadata.floeproject.org\n\nComplete list:\n\ninclusivedesign.ca\\\nairmedia.inclusivedesign.ca\\\nci.inclusivedesign.ca\\\nfiles.inclusivedesign.ca\\\nguide.inclusivedesign.ca\\\nhackathon.inclusivedesign.ca\\\nlists.inclusivedesign.ca\\\npkg.inclusivedesign.ca\\\nwww.inclusivedesign.ca\\\nconf.inclusivedesign.ca\n\nprd-vid01p-tor1.inclusivedesign.ca\\\nprd-vid02p-tor1.inclusivedesign.ca\\\nprd-vid03p-tor1.inclusivedesign.ca\\\nprd-vid04p-tor1.inclusivedesign.ca\\\nprd-vid05p-tor1.inclusivedesign.ca\\\nprd-vid06p-tor1.inclusivedesign.ca\n\nfluidproject.org\\\nbuild.fluidproject.org\\\nci.fluidproject.org\\\ndocs.fluidproject.org\\\nforge.fluidproject.org\\\nissues.fluidproject.org\\\nrsf.fluidproject.org\\\nwiki.fluidproject.org\\\nwww.fluidproject.org\n\nachecker.ca\\\nwww.achecker.ca\n\nidrc.ocadu.ca\\\nidrc.ocad.ca\\\nlists.idrc.ocadu.ca\\\nlists.idrc.ocad.ca\\\nwww.idrc.ocadu.ca\\\nwww.idrc.ocad.ca\n\nfloeproject.org\\\ndemo.floeproject.org\\\nhandbook.floeproject.org\\\nwww.floeproject.org\\\nmetadata.floeproject.org\\\nacessibility.floeproject.org\n\nsnow.idrc.ocadu.ca\\\nsnow.idrc.ocad.ca\\\nwww.snow.idrc.ocadu.ca\\\nwww.snow.idrc.ocad.ca\\\nsnow-dev.idrc.ocadu.ca\\\nsnow-dev.idrc.ocad.ca\\\nsnow-dev2.idrc.ocadu.ca\\\nsnow-dev2.idrc.ocad.ca\\\nsnowvids.idrc.ocadu.ca\\\nsnowvids.idrc.ocad.ca\n\natutor.snow.idrc.ocadu.ca\\\natutor.snow.idrc.ocad.ca\n\nsojustrepairit.org\\\nwww.sojustrepairit.org\\\nsojustrepairit.ca\\\nwww.sojustrepairit.ca\n\nbigidea.one\\\nwww.bigidea.one\\\ndev.bigidea.one\n\ncanhack150.ca\\\nwww.canhack150.ca\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-30T19:18:35.429-0400",
      "body": "@@Colin Clark @@Jonathan Hung @@Michelle D'Souza @@Justin Obara @@Avtar Gill @@Alan Harnum I think I have enabled HTTPS for all the major websites now. I have not enabled it for the domain reservations we have (that only redirect to idrc.ocadu.ca without any content). Any websites you feel are missing from this list?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2017-10-03T11:23:40.867-0400",
      "body": "This list looks really good to me! Thanks for doing the work, Gio.\n"
    }
  ]
}
---
All websites need to be available through HTTPS and behind our load balancers.

* Deploy 2 LB's for Fluid/IDI
* Update Ansible configuration for each website and apply to these LB's
* Change DNS records
* Notify developers so links can be updated to use HTTPS

        