---json
{
  "title": "INFRA-156",
  "summary": "Missing Yum repositories in config",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-03T05:36:12.432-0400",
  "updated": "2018-04-23T11:01:28.981-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-23T11:01:20.857-0400",
      "body": "Added them to a \\_global variable to avoid circular reference errors from Ansible:\n\n<https://github.com/inclusive-design/ops/blob/master/environments/00_cross_env_vars#L35>\n\n```\ncommon_yum_repositories_global:\r\n  - name: centos-base\r\n    baseurl: http://mirror.inclusivedesign.ca/centos/$releasever/os/$basearch\r\n    gpgcheck: yes\r\n    gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7\r\n\r\n  - name: centos-updates\r\n    baseurl: http://mirror.inclusivedesign.ca/centos/$releasever/updates/$basearch\r\n    gpgcheck: yes\r\n    gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7\r\n\r\n  - name: centos-extras\r\n    baseurl: http://mirror.inclusivedesign.ca/centos/$releasever/extras/$basearch\r\n    gpgcheck: yes\r\n    gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7\r\n    exclude: 'docker*'\r\n\r\n  - name: docker\r\n    baseurl: https://download.docker.com/linux/centos/7/$basearch/stable\r\n    gpgcheck: yes\r\n    gpgkey: https://download.docker.com/linux/centos/gpg\r\n\r\n  - name: epel\r\n    baseurl: http://mirror.inclusivedesign.ca/epel/7/$basearch\r\n    gpgcheck: yes\r\n    gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\r\n    exclude: 'nginx*'\r\n\r\n  - name: idi\r\n    baseurl: https://pkg.inclusivedesign.ca/centos/7/$basearch\r\n    gpgcheck: yes\r\n    gpgkey: https://pkg.inclusivedesign.ca/centos/7/x86_64/RPM-GPG-KEY-IDI\r\n\r\n  - name: jenkins\r\n    baseurl: http://pkg.jenkins.io/redhat-stable\r\n    gpgcheck: yes\r\n    gpgkey: https://pkg.jenkins.io/redhat-stable/jenkins.io.key\r\n\r\n  - name: kubernetes\r\n    baseurl: https://packages.cloud.google.com/yum/repos/kubernetes-el7-$basearch\r\n    gpgcheck: yes\r\n    gpgkey:\r\n      - https://packages.cloud.google.com/yum/doc/yum-key.gpg\r\n      - https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg\r\n\r\n  - name: nginx\r\n    baseurl: http://nginx.org/packages/centos/7/$basearch\r\n    gpgcheck: yes\r\n    gpgkey: http://nginx.org/keys/nginx_signing.key\n```\n"
    }
  ]
}
---
Hosts that need special repositories should be identified and the configuration added to Ansible:

* NodeSource Node.js
* Nginx
* Jenkins
* others?

        