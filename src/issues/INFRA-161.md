---json
{
  "title": "INFRA-161",
  "summary": "Confluence killed by OOM Killer",
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
  "date": "2018-04-11T05:48:49.261-0400",
  "updated": "2018-04-11T05:53:39.631-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-11T05:53:39.629-0400",
      "body": "Changed JVM settings: Xmx=2048 Xms=1024\n"
    }
  ]
}
---
```
Apr 11 01:17:09 i-0014 kernel: java invoked oom-killer: gfp_mask=0xd0, order=0, oom_score_adj=0
Apr 11 01:17:09 i-0014 kernel: java cpuset=/ mems_allowed=0
Apr 11 01:17:09 i-0014 kernel: CPU: 2 PID: 27583 Comm: java Not tainted 3.10.0-693.21.1.el7.x86_64 #1
Apr 11 01:17:09 i-0014 kernel: Hardware name: Red Hat KVM, BIOS 0.5.1 01/01/2011
Apr 11 01:17:09 i-0014 kernel: Call Trace:
Apr 11 01:17:09 i-0014 kernel: [<ffffffff816ae7c8>] dump_stack+0x19/0x1b
Apr 11 01:17:09 i-0014 kernel: [<ffffffff816a9b90>] dump_header+0x90/0x229
Apr 11 01:17:09 i-0014 kernel: [<ffffffff811f82ae>] ? mem_cgroup_reclaim+0x4e/0x120
Apr 11 01:17:09 i-0014 kernel: [<ffffffff8118a3d6>] ? find_lock_task_mm+0x56/0xc0
Apr 11 01:17:09 i-0014 kernel: [<ffffffff8118a884>] oom_kill_process+0x254/0x3d0
Apr 11 01:17:09 i-0014 kernel: [<ffffffff812bf46c>] ? selinux_capable+0x1c/0x40
Apr 11 01:17:09 i-0014 kernel: [<ffffffff811f9cd6>] mem_cgroup_oom_synchronize+0x546/0x570
Apr 11 01:17:09 i-0014 kernel: [<ffffffff811f9150>] ? mem_cgroup_charge_common+0xc0/0xc0
Apr 11 01:17:09 i-0014 kernel: [<ffffffff8118b114>] pagefault_out_of_memory+0x14/0x90
Apr 11 01:17:09 i-0014 kernel: [<ffffffff816a7f2e>] mm_fault_error+0x68/0x12b
Apr 11 01:17:09 i-0014 kernel: [<ffffffff816bb741>] __do_page_fault+0x391/0x450
Apr 11 01:17:09 i-0014 kernel: [<ffffffff816bb8e6>] trace_do_page_fault+0x56/0x150
Apr 11 01:17:09 i-0014 kernel: [<ffffffff816baf7a>] do_async_page_fault+0x1a/0xd0
Apr 11 01:17:09 i-0014 kernel: [<ffffffff816b7798>] async_page_fault+0x28/0x30
Apr 11 01:17:09 i-0014 kernel: Task in /system.slice/confluence.service killed as a result of limit of /system.slice/confluence.service
Apr 11 01:17:09 i-0014 kernel: memory: usage 5242880kB, limit 5242880kB, failcnt 27270
Apr 11 01:17:09 i-0014 kernel: memory+swap: usage 5242880kB, limit 9007199254740988kB, failcnt 0
Apr 11 01:17:09 i-0014 kernel: kmem: usage 0kB, limit 9007199254740988kB, failcnt 0
Apr 11 01:17:09 i-0014 kernel: Memory cgroup stats for /system.slice/confluence.service: cache:12KB rss:5242868KB rss_huge:1413120KB mapped_file:0KB swap:0KB inactive_anon:0KB active_anon:5242868KB inactive_file:12KB active_file:0KB unevictable:0KB
Apr 11 01:17:09 i-0014 kernel: [ pid ]   uid  tgid total_vm      rss nr_ptes swapents oom_score_adj name
Apr 11 01:17:09 i-0014 kernel: [27564]  1003 27564  2143996  1318088    2850        0             0 java
Apr 11 01:17:09 i-0014 kernel: Memory cgroup out of memory: Kill process 30924 (java) score 1007 or sacrifice child
Apr 11 01:17:09 i-0014 kernel: Killed process 27564 (java) total-vm:8575984kB, anon-rss:5234648kB, file-rss:37704kB, shmem-rss:0kB
Apr 11 01:17:10 i-0014 systemd: confluence.service: main process exited, code=killed, status=9/KILL
Apr 11 01:17:10 i-0014 catalina.sh: If you encounter issues starting up Confluence, please see the Installation guide at http://confluence.atlassian.com/display/DOC/Confluence+Installation+Guide
Apr 11 01:17:10 i-0014 catalina.sh: Server startup logs are located in /opt/atlassian/confluence/logs/catalina.out
Apr 11 01:17:10 i-0014 catalina.sh: ---------------------------------------------------------------------------
Apr 11 01:17:10 i-0014 catalina.sh: Using Java: /opt/atlassian/confluence/jre//bin/java
Apr 11 01:17:10 i-0014 catalina.sh: 2018-04-11 01:17:10,748 INFO [main] [atlassian.confluence.bootstrap.SynchronyProxyWatchdog] The Confluence context path is empty. No further action is required.
Apr 11 01:17:10 i-0014 catalina.sh: ---------------------------------------------------------------------------
Apr 11 01:17:10 i-0014 catalina.sh: PID file found but no matching process was found. Stop aborted.
```

        