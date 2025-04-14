---json
{
  "title": "INFRA-237",
  "summary": "mirror: Errors after updating to CentOS 7.7",
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
  "date": "2020-04-20T13:55:20.390-0400",
  "updated": "2020-04-20T14:27:56.569-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-20T14:27:48.452-0400",
      "body": "Mirror is unreliable. Switched to a different mirror.\n\n```\ncommit 80b7dc7558b698d660e3e71e32a3b659ac6caaef (HEAD -> master, origin/master, origin/HEAD)\r\nAuthor: Giovanni Tirloni <giovanni.tirloni@gmail.com>\r\nDate:   Mon Apr 20 15:24:21 2020 -0300\r\n\r\n    mirror: s/mirrors.rit.edu/mirror.csclub.uwaterloo.ca/\r\n\r\ndiff --git a/misc/mirror/mirror.sh b/misc/mirror/mirror.sh\r\nindex 06499a7..1f3ec0a 100755\r\n--- a/misc/mirror/mirror.sh\r\n+++ b/misc/mirror/mirror.sh\r\n@@ -24,21 +24,21 @@ exlock_now || exit 1\r\n # Fedora\r\n #\r\n BASEDIR=\"${HOME}/public_html/fedora\"\r\n-MIRROR=\"mirrors.rit.edu\"\r\n+MIRROR=\"mirror.csclub.uwaterloo.ca\"\r\n RSYNC_OPTS=(-avuH --no-motd --delete-after --delete-excluded --exclude source --exclude SRPMS --exclude debug --exclude ppc --exclude ppc64 --exclude ppc64le --exclude i386 --exclude s390 --exclude s390x --exclude sparc --exclude sparc64 --exclude aarch64 --exclude armhfp --exclude arm)\r\n \r\n-rsync \"${RSYNC_OPTS[@]}\" \"rsync://${MIRROR}/fedora/releases/31/\" \"${BASEDIR}/releases/31\"\r\n+rsync \"${RSYNC_OPTS[@]}\" \"rsync://${MIRROR}/fedora-enchilada/linux/releases/31/\" \"${BASEDIR}/releases/31\"\r\n \r\n-rsync \"${RSYNC_OPTS[@]}\" \"rsync://${MIRROR}/fedora/updates/31/\" \"${BASEDIR}/updates/31\"\r\n+rsync \"${RSYNC_OPTS[@]}\" \"rsync://${MIRROR}/fedora-enchilada/linux/updates/31/\" \"${BASEDIR}/updates/31\"\r\n \r\n #\r\n # EPEL\r\n #\r\n BASEDIR=\"${HOME}/public_html/epel\"\r\n-MIRROR=\"mirrors.rit.edu\"\r\n-RSYNC_OPTS=(-avuH --no-motd --delete-after --delete-excluded --exclude debug)\r\n+MIRROR=\"mirror.csclub.uwaterloo.ca\"\r\n+RSYNC_OPTS=(-avuH --no-motd --delete-after --delete-excluded --exclude debug --exclude .~tmp~)\r\n \r\n-rsync \"${RSYNC_OPTS[@]}\" \"rsync://${MIRROR}/epel/7/x86_64/\" \"${BASEDIR}/7/x86_64\"\r\n+rsync \"${RSYNC_OPTS[@]}\" \"rsync://${MIRROR}/fedora-enchilada/epel/7/x86_64/\" \"${BASEDIR}/7/x86_64\"\r\n \r\n #\r\n # CentOS\n```\n"
    }
  ]
}
---
From i-0033:

```
# yum install gcc
Loaded plugins: fastestmirror, versionlock
Determining fastest mirrors
managed__centos-base                                                                                                                                                                          | 3.6 kB  00:00:00     
managed__centos-extras                                                                                                                                                                        | 3.4 kB  00:00:00     
managed__centos-updates                                                                                                                                                                       | 3.4 kB  00:00:00     
managed__docker                                                                                                                                                                               | 3.5 kB  00:00:00     
managed__epel                                                                                                                                                                                 | 4.7 kB  00:00:00     
managed__idi                                                                                                                                                                                  | 2.9 kB  00:00:00     
(1/10): managed__centos-base/7/x86_64/group_gz                                                                                                                                                | 166 kB  00:00:00     
(2/10): managed__centos-updates/7/x86_64/primary_db                                                                                                                                           | 2.5 MB  00:00:00     
(3/10): managed__docker/x86_64/updateinfo                                                                                                                                                     |   55 B  00:00:00     
managed__epel/x86_64/group_gz  FAILED                                          
http://mirror.incd.ca/epel/7/x86_64/repodata/c9f40040677b457cbb2e69a9ac92b943a1808c71a1d04771cb439133e5bd0c2a-comps-Everything.x86_64.xml.gz: [Errno 14] HTTPS Error 404 - Not Found  0.0 B/s | 166 kB  --:--:-- ETA 
Trying other mirror.
To address this issue please refer to the below wiki article 

https://wiki.centos.org/yum-errors

If above article doesn't help to resolve this issue please use https://bugs.centos.org/.

(4/10): managed__centos-base/7/x86_64/primary_db                                                                                                                                              | 6.0 MB  00:00:00     
(5/10): managed__centos-extras/7/x86_64/primary_db                                                                                                                                            | 180 kB  00:00:00     
(6/10): managed__docker/x86_64/primary_db                                                                                                                                                     |  41 kB  00:00:00     
managed__epel/x86_64/updateinf FAILED                                          
http://mirror.incd.ca/epel/7/x86_64/repodata/990768aef5c64477e3743e6bcbab0cbbf5cbff148ce9e8f4e434cdea59f8db12-updateinfo.xml.bz2: [Errno 14] HTTPS Error 404 - Not Found           ]  0.0 B/s | 166 kB  --:--:-- ETA 
Trying other mirror.
managed__epel/x86_64/primary_d FAILED                                          
http://mirror.incd.ca/epel/7/x86_64/repodata/ba7b0c2ddb303e8a2482a11d726bba184e9594ce3970e3825d7dedc6f110eb9c-primary.sqlite.bz2: [Errno 14] HTTPS Error 404 - Not Found           ]  0.0 B/s | 166 kB  --:--:-- ETA 
Trying other mirror.
(7/10): managed__idi/x86_64/primary_db                                                                                                                                                        | 7.5 kB  00:00:00     
managed__epel/x86_64/primary_d FAILED                                          
http://mirror.incd.ca/epel/7/x86_64/repodata/ba7b0c2ddb303e8a2482a11d726bba184e9594ce3970e3825d7dedc6f110eb9c-primary.sqlite.bz2: [Errno 14] HTTPS Error 404 - Not Found           ]  0.0 B/s |    0 B  --:--:-- ETA 
Trying other mirror.
http://mirror.incd.ca/epel/7/x86_64/repodata/ba7b0c2ddb303e8a2482a11d726bba184e9594ce3970e3825d7dedc6f110eb9c-primary.sqlite.bz2: [Errno 14] HTTPS Error 404 - Not Found
Trying other mirror.
```

        