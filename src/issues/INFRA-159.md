---json
{
  "title": "INFRA-159",
  "summary": "Confluence failed to start (CLUSTERSAFETY table)",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-10T10:17:29.582-0400",
  "updated": "2018-04-10T10:20:47.308-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-10T10:20:41.073-0400",
      "body": "Root cause:\n\n```\n2018-04-09 20:37:56,707 ERROR [Caesium-1-3] [scheduler.caesium.impl.SchedulerQueueWorker] executeJob Unhandled exception thrown by job QueuedJob[jobId=ClusterSafetyJob,deadline=1523306258345]\r\njava.lang.OutOfMemoryError: Java heap space\n```\n\nSymptom:\n\n```\n2018-04-09 20:38:08,683 WARN [Caesium-1-3] [confluence.cluster.safety.DefaultClusterSafetyManager] onNumbersAreDifferent Detected different number in database [ -2137431111 ] and cache [ -1148876792 ]. Cache number last set by [ not clustered ]. Triggering panic on node [ not clustered ]\r\n2018-04-09 20:38:08,730 WARN [Caesium-1-3] [analytics.client.listener.ProductEventListener] processEventWithTiming Processing a critical event: com.atlassian.confluence.cluster.safety.ClusterPanicAnalyticsEvent@446d65da\r\n2018-04-09 20:38:08,731 ERROR [Caesium-1-3] [confluence.cluster.safety.ClusterPanicListener] onClusterPanicEvent Received a panic event, stopping processing on the node: Non Clustered Confluence: Database is being updated by another Confluence instance. Please see http://confluence.atlassian.com/x/mwiyCg for more details.\r\n2018-04-09 20:38:08,731 WARN [Caesium-1-3] [confluence.cluster.safety.ClusterPanicListener] onClusterPanicEvent Shutting down\n```\n\nConfluence was running with a 1GB heap. Increased it to 4GB and restarted Confluence.\n\nConfluence was returning 200 OK while it was down, causing our monitoring to not detect it.\n"
    }
  ]
}
---
Fatal error in Confluence cluster: Database is being updated by an instance which is not part of the current cluster. 

<https://confluence.atlassian.com/confkb/confluence-will-not-start-due-to-fatal-error-in-confluence-cluster-179439771.html>

        