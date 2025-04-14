---json
{
  "title": "SJRK-176",
  "summary": "sjrk-story-telling-server npm install fails on Node 10",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Simon Bates",
  "date": "2019-01-10T14:52:32.356-0500",
  "updated": "2019-01-10T16:14:15.436-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
npm install fails on Node 10 on Ubuntu Linux 16.04:

```java
$ git status
HEAD detached at BlueSlug/master
nothing to commit, working directory clean
$ node --version
v10.15.0
$ npm --version
6.4.1
$ npm install
...
make: Entering directory '/home/simon/projects/sjrk-story-telling-server/node_modules/leveldown/build'
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/builder.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/db_impl.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/db_iter.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/filename.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/dbformat.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/log_reader.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/log_writer.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/memtable.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/repair.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/table_cache.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/version_edit.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/version_set.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/db/write_batch.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/helpers/memenv/memenv.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/table/block.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/table/block_builder.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/table/filter_block.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/table/format.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/table/iterator.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/table/merger.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/table/table.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/table/table_builder.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/table/two_level_iterator.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/arena.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/bloom.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/cache.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/coding.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/comparator.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/crc32c.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/env.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/filter_policy.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/hash.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/logging.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/options.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/status.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/port/port_posix.o
  CXX(target) Release/obj.target/leveldb/deps/leveldb/leveldb-1.19/util/env_posix.o
  AR(target) Release/obj.target/deps/leveldb/leveldb.a
  COPY Release/leveldb.a
  CXX(target) Release/obj.target/snappy/deps/snappy/snappy-1.1.1/snappy-sinksource.o
  CXX(target) Release/obj.target/snappy/deps/snappy/snappy-1.1.1/snappy-stubs-internal.o
  CXX(target) Release/obj.target/snappy/deps/snappy/snappy-1.1.1/snappy.o
  AR(target) Release/obj.target/deps/snappy/snappy.a
  COPY Release/snappy.a
  CXX(target) Release/obj.target/leveldown/src/batch.o
In file included from ../node_modules/nan/nan.h:190:0,
                 from ../src/batch.cc:3:
../node_modules/nan/nan_maybe_43_inl.h: In function ‘Nan::Maybe<bool> Nan::ForceSet(v8::Local<v8::Object>, v8::Local<v8::Value>, v8::Local<v8::Value>, v8::PropertyAttribute)’:
../node_modules/nan/nan_maybe_43_inl.h:88:15: error: ‘class v8::Object’ has no member named ‘ForceSet’
   return obj->ForceSet(GetCurrentContext(), key, value, attribs);
               ^
...
make: *** [Release/obj.target/leveldown/src/batch.o] Error 1
make: Leaving directory '/home/simon/projects/sjrk-story-telling-server/node_modules/leveldown/build'
prebuild ERR! build error 
prebuild ERR! stack Error: `make` failed with exit code: 2
prebuild ERR! stack     at ChildProcess.onExit (/home/simon/projects/sjrk-story-telling-server/node_modules/node-gyp/lib/build.js:262:23)
prebuild ERR! stack     at ChildProcess.emit (events.js:182:13)
prebuild ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:240:12)
prebuild ERR! not ok 
prebuild ERR! build Error: `make` failed with exit code: 2
prebuild ERR! build     at ChildProcess.onExit (/home/simon/projects/sjrk-story-telling-server/node_modules/node-gyp/lib/build.js:262:23)
prebuild ERR! build     at ChildProcess.emit (events.js:182:13)
prebuild ERR! build     at Process.ChildProcess._handle.onexit (internal/child_process.js:240:12)
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! leveldown@1.5.0 install: `prebuild --install`
npm ERR! Exit status 2
npm ERR! 
npm ERR! Failed at the leveldown@1.5.0 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/simon/.npm/_logs/2019-01-10T19_38_24_201Z-debug.log
```

Full log: <https://gist.github.com/simonbates/c4924c83f5d651134abe06e2456ea96b>

        