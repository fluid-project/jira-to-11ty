---json
{
  "title": "INFRA-139",
  "summary": "Investigate feasibility of running VirtualBox in a container",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-03-16T11:13:29.736-0400",
  "updated": "2018-06-21T15:04:53.197-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-27T11:23:06.025-0400",
      "body": "I got a working prototype (based on VirtualBox 5.2.8 and Vagrant 2.0.3, on CentOS 7.4) but I'm currently facing some issues with SELinux and VirtualBox's GUI. Still working on that.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-28T11:45:12.521-0400",
      "body": "Running VirtualBox and Vagrant inside a container is certainly doable, provided the host has VirtualBox drivers installed. The container needs to be [privileged](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities).\n\nRunning GUI applications inside Docker is more complicated (exemplified by the size of the [x11docker](https://github.com/mviereck/x11docker) shell script). When a Vagrant box runs in non-headless mode, it's creating a GUI window and thus poses these challenges. More specifically, because it was created in Qt5, it needs a working D-Bus connection and the Xvfb server alone is not enough.\n\nBoth the CentOS and Fedora boxes work fine in headless mode. When trying to start in GUI mode, the processes are killed though:\n\n```\ntype=ANOM_ABEND msg=audit(1522102229.772:2026): auid=4294967295 uid=0 gid=0 ses=4294967295 subj=system_u:system_r:spc_t:s0 pid=1784 comm=\"VirtualBox\" reason=\"memory violation\" sig=6\r\ntype=ANOM_ABEND msg=audit(1522102808.466:2058): auid=4294967295 uid=0 gid=0 ses=4294967295 subj=system_u:system_r:spc_t:s0 pid=3739 comm=\"QDBusConnection\" reason=\"memory violation\" sig=6\n```\n\nAnother issue faced was the default 10GiB limit on the root filesystem mounted inside the container. This cannot be customized neither by the Dockerfile nor by a command line option to \\`docker run\\`. It's configured in the docker daemon itself with the option \\`--storage-opt dm.basesize=100G\\`, so it means relying on a bigger root disk is not portable.\n\nI've identified that the CI pipeline for Infusion could be optimized to use less disk space (<https://fluidproject.atlassian.net/browse/FLUID-6266#icft=FLUID-6266> and [GPII/ci-service PR#38](https://github.com/GPII/ci-service/pull/38)). Currently it needs more than 10GB but by simply removing extra commands (e.g.\\`npm install\\` outside the VM, building Infusion 2x), it's possible to use 7-8GB in total.\n\nAnother option is to provide the container with a scratch area through a Docker volume (or a Kubernetes local mount point) for the \"$HOME/VirtualBox VMs\" directory. This way the root disk remains almost unused, except for checking out the code repository (or even that could stay outside the container since it's going to be thrown away at the end of the process).\n\nIt's also possible to keep a volume with the latest version of the Vagrant boxes, so containers don't need to download them every time\n\nLeaving the issues of GUI applications aside (and the requirements for a development-focus environment, which translates into developers needing to see the actual browser window to troubleshoot issues), it's possible to migrate the execution of the CI pipelines into containers. There's also the question of whether VirtualBox and Vagrant are even necessary in this case but I'm also ignoring that for now.\n\nDockerfile:\n\n```\nFROM centos:7\r\n\r\nRUN yum -y install git openssh-clients && \\\r\n    yum -y install https://releases.hashicorp.com/vagrant/2.0.3/vagrant_2.0.3_x86_64.rpm  && \\\r\n    yum -y install https://download.virtualbox.org/virtualbox/5.2.8/VirtualBox-5.2-5.2.8_121009_el7-1.x86_64.rpm\n```\n\nStarting the container (and using an pre-existing .vagrant.d directory from the host):\n\n```\ndocker run --rm -ti -v /home/jenkins-fluid/.vagrant.d/boxes:/root/.vagrant.d/boxes -v /dev/vboxdrv:/dev/vboxdrv -v /dev/vboxnetctl:/dev/vboxnetctl --privileged virtualbox-vagrant\n```\n\nThe Vagrantfile needs to be modified to run in CI (it could leave in a separate directory or the existing Vagrantfile could have logic to dynamically change this, it's Ruby after all):\n\n```\n--- a/Vagrantfile\r\n+++ b/Vagrantfile\r\n@@ -52,6 +52,7 @@ Vagrant.configure(2) do |config|\r\n   config.vm.hostname = app_name\r\n \r\n   config.vm.provider :virtualbox do |vm|\r\n+    vm.gui = false\r\n     vm.customize [\"modifyvm\", :id, \"--memory\", ram]\r\n     vm.customize [\"modifyvm\", :id, \"--cpus\", cpus]\r\n     vm.customize [\"modifyvm\", :id, \"--vram\", \"256\"]\n```\n\nIn summary, running VirtualBox/Vagrant inside a container is doable provided the box is configured as \"headless\" (or \"separate\"). There are some challenges with storage but nothing too serious, although the issues with the GUI are hard to fix (goes against \"no hacks\" item above).\n\nFinally, all tests in Infusion and GPII/universal work fine.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-03T04:36:25.826-0400",
      "body": "Next steps would be to go ahead and implement this for real and/or consider if it's even necessary in all use cases. New JIRA should be opened.\n"
    }
  ]
}
---
Solution should:

* NOT require hacks in the VirtualBox installation on the hosts
* NOT require heavyweight Docker container (avoid too much logic as much as possible)
* permit inspection of running VM but this is not a hard requirement (if it requires logging into a container)

The use case is someone submitting a Kubernetes job to run tests against a Vagrant/VirtualBox image and getting results back.

        