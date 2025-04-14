---json
{
  "title": "INFRA-248",
  "summary": "ops: Fix linting errors",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-05-14T16:14:34.586-0400",
  "updated": "2020-05-14T16:41:46.062-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
```
$ ansible-lint playbooks/*
[204] Lines should be no longer than 160 chars
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/backup.yml:26
  command: "/usr/bin/ssh -i {{ attic_repository_key }} -o StrictHostKeyChecking=no -p {{ attic_repository_port }} {{ attic_repository_user}}@{{ attic_repository_server}} 'rm -rf {{ ansible_hostname }}'"

[206] Variables should have spaces before and after: {{ var_name }}
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/backup.yml:26
  command: "/usr/bin/ssh -i {{ attic_repository_key }} -o StrictHostKeyChecking=no -p {{ attic_repository_port }} {{ attic_repository_user}}@{{ attic_repository_server}} 'rm -rf {{ ansible_hostname }}'"

[204] Lines should be no longer than 160 chars
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/backup.yml:36
  command: "/usr/bin/ssh -i {{ attic_repository_key }} -o StrictHostKeyChecking=no -p {{ attic_repository_port }} {{ attic_repository_user}}@{{ attic_repository_server}} 'stat {{ attic_repository_path }}/{{ ansible_hostname }}.attic/README'"

[206] Variables should have spaces before and after: {{ var_name }}
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/backup.yml:36
  command: "/usr/bin/ssh -i {{ attic_repository_key }} -o StrictHostKeyChecking=no -p {{ attic_repository_port }} {{ attic_repository_user}}@{{ attic_repository_server}} 'stat {{ attic_repository_path }}/{{ ansible_hostname }}.attic/README'"

[204] Lines should be no longer than 160 chars
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/backup.yml:50
  command: "{{ attic_executable }} init -e passphrase ssh://{{ attic_repository_user }}@{{ attic_repository_server }}:{{ attic_repository_port }}/{{ attic_repository_path }}/{{ ansible_hostname}}.attic"

[206] Variables should have spaces before and after: {{ var_name }}
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/backup.yml:50
  command: "{{ attic_executable }} init -e passphrase ssh://{{ attic_repository_user }}@{{ attic_repository_server }}:{{ attic_repository_port }}/{{ attic_repository_path }}/{{ ansible_hostname}}.attic"

[204] Lines should be no longer than 160 chars
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/backup.yml:64
  command: "{{ attic_executable }} create ssh://{{ attic_repository_user }}@{{ attic_repository_server }}:{{ attic_repository_port }}/{{ attic_repository_path }}/{{ ansible_hostname }}.attic::{{ attic_timestamp }} {{ attic_include_parameters }}"

[204] Lines should be no longer than 160 chars
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/backup.yml:76
  command: "{{ attic_executable }} create ssh://{{ attic_repository_user }}@{{ attic_repository_server }}:{{ attic_repository_port }}/{{ attic_repository_path }}/{{ ansible_hostname }}.attic::{{ attic_timestamp }} {{ attic_exclude_parameters }} {{ attic_include_parameters }}"

[204] Lines should be no longer than 160 chars
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/backup.yml:82
  command: "{{ attic_executable }} prune {{ attic_repository_path }} --keep-daily={{ attic_keep_daily }} --keep-weekly={{ attic_keep_weekly }} --keep-monthly={{ attic_keep_monthly }}"

[204] Lines should be no longer than 160 chars
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/backup.yml:88
  command: "{{ attic_executable }} prune ssh://{{ attic_repository_user }}@{{ attic_repository_server }}:{{ attic_repository_port }}/{{ attic_repository_path }}/{{ ansible_hostname }}.attic  --keep-daily={{ attic_keep_daily }} --keep-weekly={{ attic_keep_weekly }} --keep-monthly={{ attic_keep_monthly }}"

[201] Trailing whitespace
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/install.yml:16
    

[201] Trailing whitespace
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/install.yml:38
  

[201] Trailing whitespace
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/install.yml:90
    create: yes   

[602] Don't compare to empty string
/home/gtirloni/code/gtirloni/idrc-ops/roles/attic/tasks/main.yml:6
  when: attic_repository_passphrase is not defined or attic_repository_passphrase == ""

[403] Package installs should not use latest
/home/gtirloni/code/gtirloni/idrc-ops/roles/letsencrypt-route53/tasks/install.yml:22
Task/Handler: Install RPM packages

[403] Package installs should not use latest
/home/gtirloni/code/gtirloni/idrc-ops/roles/letsencrypt-route53/tasks/install.yml:28
Task/Handler: Install pip packages

[204] Lines should be no longer than 160 chars
/home/gtirloni/code/gtirloni/idrc-ops/roles/libvirt_vm/tasks/launch.yml:25
  command: "/usr/bin/virt-builder {{ libvirt_vm_template }} --hostname {{ inventory_hostname }} --format qcow2 --size {{ libvirt_vm_disk }} -o {{ libvirt_vm_images_path }}/{{ inventory_hostname }}.qcow2 --root-password {{ libvirt_vm_root_password }} --source {{ libvirt_vm_virtbuilder_source }} --fingerprint '{{ libvirt_vm_virtbuilder_fingerprint }}' --upload /tmp/libvirt_vm_ifcfg-{{ inventory_hostname }}:/etc/sysconfig/network-scripts/ifcfg-eth0 {{ libvirt_vm_virtbuilder_additional_opts }}"

[201] Trailing whitespace
/home/gtirloni/code/gtirloni/idrc-ops/roles/libvirt_vm/tasks/launch.yml:27
  become: yes 

[204] Lines should be no longer than 160 chars
/home/gtirloni/code/gtirloni/idrc-ops/roles/libvirt_vm/tasks/launch.yml:31
  command: "/usr/bin/virt-install --import --name {{ inventory_hostname }} --ram {{ libvirt_vm_mem }} --vcpus {{ libvirt_vm_cpu }} --disk {{ libvirt_vm_images_path }}/{{ inventory_hostname }}.qcow2 --network bridge={{ libvirt_vm_bridge }},model=virtio --mac {{ libvirt_vm_mac_addr }} --os-variant={{ libvirt_vm_osvariant }} --nographics --noautoconsole --channel unix,path=/var/lib/libvirt/qemu/guest.agent,mode=bind,target_type=virtio,name=org.qemu.guest_agent.0 {% if libvirt_vm_autostart %}--autostart{% endif %} {% if libvirt_vm_data_disk is defined %}--disk {{ libvirt_vm_images_path }}/{{ inventory_hostname }}-data.qcow2,format=qcow2,size={{ libvirt_vm_data_disk }}{% endif %}"

[301] Commands should not change things if nothing needs doing
/home/gtirloni/code/gtirloni/idrc-ops/roles/libvirt_vm/tasks/start.yml:3
Task/Handler: Start virtual machine

[301] Commands should not change things if nothing needs doing
/home/gtirloni/code/gtirloni/idrc-ops/roles/libvirt_vm/tasks/stop.yml:3
Task/Handler: Stop virtual machine

[301] Commands should not change things if nothing needs doing
/home/gtirloni/code/gtirloni/idrc-ops/roles/mysql/tasks/backup.yml:8
Task/Handler: Retrieve database list

[301] Commands should not change things if nothing needs doing
/home/gtirloni/code/gtirloni/idrc-ops/roles/mysql/tasks/backup.yml:12
Task/Handler: Backup each database indenpendently

[301] Commands should not change things if nothing needs doing
/home/gtirloni/code/gtirloni/idrc-ops/roles/mysql/tasks/backup.yml:16
Task/Handler: Prune old backups

[301] Commands should not change things if nothing needs doing
/home/gtirloni/code/gtirloni/idrc-ops/roles/mysql/tasks/backup.yml:20
Task/Handler: Compress all backups

[403] Package installs should not use latest
/home/gtirloni/code/gtirloni/idrc-ops/roles/mysql/tasks/install.yml:3
Task/Handler: Install packages

[504] Do not use 'local_action', use 'delegate_to: localhost'
playbooks/vm_bootstrap.yml:8
      local_action: command /usr/bin/tcping -t 5 "{{ inventory_hostname }}" 7022

[504] Do not use 'local_action', use 'delegate_to: localhost'
playbooks/vm_launch.yml:19
      local_action:

[504] Do not use 'local_action', use 'delegate_to: localhost'
playbooks/vm_launch.yml:34
      local_action:

[504] Do not use 'local_action', use 'delegate_to: localhost'
playbooks/vm_terminate.yml:14
      local_action:
```

        