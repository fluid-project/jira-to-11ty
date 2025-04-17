---json
{
  "title": "INFRA-162",
  "summary": "Increase BuildKite parallelism",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-12T11:36:28.307-0400",
  "updated": "2018-08-29T13:24:13.664-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-13T08:51:41.233-0400",
      "body": "## Job Concurrency\n\nWhile Jenkins lets you tweak the number of [executors](https://support.cloudbees.com/hc/en-us/articles/216456477-What-is-a-Jenkins-Executor-and-how-can-I-best-utilize-my-executors) and GitLab lets you define how many [concurrent](https://docs.gitlab.com/runner/configuration/advanced-configuration.html) jobs a runner supports, the Buildkite agent runs one job at a time. This makes it simpler and more robust, which are trade-offs I can agree with.\n\nIf you want to increase the job concurrency per host, you have to deploy multiple agents.\n\nThe official documentation is a bit light on details so I’ll add the steps I have followed to achieve this. My environment consists of CentOS hosts and the agents are started by systemd. I’ve tested these steps on [buildkite-agent v3.0](https://building.buildkite.com/announcing-buildkite-agent-v3-0-4781a0e2d4db).\n\nThe idea is to have a single agent configuration file with global settings for the host and tweak the per-agent settings using a systemd [unit template](https://fedoramagazine.org/systemd-template-unit-files), so you can easily instantiate as many units as needed.\n\nThe only settings you will need to define are the `token` and any `tags` you might need. Tags are useful when you need to define a different queue name or add meta-data about your hosts (e.g. `queue=priority,hypervisor=kvm,docker=true`) that can later be used to target jobs.\n\nThe minimum per-agent settings are:\n\n* name\n* build-path\n* hooks-path\n* plugins-path\n\nAs I’ve mentioned, the latter will be set automatically using systemd.\n\nIf you need to set per-host settings, use the configuration file. For per-agent settings, add them to the systemd unit file.\n\nAnother approach is to have per-agent configuration files instead of using systemd (and environment variables). For that, tweak the systemd unit file below to pass the `BUILDKITE_AGENT_CONFIG` environment variable or the `--config` parameter to `buildkite-agent start`.\n\n## Steps\n\nFirst, install the agent following the official steps [here](https://buildkite.com/docs/agent/v3/redhat).\n\nEdit the `/etc/buildkite-agent/buildkite-agent.cfg` file so it only has the following lines:\n\n```\ntoken=\"xxx\"\r\ntags=\"tag1=value1,tag2=value2\"     # optional\n```\n\nIn other words, ensure that per-agent settings like `name`, `build-path`, `hooks-path` and `plugins-path` are **not** defined in the configuration file.\n\nNext, edit the `/usr/lib/systemd/system/buildkite-agent@.service` file and replace it with the following:\n\n \n\n```\n[Unit]\r\nDescription=Buildkite Agent (%i)\r\nDocumentation=https://buildkite.com/agent\r\nAfter=syslog.target\r\nAfter=network.target\r\n\r\n[Service]\r\nType=simple\r\nUser=buildkite-agent\r\nPermissionsStartOnly=true\r\nEnvironment=HOME=/var/lib/buildkite-agent-%i\r\nEnvironment=BUILDKITE_AGENT_NAME=%H-%i\r\nEnvironment=BUILDKITE_BUILD_PATH=/var/lib/buildkite-agent-%i/builds\r\nEnvironment=BUILDKITE_HOOKS_PATH=/etc/buildkite-agent/hooks\r\nEnvironment=BUILDKITE_PLUGINS_PATH=/etc/buildkite-agent/plugins\r\nExecStartPre=/bin/mkdir -p /var/lib/buildkite-agent-%i/builds\r\nExecStartPre=/bin/chown -R buildkite-agent /var/lib/buildkite-agent-%i\r\nExecStart=/usr/bin/buildkite-agent start\r\nRestartSec=5\r\nRestart=on-failure\r\nTimeoutSec=10\r\n\r\n[Install]\r\nWantedBy=multi-user.target\r\nDefaultInstance=1\n```\n\nEach agent will get a directory under /var/lib/buildkite-agent-%i where `%i` is the instance argument.\n\nReload the systemd configuration with `systemctl daemon-reload`.\n\nNow you are ready to start as many agents as needed:\n\n \n\n```\n# systemctl enable buildkite-agent@1.service\r\n# systemctl start buildkite-agent@1.service\n```\n\nRepeat these steps and increase the instance numbers and you should see your agents appearing in the Buildkite [dashboard](https://buildkite.com/dashboard)\n\nIn case you want to change the agent name to something other than `%hostname-%instance`, ensure it’s set to something globally unique. For a list of systemd specifiers, see the [official documentation](https://www.freedesktop.org/software/systemd/man/systemd.unit.html) (table 4).\n\n## Caveats\n\nIt might seem unintuitive at first but Buildkite can schedule jobs from a single pipeline to different agents.\n\nIf all your pipeline steps need to run on the same host, you have to ensure that **each** step is properly targetted at that host using a combination of meta-data selectors (see the `agents` attribute for the {{command}}step).\n\n \n\n```\n- name: build\r\n    command: echo 'hello world'\r\n    agents:\r\n      name: hostname\r\n      queue: default\n```\n\nThere is a feature request to have per-pipeline agent rules so the agent doesn’t need to be specified per step ([buildkite/feedback/issues/173](https://github.com/buildkite/feedback/issues/173)), which should simplify this.\n\nSource: <https://ret.cx/2018/04/running-multiple-buildkite-agents-per-host/>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-13T09:05:51.613-0400",
      "body": "Avtar Gill does this approach sound okay? I'm just worried about what I mentioned in the caveats section. That will make the pipeline.yml file look a bit ugly. Some people have tried to simplify it by turning the yaml into a shell script and then getting the agent's name and adding it to everything (so the step becomes \"pipeline.sh | buildkite-agent upload pipeline\"). If issue#173 would be implemented, that would be awesome but I'm not sure how long we'd have to wait for that.\n\n \n\nI'm trying to think of a situation where running steps in different hosts would be beneficial, it's so different from the way we have been working for years now.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-16T20:54:16.520-0400",
      "body": "Made some changes to the systemd unit file so it has the agent with separate users:\n\n```\n[Unit]\r\nDescription=Buildkite Agent (%i)\r\nDocumentation=https://buildkite.com/agent\r\nAfter=syslog.target\r\nAfter=network.target\r\n\r\n[Service]\r\nType=simple\r\nUser=buildkite-agent-%i\r\nPermissionsStartOnly=true\r\nEnvironment=HOME=/home/buildkite-agent-%i\r\nEnvironment=BUILDKITE_AGENT_NAME=%H-%i\r\nEnvironment=BUILDKITE_BUILD_PATH=/home/buildkite-agent-%i/builds\r\nEnvironment=BUILDKITE_HOOKS_PATH=/etc/buildkite-agent/hooks\r\nEnvironment=BUILDKITE_PLUGINS_PATH=/etc/buildkite-agent/plugins\r\nExecStartPre=/bin/mkdir -p /home/buildkite-agent-%i/builds\r\nExecStartPre=/bin/chown -R buildkite-agent-%i /home/buildkite-agent-%i\r\nExecStart=/usr/bin/buildkite-agent start\r\nRestartSec=5\r\nRestart=on-failure\r\nTimeoutSec=10\r\n\r\n[Install]\r\nWantedBy=multi-user.target\r\nDefaultInstance=1\n```\n\n```\nuseradd -g buildkite-agent buildkite-agent-1\n```\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-05-22T10:24:53.090-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/901> ) into the project repo at 8b7038bd1c50df813748fe12cfb186b9ae8546ab\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-22T12:21:17.866-0400",
      "body": "Thanks Justin Obara! Now we can spin up new agents for other purposes and they won't interfere. \n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-24T16:27:47.060-0400",
      "body": "Until the following features are implemented, it's necessary to define a tag 'name' in the agent configuration (through a env var, for automatic systemd configuration of the agent name) so we have information to properly target the agent:\n\n* <https://github.com/buildkite/feedback/issues/173>\n* <https://github.com/buildkite/agent/issues/773>\n\nSubmitted a new PR with the necessary changes (<https://github.com/fluid-project/infusion/pull/905>)\n\nDeployed 4 agents on h-0005.\n\nThis is the latest systemd unit file:\n\n```\n# cat /usr/lib/systemd/system/buildkite@.service\r\n[Unit]\r\nDescription=Buildkite Agent (%i)\r\nDocumentation=https://buildkite.com/agent\r\nAfter=syslog.target\r\nAfter=network.target\r\n\r\n[Service]\r\nType=simple\r\nUser=buildkite-agent-%i\r\nPermissionsStartOnly=true\r\nEnvironment=HOME=/home/buildkite-agent-%i\r\nEnvironment=BUILDKITE_AGENT_NAME=%H-%i\r\nEnvironment=BUILDKITE_AGENT_TAGS=name=%H-%i,env=dev,type=physical,hypervisor=virtualbox,docker=true,vagrant=true\r\nEnvironment=BUILDKITE_BUILD_PATH=/home/buildkite-agent-%i/builds\r\nEnvironment=BUILDKITE_HOOKS_PATH=/etc/buildkite-agent/hooks\r\nEnvironment=BUILDKITE_PLUGINS_PATH=/etc/buildkite-agent/plugins\r\nExecStartPre=/bin/mkdir -p /home/buildkite-agent-%i/builds\r\nExecStartPre=/bin/chown -R buildkite-agent-%i /home/buildkite-agent-%i/builds\r\nExecStart=/usr/bin/buildkite-agent start\r\nRestartSec=5\r\nRestart=on-failure\r\nTimeoutSec=10\r\n\r\n[Install]\r\nWantedBy=multi-user.target\r\nDefaultInstance=1\n```\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-08-29T13:24:13.661-0400",
      "body": "It's unlikely we will continue to use BuildKite at this point (and Jenkins has been configured for some Fluid projects already).\n\nWith that in mind, I've rolled back these changes and uninstalled buildkite-agent from h-0005.\n"
    }
  ]
}
---
BuildKite's agent works on a single build at once. To increase the parallelism and make effective use of all CPUs for our builds, more agents need to be started, per host.

        