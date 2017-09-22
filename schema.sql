drop table if exists user_data;
create table user_data (
  id integer primary key autoincrement,
  'IP_add' text not null,
  'T1_start' text not null,
  'T1_end' text not null,
  'T1_sec' text not null,
  'T2_start' text not null,
  'T2_end' text not null,
  'T2_sec' text not null,
  'T3_start' text not null,
  'T3_end' text not null,
  'T3_sec' text not null,  
  'T4_start' text not null,
  'T4_end' text not null,
  'T4_sec' text not null

);

drop table if exists userlog;
create table userlog (
  id integer primary key autoincrement,
  IP_add text not null,
  'Task_number' text not null,
  'user_log' text not null

);
