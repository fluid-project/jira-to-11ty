---json
{
  "title": "KETTLE-5",
  "summary": "System call support in Kettle",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Michelle D'Souza",
  "date": "2009-11-23T15:34:44.000-0500",
  "updated": "2013-08-13T14:00:27.092-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/DECA-24/",
      "key": "DECA-24"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-08-13T14:00:27.092-0400",
      "body": "\"new new Kettle\", being based on node, provides standard mechanisms for executing system calls. However, the detailed process management facilities described in this issue would need to be coded, or located in a 3rd-party npm package.\n"
    }
  ]
}
---
This feature comes out of a need from Decapod. Decapod requires the ability to make system calls in order to start processes such as dewarping images and creating pdf documents. Some of these processes will return quickly while other will take a considerable amount of time. Ideally, we would like to be able to manage the processes that we start.

Process management should include:\
1\. starting processes synchronously or asynchronously\
2\. finding out the status of a process\
3\. stopping processes\
4\. queuing system call requests&#x20;

        