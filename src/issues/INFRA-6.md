---json
{
  "title": "INFRA-6",
  "summary": "Implement VidyoDashboard",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-07-29T10:16:27.365-0400",
  "updated": "2016-08-22T09:57:54.158-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "Vidyo\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-07-29T10:17:59.996-0400",
      "body": "Received email from Alastair Arnison on 7/27 saying he forwarded our request for the VidyoDashboard appliance software to Vidyo and is waiting on a response.&#x20;\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-04T09:38:14.877-0400",
      "body": "Today ETGroup (Alistair) shared the .OVA (virtual machine disk) containing an installation of VidyoDashboard. I'll attempt to convert it to a format that KVM recognizes.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-17T14:00:59.150-0400",
      "body": "I'm able to run the VidyoDashboard VM locally on VirtualBox but it needs direct access to the MySQL database running on the Vidyo appliances. Besides that being a big security risk, the Vidyo appliances are not currently configured to accept external connections to their internal database.\n\nAnother complication is that this VM is not meant to be tweaked and tuned. It runs Ubuntu (not our target platform) and does not allow administrative access. We have to fully trust it, while at the same time it's not clear if there are automatic updates in place, it's not covered by our support contract, etc. So this makes it hard to deploy this VM in our datacenter.\n\nIt's seems we're in a chicken-egg situation: the VM would have to be sitting in the datacenter to access the internal MySQL database, but deploying it in the datacenter is another security risk in itself.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-09-09T13:42:18.118-0400",
      "body": "TODO: Need to get this OVA running on KVM and provide access to Mike Thornback so he can configure it to connect to our Vidyo appliances. Should be behind the firewall, only acessible at IDRC and ETGroup needs access.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-22T09:57:54.156-0400",
      "body": "The VidyoDashboard has proven difficult to integrate in our environment. Additionally, it is not covered by any support contract and does not get security updates. Being a closed box, we cannot modify it to suit our needs.\n\nThere have not been requests for the functionality the VidyoDashboard provides since a long time ago. It seems we have not run into issues where VidyoDashboard would be useful (although it does provide nicer reports).\n\nClosing issue for now until there is more demand and/or Vidyo improves the situation regarding how VidyoDashboard is supported.\n"
    }
  ]
}
---
Vidyo offers a solution called VidyoDashboard that is supposed to provide insight into how our Vidyo setup is being used. Initially, it should be free.

        